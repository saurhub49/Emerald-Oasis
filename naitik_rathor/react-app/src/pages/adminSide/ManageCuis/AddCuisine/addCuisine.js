import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import AdminHeader from "../../../../components/AdminHeader/adminHeader"
import { URL } from "../../../../config"

const AddCuisine = () => {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')

    const navigate = useNavigate()

    const addCuisine = () => {
        if (name.length == 0) {
            toast.error("Enter Cuisine Name")
        }
        else if (image.length == 0) {
            toast.error("Enter Image Link")
        }
        else if (description.length == 0) {
            toast.error("Enter Description")
        } else if (description.length > 250) {
            toast.warn("Description is too long")
        }
        else {
            const body = {
                name,
                image,
                description,
            }

            const url = `${URL}/admin/addcuisine`

            axios.post(url, body).then((response) => {
                const result = response.data

                // console.log(result)

                if (result['status'] === 'success') {
                    toast.success('Cuisine Added')
                    navigate('/cuisinesAll')
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
                <label className="emp-details">Add New Cuisine</label>
                <div className="row mb-3">
                    <div className="col mb-3">
                        <label className="form-label">Cuisine Name</label>
                        <input onChange={
                            (e) => {
                                setName(e.target.value)
                            }
                        } type="text" className="form-control" placeholder="cuisine name" required></input>
                    </div>
                    <div className="col mb-3">
                        <label className="form-label">Cuisine Image Link</label>
                        <input onChange={
                            (e) => {
                                setImage(e.target.value)
                            }
                        } type="text" className="form-control" placeholder="image link" required></input>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Cuisine Description</label>
                    <textarea onChange={
                        (e) => {
                            setDescription(e.target.value)
                        }
                    } className="form-control" placeholder="description" rows="3" required></textarea>
                </div>
                <div className="col-md-6 btn-group mb-3">
                    <button type="button" class="btn btn-outline-success" onClick={addCuisine}>ADD CUISINE</button>
                    <button type="button" class="btn btn-outline-secondary" onClick={() => {
                        navigate('/cuisinesAll')
                    }}>CANCEL</button>
                </div>
            </div>
        </div>
    )
}

export default AddCuisine