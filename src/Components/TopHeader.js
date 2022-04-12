

import "../scss/market.scss";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";

const TopHeader = () => {
    return (
        <div className="top-header row g-0">
            <div className="col-sm-4 top-logo ">
                <img src={logo} className="logo" alt="" />
            </div>
            <div className="col-sm-8 pad-t-3 top-menu">
            <nav class="nav">
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/about/">About</NavLink>
                <NavLink className="nav-link" to="/items/">Items</NavLink>
                <NavLink className="nav-link" to="/interview-questions/">Interview Questions</NavLink>
                <NavLink className="nav-link" to="/bills/">Bills</NavLink>
            </nav>
            </div>

        </div> 

    );
}
export default TopHeader;