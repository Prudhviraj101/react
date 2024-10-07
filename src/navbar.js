import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link , useNavigate} from 'react-router-dom';

export default function Navbar() {
    const usenav = useNavigate();
   
   var dat=localStorage.getItem("fisrt");
   var nam=localStorage.getItem("last");
   
   const res=()=>{
    localStorage.clear();
    usenav('/')
   }


    return (
        
        <>
            <input type="checkbox" id="check" />
            <label for="check" id="lab">
              
                <img id="btn1" src="https://cdn-icons-png.flaticon.com/512/4378/4378745.png" alt="" height="60px" width="60px" ></img>
                <i class="bi bi-x-octagon-fill" id="canc"></i>
            </label>
            <div className='slidebar'>
                <header>
                    <img src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" alt="" height="80px" width="80px" style={{ borderRadius: '50%',marginBottom:'-20px',marginLeft:'20px' }}></img><br />
                   {localStorage.getItem('fisrt')==null ? <span style={{ fontSize: '16px', fontWeight: 'bold', margin: '0 0 0 25px' }} height="100px" id="um">Campus Management</span>:''} 
                   {localStorage.getItem('fisrt')!==null ?<span style={{ fontSize: '16px', fontWeight: 'bold', margin: '0 0 0 25px' }} height="100px" id="um">
                        <b>{dat+' '+nam}</b></span>:''}
                </header>
                <ul>
              
                    <li><Link to="/"><i class="bi bi-house-fill"></i>Home</Link></li>

                    <li><Link to="practice"><i class="bi bi-house-fill"></i>Practice</Link></li>

                    
                    {localStorage.getItem('fisrt')==null ? <li><Link to="register"><i class="bi bi-person-lines-fill"></i>Register</Link></li>:''}

                  
                    {localStorage.getItem('fisrt')==null ? <li><Link to="login"><i class="bi bi-r-circle-fill"></i>Login</Link></li>:''}

                    
                     <li><Link to="practice"><i class="bi bi-door-open-fill"></i>Contact</Link></li>

                    <li><Link to=""><i class="bi bi-ticket-detailed-fill"></i>About</Link></li> 

                    

                    {localStorage.getItem('fisrt')!==null ? <li onClick={res}><Link to=""><h5 id="logout"><i class="bi bi-door-closed-fill"></i>Logout</h5></Link></li>:''}

                    {/*<li><h5 id="greets">Welcome {localStorage.getItem('username')} </h5></li> */}



                </ul>
            </div>
            <section></section>
        </>
    )
}