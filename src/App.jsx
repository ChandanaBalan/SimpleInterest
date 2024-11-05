import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [principle, setPrinciple] = useState("")
  const [rate, setRate] = useState("")
  const [year, setYear] = useState("")

  const [isPrinciple, setIsPrinciple] = useState(true)
  const [isRate, setIsRate] = useState(true)
  const [isYear, setIsYear] = useState(true)

  const [interest, setInterest] = useState(0)

  const validate =(e)=>{
    const {name, value} = e.target
    console.log(name);
    console.log(value);
    
    
  

  if(!!value.match('^[0-9]*$')){
    if(name == 'principle'){
      setPrinciple(value)
      setIsPrinciple(true)
    }
    else if (name == 'rate'){
      setRate(value)
      setIsRate(true)
    }
    else{
      setYear(value)
      setIsYear(true)
    }
  }
  else{
    if(name == 'principle'){
      setPrinciple(value)
      setIsPrinciple(false)
    }
    else if (name == 'rate'){
      setRate(value)
      setIsRate(false)
    }
    else{
      setYear(value)
      setIsYear(false)
    }
  }

}

const handleReset =()=>{
  setPrinciple("")
  setRate("")
  setYear("")
  setIsPrinciple(true)
  setIsRate(true)
  setIsYear(true)
  setInterest(0)
}

const calculate= ()=>{
  setInterest((principle*rate*year)/100)
}


  return (
    <>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className=' d-flex justify-content-center align-items-center' style={{height:'100vh', width:'100%'}}> 
              <div className='bg-light p-5 rounded-5' style={{width:'500px'}}>
                <h1 className='text-center'>SIMPLE INTEREST</h1>
                <p className='text-center'>Calculate your Simple Interest Easily</p>
                <div className=' d-flex justify-content-center align-items-center bg-success p-3 mt-4 rounded flex-column text-light' style={{height:'150px'}}>
                  <h1>₹ {interest}</h1>
                  <p>Total Simple Interest</p>
                </div>

                <div className='my-3'>
                <TextField id="outlined-basic" className='w-100' value={principle} name='principle' label="₹ Principle Amount"  variant="outlined" onChange={(e)=>validate(e)} />
                  {isPrinciple== false && <p className='text-danger'>*Invalid input</p>}
                </div>
                <div className='mb-3'>
                <TextField id="outlined-basic" className='w-100' value={rate} name='rate' label="Rate of interest (%)" variant="outlined" onChange={(e)=>validate(e)} />
                {isRate == false && <p className='text-danger'>*Invalid input</p>}
                </div>
                <div className='mb-3'>
                <TextField id="outlined-basic"  className='w-100' value={year} name='year' label="Year (Yr)" variant="outlined" onChange={(e)=>validate(e)} />
                {isYear == false &&<p className='text-danger'>*Invalid input</p>}  
                </div>
                <div className='mb-3 d-flex justify-content-between'>
                <Button variant="contained" disabled = {isPrinciple && isRate && isYear ? false:true} style={{width:'190px'}} color="success" className='p-3' onClick={calculate}>Calculate</Button>
                <Button variant="outlined" style={{width:'190px'}} color="secondary" className='p-3' onClick={handleReset}>Reset</Button>
                </div>

              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>

      </div>
    </>
  )
}

export default App
