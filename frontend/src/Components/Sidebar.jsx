import React from "react";
import logo from "../assets/twitter-logo.svg";
import { MdHomeFilled } from "react-icons/md";
import { Text } from "@chakra-ui/react";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="" />
      </div>
      <div className="sidebar-options">
        <div className="option-parent">
          <div className="option">
            <MdHomeFilled color="white" size={"4vmin"} />
            <Text as={"b"} color={"white"}>
              Home
            </Text>
          </div>
        </div>
        <div className="option-parent">
          <div className="option">
            <MdHomeFilled color="white" size={"4vmin"} />
            <Text as={"b"} color={"white"}>
              Home
            </Text>
          </div>
        </div>
        <div className="option-parent">
          <div className="option">
            <MdHomeFilled color="white" size={"4vmin"} />
            <Text as={"b"} color={"white"}>
              Home
            </Text>
          </div>
        </div>
        <div className="option-parent">
          <div className="option">
            <MdHomeFilled color="white" size={"4vmin"} />
            <Text as={"b"} color={"white"}>
              Home
            </Text>
          </div>
        </div>
        <div className="option-parent">
          <div className="option">
            <MdHomeFilled color="white" size={"4vmin"} />
            <Text as={"b"} color={"white"}>
              Home
            </Text>
          </div>
        </div>
        <div className="option-parent">
          <div className="option">
            <MdHomeFilled color="white" size={"4vmin"} />
            <Text as={"b"} color={"white"}>
              Home
            </Text>
          </div>
        </div>
        <div className="option-parent">
          <div className="option">
            <MdHomeFilled color="white" size={"4vmin"} />
            <Text as={"b"} color={"white"}>
              Home
            </Text>
          </div>
        </div>
        <div className="option-parent">
          <div className="option">
            <MdHomeFilled color="white" size={"4vmin"} />
            <Text as={"b"} color={"white"}>
              Home
            </Text>
          </div>
        </div>
        <div className="option-parent">
          <div className="option">
            <MdHomeFilled color="white" size={"4vmin"} />
            <Text as={"b"} color={"white"}>
              Home
            </Text>
          </div>
        </div>
        <div className="option-parent">
          <div className="option">
            <MdHomeFilled color="white" size={"4vmin"} />
            <Text as={"b"} color={"white"}>
              Home
            </Text>
          </div>
        </div>
        <div className="option-parent">
          <div className="option">
            <MdHomeFilled color="white" size={"4vmin"} />
            <Text as={"b"} color={"white"}>
              Home
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
