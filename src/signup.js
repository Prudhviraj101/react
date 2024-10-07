import axios from 'axios';
import React, { useState } from 'react'
export default function Signup() {
  const [data,setdata]=useState(
    {first:"",last:'',email:"",password:"",Gender:''}
  )
  const hand=(f)=>{
    const {name,value}=f.target;
    setdata((prevState)=>(
    ({...prevState,[name]:value})
    ))
    console.log(data.first)
  }

  const sub=()=>{
    const user={First:data.first,Last:data.last,Email:data.email,Password:data.password,gender:data.Gender};
        if(user.First!=='' && user.Last!=='' && user.Email!==''  && user.Password!=='' && user.gender!==''){
      axios.post('http://localhost:8086/signup',user).then((res)=>{
      console.log(res);
      alert(res.data)
    })
    }
    else{
       alert('Please fill all fields');
      }
    }

  return (
    <section>
         <div id="div">
    <div id="div11">
     <h1>Sign up</h1>
       </div>
       <div id="div22">
        <p>It's quick and easy</p><hr/>
       </div>
       <div id="div36">
        
        <input onChange={hand}  id="input" type="text" placeholder="First Name" name='first' required/><br/>
        <input  onChange={hand} id="input1" type="text" placeholder="Last Name" name='last' required/>
       </div><br/>
       <div id="div4">
        <input  onChange={hand} id="input2" type="email,phone number" placeholder="Email or Mobile number" name='email' required/><br/><br/>
        <input  onChange={hand} id="input3" type="password" placeholder="Password" name='password' required/>
       </div><br/>
       <label>Birthday</label>
       <div id="div5">
        <select name="number">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
        <option>16</option>
        <option>17</option>
        <option>18</option>
        <option>19</option>
        <option>20</option>
        <option>21</option>
        <option>22</option>
        <option>23</option>
        <option>24</option>
        <option>25</option>
        <option>26</option>
        <option>27</option>
        <option>28</option>
        <option>29</option>
        <option>30</option>
        <option>31</option>
        </select><br/><br/>
        <select name="month" className="month">
            <option value="january">January</option>
            <option value="january">February</option>
            <option value="january">March</option>
            <option value="january">April</option>
            <option value="january">May</option>
            <option value="january">June</option>
            <option value="january">July</option>
            <option value="january">August</option>
            <option value="january">September</option>
            <option value="january">October</option>
            <option value="january">Novomber</option>
            <option value="january">December</option>
        </select><br/><br/>
        <select name="year">
         <option>2000</option>
         <option>2001</option>
         <option>2002</option>
         <option>2003</option>
         <option>2004</option>
         <option>2005</option>
         <option>2006</option>
         <option>2007</option>
         <option>2008</option>
         <option>2009</option>
         <option>2010</option>
        </select>
        </div><br/>
        <label id='lab32'>The Gender</label>
        <div id="div6">
         <input  onChange={hand}  className="bye" type="radio" placeholder="Male" value="male"   name="Gender"/>Male<br/>
         <input  onChange={hand}  className="bye" type="radio" placeholder="Female" value="female" name="Gender"/>Female<br/>
         <input  onChange={hand}  className="bye" type="radio" placeholder="others" value="others" name="Gender"/>Others<br/>
       </div>
       <div id="div7">
       <button onClick={sub}>Sign Up</button>
       </div>
       </div>
    </section>
 
   
  )
}
