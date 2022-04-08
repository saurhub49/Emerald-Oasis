import '../../components/Cuisines/cuisine.css'
import { useNavigate } from "react-router"

const Carousel = (props) => {
  const { cuisine, isDetails } = props
  const navigate = useNavigate()

  const getCuisineId = () => {
    navigate('/foodItems',{ state: { id : cuisine.cuisineId }})
  }

  return (
    <div >
      {/* <div className="" onClick={getCuisineId}>
            <img className=" image-fluid" src={cuisine.image}></img>
            <span className="">{cuisine.name}</span>
      </div> */}
    </div>
  )
}

export default Carousel