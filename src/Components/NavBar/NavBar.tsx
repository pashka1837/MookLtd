import "./NavBar.css";
export default function NavBar({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="navbar">
      <h2 className="logo">OneAI</h2>
      <button
        onClick={() => setOpen(true)}
        className="open_signin"
        type="button"
      >
        Sign in
      </button>
    </div>
  );
}
