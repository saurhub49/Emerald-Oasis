import axios from "axios"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { toast } from "react-toastify"
import AdminHeader from "../../../../components/AdminHeader/adminHeader"
import { URL } from "../../../../config"

const EditCuisine = () => {
    const { state } = useLocation()
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const { cuisine } = state

    // console.log(cuisine.cuisineId);

    const navigate = useNavigate()

    const updateCuisine = () => {
        if (name.length == 0) {
            toast.error("Enter Cuisine Name")
        } else if (image.length == 0) {
            toast.error("Enter Image Link")
        } else if (description.length == 0) {
            toast.error("Enter Description")
        } else {
            const body = {
                cuisineId: cuisine.cuisineId,
                name,
                image,
                description,
            }

            const url = `${URL}/admin/addcuisine`

            axios.post(url, body).then((response) => {
                const result = response.data

                // console.log(result)

                if (result['status'] === 'success') {
                    toast.success('Cuisine Updated')
                    navigate('/cuisinesAll')
                }
                else {
                    toast.error(result['error'])
                }
            })
        }
    }

    return <div className="container">
        <AdminHeader></AdminHeader>
        <div className="main-div">
            <label className="emp-details">Edit Cuisine</label>
            <div className="row mb-3">
                <div className="col mb-3">
                    <label className="form-label">Cuisine Name</label>
                    <input onChange={
                        (e) => {
                            setName(e.target.value)
                        }
                    } defaultValue={cuisine.name} type="text" className="form-control" ></input>
                </div>
                <div className="col mb-3">
                    <label className="form-label">Cuisine Image Link</label>
                    <input onChange={
                        (e) => {
                            setImage(e.target.value)
                        }
                    } type="text" className="form-control" defaultValue={cuisine.image} ></input>
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label">Cuisine Description</label>
                <textarea onChange={
                    (e) => {
                        setDescription(e.target.value)
                    }
                } className="form-control" defaultValue={cuisine.description} rows="3" ></textarea>
            </div>
            <div className="col-md-6 mb-3 btn-group">
                <button type="button" className=" btn btn-outline-secondary" onClick={updateCuisine}>UPDATE</button>
                <button type="button" className=" btn btn-outline-secondary" onClick={() => {
                    toast.warn('No Changes')
                    navigate('/cuisinesAll')
                }}>Cancel</button>
            </div>
        </div>
    </div>
}

export default EditCuisine