import '../../components/Cuisines/cuisine.css'
import { useNavigate } from "react-router"

const Cuisine = (props) => {
  const { cuisine, isDetails } = props

  const navigate = useNavigate()

  const getCuisineId = () => {
    navigate('/foodItems', { state: { id: cuisine.cuisineId, cuisineName: cuisine.name } })
  }

  return (
    <div className="div-main">
      <div className="row">
        <div className="col">
          <div class="container1" onClick={getCuisineId}>
            <img src={cuisine.image} alt="Avatar" class="image1"></img>
            <div class="overlay1">
              <div class="text1">{cuisine.name}</div>
            </div>
          </div>
        </div>
        <div className="col col2">
          <div className="nam">{cuisine.name}</div>
          <div className="descr">{cuisine.description}</div>
        </div>
      </div>
    </div>
  )
}

export default Cuisine