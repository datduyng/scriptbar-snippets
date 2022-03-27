import { Spacer } from '@nextui-org/react';
import type { GetStaticProps, NextPage } from 'next'
import { SnippetContentDetail } from '../../components/snippet-content-group';
import DefaultLayout from '../../layouts/default';
import Header from '../../layouts/header';
import type { SnippetContent } from '../../libs/get-snippets';
import { getSnippetContents } from '../../libs/get-snippets';

const SnippetById: NextPage<SnippetByIdServerProps> = ({ snippet }) => {
  console.log("readme", snippet);
  return <DefaultLayout>
    <Header />
    <Spacer y={3} />
    <SnippetContentDetail snippet={snippet} />
  </DefaultLayout>
};

export default SnippetById;

interface SnippetByIdServerProps {
  snippet?: SnippetContent
}

export const getStaticProps: GetStaticProps<SnippetByIdServerProps> = async () => {
  const snippets = getSnippetContents();
  return {
    props: {
      snippet: snippets[0]
    }
  }
}

export function getStaticPaths() {
  return {
    paths: [
    ],
    fallback: true // false or 'blocking'
  };
}
