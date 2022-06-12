import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";

import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {

  const { roleId } = sessionStorage

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
        {roleId != 2 && <div>
          <Link
            className=" sidenavfont fontborder fonthover"
            to="/user/myorders"
          >
            My Orders
          </Link>
        </div>}
        {roleId == 2 && <div>
          <Link
            className=" sidenavfont fontborder fonthover"
            to="/employee/order/history"
          >
            My Orders
          </Link>
        </div>}
      </div>
    </div>
  );
};

export default Sidebar;
