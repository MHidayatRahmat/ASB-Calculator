import React from "react";
import InvestItem from "./InvestItem";
import InvestItemHeader from "./InvestItemHeader";
import "./ResultTable.css"

const ResultTable = ({investmentData }) => {
   return(
    
        <table className="result">
            <InvestItemHeader></InvestItemHeader>
            <InvestItem investmentData={investmentData}></InvestItem>
        </table>
    
   );
}
export default ResultTable;