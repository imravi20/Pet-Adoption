import React, { useState } from "react";
import { AdopterData } from "./AdopterData";
import { validation } from "../utils/validation";

const PetAdoptionForm = () => {
  const [formdata, setFormdata] = useState([]);
  const [field, setField] = useState({
    petname: "",
    pettype: "Dog",
    breed: "",
    yname: "",
    yemail: "",
    yphone: "",
  });
  const [show, setShow] = useState(false);

  const [err, setErr] = useState({
    petname: "",
    pettype: "",
    breed: "",
    yname: "",
    yemail: "",
    yphone: "",
  });

  function handleInput(e) {
    const { name, value } = e.target;
    setField((prevData) => ({ ...prevData, [name]: value }));

    let errCopy = { ...err };
    const hasErrorObj = validation(name, value, errCopy);
    console.log("Updated Error State: ", hasErrorObj);

    setErr(hasErrorObj);
  }

  function handleData() {
    console.log("Form Errors: ", err); // Log the error object before validating fields

    if (
      !field.petname ||
      !field.breed ||
      !field.yname ||
      !field.yemail ||
      !field.yphone
    ) {
      alert("Please fill out all fields1");
      return;
    }

    const hE = Object.values(err).some((val) => val !== "");
    if (hE) {
      alert("Please Fill all the fields2");
      return;
    }

    const newObj = { ...field };

    setFormdata((prev) => [...prev, newObj]);
    setField({
      petname: "",
      pettype: "Dog",
      breed: "",
      yname: "",
      yemail: "",
      yphone: "",
    });

    setErr({
      petname: "",
      pettype: "",
      breed: "",
      yname: "",
      yemail: "",
      yphone: "",
    });

    setShow((prev) => !prev);
    console.log(newObj);
  }

  if (!show) {
    return (
      <div className="form">
        <div>
          <div>
            <label htmlFor="petname">Pet Name</label>
            <input
              type="text"
              name="petname"
              placeholder="Pet Name"
              value={field.petname}
              onChange={handleInput}
            ></input>
            <small>{err.petname}</small>
          </div>
          <div>
            <label htmlFor="pettype">Pet Type</label>

            <select name="pettype" value={field.pettype} onChange={handleInput}>
              <option value="Dog">Dog</option>
              <option value="Pigeon">Pigeon</option>
              <option value="Cat">Cat</option>
            </select>
          </div>
          <div>
            <label htmlFor="breed">Breed</label>
            <input
              type="text"
              name="breed"
              placeholder="Breed"
              value={field.breed}
              onChange={handleInput}
            ></input>
            <small>{err.breed}</small>
          </div>
          <div>
            <label htmlFor="yname">Your Name</label>
            <input
              type="text"
              name="yname"
              placeholder="Your Name"
              value={field.yname}
              onChange={handleInput}
            ></input>
            <small>{err.yname}</small>
          </div>
          <div>
            <label htmlFor="yemail">Email</label>
            <input
              type="text"
              name="yemail"
              placeholder="Email"
              value={field.yemail}
              onChange={handleInput}
            ></input>
            <small>{err.yemail}</small>
          </div>
          <div>
            <label htmlFor="yphone">Phone</label>
            <input
              type="text"
              name="yphone"
              placeholder="Phone"
              value={field.yphone}
              onChange={handleInput}
            ></input>
            <small>{err.yphone}</small>
          </div>
        </div>
        <button onClick={handleData}>Submit</button>
        <button
          onClick={() => {
            setShow((prev) => !prev);
          }}
        >
          View Adopters List
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <AdopterData getFormData={formdata} getShow={setShow} />
      </div>
    );
  }
};

export default PetAdoptionForm;
