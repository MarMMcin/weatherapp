import React from "react";
import "./Input.css";

const Input = ({ option, change, submit }) => {
  return (
    <form className="form" onSubmit={submit}>
      <p>select your provincial city</p>
      <select name="cities" value={option} onChange={change}>
        <option value="Rzeszów">Rzeszów</option>
        <option value="Kraków">Kraków</option>
        <option value="Lublin">Lublin</option>
        <option value="Kielce">Kielce</option>
        <option value="Białystok">Białystok</option>
        <option value="Bydgoszcz">Bydgoszcz</option>
        <option value="Gdańsk">Gdańsk</option>
        <option value="Gorzów Wielkopolski">Gorzów </option>
        <option value="Katowice">Katowice</option>
        <option value="Łódź">Łódź</option>
        <option value="Opole">Opole</option>
        <option value="Poznań">Poznań</option>
        <option value="Szczecin">Szczecin</option>
        <option value="Toruń">Toruń</option>
        <option value="Warszawa">Warszawa</option>
        <option value="Wrocław">Wrocław</option>
        <option value="Zielona Góra">Zielona Góra</option>
      </select>
      <button variant="success">Submit</button>
    </form>
  );
};

export default Input;
