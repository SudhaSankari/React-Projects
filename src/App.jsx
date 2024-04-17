import { useState } from 'react';
import './App.css';


function App() {
 const[height,setHeight]=useState("");
 const[weight,setWeight]=useState("");
 const[bmi,setBmi]=useState(null);
 const [Status,setStatus]=useState("");
 const [error,setError]=useState("");
 
 const handleCalculateBmi=()=>{
  const isValidHeight=/^\d+$/.test(height);
  const isValidWeight=/^\d+$/.test(weight);
     if(isValidHeight&& isValidWeight){
         const heightInMeters=height/100;
         const bmiValue=weight/(heightInMeters*heightInMeters);
         setBmi(bmiValue.toFixed(2));
         if(bmiValue<8.5){
          setStatus("Under Weight");

         }else if(bmiValue>=8.5 && bmiValue <24.9){
           setStatus("Normal Weight")
         }else if(bmiValue>=25 && bmiValue < 29.9){
           setStatus("Over Weight");
         }else{
          setStatus("Obese");
         }
       setError("");
     }else{
      setBmi(null);
      setStatus("");
      setError("Please Enter valid numeric values for height and weight.");
     }
 };
 const clearAll=()=>{
   setHeight("");
   setWeight("");
  setBmi(null);
  setStatus("");
 }

  return (
    <>
      <div className='bmi-container'>
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
      {
        error &&  <p className='error'>{error}</p>
      }  
         
          <div className="input-container">
             <label htmlFor="height">Height(cm)</label>
             <input type="text" onChange={(e)=>{
              setHeight(e.target.value)
             }} value={height} name="height" id="height" />
          </div>
          <div className="input-container">
             <label htmlFor="weight">Weight(kg)</label>
             <input type="text" onChange={(e)=>{
              setWeight(e.target.value)
             }} value={weight} name="weight" id="weight" />
          </div>
          <button onClick={handleCalculateBmi}>calculate BMI</button>
        <button onClick={clearAll} className='clear'>Clear</button>
         {bmi!==null && (
           <div className='result'>
           <p>Your BMI is: {bmi}</p>
           <p>Status: {Status}</p>
         </div>
         )}
        </div>
      </div>
   
    </>
  )
}

export default App
