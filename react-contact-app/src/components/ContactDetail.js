import React from "react";
import user from "../images/user.jpg";
import { useLocation, Link } from "react-router-dom";

const ContactDetail = (props) => {
    const location = useLocation()
    const { name, email } = location.state.contact;
    
    return (
       <div className="main" style={{marginTop: "50px"}}>
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="center div">
            <Link to="/"><button className="ui button blue" style={{marginLeft: "35vw"}}>
            Back to Contact List</button></Link>
            </div>
       </div>
    )
}

export default ContactDetail;


