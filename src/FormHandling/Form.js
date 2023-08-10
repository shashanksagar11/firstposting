import React,{useState} from 'react'

const Form = () => {
    let [username,setName]= useState('')
    let [pass,setPassword]= useState('')
    let [email,setEmail]= useState('')
    let [course,setCourse]= useState('')
    let [comment,setComment]= useState('')


    //this function for userhandler

    function userNameHandler(e) {
        setName(e.target.value);
    }
    //this is functionality for the 
    function passHandler(e) {
        setPassword(e.target.value)
    }
    function emailHandler(e) {
        setEmail(e.target.value)
    }
    function courseHandler(e) {
        setCourse(e.target.value)
    }

    function commentHandler(e) {
        setComment(e.target.value)
    }

    ///here we can submit your form....
    function submitHandler(e) {
        console.log(username,email,pass,course,comment);
    }
  return (
    <div>
        <h1>Hi i AM handling</h1>

        username:<input type="text" placeholder='enter your username'
        onChange={userNameHandler}/>
        <br/>
        Password:<input type="password" placeholder='enter your password' onChange={passHandler}/>
        <br/>
        Email:<input type="email" placeholder='enter your password' onChange={emailHandler}/>
        <br/>

        <select onChange={courseHandler}>
            <option value="mern">mern</option>
            <option value="java">java </option>
            <option value="python">python</option>
            <br/>
           
        </select>
        Comment:<textarea row="10" col="10" onSelect={(e)=>commentHandler}/>
            <br/>
            <button onClick={submitHandler} >Submit</button>

    </div>
  )
}

export default Form