import React ,{useRef ,useState } from 'react'
import styled from 'styled-components'
import {Form, Card, Container} from 'react-bootstrap'
import { Link,useHistory} from "react-router-dom";
import { useUserContext } from "../contexts/user_context";

const Signup=()=> {
    const numberRef=useRef();
    const nameRef=useRef();
    const history=useHistory();
    const [loading, setLoading] = useState(false)
    const {signup,currentUser}=useUserContext();


 
    const handleSubmit= async (e)=>{
        e.preventDefault()
       try {
        console.log("trying")
        setLoading(true);
        console.log("trying",numberRef.current.value)
        const num="+91"+numberRef.current.value
        const name=nameRef.current.value
        await  signup(num,name)
        history.push('/');
        console.log("user",currentUser)
           
                 

       } catch (error) {
            console.log("err",error)
       }
    }

    return (
        <Wrapper>
          
        <Card className="text-center contain">
      
        <h2 className="text-center mb-4">Sign Up</h2>
         <Form className="text-center" onSubmit={handleSubmit}>
            <label>Phone</label>
            <input className="w-100" type="text" name="phone" ref={numberRef} placeholder="enter phone number" />
            <label>Name</label>
            <input className="w-100" type="text" name="name" ref={nameRef} placeholder="enter name" />
            <button className=" btn" disabled={loading} id='recaptcha-container' type="submit">Send OTP</button>
       </Form>   
     
    </Card>
  
   
    </Wrapper>
    )
}

const Wrapper = styled.section`
align-items:center;
text-align:center;
justify-content:center;
.contain{
   margin:auto;
   width:40%;
   display block;
   margin-top:100px;
   margin-bottom:100px;
   height:245px;
   align-items:center;
   border: 2px hsl(22deg 31% 52%) solid;
}
h2 {
    background: hsl(22deg 31% 52%);
    margin:5px:
    padding:10px;
}
input{
    border: 1px hsl(22deg 31% 52%) solid;
}
button{
    margin:10px;
    margin-top:10px;
    background: hsl(22deg 31% 52%);
    width:auto;
}

`
export default Signup