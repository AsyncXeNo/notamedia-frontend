import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { backend_server_url } from "../../config"
import { logout } from "../../utils"


const SignatureManagementPage = () => {

    const navigate = useNavigate()

    useEffect(() => {

        if (!localStorage.getItem('token')) {
            navigate('/login')
        }

        if (localStorage.getItem('token')) {
            
            const token = localStorage.getItem('token')
            const headers = {
                'Authorization': 'Bearer ' + token
            }

            const makeRequest = async () => {
                try {
                    const response = await axios.get(`${backend_server_url}/users/me`, { headers })
                    const payload = response.data.payload
                    localStorage.setItem('name', payload.name)
                    if (payload.user_type > 2) {
                        navigate('/')
                    }

                    try {
                        const signatures = (await axios.get(`${backend_server_url}/signatures`, { headers })).data.payload
                        setSignatures(signatures)
                        console.log(signatures)
                    } catch (error) {
                        console.error(`Error while fetching users: ${error.response.data.message}`)
                    }
                    
                } catch (error) {
                    console.error(`Error making axios request: ${error.response.data.message}`)
                    logout()
                    navigate('/login')
                }
            }
            
            makeRequest()
        }

    }, [])

    const [signatures, setSignatures] = useState([])

    return (
        <>
            Signature management
            {signatures.map((signature) => (
                <>  
                    <hr />
                    <h3>
                        {signature.unique_name}
                    </h3>
                </>
            ))}
        </>
    )
    
}


export default SignatureManagementPage