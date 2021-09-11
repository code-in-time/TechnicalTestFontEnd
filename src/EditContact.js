import {useState, useEffect}  from 'react';
import './EditContact.css';

function EditContactList({selectedContact, saveContactListItem}) {

  const [name, setName] = useState(selectedContact.name);
  const [street, setStreet] = useState(selectedContact.street);
  const [email, setEmail] = useState(selectedContact.email);
  const [phone, setPhone] = useState(selectedContact.phone);
  const [age, setAge] = useState(selectedContact.age);

  useEffect(() => {
    setName(selectedContact.name)
    setStreet(selectedContact.street)
    setEmail(selectedContact.email)
    setPhone(selectedContact.phone)
    setAge(selectedContact.age)
  }, [selectedContact]);

   return (
    <div className="EditContact">
      <h2>Edit this Contact</h2>
      <div className="EditContactList">
        <label htmlFor="forName">Name</label><br/>
        <input type="text" id="forName" value={name} onChange={(e) => setName(e.target.value)}/>
        <br/><br/>
        <label htmlFor="forStreet">Street</label><br/>
        <input type="text" id="forStreet" value={street} onChange={(e) => setStreet(e.target.value)}/>
        <br/><br/>
        <label htmlFor="forEmail">Email</label><br/>
        <input type="text" id="forEmail" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <br/><br/>
        <label htmlFor="forPhone">Phone:</label><br/>
        <input type="text" id="forPhone"value={phone} onChange={(e) => setPhone(e.target.value)}/>
        <br/><br/>
        <label htmlFor="forAge">Age</label><br/>
        <input type="text" id="forAge" value={age} onChange={(e) => setAge(e.target.value)}/><br />
        <br/><br/>
        <button
          onClick={() => { saveContactListItem(selectedContact.id, name, street, email, phone, age)}}
          className="btn btn-primary btn-sml" type="button">Save
        </button>
      </div>
    </div>
  )
}

export default EditContactList;