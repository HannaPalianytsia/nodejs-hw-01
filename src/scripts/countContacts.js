import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    const parseContacts = JSON.parse(contacts);
    const contactsAmount = parseContacts.length;
    return contactsAmount;
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
