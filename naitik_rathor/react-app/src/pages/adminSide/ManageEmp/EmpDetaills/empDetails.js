import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { collapseToast, toast } from "react-toastify"
import axios from "axios"
import { URL } from "../../../../config"
import AdminHeader from "../../../../components/AdminHeader/adminHeader"



const EmpDetails = () => {
    const { state } = useLocation()
    const [userDetails, setUserDetails] = useState([])
    const [empDetails, setEmpDetails] = useState([])
    const [salary, setSalary] = useState('')
    const navigate = useNavigate()

    const { id } = state


    const getUserDetails = () => {
        const url = `${URL}/admin/getuser/${id}`
        axios.get(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                setUserDetails(result['data'])
            } else {
                toast.error(result['error'])
            }
        })
    }

    const getEmpDetails = () => {
        const url1 = `${URL}/admin/employeedetails/${id}`

        axios.get(url1).then((response) => {
            const result = response.data
            // console.log(result.data)
            if (result.status === 'success') {
                setEmpDetails(result.data)
            } else {
                console.log(result.error)
                toast.error(result['error'])
            }
        })
    }

    const deleteEmp=()=>{
        if(window.confirm("This Employee will be Deleted\nAre You Sure?")){
          
            const url =`${URL}/admin/deleteuser/${userDetails.userId}`

            axios.delete(url).then((response) => {
                const result = response.data
                if (result.status === 'success') {
                    toast.success("Employee Deleted")
                    navigate('/employees')
                } else {
                    console.log(result.error)
                    toast.error(result['error'])
                }
            })
        }
    }


    useEffect(() => {
        getUserDetails()
        getEmpDetails()
    }, [])

    const editSalary = () => {
        if (salary == 0) {
            toast.warn("No Changes")
            navigate('/employees')
        } else {
            const body = {
                employeeId: id,
                salary
            }

            const url2 = `${URL}/admin/employee/editsalary`

            axios.put(url2, body).then((response) => {
                const result = response.data
                // console.log(result)
                if (result['status'] === 'success') {
                    toast.success('Updated Successfully')
                    navigate('/employees')
                }
                else {
                    toast.error(result['error'])
                }
            })
        }
    }

    return (
        <div className="container">
            <AdminHeader></AdminHeader>
            <div className="main-div">
                <label className="emp-details">Employee Details</label>

                <form>
                    <div className="row">
                        <div className="form-group col-md-5">
                            <label for="inputId">Employee Id</label>
                            <input
                                class="form-control"
                                type="text"
                                id="inputfirstName"
                                value={userDetails.userId}
                                aria-label="Disabled input example" disabled readonly
                            />
                        </div>
                        <div className="col-md-5 text-center ">
                            <button class="btn btn-success" type="button" id="button-addon2" >All Orders</button>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="form-group col-md-5">
                            <label for="inputfirstName">First Name</label>
                            <input
                                class="form-control"
                                type="text"
                                id="inputfirstName"
                                value={userDetails.firstName}
                                aria-label="Disabled input example" disabled readonly
                            />
                        </div>
                        <div className="form-group col-md-5">
                            <label for="inputlastName">Last Name</label>
                            <input
                                class="form-control"
                                type="text"
                                id="inputlastName"
                                value={userDetails.lastName}
                                aria-label="Disabled input example" disabled readonly
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="form-group col-md-5">
                            <label for="inputEmail">Email</label>
                            <input
                                class="form-control"
                                type="text"
                                id="inputEmail"
                                value={userDetails.email}
                                aria-label="Disabled input example" disabled readonly
                            />
                        </div>
                        <div className="form-group col-md-5">
                            <label for="inputPhoneNumber">Phone Number</label>
                            <input
                                class="form-control"
                                type="text"
                                id="inputPhoneNumber"
                                value={userDetails.phoneNo}
                                aria-label="Disabled input example" disabled readonly
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="form-group col-md-5">
                            <label for="inputBirthDate">Birth Date</label>
                            <input
                                class="form-control"
                                type="date" format="yyyy-mm-dd"
                                id="inputBirthDate"
                                value={userDetails.birthdate}
                                aria-label="Disabled input example" disabled readonly
                            />
                        </div>
                        <div className="form-group col-md-5">
                            <label for="inputGender">Gender</label>
                            <input
                                class="form-control"
                                type="text"
                                id="inputGender"
                                value={userDetails.gender}
                                aria-label="Disabled input example" disabled readonly
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="form-group col-10">
                            <label for="inputAddress">Address</label>
                            <input
                                class="form-control"
                                type="text"
                                id="inputAddress"
                                value={userDetails.addressLine}
                                aria-label="Disabled input example" disabled readonly
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="form-group col-md-5">
                            <label for="inputJoinDate">Join Date</label>
                            <input
                                class="form-control"
                                type="text"
                                id="inputJoinDate"
                                value={empDetails.joinDate}
                                aria-label="Disabled input example" disabled readonly
                            />
                        </div>
                    </div>
                    <br />

                    <div className="row">
                        <div className="form-group col-md-5">
                            <label for="inputStatus">Status</label>
                            <input
                                class="form-control"
                                type="text"
                                id="inputStatus"
                                placeholder={empDetails.employeeStatus}
                                aria-describedby="button-addon2"
                            />
                        </div>
                        <div className="form-group col-md-5">
                            <label for="inputSalary">Salary</label>
                            <input onChange={(e) => {
                                setSalary(e.target.value)
                            }}
                                class="form-control"
                                type="number"
                                id="inputSalary"
                                placeholder={empDetails.salary}
                                aria-describedby="button-addon2"
                            />
                            <br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <button class="btn btn-success" type="button" id="button-addon2" onClick={editSalary} >Update</button>
                            {/* <Link to="/employees"> <button class="btn btn-light" type="button" id="button-addon2"  >Cancel</button></Link> */}
                        </div>
                        <div className="col-md-5">
                            <button class="btn btn-danger" type="button" id="button-addon2" onClick={deleteEmp} >Delete Employee</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default EmpDetails