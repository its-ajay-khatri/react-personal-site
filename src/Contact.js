import React, { useState } from "react";

const Contact = (props) => {

    const [name, setname] = useState('');
    const [number, setnumber]= useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState('');

    const changename = (event) => {
        setname(event.target.value)
    }

    const changeemail = (event) => {
        setemail(event.target.value)
    }
    const changenumber = (event) => {
        setnumber(event.target.value)
    }
    
    const changemessage = (event) => {
        setmessage(event.target.value)
    }

    const formsubmit = (event) => {
        event.preventDefault();
        alert(`Thankyou for your time ${name} having emailaddress ${email} and phonenumber {number} and you gave us message {message}`);
        setname('');
        setemail('');
        setmessage('');
        setnumber('');
    }

    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Contact</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formsubmit}>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">FullName</label>
                            <input type="text" className="form-control mt-2" id="exampleFormControlInput1" value={name} placeholder="enter your name" onChange={changename}/>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1" className="mt-4">Phone</label>
                            <input type="number" className="form-control mt-2" id="exampleFormControlInput1" value={number} placeholder="Your Contact Number" onChange={changenumber}/>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1" className="mt-4">Email address</label>
                            <input type="email" className="form-control mt-2" id="exampleFormControlInput1" value={email} placeholder="name@example.com" onChange={changeemail}/>
                        </div>

                        
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1" className="mt-4">Message</label>
                            <textarea className="form-control mt-2" id="exampleFormControlTextarea1" value={message} rows="3" onChange={changemessage}></textarea>
                        </div>
                        <div className="col-md-12 mt-5">
                            <button className="btn btn-primary" type="submit">Submit Form</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};


export default Contact;