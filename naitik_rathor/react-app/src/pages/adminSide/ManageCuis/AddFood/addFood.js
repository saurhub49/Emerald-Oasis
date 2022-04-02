import { Link, useNavigate, useLocation } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import './addFood.css'
import { URL } from "../../../../config"
import AdminHeader from "../../../../components/AdminHeader/adminHeader"


const AddFood = () => {
    const { state } = useLocation()
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const { cuisineId } = state

    // console.log(cuisineId)

    const navigate = useNavigate()

    const addFoodItem = () => {
        if (name.length == 0) {
            toast.warning('Enter Cuisine Name')
        }
        else if (image.length == 0) {
            toast.warning('Enter Image Link')
        }
        else if (description.length == 0) {
            toast.warning('Enter About Cuisine')
        }
        else if (price.length == 0) {
            toast.warning('Enter Price')
        }
        else if (quantity.length == 0) {
            toast.warning('Enter Quantity')
        }
        else {
            const body = {
                name,
                image,
                description,
                price,
                quantity,
                cuisineId: cuisineId
            }

            const url = `${URL}/admin/addfooditem`

            axios.post(url, body).then((response) => {
                const result = response.data
                // console.log(result)
                if (result['status'] === 'success') {
                    toast.success('Food Item Added')
                    navigate('/allFoods', { state: { id: cuisineId }})
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
                <label className="row emp-details">Add Food Details</label>
                <div class="row">
                    <div className="col input-group mb-4 ">
                        <span class="input-group-text " >Food Name</span>
                        <input onChange={(e)=>{
                            setName(e.target.value)
                        }} type="text" class="form-control" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div class="col input-group mb-4">
                        <span class="input-group-text " >Image Link</span>
                        <input onChange={(e)=>{
                            setImage(e.target.value)
                        }} type="text" class="form-control" aria-describedby="inputGroup-sizing-default" />
                    </div>
                </div>
                <div class="row">
                    <div className="col input-group mb-4 ">
                        <span class="input-group-text " >Price</span>
                        <span class="input-group-text " >Rs</span>
                        <input onChange={(e)=>{
                            setPrice(e.target.value)
                        }} type="number" class="form-control input-number" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="col">
                        <div className="row">
                            <div class="col input-group mb-4">
                                <span class="input-group-text " >Quantity</span>
                                <input onChange={(e)=>{
                                    setQuantity(e.target.value)
                                }} type="number" class="form-control" aria-describedby="inputGroup-sizing-default" />
                            </div>
                            <div className="col"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <label class="form-label">Description</label>
                    <div class="col form-floating mb-4">
                        <textarea onChange={(e)=>{
                            setDescription(e.target.value)
                        }} type="text" class="form-control" id="floatingInput" placeholder="description" />
                        <label for="floatingInput"> description</label>
                    </div>
                    <div className="col"></div>
                </div>
                <button type="button" class="btn btn-outline-secondary" onClick={addFoodItem}>Submit</button>
            </div>
        </div>
    )
}

export default AddFood