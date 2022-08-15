import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import api from "../api/contacts";
import "./App.css";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";
import ContactDetail from "./ContactDetail";
import EditContact  from "./EditContact";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  // create state of contacts
  const [contacts, setContacts] = useState([]); // useState is empty because the contacts is initially an empty array

  // RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }

// contact here can be anything (its just an event handler)
  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = { id: uuidv4(), ...contact };

    const response = await api.post("/contacts", request);
    console.log(response)
    // use setContact to update the state (and this enable the input data to get display inturns)
    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = () => {};

  const removeContactHandler = async (id) => {
        await api.delete(`/contacts/${id}`);
         // create copy of contact list
        const newContactList = contacts.filter((contact) => {
           return contact.id !== id;
       });
    
         setContacts(newContactList);
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllContacts();
  },[]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/edit" element={<EditContact updateContactHandler={updateContactHandler} />} />
          <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler} /> } />
          <Route path="/contact/:id" element={<ContactDetail /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


