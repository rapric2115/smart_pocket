import React, { createContext, useState, useEffect } from 'react';

// Create a context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [total, setTotal] = useState({ incomes: 0, outcomes: 0, total: 0 }); // Initialize total as an object
  const [save, setSave] = useState(0);
  const [mySaving, setMySaving] = useState({saveIt: '', forWhat: ''})
  
  const [dateThatIWantIt, setDateThatIWantIt] = useState();
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [totalDay, setTotalDay] = useState();
  const [totalWeeks, setTotalWeeks] = useState();

  // Function to calculate the total
  const calculateTotal = () => {
    const intIncome = parseInt(total.incomes, 10); // Convert to integer
    const intOutcomes = parseInt(total.outcomes, 10); // Convert to integer
    const result = intIncome - intOutcomes; // Calculate the result
    // console.log('este resultados es del context:', result)
    setSave({ result }); // Update total state
  };

  // Use useEffect to recalculate total whenever income or outcome changes
  useEffect(() => {
    calculateTotal(); // Call calculateTotal whenever income or outcome changes
  }, [total]);

  useEffect(() => {
    calculateDateDifference();
  }, [dateThatIWantIt])

  //Function to calculate date difference
  function calculateDateDifference() {
    const today = new Date(); // Get today's date
    const futureDate = new Date(dateThatIWantIt); // Convert the selected date to a Date object
  
    // Calculate the difference in milliseconds
    const diffTime = futureDate - today;
  
    // Calculate the difference in days
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
    // Calculate weeks from the total days
    const diffWeeks = Math.floor(diffDays / 7); // Calculate full weeks
  
    // Create a new date object for the future date
    const years = futureDate.getFullYear() - today.getFullYear();
    const months = futureDate.getMonth() - today.getMonth();
    const days = futureDate.getDate() - today.getDate();
  
    // Adjust for negative months or days
    let adjustedYears = years;
    let adjustedMonths = months;
    let adjustedDays = days;
  
    if (adjustedDays < 0) {
      adjustedMonths -= 1;
      // Get the last day of the previous month
      const lastDayOfPrevMonth = new Date(futureDate.getFullYear(), futureDate.getMonth(), 0).getDate();
      adjustedDays += lastDayOfPrevMonth;
    }
  
    if (adjustedMonths < 0) {
      adjustedYears -= 1;
      adjustedMonths += 12;
    }
  
    // Set the calculated values
    setYear(adjustedYears);
    setMonth(adjustedMonths);
    setDay(adjustedDays);
    setTotalDay(diffDays); // Total days for reference
    setTotalWeeks(diffWeeks); // Set total weeks
  }

  return (
    <UserContext.Provider value={{ total, setTotal, save, setDateThatIWantIt, setMySaving, mySaving, dateThatIWantIt, year, month, day, totalDay, totalWeeks }}>
      {children}
    </UserContext.Provider>
  );
};