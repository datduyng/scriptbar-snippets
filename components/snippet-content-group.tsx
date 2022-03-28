import { Card, Grid, Link as StyledLink, Text, Snippet } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import CodeBlock from './stateless/codeblock';
import { getSnippetContents } from '../libs/get-snippets.server';
import type { SnippetContent } from '../libs/get-snippets.server';
import styles from './snippet-content-group.module.css';
import * as gtag from '../libs/gtag.client';

export default function SnippetContentGroup({ snippets }: { snippets: SnippetContent[] }) {
  return <Grid.Container gap={1} direction="column">
    {snippets.map((snippet, index) => {
      return <SnippetContent key={snippet.id} snippet={snippet} />
    })}
  </Grid.Container>
}

export const SnippetContentDetail = ({ snippet }: { snippet?: SnippetContent }) => {
  if (!snippet) return null;
  return <Grid>
    <Text b size={"$md"}>
      {snippet.id}.js
    </Text>
    <Text color="$secondaryDark">{<Text color="$secondaryDark">{snippet.tags?.map(tag => `#${tag}`).join(', ')}</Text>}</Text>
    <Text>{snippet.summary}</Text>
    <div className={styles['snippet-raw-html']} dangerouslySetInnerHTML={{
      __html: snippet.readmeBody.html
    }} />
    <CodeBlock language='js' value={snippet.content} showWindowIcons={true} onCopy={() => {
      gtag.event({
        action: 'click copy codeblock',
        label: snippet.id,
        category: 'copy-code-block',
      })
    }} />
  </Grid>
}

const SnippetContent = ({ snippet }: { snippet: SnippetContent }) => {
  return <Grid>
    <Card>
      <Link href={`/snippets/${snippet.id}`} passHref>
        <StyledLink onClick={() => {
          gtag.event({
            action: 'click card snippet',
            label: snippet.id,
            category: 'click-card-snippet',
          })
        }} >
          <Text b size={"$md"}>
            {snippet.id}.js
          </Text>
          <Text color="$secondaryDark" css={{ marginLeft: '$4' }}>
            {snippet.tags?.map(tag => `#${tag}`).join(', ')}
          </Text>
        </StyledLink>
      </Link>
      <Text>{snippet.summary}</Text>
    </Card>
  </Grid>
}