import { useNavigate } from "react-router-dom"

import { logout } from "../../utils"

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'


const HomePage = () => {

    const navigate = useNavigate()

    const logOut = (e) => {
        e.preventDefault()
        logout()
        navigate('/login')
    }

    return (        
        <>
            <Header />
            <Navbar />
            <button onClick={logOut}>Log out</button>
            <Footer />
        </>
    )
    
}


export default HomePage