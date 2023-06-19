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

    case "remove":
      const deleteContacts = await contacts.removeContact(id);
      return console.log(deleteContacts);
      break;

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "05olLMgyVQdWRwgKfg5J6" });
// invokeAction({ action: "remove", id: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({
//   action: "add",
//   name: "Mango",
//   email: "mango@gmail.com",
//   phone: "322-22-22",
// });
