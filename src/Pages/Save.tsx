import { useNavigate } from "react-router-dom";
import pickIMG from "../assets/test2.png";

export default function Save() {
  const navigate = useNavigate();
  return (
    <div className="linear_bg">
      <div className="save_page blur_bg">
        <img src={pickIMG} alt="pick image" />
        <div className="btn_container">
          <button
            onClick={() => navigate("/")}
            className="save_btn"
            type="button"
          >
            Save
          </button>
          <button
            onClick={() => navigate("/")}
            className="more_pics_btn"
            type="button"
          >
            More pics
          </button>
        </div>
      </div>
    </div>
  );
}
