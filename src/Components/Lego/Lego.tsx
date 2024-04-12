import "./Lego.css";
import testIMG from "../../assets/test.png";

export default function Lego() {
  return (
    <div className="lego_container">
      <video src="input_2.mp4" poster={testIMG} width="281" height="281" loop>
        Sorry, your browser doesn't support HTML5 video tag.
      </video>
      <h2 className="title">Lego</h2>
    </div>
  );
}
