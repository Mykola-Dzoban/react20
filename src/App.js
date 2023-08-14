import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
