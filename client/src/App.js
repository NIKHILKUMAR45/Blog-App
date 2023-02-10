import Topbar from "./component/topbar/topbar";
 import Write from "./pages/write/write";
import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Settings from "./pages/settings/settings";
import Single from "./pages/single/single"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
function App() {
  const {user} = useContext(Context);
  return (
    <div className="App">
      <BrowserRouter>
      <Topbar />
      
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home/> :<Register />} />
        <Route path="/login" element={user ? <Home/> :<Login />} />
        <Route path="/Write" element={user ? <Write /> :<Register/>} />
        <Route path="/settings" element={user ? <Settings /> :<Register/>} />
        <Route path="/post/:postId" element={<Single />}/>
      </Routes> 
      </BrowserRouter> 
    </div>
  );
} 

export default App;
