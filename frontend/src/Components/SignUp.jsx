import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormControl, FormLabel, Input, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { AppContext } from "./Context";

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
      .post("https://twitter-clone-6i0p.onrender.com/users", data)
      .then((res) => {
        // console.log("ADDED");
        // console.log("res",res)
        setCurrentUser(data.username)
        // console.log(currentUser)
        navigate("/home");
      })
      .catch((err) => {
        console.log("err",err);
        toast.error("Username already exists")
      });
  };
  return (
    <div className="signup-parent">
      <ToastContainer />
      <form className="form" onSubmit={handleSubmit(FormSubmitHandler)}>
        <div style={{ fontWeight: "700", fontSize: "1.5vmax" }}>
          Your text-based Social Media Journey starts right here..!
        </div>
        {/* <Text as="i" fontSize="1vmax">Enter the following details!</Text> */}
        <FormControl>
          <FormLabel fontSize="1vmax" as="i">
            Username
          </FormLabel>
          <Input
            type="text"
            borderColor="white"
            {...register("username", {
              required: "Username is required",
            })}
          />
          <p className="err">{errors.username?.message}</p>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="1vmax" as="i">
            Password
          </FormLabel>
          <Input
            type="password"
            name="password"
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
        <Button type="submit" colorScheme="red">
          Create Account
        </Button>
      </form>
    </div>
  );
}
