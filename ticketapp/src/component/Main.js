import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const Main = () => {
  const [state, setstate] = useState({ ticketid: "" });
  const handleChanged = (e) => {
    setstate({ ...setstate, [e.target.name]: e.target.value });
  };
  const handleId = () => {
    var url = "http://localhost:4000";
    var data = { id: state.ticketid };

    fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  };

  return (
    <>
     
     <h3 id="principal_title">Ticket Register</h3>

<div id="abuelo">
     <label for="basic-url" id="textLabel">
          Ingresa el ID del ticket
        </label>
    <div className="form-padre">
     
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon3">
              http://boo1.neuvoo.com/boo3-web/qa/tickets_system/index.php?mode=get&id=
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            id="input-content"
            aria-describedby="basic-addon3"
            value={state.ticketid}
            onChange={handleChanged}
            name="ticketid"
          />

          <br />

          <button onClick={handleId} className="btn btn-outline-secondary">
            Registrar
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Main;
