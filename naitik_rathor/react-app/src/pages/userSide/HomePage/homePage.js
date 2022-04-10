import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import Cuisine from "../../../components/Cuisines/Cuisine"
import { URL } from "../../../config"
import eclipse from "../../../assets/eclipse2.png"
import '../HomePage/homePage.css'
import UserHeader from "../../../components/UserHeader/userHeader"

const HomePage = () => {
  const [cuisines, setCuisines] = useState([])
  
  const getCuisines = () => {
    const url = `${URL}/user/cuisines`

    axios.get(url).then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setCuisines(result.data)
      } else {
        console.log(result.error)
        toast.error(result['error'])
      }
    })
  }

  useEffect(() => {
    getCuisines()
  }, [])

  return (<>
    <div className="container">
      <UserHeader></UserHeader>
      <div className="row">
        <div className="col-md-4 rect1">
          <div className="delicious">Delicous</div>
          <div className="quench-the-hunger">Quench The Hunger</div>
          <div className="quote-1">Pull up a chair. Take a taste. Come Join Us. Life is so endlessly delicious.</div>
          <div >
            <button className="quench-now">Quench Now</button>
          </div>
        </div>
        <div className="col-8">
          <img className="eclipse1" src={eclipse}></img>

        </div>
      </div>
      <div className="cuis-div">
        {cuisines.map((cuisine) => {
          return <Cuisine cuisine={cuisine}></Cuisine>
        })}
      </div>
    </div>
  </>)
}

export default HomePage