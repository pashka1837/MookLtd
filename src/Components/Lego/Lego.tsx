import VideoOutput from "../VideoOutput/VideoOutput";
import { useNavigate } from "react-router-dom";
import "./Lego.css";

export default function Lego() {
  const navigate = useNavigate();
  return (
    <div className="lego_container" onClick={() => navigate("/select")}>
      <VideoOutput width={281} height={281} />
      <h2 className="title">Lego</h2>
    </div>
  );
}
