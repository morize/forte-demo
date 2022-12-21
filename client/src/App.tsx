import { useState } from "react";
import Button from "./components/atoms/Button/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Test</h1>
      <p>{count}</p>
      <Button label={"Press me"} onClick={() => setCount(count + 1)} />
    </div>
  );
}

export default App;
