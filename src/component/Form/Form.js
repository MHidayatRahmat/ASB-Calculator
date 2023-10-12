import React, { useState } from "react";
import "./Form.css";
import { ButtonReset, ButtonCalc } from "../Button/Button";
import { fields1, fields2 } from "../../field/data";
import CalculateData from "./HandleData";
import InvestItem from "../InvestItem/InvestItem";
import InvestItemHeader from "../InvestItem/InvestItemHeader";
import ResultTable from "../InvestItem/ResultTable";

const Form = (props) => {
  const initialFormData = {
    currentSaving: "",
    yearSave: "",
    interest: "",
    investDuration: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [investmentData, setInvestmentData] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    const numericValue = value.replace(/[^0-9.]/g, ""); // Allow decimals

    setFormData({
      ...formData,
      [name]: numericValue,
    });
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setInvestmentData([]); // Clear investment data when resetting
  };

  const handleCalculate = (event) => {
    event.preventDefault();
    const calculatedData = CalculateData(formData); // Use the utility function

    setInvestmentData(calculatedData);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleCalculate}>
        <div className="input-group">
          {fields1.map((field) => (
            <p key={field.id}>
              <label htmlFor={field.id}>{field.label}</label>
              <input
                type="text"
                id={field.id}
                name={field.name}
                onChange={handleInputChange}
                value={formData[field.name]}
              />
            </p>
          ))}
        </div>
        <div className="input-group">
          {fields2.map((field) => (
            <p key={field.id}>
              <label htmlFor={field.id}>{field.label}</label>
              <input
                type="text"
                id={field.id}
                name={field.name}
                onChange={handleInputChange}
                value={formData[field.name]}
              />
            </p>
          ))}
        </div>
        <p className="actions">
          <ButtonReset onReset={handleReset} />
          <ButtonCalc onSubmit={handleCalculate} />
        </p>
      </form>
      <ResultTable investmentData={investmentData}></ResultTable>
      </div>

  );
};

export default Form;
