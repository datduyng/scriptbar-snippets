import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Snippet = defineDocumentType(() => ({
  name: "Snippet",
  filePathPattern: `**/*.mdx`,
  fields: {
  },
}));

export const SnippetSource = defineDocumentType(() => ({
  name: "SnippetSource",
  filePathPattern: `**/*.js`,
  // contentType: "data",
  fields: {
  },
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'stores',
  documentTypes: [Snippet, SnippetSource],
});

export default contentLayerConfig;

