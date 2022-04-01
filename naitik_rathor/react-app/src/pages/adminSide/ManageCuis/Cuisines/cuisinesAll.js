import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import AdminHeader from "../../../../components/AdminHeader/adminHeader"
import { URL } from "../../../../config"
import './cuisinesAll.css'

const CuisinesAll = () => {
    const [cuisines, setCuisines] = useState([])

    const navigate = useNavigate()

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
        getCuisines()
    }, [])

    return <div className="container">
        <AdminHeader></AdminHeader>
        <br />
        <div className="main-div">
            <Link to="/addCuisine"><button type="button" class="btn btn-outline-secondary">Add New Cuisine</button></Link>
            <br />
            <br />
            <label className="emp-details">Manage Cuisines</label>
            {
                cuisines.map((cuisine) => {
                    return (
                        <div className="cui-box float-start" onClick={() => {
                            navigate('/allFoods', { state: { id: cuisine.cuisineId, cuisName: cuisine.name } })
                        }}>
                            <div className="overlay">
                                <div className="text">{cuisine.name}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
}

export default CuisinesAll