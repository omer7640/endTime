import { useState } from "react";
import React from "react";
import UpdatedComponent from "./HOC";

function Person2({ count, handleAdd }) {
  return (
    <div>
      <h4>Micheal has {count} chocolates</h4>
      <button onClick={handleAdd}>Add more</button>
    </div>
  );
}
export default UpdatedComponent(Person2);
