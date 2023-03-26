import React, { useState } from "react";

function FormTableComponent() {
  const [formValues, setFormValues] = useState({
    a: "",
    b: "",
    c: "",
    d: ""
  });

  const [savedValues, setSavedValues] = useState([]);

  function handleFormSubmit(event) {
    event.preventDefault();
    const newSavedValues = [...savedValues, formValues];
    setSavedValues(newSavedValues);
    setFormValues({ a: "", b: "", c: "", d: "" });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  function handleSaveInputValue(inputName) {
    const inputValue = formValues[inputName];
    const newSavedValues = [...savedValues, { ...formValues }];
    setSavedValues(newSavedValues);
    setFormValues({ ...formValues, [inputName]: "" });
  }

  function handleUpdateInputValue(index, inputName) {
    const inputValue = formValues[inputName];
    const newSavedValues = [...savedValues];
    newSavedValues[index][inputName] = inputValue;
    setSavedValues(newSavedValues);
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Input A:
          <input type="text" name="a" value={formValues.a} onChange={handleInputChange} />
        </label>
        <label>
          Input B:
          <input type="text" name="b" value={formValues.b} onChange={handleInputChange} />
        </label>
        <label>
          Input C:
          <input type="text" name="c" value={formValues.c} onChange={handleInputChange} />
        </label>
        <label>
          Input D:
          <input type="text" name="d" value={formValues.d} onChange={handleInputChange} />
        </label>
        <button type="submit">Save Values</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Input A</th>
            <th>Input B</th>
            <th>Input C</th>
            <th>Input D</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {savedValues.map((savedValue, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={savedValue.a}
                  onChange={(event) => handleUpdateInputValue(index, "a", event.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={savedValue.b}
                  onChange={(event) => handleUpdateInputValue(index, "b", event.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={savedValue.c}
                  onChange={(event) => handleUpdateInputValue(index, "c", event.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={savedValue.d}
                  onChange={(event) => handleUpdateInputValue(index,
