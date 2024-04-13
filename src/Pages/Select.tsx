import BackBtn from "../Components/BackBtn/BackBtn";
import SelectPhotoBtn from "../Components/SelectPhotoBtn/SelectPhotoBtn";
import VideoOutput from "../Components/VideoOutput/VideoOutput";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export default function Select() {
  return (
    <div className="linear_bg">
      <div className="select_page blur_bg">
        <BackBtn />
        <VideoOutput width={315} height={315} />
        <div className="select_btns_container">
          <SelectPhotoBtn img={faImage} text="Choose photo from gallery" />
          <SelectPhotoBtn img={faCamera} text="Take photo with camera" />
        </div>
      </div>
    </div>
  );
}
