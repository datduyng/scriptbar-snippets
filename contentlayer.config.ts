import {
  defineDocumentType,
  makeSource,
  defineNestedType,
} from "contentlayer/source-files";

// const Tag = defineNestedType(() => ({
//   name: "Tag",
//   fields: {
//     value: {
//       type: "enum",
//       options: ["Basic", "intermediate", "Advanced"],
//     },
//   },
// }));

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
        options: ["Basic", "intermediate", "Advanced"],
      },
      default: [],
    },
  },
}));

export const SnippetSource = defineDocumentType(() => ({
  name: "SnippetSource",
  filePathPattern: `**/*.js`,
  // contentType: "data",
  fields: {},
}));

const contentLayerConfig = makeSource({
  contentDirPath: "stores",
  documentTypes: [Snippet, SnippetSource],
  mdx: {
  }
});

export default contentLayerConfig;
