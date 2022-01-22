import { Link } from "react-router-dom"
const Home = () => (
    <div>
        <h1>This Home Page</h1>
        <ul>
            <li><Link to='/signin'>Sign in</Link></li>
            <li> <Link to='/usersignup'>Signup</Link></li>
        </ul>
    </div>
)

export default Home