import React, { useEffect, useState } from 'react'
import './RandomAdvice.css'

const Advice = () => {
    const [advice, setAdvice] = useState(null);
  
    // Function to fetch a random advice
    const fetchAdvice = async () => {
      try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        setAdvice(data.slip.advice);
      } catch (error) {
        console.error('Error fetching advice:', error);
      }
    };
  
    // useEffect to fetch advice when the component mounts
    useEffect(() => {
      fetchAdvice();
    }, []); // Empty dependency array means this runs once when component mounts
  
    return (
      <div className="container">
        <h1 className="title">Random Advice</h1>
        {advice ? (
          <div>
            <p className="advice">{advice}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <button 
          onClick={fetchAdvice} 
          className="button">
          Next Advice
        </button>
      </div>
    );
  };
  
  export default Advice;
