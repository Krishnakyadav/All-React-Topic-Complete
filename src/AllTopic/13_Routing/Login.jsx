import {useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const handleLogin = ()=>{
        navigate("/contact");
    }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
