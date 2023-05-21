import { useSelector } from "react-redux";
import style from "../CSS/Navbar.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ChangeAuth } from "../Redux/action";
function Navbar({ color }) {
  const dispatch = useDispatch();
  const handleauth = () => {
    ChangeAuth(false, dispatch);
  };
  const color_name = color;
  const Auth = useSelector((store) => {
    return store.Auth;
  });

  return (
    <>
      <nav className={style.nav}>
        <div className={style.navlogin} style={{ color: color_name }}>
          Contact
        </div>
        {Auth ? (
          <div style={{ color: color_name }}>
            <Link className={style.navlogin} to="/login" onClick={handleauth}>
              LogOut
            </Link>
          </div>
        ) : (
          <div style={{ color: color_name }}>
            <Link className={style.navlogin} to="/login">
              Login
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
