import type { GetStaticProps, NextPage } from 'next'
import { Button, Container, Grid, Text, Input, Code, Spacer, Card } from '@nextui-org/react';
import SendButton from '../components/stateless/send-button';
import { getSnippetContents } from '../libs/get-snippets.server';
import type { SnippetContent } from '../libs/get-snippets.server';
import SnippetContentGroup from '../components/snippet-content-group';
import DefaultLayout from '../layouts/default';
import Header from '../layouts/header';

const Home: NextPage<IndexServerProps> = ({ snippets }) => {
  return (

    <DefaultLayout>
      <Spacer y={3} />
      <Header />
      <Spacer y={3} />

      <Grid.Container justify='center' gap={2}>
        <Grid xs={12} sm={6} md={6} direction={"column"}>
          <Text b>
            Why was this created?
          </Text>
          <Text>
            Snippets is a feature most chromium browser provide that allow you and other  to save handy snippet right in Chrome. Your snippet can also be run in debug mode. This website provides list of handy and easy to understand snippets to help you learn and inspire you to take advantage of in your next project
          </Text>

        </Grid>
        <Grid xs={12} sm={6} md={6} direction="column">
          <Text b>
            Thinking to contribute?
          </Text>
          <Grid xs={12} direction='column'>
            <Button color="secondary">Github</Button>
            <Button color="primary" css={{ marginTop: "$4" }}>Add a snippet</Button>
          </Grid>
        </Grid>
      </Grid.Container>

      <Spacer y={2} />

      {/* <Grid xs={12} alignContent='center' justify='center' direction='column' css={{
        padding: '$2',
      }}>
        <Input
          clearable
          contentRightStyling={false}
          placeholder="Type to search for snippets..."
          contentRight={<SendButton />}
          width={'100%'}
        />
      </Grid> */}

      <Spacer y={0.5} />
      <SnippetContentGroup snippets={snippets} />
    </DefaultLayout>
  )
}

interface IndexServerProps {
  snippets: SnippetContent[]
}

export const getStaticProps: GetStaticProps<IndexServerProps> = async () => {
  const snippets = getSnippetContents();
  return {
    props: {
      snippets
    }
  }
}

const JSCode = `const App = props => {
  return (
    <div>
      <h1> Prism JS </h1>
      <div>Awesome Syntax Highlighter</div>
    </div>
  );
};
`;



export default Home
