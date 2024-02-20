import { useNavigate } from "react-router-dom"

import { logout } from "../../utils"


const HomePage = () => {

    const navigate = useNavigate()

    const logOut = (e) => {
        e.preventDefault()
        logout()
        navigate('/login')
    }

    return (
        
        <>
            <button onClick={logOut}>Log out</button>
        </>
    )
    
}


export default HomePage