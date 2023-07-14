import React from "react";
import "./Select.css";

function Select(props) {
  const options = props.options;
  const setPokeType = props.setPokeType;
  const pokeType = props.pokeType;

  const handleChange = event => {
    setPokeType(event.target.value);
  };

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
