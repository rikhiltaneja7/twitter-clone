import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AppContext } from "./Context";
import twitterLogo from "../assets/twitter-logo.svg";
import { setCookie } from "../utils/cookies";

export default function NewPost() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  // console.log(watch())
  const toast = useToast();
  const toastIdRef = React.useRef();
  const FormSubmitHandler = (data) => {
    // console.log(data)
    toastIdRef.current = toast({
      title: `Logging In...`,
      status: "loading",
      isClosable: false,
    });
    setTimeout(() => {
      axios
        .post("http://localhost:8080/users/login", data)
        .then((res) => {
          setCookie("auth-token", res.data, 365);
          toast.update(toastIdRef.current, {
            title: `Logged In!`,
            status: "success",
            isClosable: false,
          });
          setTimeout(() => {
            navigate("/home");
          }, 1500);
        })
        .catch((err) => {
          // console.log("err",err.response.data);
          if (err.response) {
            if (err.response.data == "User not found!") {
              toast.update(toastIdRef.current, {
                title: `User not found!`,
                status: "error",
                isClosable: false,
              });
            } else if (err.response.data == "Wrong Password") {
              toast.update(toastIdRef.current, {
                title: `Wrong Password`,
                status: "error",
                isClosable: false,
              });
            }
          } else {
            console.log(err);
          }
        });
    }, 1000);
  };
  return (
    <div className="signup-parent">
      <form className="form flex" onSubmit={handleSubmit(FormSubmitHandler)}>
        <div style={{ fontWeight: "700", fontSize: "1.5rem" }} className="flex">
          Sign in to <img src={twitterLogo} id="login-twitter" />
        </div>
        {/* <Text as="i" fontSize="1vmax">Enter the following details!</Text> */}
        <div className="sign-in-form flex">
          <FormControl>
            <Input
              type="text"
              borderColor="white"
              placeholder="Username"
              style={{ width: "25vmax", height: "50px" }}
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
              style={{ width: "25vmax", height: "50px" }}
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

          <button className="sign-in-up btn flex" type="submit">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
