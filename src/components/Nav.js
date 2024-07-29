import React  from 'react';
import { Link,useNavigate} from 'react-router-dom';

const Nav = () => {
    const auth=localStorage.getItem('user');
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/signup');
    }
    return (
        <div>
            <img alt='logo' className='logo' src='https://capstoneguide.com/wp-content/uploads/2020/07/Pet-Care-Management-System.png'/>
            {
                auth?<ul className="nav-ul">
                <li><Link to="/">Pets</Link></li>
                <li><Link to="/add">Add Pets</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
                </ul>
                :
                <ul className="nav-ul nav-right">
                <li><Link to="/signup">Sign up</Link></li>
                <li><Link to="/login">Login</Link></li>
                </ul>
                
            }
        </div>
    );
}

export default Nav;