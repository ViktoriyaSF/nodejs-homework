const contacts = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);
      break;
    case "get":
      const findContact = await contacts.getContactById(id);
      return console.log(findContact);
      break;
  }
}

invokeAction({ action: "list" });
invokeAction({ action: "get", id: "05olLMgyVQdWRwgKfg5J6" });
