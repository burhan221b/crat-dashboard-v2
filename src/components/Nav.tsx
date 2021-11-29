import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav id="Nav">
            <div className="nav-group">
                <p>LOGO</p>
            </div>

            <div className="nav-group">
                <ul className="nav-ul-topics">
                    <li className="nav-li-topics">
                        <Link to="/">Topic 1</Link>
                    </li>
                    <li className="nav-li-topics">
                        <Link to="/topic2">Topic 2</Link>
                    </li>
                    <li className="nav-li-topics">
                        <Link to="/topic3">Topic 3</Link>
                    </li>
                    <li className="nav-li-topics">
                        <Link to="/topic4">Topic 4</Link>
                    </li>
                    <li className="nav-li-topics">
                        <Link to="/topic5">Topic 5</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
