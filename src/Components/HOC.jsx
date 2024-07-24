import React from "react";
import { useState } from "react";
function UpdatedComponent(OriginalComponent) {
  function NewComponent() {
    const [count, setCount] = useState(2);
    function handleAdd() {
      setCount(count + 1);
    }
    return <OriginalComponent count={count} handleAdd={handleAdd} />;
  }
  return NewComponent;
}
export default UpdatedComponent;
