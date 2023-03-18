import { Component } from "react";
import {Link} from  'react-router-dom'
import Cookies from "js-cookie";
import { Button ,TextInput,PasswordInput } from '@mantine/core';
import "./index.css"

class LoginForm extends Component{
state ={
    username:'',
    password:'',
    showSubmitError: false,
    errorMsg: ''
}

onSuccess=jwtToken=>{
    const {history}=this.props
    Cookies.set('jwt_token',jwtToken,{expires:30})
    history.replace('/')
}

onSubmitForm=async (event )=>{
     
    const {username,password}=this.state
    console.log(`${username}, ${password}`)
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

getUsername=()=>{
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
        autoCapitalize="none"
        onChange={this.onChangeUsername}
        />
        </>
    )
}

onChangePassword=(event)=>{
    this.setState({password:event.target.value})
}
getPassword =()=>{
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
      autoComplete="on"
      withAsterisk
      onChange={this.onChangePassword}
    />
        </>
    )
}

    
    render(){

        return (
            <div className="login-form-container">
                <form  className="form-container" onSubmit={this.onSubmitForm}>
                  <div className="input-container"> {this.getUsername()} </div>
                  <div className="input-container">{this.getPassword()}</div>
                  {/* <button type="submit" className="login-button" >Login</button> */}
                  <Button type="submit" className="login-button">
                   Login
                    </Button>
                </form>
                <div className="sing-up">
                    <p className="disc">Don't have an account  </p>
                    <Link className="sing" to='/register'> Sing-Up?</Link>
                </div>
            </div>
        )
    }
}


export default LoginForm