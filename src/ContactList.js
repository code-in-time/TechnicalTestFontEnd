

function ContactList({contactList, setEditItemID}) {

  return (
    <div className="ContactList">
      {contactList.map(data => {

        return (
          <div className="card" key={data.id}>
            <div className="card-body">
            <ul>
              <li>name: {data.name}</li>
              <li>street: {data.street}</li>
              <li>email: {data.email}</li>
              <li>phone: {data.phone}</li>
              <li>age: {data.age}</li>
            </ul>
            <button onClick={() => setEditItemID(data.id)} className="btn btn-primary btn-sml" type="button">Edit</button>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default ContactList;