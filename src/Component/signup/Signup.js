import React, { Component } from "react";
import swal from 'sweetalert';
import { isConstructorDeclaration } from "typescript";
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });
  
  
  return valid;
};

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkUsername: true,
      checkEmail:true,
      name: null,
      userName: null,
      email: null,
      password: null,
      formErrors: {
        name: "",
        userName: "",
        email: "",
        password: ""
      }
    };
  }
  
  //Check email or username are already exist in database
  // async checkDataInDb(value,field){
  //     // if(element.email == this.state.email){
  //     if(field == "userName" && value == "hoang"){
  //       console.log("value:", value)
  //       this.setState({checkUsername:false});
  //     }
  //     else{
  //       this.setState({checkUsername:true})
  //     }
  // }
  // async componentDidMount(){
  //   const url = "https://api.randomuser.me/";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   this.setState({person: data.results})
  //   console.log(data.results);
  //   this.state.person.forEach(element => console.log(element.email));
  // }
  
  handleSubmit = e => {
    e.preventDefault();
    // this.checkDataInDb();
    if (formValid(this.state)) {
      swal({
        text: `You have successfully register!`,
        icon: "success",
        button: "Close",
      });
      console.log(`
      ${this.state.name}
      ${this.state.userName}
      ${this.state.email}
      ${this.state.password}
      `);
    } else {
      swal({
        // title: "Good job!",
        text: "You must fill all fields completely",
        icon: "warning",
        button: "Close",
      });
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "name":
        formErrors.name =
        value.length < 3 ? "Minimum 3 characters required" : "";
        break;
      case "userName":
        
        formErrors.userName =
          value.length < 3 ? "Minimum 3 characters required" : "";
        break;
      case "email":
        
          formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "Minimum 6 characters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div>
      <link rel="stylesheet" type="text/css" href="css/mystyle.css" />
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input
                className={formErrors.name.length > 0 ? "error" : null}
                placeholder="Your name"
                type="text"
                name="name"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.name.length > 0 && (
                <span className="errorMessage">{formErrors.name}</span>
              )}
            </div>
            <div className="field">
              <label htmlFor="userName">Username</label>
              <input
                className={formErrors.userName.length > 0 ? "error" : null}
                placeholder="Username"
                type="text"
                name="userName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.name.length > 0 && (
                <span className="errorMessage">{formErrors.userName}</span>
              )}
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="example@gmail.com"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button  type="submit">Create Account</button>
              <a href ="/login" ><small>Already Have an Account?</small></a>
            </div>
          </form>
        </div>
      </div>
      </div>
    );
  }
}

export default Signup;