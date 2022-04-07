import axios from "axios"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { toast } from "react-toastify"
import { URL } from "../../../../config"
import AdminHeader from "../../../../components/AdminHeader/adminHeader"

const EditFood = () => {
    const { state } = useLocation()
    const { cuisineId, food, cuisName } = state
    const [name, setName] = useState(food.name)
    const [image, setImage] = useState(food.image)
    const [description, setDescription] = useState(food.description)
    const [price, setPrice] = useState(food.price)
    const [quantity, setQuantity] = useState(food.quantity)
    
    // console.log(food.name)

    // console.log(cuisineId)

    const navigate = useNavigate()

    const updateFoodItem = () => {

            const body = {
                foodItemId: food.foodItemId,
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
                    toast.success('Food Item Updated')
                    navigate('/allFoods', { state: { id: cuisineId, cuisName: cuisName } })
                }
                else {
                    toast.error(result['error'])
                }
            })
    }


    return (
        <div className="container">
            <AdminHeader></AdminHeader>
            <div className="main-div">
                <label className="row emp-details">Edit Food Details</label>
                <div class="row">
                    <div className="col input-group mb-4 ">
                        <span class="input-group-text " >Food Name</span>
                        <input onChange={(e) => {
                            setName(e.target.value)
                        }} defaultValue={food.name} type="text" class="form-control" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div class="col input-group mb-4">
                        <span class="input-group-text " >Image Link</span>
                        <input onChange={(e) => {
                            setImage(e.target.value)
                        }} defaultValue={food.image} type="text" class="form-control" aria-describedby="inputGroup-sizing-default" />
                    </div>
                </div>
                <div class="row">
                    <div className="col input-group mb-4 ">
                        <span class="input-group-text " >Price</span>
                        <span class="input-group-text " >Rs</span>
                        <input onChange={(e) => {
                            setPrice(e.target.value)
                        }} defaultValue={food.price} type="number" class="form-control input-number" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="col">
                        <div className="row">
                            <div class="col input-group mb-4">
                                <span class="input-group-text " >Quantity</span>
                                <input onChange={(e) => {
                                    setQuantity(e.target.value)
                                }} defaultValue={food.quantity} type="number" class="form-control" aria-describedby="inputGroup-sizing-default" />
                            </div>
                            <div className="col"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <label class="form-label">Description</label>
                    <div class="col form-floating mb-4">
                        <textarea onChange={(e) => {
                            setDescription(e.target.value)
                        }} defaultValue={food.description} type="text" class="form-control" id="floatingInput" defaultValue="description" />
                        <label for="floatingInput"> description</label>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="col-md-6 btn-group">
                    <button type="button" class="btn btn-outline-success" onClick={updateFoodItem}>UPDATE</button>
                    <button type="button" class="btn btn-outline-secondary" onClick={() => {
                        toast.warn("No Changes")
                        navigate('/allFoods', { state: { id: cuisineId, cuisName: cuisName } })
                    }}>CANCEL</button>
                </div>
            </div>
        </div>
    )
}

export default EditFood