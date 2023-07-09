import { Routes,Route } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Auth from "./Components/Authentication/Auth";
import AuthComponent from "./Components/Authentication/AuthComponent";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className="App">
      <ToastContainer />
      {/* <Header /> */}
        <div>
            <Routes>
              <Route path="/auth" element={<AuthComponent />}/>
            </Routes>
        </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
