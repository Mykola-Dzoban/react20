import { SignButton } from "../styles/Buttons";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <SignButton to="/signin">Sing in</SignButton>
      <SignButton to="/signup" $primary>
        Sing up
      </SignButton>
    </div>
  );
}

export default Header;
