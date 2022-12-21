import { useState } from 'react'

function App() {
  const [count,setCount] = useState(0);

  return (
    <div>
      <h1>Test</h1>
      <p>{count}</p>
      <button onClick={()=>setCount(count + 1)}>Add</button>
    </div>
  )
}

export default App
