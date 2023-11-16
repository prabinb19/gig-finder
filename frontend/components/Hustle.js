//create a hustle
//click and opens a pop up with 3 fields

/*
Title
Tag
Type
*/

// closes and opens another window which lets user put values,services, expertise, unique selling points
//selected services need pricing

import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  ButtonGroup,
} from "@mui/material";
import { useSpring, animated } from "react-spring";
import SecondPopup from "./SecondPopUp";

export default function Hustle() {
  const [isCreateHustleOpen, setIsCreateHustleOpen] = useState(false);
  const [isSubmissionComplete, setIsSubmissionComplete] = useState(false);
  const [hustleDetails, setHustleDetails] = useState({
    title: "",
    tag: "",
    type: "",
  });
  const [isSecondPopupOpen, setIsSecondPopupOpen] = useState(false);

  // Animation configuration for sliding
  const slideProps = useSpring({
    transform: `translateX(${isSubmissionComplete ? "100%" : "0"})`,
  });

  const handleCreateHustleClick = () => {
    setIsCreateHustleOpen(true);
    setIsSubmissionComplete(false);
  };

  const handleCreateHustleClose = () => {
    setIsCreateHustleOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHustleDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCreateHustleSubmit = () => {
    console.log("Hustle details submitted:", hustleDetails);
    setHustleDetails({
      title: "",
      tag: "",
      type: "",
    });
    setIsSubmissionComplete(true);
    setIsSecondPopupOpen(true);
    setIsCreateHustleOpen(false);
  };

  const buttonStyles = {
    display: "block",
    margin: "auto",
    marginTop: "250px", // Adjust as needed
    padding: "15px 30px", // Adjust as needed
    fontSize: "16px", // Adjust as needed
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px", // Rounded corners
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  return (
    <>
      <Button onClick={handleCreateHustleClick} style={buttonStyles}>
        Create a Hustle
      </Button>

      <animated.div style={slideProps}>
        <Dialog
          open={isCreateHustleOpen}
          onClose={handleCreateHustleClose}
          classes={{ paper: "custom-dialog" }}
        >
          <DialogTitle>Create a Hustle</DialogTitle>
          <DialogContent>
            <TextField
              label="Title"
              name="title"
              value={hustleDetails.title}
              onChange={handleInputChange}
              fullWidth
              style={{ marginBottom: "10px" }}
            />
            <TextField
              label="Tag"
              name="tag"
              value={hustleDetails.tag}
              onChange={handleInputChange}
              fullWidth
              style={{ marginBottom: "10px" }}
            />
            <TextField
              label="Type"
              name="type"
              value={hustleDetails.type}
              onChange={handleInputChange}
              fullWidth
              style={{ marginBottom: "10px" }}
            />
          </DialogContent>
          <ButtonGroup fullWidth>
            <Button onClick={handleCreateHustleSubmit} style={buttonStyles}>
              Submit
            </Button>
            <Button onClick={handleCreateHustleClose} style={buttonStyles}>
              Cancel
            </Button>
          </ButtonGroup>
        </Dialog>
      </animated.div>

      <SecondPopup
        isOpen={isSecondPopupOpen}
        onClose={() => setIsSecondPopupOpen(false)}
      />

      {/* Add your second pop-up for "values," "services," and "unique selling points" here */}
    </>
  );
}
