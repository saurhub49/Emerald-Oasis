import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { toast } from "react-toastify"
import FoodItem from "../../../components/FoodItems/foodItem"
import Header1 from "../../../components/UserHeader/header1"
import HorizonCuisine from "../../../components/HorizontalCuisines/horizonCuisine"
import { URL } from "../../../config"
import "./cuisineFood.css"

const CuisineFood = () => {
    const { state } = useLocation()
    const [foodItems, setFoodItems] = useState([])
    const [cuisines, setCuisines] = useState([])
    const { cuisineName } = state
    // console.log(name)

    const getFoodItems = () => {
        const { id } = state
        const url = `${URL}/user/fooditems/${id}`
        // console.log(id)
        axios.get(url).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                setFoodItems(result.data)
            } else {
                console.log(result.error)
                toast.error(result['error'])
            }
        })
    }
    const getCuisines = () => {
        const url = `${URL}/user/cuisines`
        axios.get(url).then((response) => {
            const result = response.data
            // console.log(result.data)
            if (result.status === 'success') {
                setCuisines(result.data)
            } else {
                console.log(result.error)
                toast.error(result['error'])
            }
        })
    }

    useEffect(() => {
        getFoodItems()
        getCuisines()
    }, [])


    return (<div className="container">
        <Header1></Header1>
        <div className="cuisine-tabs">
            {cuisines.map((cuisine) => {
                return <HorizonCuisine cuisine={cuisine}></HorizonCuisine>
            })}
        </div>
        <div className="name">{cuisineName} Cuisine</div>
        <div className="food-items ">
            {foodItems.map((foodItem) => {
                return <FoodItem foodItem={foodItem}></FoodItem>
            })}
        </div>
    </div>
    )
}

export default CuisineFood