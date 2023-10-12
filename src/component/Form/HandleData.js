import React from "react";

const CalculateData = (formData) => {
  const { currentSaving, yearSave, interest, investDuration } = formData;
  let previousTotalSaving = parseFloat(currentSaving);
  let newTotalInterest = parseFloat(0);
  let newInvestedCapital = parseFloat(currentSaving);
  const savingPerYear = parseFloat(yearSave * 12);
  const investmentData = [];

  for (let year = 1; year <= investDuration; year++) {
    const totalSavingwithInterest = previousTotalSaving + savingPerYear;
    const newCurrentSaving = parseFloat(((interest / 100) * totalSavingwithInterest + totalSavingwithInterest).toFixed(2));
    const newPerInterest = parseFloat(((interest / 100) * newCurrentSaving).toFixed(2));
    newTotalInterest += newPerInterest;
    newInvestedCapital += savingPerYear;

    // Format all values with two decimal places
    const formattedTotalSaving = newInvestedCapital.toFixed(2);
    const formattedInterestPerYear = newPerInterest.toFixed(2);
    const formattedTotalInterest = newTotalInterest.toFixed(2);
    const formattedInvestedCapital = newCurrentSaving.toFixed(2);

    // Add the data for this year to the investmentData array
    investmentData.push({
      year,
      totalSaving: formattedTotalSaving,
      interestPerYear: formattedInterestPerYear,
      totalInterest: formattedTotalInterest,
      investedCapital: formattedInvestedCapital,
    });

    // Update the previousTotalSaving for the next iteration
    previousTotalSaving = newCurrentSaving;
  }

  return investmentData;
}

export default CalculateData;
