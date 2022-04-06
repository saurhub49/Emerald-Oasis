import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
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
            <Link to="/addCuisine"><button type="button" className="btn btn-outline-secondary">Add New Cuisine</button></Link>
            <br />
            <br />
            <label className="emp-details">Manage Cuisines</label>
            {
                cuisines.map((cuisine) => {
                    return (
                        <div className="cui-box float-start" >
                            <div className="overlay " onClick={() => {
                                navigate('/allFoods', { state: { id: cuisine.cuisineId, cuisName: cuisine.name } })
                            }}>
                                <img className="image-cuis" src={cuisine.image}></img>
                                <div className="text">{cuisine.name}</div>
                            </div>
                            <div className="row">
                                <div className="col btn-group">
                                    <button type="button" className="btn btn-outline-success" onClick={() => {
                                        navigate('/editCuisine', { state: { cuisine: cuisine } })
                                    }}>EDIT</button>
                                    <button type="button" className="btn btn-outline-danger" onClick={() => {
                                        if (window.confirm("All Cuisine and Foods will be Deleted Permanently\nAre You Sure?")) {

                                            const url = `${URL}/admin/deletecuisine/${cuisine.cuisineId}`

                                            axios.delete(url).then((response) => {
                                                const result = response.data
                                                if (result.status === 'success') {
                                                    toast.success("Cuisine Deleted")
                                                    window.location.reload(false);
                                                } else {
                                                    console.log(result.error)
                                                    toast.error(result['error'])
                                                }
                                            })
                                        }
                                    }}>DELETE</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
}

export default CuisinesAll