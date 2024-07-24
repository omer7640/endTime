import React, { useState } from "react";
import UpdatedComponent from "./HOC";

function Person1({ count, handleAdd }) {
  return (
    <div>
      <h4>Jimmy has {count} chocolates</h4>
      <button onClick={handleAdd}>Add more</button>
    </div>
  );
}
export default UpdatedComponent(Person1);
