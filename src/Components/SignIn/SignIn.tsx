import "./SignIn.css";
import MyForm from "../MyForm/MyForm";
import CloseBtn from "../CloseBtn/CloseBtn";
import useStore from "../../feature/store";

export default function SignIn() {
  const { isLoginPopUpOpen } = useStore();

  return (
    <div
      className={
        isLoginPopUpOpen ? "signin_container open" : "signin_container"
      }
    >
      <div style={{ display: "grid", justifyItems: "end" }}>
        <CloseBtn />
      </div>
      <MyForm />
    </div>
  );
}
