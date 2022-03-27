import { allSnippets } from "../.contentlayer/generated";
import type { Snippet } from "../.contentlayer/generated";
import fs from "fs";
import path from "path";
import type { Markdown} from "contentlayer/core";

const STORE_PATH = path.join(process.cwd(), "stores");

export const getSnippetContents: () => SnippetContent[] = () => {
  return allSnippets.map((snippet) => {
    return {
      id: snippet._raw.sourceFileDir,
      summary: snippet.summary,
      tags: snippet.tags,
      readmeBody: snippet.body,
      content: fs.readFileSync(
        path.join(STORE_PATH, snippet._raw.sourceFileDir, "index.js"),
        "utf-8"
      ),
    };
  });
};

export interface SnippetContent {
  id: string;
  readmeBody: Markdown;
  content: string;
  summary: string;
  tags?: Snippet["tags"];
}
