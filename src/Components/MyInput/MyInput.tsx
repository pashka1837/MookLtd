import "./MyInput.css";

export default function MyInput({ placeholder, type }: MyInputT) {
  return <input className="myInput" type={type} placeholder={placeholder} />;
}
