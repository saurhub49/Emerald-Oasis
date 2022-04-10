import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { URL } from "../../config";

const styles = {
  cardcss: {
    borderRadius: "30px",
    borderRadius: "30px",
    marginTop: "40%",
    backdropFilter: "blur(1px)",
    boxShadow:
      "2px 10px 30px 0 rgb(0 0 0 / 42%), 0 4px 25px 0 rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)",
  },
  labelFont: {
    color: "black",
    fontfamily: "sans-serif",
    fontSize: "18px",
  },
};

const ChangePasswordComp = () => {
   const { userId } = sessionStorage;

  const body = {
    userId: userId,
  };
  const [OldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verifiedOldPswd, setVerifiedOldPswd] = useState();
  const navigate = useNavigate();

  const enterNewPswd = () => {
    console.log(
      "Password: " + password + " Confirm Password : " + confirmPassword
    );
    if (password.length == 0) {
      toast.warning("Please enter new password");
    } else if (confirmPassword.length == 0) {
      toast.warning("Please confirm your password");
    } else if (!verifiedOldPswd) {
      toast.warning("Incorrect Old Password");
    } else if (password != confirmPassword) {
      toast.warning("Password Mismatch");
    } else {
      const url = `${URL}/user/${body.userId}/changepassword/${confirmPassword}`;
      console.log("URL constructed is : " + url);
      axios.put(url).then((response) => {
        const result = response.data;
        if (result["status"] == "success") {
          toast.success("Password Successfully Modified");
          logoutUser();
        } else {
          toast.error(result["error"]);
          navigate("/profile");
        }
      });
    }
  };

  const verifyAndChangePswd = () => {
    //Write api at backend to verify Old Password
    if (OldPassword.length == 0) {
      toast.warning("Please enter your last password");
    } else {
      const url = `${URL}/user/${body.userId}/verifypassword/${OldPassword}`;
      axios.put(url).then((response) => {
        setVerifiedOldPswd(response.data.data);
        const result1 = response.data.data
          ? enterNewPswd()
          : toast.warning("InCorrect Old Password");
      });
    }
  };

  const logoutUser = () => {
    sessionStorage.removeItem("userId");
    navigate("/signin");
  };

  return (
    <>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <form
            className="card border-primary text-dark mb-3"
            style={styles.cardcss}
          >
            <br />
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10">
                <div className="form-group">
                  <label style={styles.labelFont} for="inputOldPassword">
                    Current Password
                  </label>
                  <input
                    onChange={(e) => {
                      setOldPassword(e.target.value);
                    }}
                    style={{ borderColor: "Highlight" }}
                    type="text"
                    className="form-control"
                    id="inputOldPassword"
                    placeholder="*****"
                  />
                </div>
              </div>
              <div className="col-1"></div>
            </div>
            <br />
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10">
                <div className="form-group">
                  <label style={styles.labelFont} for="inputNewPassword">
                    New Password
                  </label>
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    style={{ borderColor: "Highlight" }}
                    type="text"
                    className="form-control"
                    id="inputNewPassword"
                    placeholder="Enter your new password"
                  />
                </div>
              </div>
              <div className="col-1"></div>
            </div>
            <br />
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10">
                <div className="form-group">
                  <label style={styles.labelFont} for="inputConsfirmPassword">
                    Confirm Password
                  </label>
                  <input
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                    style={{ borderColor: "Highlight" }}
                    type="text"
                    className="form-control"
                    id="inputConsfirmPassword"
                    placeholder="Confirm your new password"
                  />
                </div>
              </div>
              <div className="col-1"></div>
            </div>
            <br />
            <div class="text-center">
              <button
                type="button"
                class="btn btn-primary"
                onClick={verifyAndChangePswd}
              >
                Submit
              </button>
            </div>
            <br />
          </form>
        </div>

        <div className="col-4"></div>
      </div>
    </>
  );
};

export default ChangePasswordComp;