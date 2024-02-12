import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormControl, FormLabel, Input, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { AppContext } from "./Context";
import twitterLogo from '../assets/twitter-logo.svg'

export default function NewPost() {
  const {currentUser,setCurrentUser} = useContext(AppContext)
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  // console.log(watch())
  const FormSubmitHandler = (data) => {
    // console.log(data)
    axios
      .post("https://twitter-clone-6i0p.onrender.com/users/login", data)
      .then((res) => {
        // console.log(res)
        // console.log("ADDED");
        // console.log("res",res)
        setCurrentUser(data.username)
        // console.log(currentUser)
        navigate("/home");
      })
      .catch((err) => {
        // console.log("err",err.response.data);
        if (err.response.data=="User not found!"){
          toast.error("Username not found")
        }else if(err.response.data=="Wrong Password"){
          toast.error("Wrong Password")
        }
      });
  };
  return (
    <div className="signup-parent">
      <ToastContainer />
      <form className="form flex" onSubmit={handleSubmit(FormSubmitHandler)}>
        <div style={{ fontWeight: "700", fontSize: "1.5rem" }} className="flex">
          Sign in to <img src={twitterLogo} id="login-twitter"/>
        </div>
        {/* <Text as="i" fontSize="1vmax">Enter the following details!</Text> */}
        <div className="sign-in-form flex">
        <FormControl>
          <Input
            type="text"
            borderColor="white"
            placeholder="Username"
            style={{width: "25vmax", height: "50px"}}
            {...register("username", {
              required: "Username is required",
            })}
            />
          <p className="err">{errors.username?.message}</p>
        </FormControl>
        <FormControl>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            style={{width: "25vmax", height: "50px"}}

            {...register("password", {
              required: "Password Required",
              minLength: {
                value: 8,
                message: "Minimum 8 characters required",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                "Password Not Valid (Use Special Characters & Numbers)",
              },
            })}
            />
          <p className="err">{errors.password?.message}</p>
        </FormControl>
        
        <div className="sign-in-up btn flex">
          Sign In
        </div>
        </div>
      </form>
    </div>
  );
}
