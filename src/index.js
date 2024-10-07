import React from 'react';
import ReactDOM from 'react-dom/client';
import './navbar.css';
import './login.css'
import Navbar from './navbar';
import Slide from './slide';
import './slide.css';
import Signup from './signup';
import './signup.css';
import Login from './login'
import Practice from './practice';
import './practice.css'
import Edit from './edit'

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar/>
 <Routes>
<Route path='/' element={<Slide/>}/>
<Route path='edit/:id' element={<Edit/>}/>
<Route path='register' element={<Signup/>}/>
<Route path='login' element={<Login/>}/>
 <Route path="practice" element={<Practice/>} />
 </Routes>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
