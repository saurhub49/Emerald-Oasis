import { useLocation } from "react-router"
import './foodItem.css'
const FoodItem = (props) => {
    const { foodItem } = props

    // console.log(foodItem.name)

    return (
        <div className="food-tab">
            <div className="food-cont">
                <div className="food-image-tab">
                    <img className="image" src={foodItem.image}></img>
                </div>
                <div className="txt-cont">
                    <div class="row">
                        <span className="col title">{foodItem.name}</span>
                        <span className="col price">Price: ${foodItem.price}</span>
                    </div>

                    <div className="desc">
                        {foodItem.description}
                    </div>
                </div>
            </div>
            <button className="add-cart">Add to Cart</button>
        </div>
    )


    // return <div className="test">
    //     <div className="food-tab">
    //         <center className="container food-image">
    //             <img src={foodItem.image}></img>
    //         </center>
    //         <div className="row">
    //         <div className="col">{foodItem.name}</div>
    //         <div className="col">$. {foodItem.price}</div>
    //         </div>
    //     </div>
    // </div>
}

export default FoodItem