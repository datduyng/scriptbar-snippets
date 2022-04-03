import { Grid, Link as StyledLink, Spacer, Text, useTheme } from '@nextui-org/react';
import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link';
import { SnippetContentDetail } from '../../components/snippet-content-group';
import DefaultLayout from '../../layouts/default';
import Header from '../../layouts/header';
import type { SnippetContent } from '../../libs/get-snippets.server';
import { getSnippetContents } from '../../libs/get-snippets.server';
import GithubIcon from '../../components/stateless/github-icon';
import * as gtag from '../../libs/gtag.client';

const SnippetById: NextPage<SnippetByIdServerProps> = ({ snippet }) => {
  return <>
    <Spacer y={1} />
    <Grid.Container justify='space-between' direction='row' css={{
      paddingLeft: '$12',
      paddingRight: '$12',
    }}>
      <Grid>
        <Link href="/" passHref>
          <StyledLink animated="true">
            <Text b color="$secondaryDark" size={"$sm"}>Home</Text>
          </StyledLink>
        </Link>
      </Grid>
      <Grid>
        <StyledLink animated="true" href="https://github.com/datduyng/scriptbar-snippets" target="_blank" onClick={() => {
          gtag.event({
            action: 'click github icon [id] page',
            category: 'github icon',
          })
        }}>
          <GithubIcon color={"#8c8c8c"} />
        </StyledLink>

      </Grid>
    </Grid.Container>
    <DefaultLayout>
      <Header />
      <Spacer y={3} />
      <SnippetContentDetail snippet={snippet} />
    </DefaultLayout>
  </>
};

export default SnippetById;

interface SnippetByIdServerProps {
  snippet?: SnippetContent
}

export const getStaticProps: GetStaticProps<SnippetByIdServerProps> = async ({ params }) => {
  const snippets = getSnippetContents();
  return {
    props: {
      snippet: snippets.find(snippet => snippet.id === params?.id)
    }
  }
}

export function getStaticPaths() {
  const snippets = getSnippetContents(); 
  const snippetIdRoutes = snippets
    .map(snipt => snipt.id)
    .map(id => `/snippets/${id}`);
  console.info("Prerendering snippet routes", snippetIdRoutes);
  return {
    paths: snippetIdRoutes,
    fallback: true // false or 'blocking'
  };
}
