import { URL } from "../../../config";
import Sidebar from "../../../components/Sidebar/sidebar";
import Profile from "../../../components/Profile/profile";
import UserHeader from "../../../components/UserHeader/userHeader";
import EmployeeHeader from "../../../components/EmployeeHeader/employeeHeader";

const CustomerProfile = () => {
  const { userId, roleId } = sessionStorage;
  const urlToSaveDetails = `${URL}/user/profile`;
  const urlToGetDetails = `${URL}/user/profile/${userId}`;
  return (
    <>
      <div className="row">
        {roleId != 2 && <UserHeader></UserHeader>}
        {roleId == 2 && <EmployeeHeader></EmployeeHeader>}
        <Profile
          userId={userId}
          urlToGetDetails={urlToGetDetails}
          urlToSaveDetails={urlToSaveDetails}
        />
        <Sidebar />
      </div>
    </>
  );
};

export default CustomerProfile;
