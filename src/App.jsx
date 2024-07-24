import "./App.css";
import Person1 from "./Components/Person1";
import Person2 from "./Components/Person2";
import Times from "./Times";

function App() {
  const endTime = new Date("July, 22, 2024");
  return (
    <>
      <div>
        {/* <Times endTime={endTime} /> */}
        {/* HOC */}
        <Person1 />
        <Person2 />
      </div>
    </>
  );
}

export default App;
