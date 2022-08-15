import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
    // destructuring to avoid repetition
    const { id, name, email } = props.contact;
    return (
        <div className="item">
                 <img className="ui avatar image" src={user} alt="user" />
                <div className="content">
                 <Link to={`/contact/${id}`} state={{contact: props.contact}} >
                    <div className="header">{name}</div>
                    <div>{email}</div>
                 </Link>   
                </div>
                    <i className="trash alternate outline icon"
                    style={{ color: "red", marginTop: "-20px", right: "0", position: "absolute"}}
                    onClick={() => props.clickHandler(id)}
                    ></i>
                     <Link to={{ pathname: `/edit`, state: { contact: props.contact}} }  >
                    <i className="edit alternate outline icon"
                    style={{ color: "blue", marginTop: "10px", right: "30px", position: "absolute" }}
                    ></i>
                    </Link>
            </div>
    )
} 

export default ContactCard;

