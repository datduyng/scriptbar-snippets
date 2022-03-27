import { Card, Grid, Link as StyledLink, Text } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import CodeBlock from './stateless/codeblock';
import { getSnippetContents } from '../libs/get-snippets';
import type { SnippetContent } from '../libs/get-snippets';

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
    <Card>
      <Text b>
        allcolor.js
      </Text>
      <Text>
        {snippet.readmeBody.raw}
      </Text>
      <CodeBlock language='js' value={snippet.content} />
    </Card>
  </Grid>
}

const SnippetContent = ({ snippet }: { snippet: SnippetContent }) => {
  return <Grid>
    <Card>
      <Link href={`/snippets/${snippet.id}`} passHref>
        <StyledLink >
          <Text b>
            {snippet.id}.js
          </Text>
        </StyledLink>
      </Link>

      <div dangerouslySetInnerHTML={{
        __html: snippet.readmeBody.html
      }} />
    </Card>
  </Grid>
}