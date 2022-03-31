import { Link } from "react-router-dom"
import AdminHeader from "../../../components/AdminHeader/adminHeader"
import './adminHome.css'

const AdminHome = () => {
    return <div className="container">
        <AdminHeader></AdminHeader>
        <div className="main-page">
            <div className="row">
                <div className="col manage-tab ">
                    <Link className="Link" to="/employees"><label>Manage Employee</label></Link>
                </div>
                <div className=" col manage-tab">
                    <Link className="Link" to="/customers"><label>Manage Customer</label></Link>
                </div>
                <div className=" col manage-tab">
                    <Link className="Link" to="/cuisinesAll"><label>Manage Cuisine</label></Link>
                </div>
                <hr />
            </div>
        </div>
    </div>
}

export default AdminHome