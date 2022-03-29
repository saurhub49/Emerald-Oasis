import { useState } from "react"
import '../../components/Cuisines/cuisine.css'
import tag1 from '../../assets/cuisinetag.png'

const Cuisine = (props) => {
  const { cuisine, isDetails } = props

  return (
    <div >
      <div className="row cuisine">
        <div className="col-4">
          <div >
            <img className="cuisine-image" src={cuisine.image}></img>
          </div>
        </div>
        <div className="col">
          <div >
            <img className="tag" scr={tag1}></img>
            <span className="cuisine-name">{cuisine.name}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cuisine