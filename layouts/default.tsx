import React from "react"
import { Container } from "@nextui-org/react"
import Head from 'next/head'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  const siteTitle = `Scriptbar Snippets - Useful chrome devtool snippets/Firefox Scratchpad`;
  const siteDesc = ``;
  return (<Container sm>
    <Head>
      <title>{siteTitle}</title >
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content={siteDesc} />
      <meta name='keywords' content='chrome devtool, snippets, firefox scratchpad' />
      <meta name='twitter:creator' content='@domnguyen5653' />
      <meta name='twitter:site' content='@domnguyen5653' />
      <meta name='twitter:title' content={siteTitle} />
      <meta name='twitter:description' content={siteDesc} />
      <link rel="icon" href="/favicon.ico" />

    </Head >
    <style jsx>{`
      .main {
        min - height: 100vh;
        padding: 4rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
      }`}
    </style>
    <main className="main">
      {children}
    </main>
  </Container >)
}