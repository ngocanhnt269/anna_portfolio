import "./topbar.scss";
import { Person, Mail } from "@mui/icons-material";

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Anna
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span> +236 979 5467</span>
          </div>

          <div className="itemContainer">
            <Mail className="icon" />
            <span> tnguyen509@my.bcit.ca</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
