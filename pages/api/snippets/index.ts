import type { NextApiRequest, NextApiResponse } from 'next'
import { getSnippetContents } from '../../../libs/get-snippets.server';

type Data = any


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const contents = getSnippetContents();
  res.status(200).json({ contents })
}
