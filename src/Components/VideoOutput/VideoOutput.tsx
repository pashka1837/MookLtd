import testIMG from "../../assets/test.png";

export default function VideoOutput({ width, height }: VideoOutT) {
  return (
    <video
      src="input_2.mp4"
      poster={testIMG}
      width={width}
      height={height}
      loop
    >
      Sorry, your browser doesn't support HTML5 video tag.
    </video>
  );
}
