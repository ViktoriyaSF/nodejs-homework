const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
  // Повертає масив контактів.
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}
async function getContactById(contactId) {
  // Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  const contacts = await listContacts();
  result = contacts.find((item) => item.id === contactId);
  return result || null;
}

module.exports = {
  listContacts,
  getContactById,
};
