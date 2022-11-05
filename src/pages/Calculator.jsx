import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Calculator() {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  var [result, setResult] = useState(0);
  var [opr, setOpr] = useState("1");
  const [active, setActive] = useState("Hide");

  function cal(val) {
    switch (val) {
      case "1":
        result = setResult(parseFloat(val1) + parseFloat(val2));
        break;

      case "2":
        result = setResult(parseFloat(val1) - parseFloat(val2));
        break;

      case "3":
        result = setResult(parseFloat(val1) * parseFloat(val2));
        break;

      case "4":
        result = setResult(parseFloat(val1) / parseFloat(val2));
        break;

      default:
        break;
    }

    setActive("Show");
  }

  return (
    <div className="calc">
      <center>
        <Typography variant="h5" gutterBottom component="div">
          Simple Calculator
        </Typography>
        <br />
        <br />
        <TextField
          onChange={(eve) => setVal1(eve.target.value)}
          id="outlined-basic"
          label="Value 1"
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          onChange={(eve) => setVal2(eve.target.value)}
          id="outlined-basic"
          label="Value 2"
          variant="outlined"
        />
        <br />
        <br />
        <div>
          Choose An Operation:&nbsp;
          <select id="oprs" onChange={(event) => setOpr(event.target.value)}>
            <option value="1">+</option>
            <option value="2">-</option>
            <option value="3">*</option>
            <option value="4">/</option>
          </select>
        </div>
        <br />
        <Button onClick={() => cal(opr)} variant="contained">
          Calculate
        </Button>
        {active === "Show" && (
          <Typography variant="h6" gutterBottom component="div">
            Result = {result}
          </Typography>
        )}
      </center>
    </div>
  );
}
