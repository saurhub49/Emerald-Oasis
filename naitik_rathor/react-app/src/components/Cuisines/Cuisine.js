import '../../components/Cuisines/cuisine.css'
import tag1 from '../../assets/cuisinetag.png'
import { useNavigate } from "react-router"

const Cuisine = (props) => {
  const { cuisine, isDetails } = props

  const navigate = useNavigate()

  const getCuisineId = () => {
    navigate('/foodItems',{ state: { id : cuisine.cuisineId, cuisineName : cuisine.name }})
  }

  return (
    <div className="" >
      <div className="row cuisine" onClick={getCuisineId}>
        <div className="col-4">
          <div >
            <img className="cuisine-image image-fluid" src={cuisine.image}></img>
          </div>
        </div>
        <div className="col">
          <div >
            <img className="tag" scr={tag1}></img>
            <span className="cuisine-name">{cuisine.name}</span>
            <div className="#">{cuisine.description}</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cuisine