import "./App.css";
import Times from "./Times";

function App() {
  const endTime = new Date("July, 22, 2024");
  return (
    <>
      <div>
        <Times endTime={endTime} />
      </div>
    </>
  );
}

export default App;
