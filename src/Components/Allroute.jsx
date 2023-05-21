import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Notlogin from "./Notlogin";
import { useSelector } from "react-redux";
function Allroute() {
  const Auth = useSelector((store) => {
    return store.Auth;
  });
  return (
    <>
      <Routes>
        {Auth ? (
          <Route path="/home" element={<Home />} />
        ) : (
          <Route path="/" element={<Notlogin />} />
        )}

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
export default Allroute;
