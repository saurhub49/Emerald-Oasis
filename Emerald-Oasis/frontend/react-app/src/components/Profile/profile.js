import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { URL } from "../../config";

const styles = {
  cardcss: {
    borderRadius: "30px",
    borderRadius: "30px",
    position: "relative",
    marginLeft: "15%",
    marginTop: "12%",
    backdropFilter: "blur(1px)",
    boxShadow:
      "2px 10px 30px 0 rgb(0 0 0 / 42%), 0 4px 25px 0 rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)",
  },

  discardEditbuttonStyles: {
    fontWeight: "Bold",
    float: "right",
    borderRadius: "10px",
  },

  savebuttonStyles: {
    fontWeight: "Bold",
    borderRadius: "10px",
    width: "85px",
    borderColor: "Highlight",
  },

  labelFont: {
    color: "black",
    fontfamily: "sans-serif",
    fontSize: "18px",
  },
};


const Profile = (props) => {
  const navigate = useNavigate();

  const [ReadOnly, setReadOnly] = useState(true);
  const { userId, urlToSaveDetails, urlToGetDetails } = props
  console.log(userId, urlToGetDetails, urlToSaveDetails);

  const editProfile = (e) => {
    setReadOnly(false);
    e.preventDefault();
  };

  const discard = () => {
    toast.warning("Discarded Changes");
  };


  const savechanges = () => {

    const body = {
      userId: userId,
      firstName,
      lastName,
      email,
      phoneNo,
      birthdate,
      addressLine,
      gender,
      roleId,
    };

    axios.put(urlToSaveDetails, body).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        toast.success("Saved Changes");
        navigate("/user/profile");
      } else {
        toast.error(result["error"]);
      }
    });
  };

  const selectFemale = () => {
    setgender("Female");
  };
  const selectMale = () => {
    setgender("Male");
  };

  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setemail] = useState();
  const [phoneNo, setphoneNo] = useState();
  const [birthdate, setbirthdate] = useState();
  const [addressLine, setaddressLine] = useState();
  const [gender, setgender] = useState();
  const [roleId, setRoleId] = useState();
  const [uid, setUid] = useState();
  const [panCard, setPanCard] = useState();
  const [employeeStatus, setEmployeeStatus] = useState();
  const [joinDate, setJoinDate] = useState();
  const [salary, setSalary] = useState();

  const getProfiledetails = () => {
    //Write an api at backend for this url to get user data
    axios.get(urlToGetDetails).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        toast.success("Success");

        setRoleId(result.data.roleId);
        console.log(result.data);
        setfirstName(result.data.firstName);
        setlastName(result.data.lastName);
        setemail(result.data.email);
        setphoneNo(result.data.phoneNo);
        setbirthdate(result.data.birthdate);
        setgender(result.data.gender);
        setaddressLine(result.data.addressLine); 

        if (result.data.roleId === 2) {
          const urlToGetEmpDetails = `${URL}/employee/profile/details/${props.userId}`;
          axios.get(urlToGetEmpDetails).then((response) => {
            const result1 = response.data;
            if (result1.status === "success") {
              console.log(result1.data);
              setUid(result1.data.uid);
              setPanCard(result1.data.panCard);
              setEmployeeStatus(result1.data.employeeStatus);
              setJoinDate(result1.data.joinDate);
              setSalary(result1.data.salary);
            }
          });
        } else {
          toast.error(result["error"]);
        }
      }
    });
  };
  useEffect(() => {
    console.log(
      "Set props and Get Profile Details of respective props.userId :    " +
        props
    ); //set the value of props here and check
    getProfiledetails();
  }, []);

  return (
    <>
      <div className="col-2"></div>
      <div className="col-8">
        <form
          className="card border-primary text-dark mb-3 "
          style={styles.cardcss}
        >
          <br />
          <div className="row">
            <div className="col-10"></div>
            <div className="col-1">
              <button
                onClick={editProfile}
                style={styles.discardEditbuttonStyles}
              >
                EditProfile
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="form-group col-5">
              <label style={styles.labelFont} for="inputfirstName">
                First Name
              </label>
              <input
                onChange={(e) => {
                  setfirstName(e.target.value);
                }}
                readOnly={ReadOnly}
                value={firstName != null ? firstName : ""}
                style={{ borderColor: "Highlight" }}
                type="text"
                className="form-control"
                id="inputfastName"
              />
            </div>
            <div className="form-group col-5">
              <label style={styles.labelFont} for="inputlastName">
                Last Name
              </label>
              <input
                onChange={(e) => {
                  setlastName(e.target.value);
                }}
                readOnly={ReadOnly}
                value={lastName != null ? lastName : ""}
                style={{ borderColor: "Highlight" }}
                type="text"
                className="form-control"
                id="inputfirstName"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-1"></div>
            <div className="form-group col-5">
              <label style={styles.labelFont} for="inputEmail">
                Email
              </label>
              <input
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                readOnly={ReadOnly}
                value={email != null ? email : ""}
                style={{ borderColor: "Highlight" }}
                type="text"
                className="form-control"
                id="inputEmail"
              />
            </div>
            <div className="form-group col-5">
              <label style={styles.labelFont} for="inputPhoneNumber">
                Phone Number
              </label>
              <input
                onChange={(e) => {
                  setphoneNo(e.target.value);
                }}
                readOnly={ReadOnly}
                value={phoneNo != null ? phoneNo : ""}
                style={{ borderColor: "Highlight" }}
                type="text"
                className="form-control"
                id="inputPhoneNumber"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-1"></div>
            <div className="form-group col-5">
              <label style={styles.labelFont} for="inputBirthDate">
                Birth Date
              </label>
              <input
                onChange={(e) => {
                  setbirthdate(e.target.value);
                }}
                style={{ borderColor: "Highlight" }}
                readOnly={ReadOnly}
                type="date"
                className="form-control"
                id="inputBirthDate"
                value={birthdate != null ? birthdate : ""}
              />
            </div>
            <div className="form-group col-5" readOnly={ReadOnly}>
              <label style={styles.labelFont} for="inputGender">
                Gender
              </label>
              <div class="form-check">
                <input
                  onClick={selectMale}
                  style={{ borderColor: "Highlight" }}
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  defaultChecked={ReadOnly && gender === "Male"}
                  // checked={ReadOnly && gender == "Male"}
                />
                <label
                  style={styles.labelFont}
                  class="form-check-label"
                  for="flexRadioDefault1"
                >
                  Male
                </label>
              </div>
              <div class="form-check">
                <input
                  onClick={selectFemale}
                  style={{ borderColor: "Highlight" }}
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  defaultChecked={ReadOnly && gender === "Female"}
                />
                <label
                  class="form-check-label"
                  for="flexRadioDefault2"
                  style={styles.labelFont}
                >
                  Female
                </label>
              </div>
            </div>
            <br />
            <br />
            <br />
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="form-group col-10">
              <label for="inputAddress" style={styles.labelFont}>
                Address 1
              </label>
              <input
                onChange={(e) => {
                  setaddressLine(e.target.value);
                }}
                style={{ borderColor: "Highlight" }}
                readOnly={ReadOnly}
                value={addressLine != null ? addressLine : ""}
                type="text"
                className="form-control"
                id="inputAddress"
              />
            </div>
          </div>
          <br />

          {roleId == 2 && (
            <div>
              <div className="row">
                <div className="col-1"></div>
                <div className="form-group col-5">
                  <label for="inputAddress" style={styles.labelFont}>
                    UID
                  </label>
                  <input
                    style={{ borderColor: "Highlight" }}
                    readOnly="true"
                    value={uid != null ? uid : ""}
                    type="text"
                    className="form-control"
                    id="inputAddress"
                  />
                </div>
                <div className="form-group col-5">
                  <label for="inputAddress" style={styles.labelFont}>
                    PAN Card
                  </label>
                  <input
                    style={{ borderColor: "Highlight" }}
                    readOnly="true"
                    value={panCard != null ? panCard : ""}
                    type="text"
                    className="form-control"
                    id="inputAddress"
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-1"></div>
                <div className="form-group col-5">
                  <label for="employmentStatus" style={styles.labelFont}>
                    Employment Status
                  </label>
                  <input
                    style={{ borderColor: "Highlight" }}
                    readOnly="true"
                    value={employeeStatus != null ? employeeStatus : ""}
                    type="text"
                    className="form-control"
                    id="employmentStatus"
                  />
                </div>
                <div className="form-group col-5">
                  <label for="joinDate" style={styles.labelFont}>
                    Join Date
                  </label>
                  <input
                    style={{ borderColor: "Highlight" }}
                    readOnly="true"
                    value={joinDate != null ? joinDate : ""}
                    type="text"
                    className="form-control"
                    id="joinDate"
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-1"></div>
                <div className="form-group col-5">
                  <label for="salary" style={styles.labelFont}>
                    Salary
                  </label>
                  <input
                    style={{ borderColor: "Highlight" }}
                    readOnly="true"
                    value={salary != null ? salary : ""}
                    type="text"
                    className="form-control"
                    id="salary"
                  />
                </div>
              </div>
              <br />
            </div>
          )}

          <div className="row">
            <div className="col-3">
              <div>
                <Link
                  to="/user/changepassword"
                  style={{
                    fontWeight: "bold",
                    float: "right",
                  }}
                >
                  Change Password
                </Link>
              </div>
            </div>
            <div className="col-6">
              <div>
                <button
                  className="btn btn-danger"
                  onClick={discard}
                  style={styles.discardEditbuttonStyles}
                  disabled={ReadOnly}
                >
                  Discard
                </button>
              </div>
            </div>

            <div className="col-2">
              <div>
                <button
                  className="btn btn-primary"
                  style={styles.savebuttonStyles}
                  onClick={savechanges}
                  disabled={ReadOnly}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
          <br />
        </form>
      </div>
      <div className="col-2"></div>
    </>
  );
};

export default Profile;
