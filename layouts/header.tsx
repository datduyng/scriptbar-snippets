import { Grid, Text } from "@nextui-org/react";

export default function Header() {
  return <>
    <Grid css={{
      alignSelf: 'center',
    }}>
      <Text span css={{
        fontSize: '$lg',
        fontFamily: '$sans'
      }}
      >
        Scriptbar Snippets 🚀
      </Text>
    </Grid>
    <Grid css={{ alignSelf: 'center' }}>
      <Text span css={{
        fontSize: '$xs',
        fontFamily: '$sans'
      }}>
        Handy and easy to understand snippets to keep in your browser
      </Text>
    </Grid>
  </>
}