import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import "./SelectPhotoBtn.css";

export default function SelectPhotoBtn({
  img,
  text,
}: {
  img: IconDefinition;
  text: string;
}) {
  return (
    <div className="select_pic_btn">
      <FontAwesomeIcon color="#FCEFF9" size="5x" icon={img} />
      <p>{text}</p>
    </div>
  );
}
