import { createSlice } from "@reduxjs/toolkit";

const today = new Date().toISOString().split("T")[0];
const savedLeads = JSON.parse(localStorage.getItem("leads")) || {};
const initialState = savedLeads[today] || [];

const leadSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    addLead: (state, action) => {
      const updatedLeads = [...state, action.payload];
      const allLeads = JSON.parse(localStorage.getItem("leads")) || {};
      allLeads[today] = updatedLeads;
      localStorage.setItem("leads", JSON.stringify(allLeads));
      return updatedLeads;
    },
    deleteLead: (state, action) => {
      const updatedLeads = state.filter((_, index) => index !== action.payload);
      const allLeads = JSON.parse(localStorage.getItem("leads")) || {};
      allLeads[today] = updatedLeads;
      localStorage.setItem("leads", JSON.stringify(allLeads));
      return updatedLeads;
    },
  },
});

export const { addLead, deleteLead } = leadSlice.actions;
export default leadSlice.reducer;