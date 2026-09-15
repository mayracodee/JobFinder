import Home from "./pages/Home/Home"
import JobDetails from "./pages/JobDetails/JobDetails"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vaga/:id" element={<JobDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
