import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import axios from 'axios'




export default function Login(){
  const nav=useNavigate();
  const [data,setdata]=useState(
    {email:'',password:''})
  const handler=(e)=>{
       const {name,value}=e.target;
       setdata((PrevState)=>(
        ({...PrevState, [name]:value})
       ))
  }
  const [pasword,setpasword]=useState('password')
  const [text,settext]=useState("show")
  const fun=()=>{
   if(pasword==='password'&& text==='show'){
    setpasword('text');
    settext('hide')
   }
   else{
    setpasword('password');
    settext('show')
   }
  }
   
  const boo=()=>{
    const buddy={Email:data.email,Password:data.password}

    axios.post("http://localhost:8086/login",buddy).then((res)=>{
      if(res.data.length!==0){
        localStorage.setItem('fisrt',res.data[0].firstname);
        localStorage.setItem('last',res.data[0].lastname);
        nav('/')
      }
      else{
       alert('user not found');
        nav("/register");
      }
    })
  }
 
  const [te,sette]=useState('');
 
  const vivi=()=>{
  console.log(data.password);
  var spl='[/!/@/#/$/%/^/&]';
    const typo=['/[a-z]/','/[A-Z]/','/[0-9]/',spl];
    if(data.password.length>7 && (data.password).match>typo[0] && (data.password).match>typo[1] && (data.password).match>typo[2] && (data.password).match>typo[3] ){
     sette("the password is strong")
  }
  else{
    sette("the password is weak")
  }
}
   return (
    <section>
      <div id='dig'>
       <input onChange={handler} type='email' name='email' title='nope' placeholder='Email' required/><br/>
       <input onChange={handler} onFocus={vivi} id='in2' type={pasword} name='password' placeholder='Password' required/>
       <button onClick={fun} id='nn'>{text}</button>
       <button onClick={boo}>Login</button><br/>
       <div>
        <span>{te}</span>
       

       </div>
      </div>
      
    </section>
  )
}
