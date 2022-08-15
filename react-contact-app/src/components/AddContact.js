import React from "react";
import { Navigate } from "react-router-dom";

class AddContact extends React.Component {
    // state in class component
    state = {
        name: "",
        email: "",
    };
    
    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert ("All the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        // update state with setState (this clear the input data after submission)
        this.setState({ name: "", email: ""});
        this.setState({navigate: true});
    };

    render() {
        const { navigate } = this.state;
        if (navigate) {
            return <Navigate to="/" push={true} />;
        }

        return (
            <div className="ui main" style={{marginTop: "50px"}}>
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                            />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input  
                            type="text" 
                            name="name" 
                            placeholder="Email" 
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                            />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    };
}

export default AddContact;

