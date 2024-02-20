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
        <div className='flex flex-col min-h-screen'>
            <Header />
            <div className="flex flex-row">
                <Navbar />
            </div>
            <Footer />
        </div>
    )
    
}


export default HomePage