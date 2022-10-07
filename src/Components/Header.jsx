import {Link} from 'react-router-dom';

function Header() {
    return <nav className="myHeader" style={{height: "194px", lineHeight: "85px"}} >
        <div className="nav-wrapper">
        <Link to="/" className="brand-logo mybr">React SPA Food</Link>
        <ul id="nav-mobile" className="right hide-on-mes-and-down">
          <li>
          <Link to="/about">Abouts</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
}

export {Header}