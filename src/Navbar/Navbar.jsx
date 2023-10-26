import './Navbar.css'
import Toggle from './Toggle';
function Navbar({ handleSwitch , turn}) {
  return (
    <nav
      style={
        turn === true
          ? { backgroundColor: "hsl(209, 23%, 22%)", color: "white" }
          : { backgroundColor: "white", color: "hsl(207, 26%, 17%)"}
      }
      className="navbar navbar-expand-lg"
    >
      <div style={{display: "flex", justifyContent: "space-between"}} className="container-fluid" >
        <a
          style={
            turn === true
              ? { color: "white" }
              : { backgroundColor: "white", color: "hsl(207, 26%, 17%)" }
          }
          className="navbar-brand"
          href="#"
        >
          Where in the world?
        </a>
        <div className="navbar" id="navbarNav">
          <ul className="navbar-nav">
            <li style={{listStyleType: "none"}} className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                <Toggle handleSwitch={handleSwitch} turn={turn} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
