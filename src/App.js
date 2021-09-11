import {useState, useEffect}  from 'react';
import ContactList from './ContactList';
import EditContact from './EditContact';
import ContactListJSON from './contacts.json';
import './App.css';

function App() {

  // Setup the data
  const [contactList, setContactList] = useState(ContactListJSON);
  const [editItemID, setEditItemID] = useState(1);
  const [selectedContact, setSelectedContact] = useState(contactList[0]);

  const saveContactListItem = (id, name, street, email, phone, age) => {

    // Clone contact
    const contactData = JSON.parse(JSON.stringify(contactList))

    // Find the item and update it
    for (let i = 0; i < contactData.length; i++) {
      let currItem = contactData[i];
      if(currItem.id === id) {
          
        currItem.name = name;
        currItem.street = street;
        currItem.email = email;
        currItem.phone = phone;
        currItem.age = age;
        break;
      }
    }

    setContactList(contactData);

  }

  useEffect(() => {
    // Get the contact from the array list
    const item = contactList.find(item => item.id === editItemID)
    setSelectedContact(item)
  }, [contactList, editItemID]);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm">
              <ContactList contactList={contactList} setEditItemID={setEditItemID} />
            </div>
          <div className="col-sm">
            <div className="formArea">
              <EditContact selectedContact={selectedContact} saveContactListItem={saveContactListItem} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
