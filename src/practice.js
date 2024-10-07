import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Practice() {
  const [user,setUser]=useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8086/getdata').then((res)=>{
      setUser(res.data)
    })
    
  })
  return (
    <section>
        <div>
        {user.map((item)=><>
            <div id='card'>
            <div id='div24'>
            <img id='su' src='https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y5MzctYWV3LTEzOS5qcGc.jpg' alt='none'></img>
            </div>
            <h2 id='dum'>Person</h2>
           <b><span>Name:</span></b><span>{item.firstname}</span><br/>
           <b><span>Username:</span> </b><span>{item.lastname}</span><br/>
           <b><span>E-mail:</span> </b><span>{item.password}</span><br/>
           <b><span>Gender:</span> </b><span>{item.gender}</span><br/>
           <Link to={`/edit/${item.id}`}><button className='non'>Edit</button></Link>
           <button className='non'>Delete</button>
           </div>
            </>)}
        </div>
    </section>
  )
}