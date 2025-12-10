import type { UIMessage } from 'ai';
import { generateId } from 'ai';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import 'server-only';

const chatsDirectory = resolve(process.cwd(), '.chats');

export const storeChat = (messages: UIMessage[]) => {
  const content = JSON.stringify(messages, null, 2);

  if (!existsSync(chatsDirectory)) {
    mkdirSync(chatsDirectory, { recursive: true });
  }

  const chatId = generateId();

  writeFileSync(resolve(chatsDirectory, `${chatId}.json`), content, 'utf-8');

  return chatId;
};

export const getChat = (chatId: string) => {
  return readFileSync(resolve(chatsDirectory, `${chatId}.json`), 'utf-8');
};
