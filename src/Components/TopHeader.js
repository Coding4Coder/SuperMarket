

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
                <NavLink className="btn btn-secondary" to="/">Home</NavLink>
                <NavLink className="btn btn-secondary" to="/about/">About</NavLink>
                <NavLink className="btn btn-secondary" to="/items/">Items</NavLink>
                <NavLink className="btn btn-secondary" to="/interview-questions/">Interview Questions</NavLink>
            </div>

        </div> 

    );
}
export default TopHeader;