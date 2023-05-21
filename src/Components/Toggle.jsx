import "../CSS/Toggle.css";
import { useDispatch, useSelector } from "react-redux";
import { ThemeChange } from "../Redux/action";
function Toggle() {
  const dispatch = useDispatch();
  const theme = useSelector((s) => {
    return s.dark;
  });

  const handleTheme = () => {
    if (theme === true) {
      ThemeChange(false, dispatch);
    } else {
      ThemeChange(true, dispatch);
    }
  };
  return (
    <>
      <input type="checkbox" id="toggle_checkbox" onClick={handleTheme} />

      <label for="toggle_checkbox">
        <div id="star">
          <div class="star" id="star-1">
            ★
          </div>
          <div class="star" id="star-2">
            ★
          </div>
        </div>
        <div id="moon"></div>
      </label>
    </>
  );
}
export default Toggle;
