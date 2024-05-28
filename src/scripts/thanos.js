import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    const parseContacts = JSON.parse(contacts);
    const filteredContacts = parseContacts.filter(() => Math.random() > 0.5);
    await fs.writeFile(PATH_DB, JSON.stringify(filteredContacts, null, 2));
  } catch (error) {
    console.log(error);
  }
};

await thanos();
