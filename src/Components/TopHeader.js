

import "../scss/market.scss";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";

const TopHeader = () => {
    return (
        <div className="top-header row g-0">
            <div className="col-sm-6">
                <img src={logo} className="logo" alt="" />
            </div>
            <div className="col-sm-6 pad-t-3">
                <NavLink className="btn btn-secondary" to="/">Home</NavLink>
                <NavLink className="btn btn-secondary" to="/about/">About</NavLink>
                <NavLink className="btn btn-secondary" to="/items/">Items</NavLink>
            </div>

        </div> 

    );
}
export default TopHeader;