import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"
import { useState } from "react"

function App() {
  const [results, setResults] = useState([]);
  return (
    <>
      <Header />
      <UserInput setResults={setResults} />
      <Result results={results} />
    </>
  )
}

export default App
