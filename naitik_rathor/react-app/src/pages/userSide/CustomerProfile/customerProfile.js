import { URL } from "../../../config";
import Sidebar from "../../../components/Sidebar/sidebar";
import Profile from "../../../components/Profile/profile";
import UserHeader from "../../../components/UserHeader/userHeader";

const CustomerProfile = () => {
  const { userId } = sessionStorage;
  const urlToSaveDetails = `${URL}/user/profile/savedetails`;
  const urlToGetDetails = `${URL}/user/profile/${userId}`;
  return (
    <>
      <div className="row">
        <UserHeader></UserHeader>
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
