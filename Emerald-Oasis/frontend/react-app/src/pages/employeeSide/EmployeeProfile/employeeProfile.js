import { useState } from "react";
import Sidebar from "../../../components/Sidebar/sidebar";
import Profile from "../../../components/Profile/profile";
import { URL } from "../../../config";
import EmployeeHeader from "../../../components/EmployeeHeader/employeeHeader";

const EmployeeProfile = () => {
  //const { userId } = sessionStorage;
  const { userId } = sessionStorage; //get this value from session storage this is for testing purpose
  const [chngPswdStatus, setChngPswdStatus] = useState(false);
  //const urlToSaveDetails = `${URL}/employee/profile/savedetails`;
  const urlToSaveDetails = `${URL}/employee/profile/savedetails`;
  const urlToGetDetails = `${URL}/user/profile/${userId}`;

  return (
    <div className="row">
      <EmployeeHeader></EmployeeHeader>
      <Profile
        userId={userId}
        urlToGetDetails={urlToGetDetails}
        urlToSaveDetails={urlToSaveDetails}
      />

      <Sidebar />
    </div>
  );
};

export default EmployeeProfile;
