import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { toast } from "react-toastify"
import AdminHeader from "../../../../components/AdminHeader/adminHeader"
import Food from "../../../../components/Food/food"
import { URL } from "../../../../config"
import './allFoods.css'

const AllFoods = () => {
    const [foods, setFoods] = useState([])
    const { state } = useLocation()

    const { id, cuisName } = state
    // console.log(id + cuisName)
    const navigate = useNavigate()

    const getFoods = () => {

        const url = `${URL}/user/fooditems/${id}`

        axios.get(url).then((response) => {
            const result = response.data
            // console.log(result.data)
            if (result.status === 'success') {
                setFoods(result.data)
            } else {
                // console.log(result.error)
                toast.error(result['error'])
            }
        })
    }

    const deleteCuisine = () => {
        if (window.confirm("All Cuisine and Foods will be Deleted Permanently\nAre You Sure?")) {

            const url = `${URL}/admin/deletecuisine/${id}`

            axios.delete(url).then((response) => {
                const result = response.data
                if (result.status === 'success') {
                    toast.success("Cuisine Deleted")
                    navigate('/cuisinesAll')
                } else {
                    console.log(result.error)
                    toast.error(result['error'])
                }
            })
        }
    }

    const addFoodItem = () => {
        navigate('/addFood', { state: { cuisineId: id, cuisName: cuisName } })
        // console.log(id)
    }

    useEffect(() => {
        getFoods()
    }, [])

    return <div className="container">
        <AdminHeader></AdminHeader>
        <div className="main-div">
            <div className="row mb-4">
                <div className="col"></div>
                <div className="col btn-group">
                    <button type="button" className="btn btn-outline-secondary" onClick={addFoodItem}>ADD FOOD</button>
                    <button type="button" className="btn btn-outline-danger" onClick={deleteCuisine}>DELETE CUISINE</button>
                </div>
            </div>
            <label className="row emp-details">{cuisName} Cuisine</label>
            {foods.length < 1 &&
                <div className="text-center fs-3 fw-light">No FoodItem To Show</div>
            }
            <div className="grid"> {
                foods.map((food) => {
                    return <div className="row mb-3  "><Food food={food} cuisineId={id} cuisName={cuisName}></Food></div>
                })
            }</div>
        </div>
    </div>
}

export default AllFoods