import { useLocation } from "react-router"

const FoodItem = (props) => {
    const { foodItem } = props

    console.log(foodItem.name)
    return <div>
        {foodItem.name}
        {foodItem.foodItemId}
    </div>
}

export default FoodItem