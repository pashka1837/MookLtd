import MyInput from "../MyInput/MyInput";
import "./MyForm.css";
export default function MyForm({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
    setOpen(false);
  }
  return (
    <form className="signin_form" action="post" onSubmit={handleSubmit}>
      <MyInput placeholder="Email" type="email" />
      <MyInput placeholder="Password" type="password" />
      <button className="signin_submit_btn" type="submit">
        Sign in
      </button>
    </form>
  );
}
