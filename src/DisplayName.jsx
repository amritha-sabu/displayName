import { useState } from "react";
import "./DisplayName.css";
const DisplayName = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        if(name === "firstName")
            setFirstName(value);
        else if(name === "lastName")
            setLastName(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName, lastName);
        setFullName(`${firstName} ${lastName}`);
    };

    return(
        <div className="displayName">
            <h1>Full Name Display</h1>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="firstName">First Name </label>
                    <input type="text" name="firstName" value={firstName} onChange={(e) => handleChange(e)} required/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name </label>
                    <input type="text" name="lastName" value={lastName} onChange={(e) => handleChange(e)} required/>
                </div>
                <button type="submit" style={firstName && lastName ? {cursor: "pointer"} : {color: "grey", cursor: "not-allowed"}}>Submit</button>
            </form>

            {fullName && 
                <h2>Full Name: {fullName}</h2>
            }
        </div>
    );
};

export default DisplayName;