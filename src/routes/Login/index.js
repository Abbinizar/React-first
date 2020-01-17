import React from "react";
import { useHistory } from "react-router-dom"

const Login = () => {
    const history = useHistory();
    console.log('LOGIN')
    const handlelogin = () => {
        history.push("/dashboard");
    };
    return(
        <div>
            <button onClick={handlelogin}>klik</button>
        </div>
    )
}

export default Login;