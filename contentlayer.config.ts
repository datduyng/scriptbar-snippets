import {
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";

export const Snippet = defineDocumentType(() => ({
  name: "Snippet",
  filePathPattern: `**/*.md`,
  contentType: 'markdown',
  fields: {
    summary: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      required: true,
      of: {
        type: 'enum',
        options: ["Basic", "intermediate", "Advanced", "Debug"],
      },
      default: [],
    },
  },
}));

export const SnippetSource = defineDocumentType(() => ({
  name: "SnippetSource",
  filePathPattern: `**/*.js`,
  fields: {},
}));

const contentLayerConfig = makeSource({
  contentDirPath: "stores",
  documentTypes: [Snippet, SnippetSource],
  mdx: {
  }
});

export default contentLayerConfig;
