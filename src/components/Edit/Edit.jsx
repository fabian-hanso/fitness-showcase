import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import firebase from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "@firebase/firestore";
import "./Edit.css";

function Edit({ onHandleFormSubmit }) {
  const [headline, setHeadline] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(null);

  const categoryList = [
    { label: "Fahrrad", value: "Fahrrad" },
    { label: "Fitness", value: "Fitness" },
    { label: "Handball", value: "Handball" },
    { label: "Schwimmen", value: "Schwimmen" },
    { label: "Tennis", value: "Tennis" },
  ];

  useEffect(() => {
    if (date !== null) console.log(date.$d);
  }, [date]);

  function formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const timestamp = serverTimestamp();
    // const { headline, description, category, location, date } = form.elements;
    const payload = {
      headline,
      description,
      category,
      location,
      date: date.$d,
      timestamp,
    };
    const collectionRef = collection(firebase, "activities");
    console.log(payload);
    addDoc(collectionRef, payload);
    form.reset();
    onHandleFormSubmit();
  }

  return (
    <form className="EditWrapper" onSubmit={formSubmit}>
      <TextField
        required
        id="headline"
        label="Überschrift"
        variant="outlined"
        value={headline}
        onChange={(e) => setHeadline(e.target.value)}
        fullWidth
      />
      <TextField
        required
        id="description"
        label="Beschreibung"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
      />
      <TextField
        required
        id="location"
        label="Ort"
        variant="outlined"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        fullWidth
      />
      <TextField
        id="outlined-select-currency"
        select
        fullWidth
        label="Kategorie"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Junior"
        required
      >
        {categoryList.map((level) => (
          <MenuItem key={level.value} value={level.value}>
            {level.label}
          </MenuItem>
        ))}
      </TextField>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          required
          label="Datum"
          value={date}
          onChange={(newValue) => setDate(newValue)}
        />
      </LocalizationProvider>
      <Button
        className="EditSubmitButton"
        variant="contained"
        size="large"
        type="submit"
      >
        Hinzufügen
      </Button>
    </form>
  );
}

export default Edit;
