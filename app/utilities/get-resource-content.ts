import { readFileSync } from 'node:fs';
import { format, parse, resolve } from 'node:path';

const CONTENT_DIRECTORY = resolve(process.cwd(), 'app/content');

type GetResourceContentProps = {
  filePath: string;
  tone?: 'default' | 'snarky';
};

// NOTE - let the MCP handle any errors that are thrown for incorrect path or otherwise
export const getResourceContent = ({ filePath, tone }: GetResourceContentProps) => {
  // NOTE - `base` is intentionally omitted from the format logic
  const { name, base, ...filePathParts } = parse(filePath);
  const filePathWithTone = {
    ...filePathParts,
    name: tone === 'snarky' ? `${name}-snarky` : name,
  };

  const parsedFilePath = format(filePathWithTone);
  const resourcePath = resolve(CONTENT_DIRECTORY, parsedFilePath);

  return readFileSync(resourcePath, 'utf8');
};
