import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Edit() {
    const {id}=useParams()
    const [dat,setdat]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:'',
        gender:''
    })
    


   useEffect(()=>{
    axios.get(`http://localhost:8086/edit/${id}`).then((res)=>{
    console.log(res.data)
    setdat({firstname:res.data[0].firstname,
      lastname:res.data[0].lastname,
      email:res.data[0].email,
      password:res.data[0].password,
      gender:res.data[0].gender})

  })
})
  return (
    <section>
    <div>
      <input  type="text" name='firstname' value={dat.firstname}/>
      <input  type="text" name='lastname' value={dat.lastname}/>
      <input  type="text" name='email' value={dat.email}/>
      <input  type="text" name='password' value={dat.password}/>
      <input  type="text" name='gender' value={dat.gender}/>

    </div>
    </section>
  )
}
