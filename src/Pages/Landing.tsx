import NavBar from "../Components/NavBar/NavBar";
import SignIn from "../Components/SignIn/SignIn";
import Lego from "../Components/Lego/Lego";
import Footer from "../Components/Footer/Footer";

export default function Landing() {
  return (
    <div className="landing_page">
      <NavBar />
      <SignIn />
      <div className="main_landing">
        <Lego />
        <Lego />
      </div>
      <Footer />
    </div>
  );
}
