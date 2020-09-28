import React, { useState } from "react";

export default function Addbusiness({ create }) {
  const [same, setSame] = useState("");

  function subminitg(event) {
    event.preventDefault();
    create(same);
    setSame("");
  }

  return (
    <form className="add" onSubmit={subminitg}>
      <input value={same} onChange={(event) => setSame(event.target.value)} />
      <button className="addb" type="submit">
        Add business
      </button>
    </form>
  );
}
