import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import WeatherDetails from "./components/WeatherDetails";
import { GlobalProvider } from "./context/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Navbar />
        <WeatherDetails />
        <ToastContainer
          position="bottom-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </GlobalProvider>
    </div>
  );
}

export default App;
