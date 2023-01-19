import Topbar from "./component/topbar/topbar";
 import Write from "./pages/write/write";
import HomePage from "./pages/home/homePage";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Settings from "./pages/settings/settings";
import Single from "./pages/single/single"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const user=false;
  return (
    <div className="App">
      <BrowserRouter>
      <Topbar />

      <Routes>

        <Route exact path="/" element={<HomePage />} />
        <Route path="/register" element={user ? <HomePage/> :<Register />} />
        <Route path="/login" element={user ? <HomePage/> :<Login />} />
        <Route path="/Write" element={user ? <Write /> :<Register/>} />
        <Route path="/settings" element={user ? <Settings /> :<Register/>} />
        <Route path="/post/:postId" element={<Single />}/>
      </Routes> 
      </BrowserRouter> 
    </div>
  );
}

export default App;
