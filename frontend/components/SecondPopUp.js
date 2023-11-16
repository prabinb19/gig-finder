import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  ButtonGroup,
  Typography,
} from "@mui/material";

export default function SecondPopup({ isOpen, onClose }) {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleOptionClick = (value) => {
    setSelectedValues((prevValues) =>
      prevValues.includes(value)
        ? prevValues.filter((v) => v !== value)
        : [...prevValues, value]
    );
  };

  const handlePopupSubmit = () => {
    console.log("Selected Values:", selectedValues);
    setSelectedValues([]);
    onClose();
  };

  const Option = ({ value, label }) => {
    const isSelected = selectedValues.includes(value);

    return (
      <div
        style={{
          padding: "8px",
          margin: "4px",
          border: `1px solid ${isSelected ? "#007bff" : "#ccc"}`,
          borderRadius: "4px",
          cursor: "pointer",
          backgroundColor: isSelected ? "#007bff" : "transparent",
          color: isSelected ? "#fff" : "#000",
        }}
        onClick={() => handleOptionClick(value)}
      >
        {label}
      </div>
    );
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      classes={{ paper: "custom-dialog" }}
    >
      <DialogTitle>Select Options</DialogTitle>
      <DialogContent>
        <div>
          <Typography variant="h6">Values:</Typography>
          <Option value="value1" label="Fast" />
          <Option value="value2" label="Reliable" />

          <Typography variant="h6">Services:</Typography>
          <Option value="value3" label="Haircut" />
          <Option value="value4" label="Beard Trim" />

          <Typography variant="h6">Unique Selling Points:</Typography>
          <Option value="value5" label="Cheap" />
          <Option value="value6" label="On campus" />
          {/* Ensure unique values for each set of options */}
        </div>
      </DialogContent>
      <ButtonGroup fullWidth>
        <Button onClick={handlePopupSubmit}>Submit</Button>
        <Button onClick={onClose}>Cancel</Button>
      </ButtonGroup>
    </Dialog>
  );
}
