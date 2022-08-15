import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

    console.log(props);

    const deletecontactHandler = (id) => {
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard contact={contact} clickHandler={deletecontactHandler} key={contact.id} />;
    });
    return (
        <div className="main" style={{marginTop: "50px"}}>
            <h2>
                Contact List
                <Link to="/add">
                    <button className="ui button blue right"  style={{position: "absolute", top: "50px", right: "10px"}}>Add Contact</button>
                </Link>
            </h2>
            <div className="ui celled list">{renderContactList}</div>
        </div>
    );
};

export default ContactList;

