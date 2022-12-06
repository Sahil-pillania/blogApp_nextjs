import React, { useState } from "react";
import styles from "../styles/contact.module.css";

const Contact = () => {
  const [data, setdata] = useState({
    fname: "",
    phone: "",
    email: "",
    desc: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fname, phone, email, desc } = data;

    fetch("http://localhost:3000/api/postContact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ fname, phone, email, desc }),
    });

    //console.log(data);
    alert("Data has been sent.");
    setdata({
      fname: "",
      phone: "",
      email: "",
      desc: "",
    });
  };
  return (
    <>
      <div className={styles.main}>
        <h1>Contact form</h1>
        <form method="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputname1">Name </label>
            <input
              type="text"
              name="fname"
              value={data.fname}
              className="form-control"
              id="exampleIName1"
              onChange={onChange}
              aria-describedby="NameHelp"
              placeholder="Enter Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputphone1">phone </label>
            <input
              type="number"
              name="phone"
              value={data.phone}
              className="form-control"
              id="exampleInputphone1"
              onChange={onChange}
              aria-describedby="phoneHelp"
              placeholder="Enter phone"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              value={data.email}
              className="form-control"
              id="exampleInputEmail1"
              onChange={onChange}
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputdesc1">Description</label>
            <textarea
              type="text"
              className="form-control"
              id="desc"
              name="desc"
              value={data.desc}
              onChange={onChange}
              placeholder="Enter your description here..."
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
