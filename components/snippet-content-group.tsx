import { Card, Grid, Link as StyledLink, Text } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import CodeBlock from './stateless/codeblock';
import { getSnippetContents } from '../libs/get-snippets.server';
import type { SnippetContent } from '../libs/get-snippets.server';

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
    <div dangerouslySetInnerHTML={{
      __html: snippet.readmeBody.html
    }} />
    <CodeBlock language='js' value={snippet.content} />
  </Grid>
}

const SnippetContent = ({ snippet }: { snippet: SnippetContent }) => {
  return <Grid>
    <Card>
      <Link href={`/snippets/${snippet.id}`} passHref>
        <StyledLink >
          <Text b size={"$md"}>
            {snippet.id}.js
          </Text>

        </StyledLink>
      </Link>
      <Text color="$secondaryDark" size="$xs">
        Run in browser, basic
      </Text>


      <div dangerouslySetInnerHTML={{
        __html: snippet.readmeBody.html
      }} />
    </Card>
  </Grid>
}