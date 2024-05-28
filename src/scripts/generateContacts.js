import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    const parseContacts = JSON.parse(contacts);
    for (let i = 0; i < number; i += 1) {
      parseContacts.push(createFakeContact());
    }
    await fs.writeFile(PATH_DB, JSON.stringify(parseContacts, null, 2));
  } catch (error) {
    console.log(error);
  }
};

await generateContacts(5);
