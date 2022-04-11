import { useState } from "react";
import Sidebar from "../../../components/Sidebar/sidebar";
import Profile from "../../../components/Profile/profile";
import { URL } from "../../../config";
import UserHeader from "../../../components/UserHeader/userHeader";

const EmployeeProfile = () => {
  //const { userId } = sessionStorage;
  const userId = 2; //get this value from session storage this is for testing purpose
  const [chngPswdStatus, setChngPswdStatus] = useState(false);
  //const urlToSaveDetails = `${URL}/employee/profile/savedetails`;
  const urlToSaveDetails = `${URL}/employee/profile/savedetails`;
  const urlToGetDetails = `${URL}/user/profile/${userId}`;

  return (
    <div className="row">
      <UserHeader></UserHeader>
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
