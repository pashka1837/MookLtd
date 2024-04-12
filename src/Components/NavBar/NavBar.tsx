import { useEffect, useState } from "react";
import "./NavBar.css";
export default function NavBar({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [curPos, setPos] = useState<ScrollStateT>({ scroll: 0, top: 0 });
  useEffect(() => {
    function handleScroll() {
      const scroll = window.scrollY;
      setPos((prev) => {
        if (scroll === 0) return { scroll, top: 0 };
        if (prev.top > 0) return { scroll, top: 0 };
        if (prev.top < -73) return { scroll, top: -73 };
        return { scroll, top: prev.top + (prev.scroll - scroll) / 5 };
      });
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="navbar" style={{ top: `${curPos.top}px` }}>
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
