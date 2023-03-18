import { Component } from "react";
import {Link} from  'react-router-dom'
import Cookies from "js-cookie";
import "./index.css"
import { Button ,TextInput,PasswordInput} from '@mantine/core';

class Register extends Component{
state ={
    username:'',
    password:'',
    repassword:'',
    number:'',
    mailId:'',
    showPasswordError: false,
    errorMsg: ''
}

onSuccess=jwtToken=>{
    const {history}=this.props
    Cookies.set('jwt_token',jwtToken,{expires:30})
    history.replace('/')
}

onSubmitRegisterForm=async (event )=>{
    event.preventDefault()
    const {showPasswordError,errorMsg,password,repassword,username,number,mailId}=this.state
    const data =this.state

    

    if(password!==repassword || username.length<=4 || number.length!==10 || mailId.length<=12){
        this.setState({showPasswordError:true})
        this.setState({errorMsg:"Fill the details correctlly"})
    }
    else{
        this.setState({showPasswordError:false})
        this.setState({errorMsg:''})
        console.log(data)
    }
    // console.log(data)
    // const userDetails={username,password}
    // const url='dummy_url'
    // const options={
    //     method:'POST',
    //     body:JSON.stringify(userDetails)
    // }

    // const response =await fetch(url,options)
    // const data=await response.json()

    // if(response.ok==true){
    //     this.onSuccess(data.jwt_token)
    // }
    // else {
    //     this.onFailure(data.error_msg)
    // }
}

onChangeUsername=(event)=>{
    this.setState({username : event.target.value})
}

getRegisterUsername=()=>{
    const{username}=this.state

    return(
        <>
        {/* <label className="input-label" > USERNAME</label>
        <input type="text"
        id="username"
        className="input-Username"
        value={username}
        onChange={this.onChangeUsername}
        /> */}
        <TextInput
        type="text"
     placeholder="Username"
     label="Username"
     withAsterisk
     onChange={this.onChangeUsername}
     />

        </>
    )
}

onChangeRepassword=(event)=>{
    this.setState({repassword:event.target.value})
}
getRegisterRepassword =()=>{
    const {repassword}=this.state

    return (
        <>
        {/* <label className="input-label">RE-ENTER PASSWORD</label>
        <input 
        type="password"
        id="repassword"
        className="input-password"
        value={repassword}
        autoComplete="on"
        onChange={this.onChangeRepassword}
        /> */}
         <PasswordInput
      placeholder="Password"
      label="Confirm Password"
      withAsterisk
      autoComplete="off"
      onChange={this.onChangeRepassword}
    />
        </>
    )
}

onChangePassword=(event)=>{
    this.setState({password:event.target.value})
}
getRegisterPassword =()=>{
    const {password}=this.state

    return (
        <>
        {/* <label className="input-label">PASSWORD</label>
        <input 
        type="password"
        id="password"
        className="input-password"
        value={password}
        autoComplete="on"
        onChange={this.onChangePassword}
        /> */}
          <PasswordInput
      placeholder="Password"
      label="Password"
      description="Password must include at least one letter, number and special character"
      withAsterisk
      autoComplete="on"
      onChange={this.onChangePassword}

    />
        </>
    )
}
onChangeNumber=(event)=>{
    this.setState({number:event.target.value})
}
getRegisterNumber=()=>{
    const {number}=this.state

    return(
        <>
        {/* <label className="input-label">PHONE NUMBER</label>
        <input type="tel" 
        id="Phone"
        placeholder="Enter your phone number correctly"
        className="input-number"
        value={number}
        
    onChange={this.onChangeNumber} */}
    <TextInput
     type="tel"
     placeholder="Phone Number"
     label="Phone Number"
     withAsterisk
     onChange={this.onChangeNumber}
     />

        {/* /> */}
        </>
    )
}

onChangemail=(event)=>{
    this.setState({mailId:event.target.value})
}
getRegisterMail=()=>{
    const {mailId}=this.state

    return(
         <>
            {/* <label className="input-label">EMAIL</label>
            <input type='email'
            id="mailId"
            placeholder="Enter your mail Id"
            className="input-mail"
            value={mailId}
            onChange={this.onChangemail} */}
              <TextInput
        type="email"
     placeholder="abcd@gmail.com"
     label="E-Mail"
     withAsterisk
     onChange={this.onChangemail}
     />
            {/* /> */}
         </>
    )
}
    
    render(){
         const {showPasswordError,errorMsg}=this.state
        return (
            <div className="register-form-container" >
                <h1 className="heading">Register</h1>
                <form  className="register form-container" onSubmit={this.onSubmitRegisterForm}>
                  
                  {showPasswordError?<p className="error-message">*{errorMsg}</p>:<div></div>}
                  <div className="register input-container"> {this.getRegisterUsername()} </div>
                  <div className="register input-container" >{this.getRegisterNumber()}</div>
                  <div className="register input-container">{this.getRegisterMail()}</div>
                  <div className="register input-container">{this.getRegisterPassword()}</div>
                  <div className="register input-container">{this.getRegisterRepassword()}</div>
                  {/* <button type="submit" className="submit-button" >Submit</button> */}
                  <Button radius="md" size="md" type="submit" className="submit-button">
                    submit
                  </Button>
                </form>
                <div className="logincontainer">
                    <p className="youknow">Have an account </p>
                    <Link  className="login" to='/login' > Login!</Link>
                </div>
            </div>
        )
    }
}


export default Register