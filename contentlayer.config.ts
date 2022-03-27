import {
  defineDocumentType,
  makeSource,
  defineNestedType,
} from "contentlayer/source-files";

const Tag = defineNestedType(() => ({
  name: "Tag",
  fields: {
    value: {
      type: "enum",
      options: ["Basic", "Intermidiate", "Advanced"],
    },
  },
}));

export const Snippet = defineDocumentType(() => ({
  name: "Snippet",
  filePathPattern: `**/*.mdx`,
  fields: {
    shortDescription: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      required: false,
      of: Tag,
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
});

export default contentLayerConfig;
