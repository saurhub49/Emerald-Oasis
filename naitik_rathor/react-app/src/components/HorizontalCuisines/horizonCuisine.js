import { useNavigate } from "react-router"
import "./horizonCuisine.css"


const HorizonCuisine = (props) => {
    const { cuisine, isDetails } = props

    const navigate = useNavigate()

    const getCuisineId = () => {
        navigate('/foodItems', { state: { id: cuisine.cuisineId } })
    }

    return (
        <div className="" onClick={getCuisineId}>
            <div className="count">
                <img className="image-tile" src={cuisine.image} ></img>
            </div>
            <label className="image-name">{cuisine.name}</label>
        </div>
    )
}

export default HorizonCuisine