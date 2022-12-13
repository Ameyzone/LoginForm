import React, { useState} from "react" 

export const Register =(props) =>{
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const [name, setname] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }

  return (
    
      <div className="auth-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input type={name} onChange={(e) => setname(e.target.value)} id="name" name="name" placeholder="Full name" ></input>
        <lable htmlFor="email">Email</lable>
        <input value={email} onChange={(e) => setemail(e.target.value)} type="email" id="email" name="email" placeholder="youremailid@gmail.com" ></input>
        <lable htmlFor="password">Password</lable>
        <input value={pass} onChange={(e) => setpass(e.target.value)} type="password" id="password" name="password" placeholder="********" ></input>
        <button type="submit">LOGIN</button>
        </form>
        <button className="link-btn" onClick={()=> props.onformSwitch('Login')}>Already have an account ? Login here</button>
        </div>
     
  )
}
