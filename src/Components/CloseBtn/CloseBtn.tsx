import useStore from "../../feature/store";
import "./CloseBtn.css";
export default function CloseBtn() {
  const { setLoginPopUp } = useStore();
  return (
    <button
      className="signin_close_btn material-symbols-outlined"
      onClick={() => setLoginPopUp(false)}
      type="button"
    >
      close
    </button>
  );
}
