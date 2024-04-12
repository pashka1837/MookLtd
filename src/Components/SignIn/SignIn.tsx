import "./SignIn.css";
import MyForm from "../MyForm/MyForm";
import CloseBtn from "../CloseBtn/CloseBtn";

export default function SignIn({
  setOpen,
  isOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}) {
  return (
    <div className={isOpen ? "signin_container open" : "signin_container"}>
      <div style={{ display: "grid", justifyItems: "end" }}>
        <CloseBtn setOpen={setOpen} />
      </div>
      <MyForm setOpen={setOpen} />
    </div>
  );
}
