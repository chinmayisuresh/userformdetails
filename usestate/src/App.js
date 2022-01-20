import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
 
   

 

function App() {
  const [User,setUser]=useState({
    username:"",
    age:0,
    address:"",
    department:"",
    salary:0,
    maritalstatus:"no"
  })

  const [Record,setRecord]=useState([]);

  const handleInput=(e)=>{
         const name=e.target.name;
         const value=e.target.value;
         setUser({...User,[name]:value});
  }
  const handleSubmit=(e)=>{

    e.preventDefault();
    const newRecord={...User }
    console.log(newRecord);

    setRecord([...Record,newRecord]);


    setUser({username:"",
    age:0,
    address:"",
    department:"",
    salary:0,
    maritalstatus:"no"})
  }
  return (
   <>
    <form onSubmit={handleSubmit}>
    Username: <br></br>
    <input onChange={handleInput} value={User.username} autoComplete='off' type='text' name='username' id='username'></input><br></br>

    Age : <br></br>
    <input onChange={handleInput} value={User.age} autoComplete='off' type='number' name='age' id='age'></input><br></br>

    Address : <br></br>
    <input onChange={handleInput} value={User.address} autoComplete='off' type='text' name='address' id='address'></input><br></br>

    Department : <br></br>
    <input onChange={handleInput} value={User.department} autoComplete='off' type='text' name='department' id='department'></input><br></br>

    Salary : <br></br>
    <input onChange={handleInput} value={User.salary} autoComplete='off' type='number' name='salary' id='salary'></input><br></br>

    Marital Status : <br></br>
    <input onChange={handleInput} value={User.maritalstatus} autoComplete='off' type='text' name='maritalstatus' id='maritalstatus'></input><br></br>
   
     <input type='submit'></input>
     </form>




     <div>
        {
         Record.map((element)=>
        (
              <div id='clean'>
                <i>{"Name"+" "+element.username + "    "} </i>
                <i>{"Salary"+" "+element.salary + "    "}</i>
                <i>{"Age"+" "+element.age+ "    "}</i>
               <i>{"Address"+" "+element.address+ "    "}</i> 
               <i>{"Department"+" "+element.department}</i> 
              <i>{"Maritalstaus"+" "+element.maritalstatus+ "    "}
                </i>  
              </div>
            )
         )
        }
     </div>
   </>
   
  );
}

export default App;
