import React from "react";
import "./Select.css";

function Select({ options, handleChange, pokeType }) {
  return (
    <div className="ConteinerSelect">
      <label className="Description">Selecione a classe do seu pokemon</label>
      <select name="select" className="Select" onChange={handleChange} value={pokeType}>
        {options.map(option => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
export default Select;
