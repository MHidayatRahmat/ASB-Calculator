import React from "react";

const InvestItem = (props) => {
    return(
      
        <tbody>
        {props.investmentData.length > 0 && (
          
          props.investmentData.map((data) =>(
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>RM{data.totalSaving}</td>
              <td>RM{data.interestPerYear}</td>
              <td>RM{data.totalInterest}</td>
              <td>RM{data.investedCapital}</td>
            </tr>
          ))
          
        )}
      </tbody>

      
    );
}
export default InvestItem;