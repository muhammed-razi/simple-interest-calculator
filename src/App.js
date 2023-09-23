import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './App.css';
import { useState } from 'react';

function App() {
  const [interest,setInterest] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [isPrincipleValid,setIsPrincipleValid] = useState(true)
  const [isRateValid,setIsRateValid] = useState(true)
  const [isYearValid,setIsYearValid] = useState(true)


  const validateInput = (e)=>{
    // {key}=object
    const {name,value}  = e.target
    // logic to check number validation - regular expression: /^[0-9]+$/
    if(!!value.match(/^[0-9]*.?[0-9]+$/)){
      if(name==="principle"){
        setPrinciple(value)
        setIsPrincipleValid(true)
      }else if(name==="rate"){
        setRate(value)
        setIsRateValid(true)
      }else{
        setYear(value)
        setIsYearValid(true)
      }
    }else{
      if(name==="principle"){
        setPrinciple(value)
        setIsPrincipleValid(false)
      }else if(name==="rate"){
        setRate(value)
        setIsRateValid(false)
      }else{
        setYear(value)
        setIsYearValid(false)
      }
    }
  }

  const handleCalculate = (e)=>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert("Please fill the form completely!!!")
    }else{
      setInterest(principle*rate*year/100)
    }
  }

  const handleReset = ()=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrincipleValid(true)
    setIsRateValid(true)
    setIsYearValid(true) 
  }

  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark '>
      <div style={{width:'500px'}} className='bg-light p-5 rounded '>
        <h3>Simple Interest App</h3>
        <p>Calculate ur siple interest Easily</p>
        <div style={{height:'150px'}} className='interest-card w-100 bg-primary mt-5 d-flex justify-content-center align-items-center flex-column rounded shadow text-light'>
          <h1>₹ {' '} {interest} </h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form className="mt-5" onSubmit={handleCalculate}>

        <div className="mb-3">
        <TextField  className='w-100' id="outlined-basic" label="₹ Principle Amount" variant="outlined"
        value={principle || ""} name='principle' onChange={(e)=>validateInput(e)} />
        </div>
        {
          !isPrincipleValid &&
          <div className="mb-3 text-danger fw-bolder">
            *Invalid User Input
          </div>
        }

        <div className="mb-3">
        <TextField className='w-100' id="outlined-basic" label="Rate of interest (p.a) %" variant="outlined" 
        value={rate || ""} name='rate' onChange={(e)=>validateInput(e)}/>
        </div>
        {
           !isRateValid &&
           <div className="mb-3 text-danger fw-bolder">
             *Invalid User Input
           </div>
        }


        <div className="mb-3">
        <TextField  className='w-100' id="outlined-basic" label="Time period ( Yr )" variant="outlined" 
        value={year || ""} name='year' onChange={(e)=>validateInput(e)}/>
        </div>
        {
           !isYearValid &&
           <div className="mb-3 text-danger fw-bolder">
             *Invalid User Input
           </div>
        }

        <Stack direction="row" spacing={2}>
        <Button type="submit" style={{height:'70px',width:'200px'}} variant="contained" disabled={isPrincipleValid && isRateValid && isYearValid?false:true}>CALCULATE</Button>
        <Button onClick={handleReset} style={{height:'70px',width:'200px'}} variant="outlined">RESET</Button>
        </Stack>


        </form>
        </div>
    </div>
  );
}

export default App;