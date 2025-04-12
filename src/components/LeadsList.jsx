import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteLead } from "../store/leadSlice";

const LeadsList = () => {
  const leads = useSelector((state) => state.leads);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (index) => {
    dispatch(deleteLead(index));
  };

  return (
    <div className="form-container">
      <button
        className="button"
        onClick={() => navigate("/LeadForm")}
      >
        ← Back to Form
      </button>
      <h2 className="text-2xl font-bold mb-4 text-center">Saved Leads</h2>
      {leads.length === 0 ? (
        <p className="text-center text-gray-500">No leads yet.</p>
      ) : (
        <ol className="space-y-4 list-decimal list-inside">
          {leads.map((lead, idx) => (
            <li
              key={idx}
              className="border p-4 rounded-lg bg-gray-50 shadow-sm relative"
            >
              <button
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                onClick={() => handleDelete(idx)}
              >
                ✖
              </button>
              <p><strong>Name:</strong> {lead.name}</p>
              <p><strong>Number:</strong> {lead.number}</p>
              <p><strong>Plus Two:</strong> {lead.plusTwo}</p>
              <p><strong>Degree:</strong> {lead.degree}</p>
              <p><strong>Place:</strong> {lead.place}</p>
              <p className="text-sm text-gray-500 mt-2"><strong>Collected On:</strong> {lead.collectedOn}</p>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default LeadsList;