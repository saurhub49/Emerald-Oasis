import axios from "axios"
import { useEffect } from "react"

const Demo=()=>{

    const function1=()=>{
        const url =`http://localhost:8081/user/fooditems/2`

        axios.get(url).then((response)=>{
            console.log(response)
        })
    }

    useEffect(() => {
        function1()
      }, [])
    return <div>
        <h1>Hello Customer</h1>
    </div>
}

export default Demo