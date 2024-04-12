import { useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import SignIn from "../Components/SignIn/SignIn";
import Lego from "../Components/Lego/Lego";
import Footer from "../Components/Footer/Footer";

export default function Landing() {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <div className="landing_page">
      <NavBar setOpen={setOpen} />
      <SignIn setOpen={setOpen} isOpen={isOpen} />
      <div className="main_landing">
        <Lego />
        <Lego />
      </div>
      <Footer />
    </div>
  );
}
