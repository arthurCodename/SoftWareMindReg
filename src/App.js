import React, { useState } from "react";

const App = () => {
  const [checked, setChecked] = useState(false);
  const [hidden, setHidden] = useState(true);
  const initialValues = { name: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [success, setSuccess] = useState("");

  const handleCheck = (event) => {
    if (event.target.checked) {
      setHidden(false);
    } else {
      setHidden(true);
    }
    setChecked((current) => !current);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    if (checked) {
      if (
        (formValues.name !== "") &
        (formValues.password !== "") &
        (formValues.email !== "")
      ) {
        if (/@.*\./i.test(formValues.email)) {
          setSuccess("pomyślna rejestracja");
        } else {
          setSuccess("błąd walidacji");
        }
      } else {
        setSuccess("błąd walidacji");
      }
    } else {
      if ((formValues.name !== "") & (formValues.password !== "")) {
        setSuccess("pomyślna rejestracja");
      } else {
        setSuccess("błąd walidacji");
      }
    }
  };

  return (
    <div>
      <div>
        <div>Name:</div>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <div>Password:</div>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={handleCheck}
        />
        <span>I consent to recieving newsletters</span>
      </div>
      <div hidden={hidden}>
        <div>Email:</div>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input type="submit" onClick={handleSubmit} />
        <div>{success}</div>
      </div>
    </div>
  );
};

export default App;
