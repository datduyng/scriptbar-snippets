// Inspired by https://github.dev/modulz/stitches-site code demo
import React, { useState } from 'react';
import { refractor } from 'refractor';
import js from 'refractor/lang/javascript';
import jsx from 'refractor/lang/jsx';
import styles from './codeblock.module.css';
import { toHtml } from 'hast-util-to-html'
// import rangeParser from 'parse-numeric-range';
// import highlightLine from '@lib/rehype-highlight-line';
// import highlightWord from '@lib/rehype-highlight-word';
import { Button, Grid, styled } from '@nextui-org/react';

refractor.register(js);
refractor.register(jsx);

// type PreProps = Omit<React.ComponentProps<typeof Pre>, 'css'>;

//@ts-ignore
const Box = styled('div');
//@ts-ignore
const Pre = styled('pre');

//@ts-ignore
const WindowIcon = styled('div', {
  size: '$6',
  br: '$pill',
  mr: '$4',
  variants: {
    color: {
      red: {
        bg: '$red500'
      },
      green: {
        bg: '$green500'
      },
      yellow: {
        bg: '$yellow500'
      }
    }
  }
});

type CodeBlockProps = {
  language: 'js' | 'jsx' | 'any';
  value?: string;
  line?: string;
  css?: any;
  mode?: 'static' | 'typewriter';
  showLineNumbers?: boolean;
  showWindowIcons?: boolean;
  className?: string;
};

/**
 * recursively get all text nodes as an array for a given element
 */
function getTextNodes(node: any) {
  let childTextNodes = [];

  if (!node.hasChildNodes()) return;

  const childNodes = node.childNodes;
  for (let i = 0; i < childNodes.length; i++) {
    if (childNodes[i].nodeType == Node.TEXT_NODE) {
      childTextNodes.push(childNodes[i]);
    } else if (childNodes[i].nodeType == Node.ELEMENT_NODE) {
      Array.prototype.push.apply(childTextNodes, getTextNodes(childNodes[i]) as any);
    }
  }

  return childTextNodes;
}

/**
 * given a text node, wrap each character in the
 * given tag.
 */
function wrapEachCharacter(textNode: any, tag: string, count: number) {
  const text = textNode.nodeValue;
  const parent = textNode.parentNode;

  const characters = text.split('');
  characters.forEach(function (character: any, letterIndex: any) {
    const delay = (count + letterIndex) * 50;
    var element = document.createElement(tag);
    var characterNode = document.createTextNode(character);
    element.appendChild(characterNode);
    element.style.opacity = '0';
    element.style.transition = `all ease 0ms ${delay}ms`;

    parent.insertBefore(element, textNode);

    // skip a couple of frames to trigger transition
    requestAnimationFrame(() =>
      requestAnimationFrame(() => (element.style.opacity = '1'))
    );
  });

  parent.removeChild(textNode);
}

function CodeTypewriter({ value, className, css, ...props }: any) {
  const wrapperRef = React.useRef(null);

  React.useEffect(() => {
    const wrapper = wrapperRef.current as any;

    if (wrapper) {
      var allTextNodes = getTextNodes(wrapper);

      let count = 0;
      allTextNodes?.forEach((textNode) => {
        wrapEachCharacter(textNode, 'span', count);
        count = count + textNode.nodeValue.length;
      });
      wrapper.style.opacity = '1';
    }

    return () => (wrapper.innerHTML = value);
  }, []);

  return (
    <Pre className={className} css={css} {...props}>
      <code
        ref={wrapperRef}
        style={{ opacity: 0 }}
        className={className}
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </Pre>
  );
}

const CodeBlock: React.FC<CodeBlockProps> = (_props) => {
  const {
    language,
    value,
    line = '0',
    className = '',
    mode,
    css,
    showLineNumbers,
    showWindowIcons,
    ...props
  } = _props;
  const [copied, setCopied] = useState(false);

  let result: any = refractor.highlight(value || '', language);

  // convert to html
  result = toHtml(result);

  // TODO reset theme

  const classes = `language-${language} ${className}`;

  if (mode === 'typewriter') {
    return (
      <CodeTypewriter
        className={classes}
        css={css}
        value={result}
        {...props}
      />
    );
  }



  const copyCode = () => {
    navigator.clipboard.writeText(value || "Failed to copy").then(
      () => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000)
      },
      (error) => (setCopied(false))
    );
  }
  return (
    <Pre
      // ref={forwardedRef}
      className={classes}
      css={{ pt: showWindowIcons ? 0 : '$8', ...css }}
      data-line-numbers={showLineNumbers}
      {...props}
    >
      <Box
        css={{
          display: 'flex',
          flexDirection: 'row',
          px: '$2',
          pt: '$3',
          pb: '$4',
          zIndex: '$2',
          position: 'sticky',
          background: '$codeBackground',
          top: 0
        }}
      >
        <Grid direction='row' justify='flex-start' alignItems='center' xs={12}>
          <WindowIcon color="red" />
          <WindowIcon color="yellow" />
          <WindowIcon color="green" />
        </Grid>
        <Grid>
          <button className={styles['clipboard-button']} onClick={() => {
            copyCode();
          }}>
            {copied ? <SvgCheck /> : <SvgCopy />}
          </button>
        </Grid>
      </Box>
      <div
        className={classes}
        dangerouslySetInnerHTML={{ __html: result }}
      />
    </Pre>
  );
}


const SvgCopy = () => (
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"><path fillRule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fillRule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg>
)
const SvgCheck = () => (
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"><path fillRule="evenodd" fill="rgb(63, 185, 80)" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
)

// CodeBlock.displayName = 'CodeBlock';

export default CodeBlock;
