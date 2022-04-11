import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";

import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const myprofile = () => {
    navigate("/customerprofile");
  };
  const myorders = () => {
    navigate("/orders");
  };
  const payment = () => {
    navigate("/payment");
  };

  return (
    <div>
      <div className="sidenav">
        <div>
          <Link
            className=" sidenavfont fontborder fonthover"
            to="/user/profile"
          >
            My Profile
          </Link>
        </div>
        <div>
          <Link
            className=" sidenavfont fontborder fonthover"
            to="/user/myorders"
          >
            My Orders
          </Link>
        </div>
        <div>
          <Link
            className=" sidenavfont fontborder fonthover"
            to="/user/payment"
          >
            Payment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
