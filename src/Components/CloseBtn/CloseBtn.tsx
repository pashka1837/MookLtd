import "./CloseBtn.css";
export default function CloseBtn({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      className="signin_close_btn material-symbols-outlined"
      onClick={() => setOpen(false)}
      type="button"
    >
      close
    </button>
  );
}
