import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./hooks/Home"
import ProblemStatements  from "./hooks/Ps"
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/prob-stats' element={<ProblemStatements/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App