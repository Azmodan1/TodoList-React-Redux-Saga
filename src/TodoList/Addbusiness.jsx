import React, { useState } from "react";

const Addbusiness = ({ addAffairs }) => {
  const [value, setValue] = useState("");

  const subminitg = (event) => {
    event.preventDefault();
    if (value !== "") {
      addAffairs(value);
      setValue("");
    }
  };

  return (
    <form className="add" onSubmit={subminitg}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button className="addb" type="submit">
        Add business
      </button>
    </form>
  );
};

export default Addbusiness;
