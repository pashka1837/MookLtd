import { useNavigate } from "react-router-dom";
import "./BackBtn.css";
export default function BackBtn() {
  const naigate = useNavigate();
  return (
    <button onClick={() => naigate("/")} className="back_btn" type="button">
      &#10094; Go back
    </button>
  );
}
