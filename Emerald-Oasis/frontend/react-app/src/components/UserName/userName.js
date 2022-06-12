import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { URL } from "../../config"

const UserName = (props) => {
    const { order, role } = props
    const [user, setUser] = useState([])
    const [employee, setEmployee] = useState([])


    const getUser = () => {
        const url = `${URL}/admin/getuser/${order.userId}`
        axios.get(url).then((response) => {
            const result = response.data
            // console.log(result.data);
            if (result['status'] == 'success') {
                setUser(result['data'])
            } else {
                toast.error(result['error'])
            }
        })
    }

    const getEmployee = () => {
        if (order.employeeId > 0) {
            const url = `${URL}/admin/getuser/${order.employeeId}`
            axios.get(url).then((response) => {
                const result = response.data
                // console.log(result.data);
                if (result['status'] == 'success') {
                    setEmployee(result['data'])
                } else {
                    toast.error(result['error'])
                }
            })
        }
    }

    useEffect(() => {
        getEmployee()
        getUser()
    }, [])
    return <div>
        {role > 0 &&
            <div>{user.firstName} {user.lastName}</div>
        }
        {role == 0 &&
            <div>{employee.firstName} {employee.lastName}</div>
        }
    </div>
}

export default UserName