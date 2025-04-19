import React, { useState } from "react";
import { Inputfield } from "../components/Inputfield";
import { MdOutlineCall } from "react-icons/md";
import { MdTransitEnterexit } from "react-icons/md";
import { Button } from "../components/Button";
import { useNotification } from "../context/NotificationContext";
function Form() {
   const { showNotification } = useNotification();
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!number || number.length !== 10 || !/^\d{10}$/.test(number)) {
      setError("Please enter a valid 10-digit number");
    } else {
      setError("");
      console.log("Submitted number:", number);
    }
  };

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <Inputfield
          type="tel"
          name="number"
          label="Enter your phone number"
          placeholder="1234456789"
          helperText="We will never share your number"
          errormsg={error}
          icon={<MdOutlineCall />}
          required={true}
          value={number}
          onChange={handleChange}
        />
        <Button
          variant="secondary"
          size="small"
          text="Submit"
          icon={<MdTransitEnterexit />}
          loading={false}
          disabled={false}
          onClick={() => showNotification({ type: "success", message: "Task completed!" })}
        />
      </form>
    </div>
  );
}

export default Form;
