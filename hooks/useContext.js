import React, { createContext, useState, useEffect } from 'react';

// Create a context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [total, setTotal] = useState({ incomes: 0, outcomes: 0, total: 0 }); // Initialize total as an object
  const [save, setSave] = useState(0)

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

  return (
    <UserContext.Provider value={{ total, setTotal, save}}>
      {children}
    </UserContext.Provider>
  );
};