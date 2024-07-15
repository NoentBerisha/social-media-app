import logo from "./logo.svg";
import "./App.css";
import SignUp from "./components/auth/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <SignUp />
    </>
  );
}

export default App;
