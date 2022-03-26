// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { allSnippets } from '../../../.contentlayer/generated';
import path from 'path';
import glob from 'fast-glob'
import fs from 'fs';

const STORE_PATH = path.join(process.cwd(), 'stores')
export const snippetFilePaths = glob.sync(`${STORE_PATH}/**/*.js`)


type Data = any

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('allEntries', snippetFilePaths);
  const readFile = (filePaths: string[]) => {
    return filePaths.map(filePath => {
      return fs.readFileSync(filePath, 'utf-8')
    });
  }
  res.status(200).json({ allSnippets, files: readFile(snippetFilePaths) })
}
