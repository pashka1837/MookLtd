import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import "./SelectPhotoBtn.css";

export default function SelectPhotoBtn({
  img,
  text,
}: {
  img: IconDefinition;
  text: string;
}) {
  const navigate = useNavigate();
  return (
    <div className="select_pic_btn" onClick={() => navigate("/save")}>
      <FontAwesomeIcon color="#FCEFF9" size="5x" icon={img} />
      <p>{text}</p>
    </div>
  );
}
