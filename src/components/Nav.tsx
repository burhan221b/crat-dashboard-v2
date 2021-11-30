import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav id="Nav">
            <div className="nav-group nav-group-header">
                <p>LOGO</p>
                <p className="version">V0.1.0</p>
            </div>

            <div className="nav-group nav-group-ul">
                <ul className="nav-ul-topics">
                    <li className="nav-li-topics">
                        <Link to="/">&#x2612;</Link>
                    </li>
                    <li className="nav-li-topics">
                        <Link to="/topic2">&#x2612;</Link>
                    </li>
                    <li className="nav-li-topics">
                        <Link to="/topic3">&#x2612;</Link>
                    </li>
                    <li className="nav-li-topics">
                        <Link to="/topic4">&#x2612;</Link>
                    </li>
                    <li className="nav-li-topics">
                        <Link to="/topic5">&#x2612;</Link>
                    </li>
                </ul>
                <ul className="nav-ul-topics nav-ul-topics-last">
                    <li className="nav-li-topics">
                        <Link to="/settings">&#x2612;</Link>
                    </li>
                    <li className="nav-li-topics">
                        <Link to="/">Logout</Link>
                    </li>
                </ul>
            </div>
            {/* <div className="nav-group">
                <ul className="nav-ul-topics">
                    <li className="nav-li-topics">
                        <Link to="/settings">&#x2612;</Link>
                    </li>
                </ul>
            </div> */}
        </nav>
    )
}

export default Nav
