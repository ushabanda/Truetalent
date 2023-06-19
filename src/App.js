import React from "react";
import Essential from "./Essential";
import Jobs from "./components/Jobs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Candidate from "./components/Candidate/Candidate";
import Jobsearchpage from "./components/Jobsearchpage/Jobsearchpage";
import Giveaway from "./components/Footer/Giveaway/Giveaway";


function App() {
  return (
    <div className="main-root">
      <BrowserRouter>
        {/* <Essential /> */}
        <Routes>
          <Route index path="/" element={<Essential />} />
          <Route path="/jobs/search" element={<Jobsearchpage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/candidate" element={<Candidate />} />
          <Route path="/giveaway" element={<Giveaway />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
