import { Link } from "react-router-dom"
const Home = () => (
    <div>
        <h1>This Home Page</h1>
        <ul>
            <li><Link to='/signin'>Signin</Link></li>
            <li> <Link to='/signup'>Signup</Link></li>
        </ul>
    </div>
)

export default Home