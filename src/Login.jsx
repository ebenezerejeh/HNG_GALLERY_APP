import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import {useState, useEffect} from 'react';
import avatar from './image_assets/user-profile-avatar.png'; 
import validation from './FormValidate';
import { Navigate } from 'react-router-dom';
import { auth } from './firebase';
import { useGlobalContext } from './context';
import Loading from './pages/loading'

const Login = () => {
  const [value, setValue] = useState({
    email:'',
    password: ''
  });


  const [error, setError] = useState({});
  const [loading, setLoading] = useState(true);


  const handleChange = (e)=>{
    setValue({...value, [e.target.name]: e.target.value})
  }
  
  const handleSubmit= (e)=>{
    e.preventDefault();
   setError(validation(value)); 
  
  }

   useEffect(()=>{
    if(Object.keys(error).length === 0 && (value.email !=="" && value.password !== "")){
      // alert("Form Submitted")
      signInWithEmailAndPassword(auth, value.email, value.password)
      .then((userCredential)=>{
        console.log(userCredential)
      })
      .catch((error)=>{
       
        alert(`${error} EMAIL SHOULD BE user@example.com and PASSWORD Should be 1Password `);
       
      })

    };
   },[error])

   const {authUser, loading2} = useGlobalContext();

useEffect(()=>{
  if (authUser){
    setLoading(false)
  }else{
    setLoading(false)
  }


},[authUser])


if(authUser){
  return <Navigate to='/'/>
 }   


   if(loading){

    return <Loading/> 
  
}


  return (
    <>
    <div className="login_main_container">
    <div className="loginMenu">
        <img src={avatar}className="login_avatar"/>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>

            <p>Email</p>
            <input type="email" name='email' value={value.email} placeholder="user@example.com" onChange={handleChange}/>
            {error.email && <p className='error'>{error.email}</p>}
            <p className='password'>Password</p>

            <input type="password" name='password' value={value.password} placeholder="1Password" onChange={handleChange}/>
            {error.password && <p className='error'>{error.password}</p>}
            <input type="submit" value="Login"/>


        </form>
    </div>


</div>
    </>
  )
}

export default Login