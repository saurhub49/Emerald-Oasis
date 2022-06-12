import axios from 'axios'
import { toast } from 'react-toastify'
import './food.css'
import { URL } from '../../config'
import { useNavigate } from 'react-router'

const Food = (props) => {
    const { food, setFood } = props
    const { cuisineId, cuisName } = props
    const navigate = useNavigate()

    const deleteFood = () => {
        if (window.confirm("This Food Item will be Deleted Permanently\nAre You Sure?")) {

            const url = `${URL}/admin/deletefooditem/${food.foodItemId}`

            axios.delete(url).then((response) => {
                const result = response.data
                if (result.status === 'success') {
                    toast.success("FoodItem Deleted")
                    window.location.reload(false)
                } else {
                    console.log(result.error)
                    toast.error(result['error'])
                }
            })
        }
    }
    return (
        <div className="containerr">
            <div className="textt">{food.name}</div>
            <div className="row">
                <img src={food.image} alt="Avatar" className="col imagee" ></img>
                <div className="col " >{food.description}</div>
            </div>
            <div className="row mb-4">
                <div className="col ">Price:- Rs. {food.price}/-</div>
                <div className="col">QTY :-  {food.quantity}</div>
            </div>
            <div className="row">
                <div className="col btn-group ">
                    <button type="button" className="btn btn-outline-secondary " onClick={() => {
                        navigate('/editFood', { state: { food: food, cuisineId: cuisineId, cuisName: cuisName } })
                    }}>EDIT</button>
                    <button type="button" className="btn btn-outline-secondary " onClick={deleteFood}>DELETE</button>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Food