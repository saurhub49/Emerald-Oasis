import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { toast } from "react-toastify"
import { URL } from "../../../../config"
import AdminHeader from "../../../../components/AdminHeader/adminHeader"



const CustDetails = () => {
    const { state } = useLocation()
    const [custDetails, setCustDetails] = useState([])
    const navigate = useNavigate()

    const { custId } = state

    const getCustDetails = () => {
        const url = `${URL}/admin/getuser/${custId}`
        axios.get(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                setCustDetails(result['data'])
            } else {
                toast.error(result['error'])
            }
        })
    }

    useEffect(() => {
        getCustDetails()
    }, [])

    return (
        <div className="container">
            <AdminHeader></AdminHeader>
            <div className="main-div">
                <label className="cust-details">Customer Details</label>

                <form>
                    <div className="row">
                        <div className="form-group col-md-10">
                            <label for="inputId">Customer Id</label>
                            <input
                                class="form-control"
                                type="text"
                                id="inputfirstName"
                                value={custDetails.userId}
                                aria-label="Disabled input example" disabled readOnly
                            />
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
                                value={custDetails.firstName}
                                aria-label="Disabled input example" disabled readOnly
                            />
                        </div>
                        <div className="form-group col-md-5">
                            <label for="inputlastName">Last Name</label>
                            <input
                                class="form-control"
                                type="text"
                                id="inputlastName"
                                value={custDetails.lastName}
                                aria-label="Disabled input example" disabled readOnly
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
                                value={custDetails.email}
                                aria-label="Disabled input example" disabled readOnly
                            />
                        </div>
                        <div className="form-group col-md-5">
                            <label for="inputPhoneNumber">Phone Number</label>
                            <input
                                class="form-control"
                                type="text"
                                id="inputPhoneNumber"
                                value={custDetails.phoneNo}
                                aria-label="Disabled input example" disabled readOnly
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="form-group col-md-5">
                            <label for="inputBirthDate">Birth Date</label>
                            <input
                                class="form-control"
                                type="text"
                                id="inputBirthDate"
                                value={custDetails.birthdate} format="yyyy-mm-dd"
                                placeholder="na"
                                aria-label="Disabled input example" disabled readOnly
                            />
                        </div>
                        <div className="form-group col-md-5">
                            <label for="inputGender">Gender</label>
                            <input
                                class="form-control"
                                type="text"
                                id="inputGender"
                                value={custDetails.gender}
                                aria-label="Disabled input example" disabled readOnly
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
                                value={custDetails.addressLine}
                                placeholder="na"
                                aria-label="Disabled input example" disabled readOnly
                            />
                        </div>
                    </div>
                    <br />
                    <button class="btn btn-success" type="button" id="button-addon2" onClick={() => {
                        navigate('/userAllOrders', { state: { userId: custDetails.userId } })
                    }}>Show All Orders</button>
                </form>
            </div>
        </div>
    )
}
export default CustDetails