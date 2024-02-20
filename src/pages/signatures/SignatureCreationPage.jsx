import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { backend_server_url } from "../../config"
import { logout } from "../../utils"


const SignatureCreationPage = () => {

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
                } catch (error) {
                    console.error(`Error making axios request: ${error.response.data.message}`)
                    logout()
                    navigate('/login')
                }
            }
            
            makeRequest()
        }

    }, [])

    const [unique_name, setUniqueName] = useState('')
    const [sender_full_name, setSenderFullName] = useState('')
    const [sender_short_name, setSenderShortName] = useState('')
    const [sender_designation, setSenderDesignation] = useState('')
    const [sender_phone, setSenderPhone] = useState('')
    const [sender_email, setSenderEmail] = useState('')
    const [sender_company_website, setSenderCompanyWebsite] = useState('')
    const [sender_picture, setSenderPicture] = useState('')
    const [sender_company_name, setSenderCompanyName] = useState('')

    const handlePictureChange = (e) => {
        const file = e.target.files[0]

        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setSenderPicture(reader.result)
            }   
            reader.readAsDataURL(file)
        }
    }

    const create = async (e) => {

        e.preventDefault()

        const data = {
            unique_name,
            sender_full_name,
            sender_short_name,
            sender_designation,
            sender_phone,
            sender_email,
            sender_company_website,
            sender_picture: sender_picture.split(',')[1],
            sender_company_name
        }
        const token = localStorage.getItem('token')
        const headers = {
            'Authorization': 'Bearer ' + token
        }

        try {
            const response = await axios.post(`${backend_server_url}/signatures/new`, data, { headers })
            const message = response.data.message
            console.log(message)
            navigate('/signatures/' + unique_name)
        } catch (error) {
            console.error(`Error making axios request: ${error.response.data.message}`)
        }
        
    }

    return (
        <>
            Signature creation page
            <hr />
            <form >

                <div>
                    <label>Unique name: </label>
                    <input type='text' value={unique_name} onChange={e => setUniqueName(e.target.value)} />
                </div>

                <div>
                    <label>Full name: </label>
                    <input type='text' value={sender_full_name} onChange={e => setSenderFullName(e.target.value)} />
                </div>

                <div>
                    <label>Short name: </label>
                    <input type='text' value={sender_short_name} onChange={e => setSenderShortName(e.target.value)} />
                </div>

                <div>
                    <label>Designation: </label>
                    <input type='text' value={sender_designation} onChange={e => setSenderDesignation(e.target.value)} />
                </div>

                <div>
                    <label>Phone: </label>
                    <input type='text' value={sender_phone} onChange={e => setSenderPhone(e.target.value)} />
                </div>

                <div>
                    <label>Email: </label>
                    <input type='email' value={sender_email} onChange={e => setSenderEmail(e.target.value)} />
                </div>

                <div>
                    <label>Company website: </label>
                    <input type='text' value={sender_company_website} onChange={e => setSenderCompanyWebsite(e.target.value)} />
                </div>

                <div>
                    <label>Company name: </label>
                    <input type='text' value={sender_company_name} onChange={e => setSenderCompanyName(e.target.value)} />
                </div>

                <div>
                    <label>Image </label>
                    <input type='file' accept="image/*" onChange={handlePictureChange} />
                </div>

                <div>
                    <button onClick={create}>Create new</button>
                </div>

                {sender_picture && (
                    <div>
                        <img
                            src={sender_picture}
                            alt='Selected'
                        />
                    </div>
                )}
                
            </form>
        </>
    )
    
}


export default SignatureCreationPage