import { useMDXComponent } from 'next-contentlayer/hooks';
import type { MDX } from "contentlayer/core";
import Image, { ImageProps } from 'next/image';

export default function MdxComponent({ mdx }: { mdx: MDX }) {
  const Component = useMDXComponent(mdx.code);

  return <Component components={SupportedMdxComponents as any}/>
}

function RoundedImage(props: ImageProps) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

const SupportedMdxComponents = {
  Image: RoundedImage,
};
