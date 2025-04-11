import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addLead } from "../store/leadSlice";
import "./LeadForm.css"; 
const LeadForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    plusTwo: "",
    degree: "",
    place: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const formattedDate = date.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    dispatch(addLead({ ...formData, collectedOn: formattedDate }));
    setFormData({ name: "", number: "", plusTwo: "", degree: "", place: "" });
    navigate("/leads");
  };

  return (
    <form
      className="form-container"
      onSubmit={handleSubmit}
    >
      <h2 className="form-title">Lead Collection</h2>
      {[
        { label: "Name", name: "name" },
        { label: "Number", name: "number" },
        { label: "Plus Two", name: "plusTwo" },
        { label: "Degree", name: "degree" },
        { label: "Place", name: "place" },
      ].map((field, index) => (
        <div key={field.name} className="form-group">
          <label className="form-label">
            {index + 1}. {field.label}
          </label>
          <input
            name={field.name}
            type="text"
            value={formData[field.name]}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
      ))}
      <button
        type="submit"
        className="form-button"
      >
        Submit
      </button>
      <button
        type="button"
        className="form-button"
        onClick={() => navigate("/leads")}
      >
        View Saved Leads
      </button>
    </form>
  );
};

export default LeadForm;