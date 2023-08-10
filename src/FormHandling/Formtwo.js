//3rd (optimal way)

import React, { useState } from 'react'

function FormHandling() {
    console.log('hii i am form handler')
     let [form,setForm]=useState({
        name:"",
        pass:"",
        email:'',
        course:"",
        comment:""
     })
    //this function for userhandler
    function commonHandler(e)
    {
        let {name,value}=e.target
        setForm((pre)=>{
          return{...pre,[name]:value}
        })
    } 
   
     
    
    
    //this is functionality for the submit your form
    function submitHandler()
    {
        console.log(form.name,form.pass,form.email,form.course,form.comment)
    }
  return (
     <>
     <h1>hii i am form handling</h1>
     UserName: <input type="text" placeholder='enter your username' onChange={commonHandler} name="name"/>
     <br/>
     Password: <input type="password" placeholder='enter your password' onChange={commonHandler} name="pass"/>
     <br/>
     Email: <input type="email" placeholder='enter your email' 
     onChange={commonHandler} name='email'/>
     <br/>
       select your course:
        <select onChange={commonHandler} name='course'>
        <option value="mern">mern</option>
        <option value="java">java</option>
        <option value="python">python</option>
       </select>
       <br/>
        Comment: <textarea row="10" col="10" onChange={commonHandler} name='comment'/>
        <br/>
         <button onClick={submitHandler}>submit</button>
     </>
  )
}