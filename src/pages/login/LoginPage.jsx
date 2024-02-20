import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { backend_server_url } from '../../config'
import { logout } from '../../utils'


const LoginPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
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
                    navigate('/')
                } catch (error) {
                    console.error(`Error making axios request: ${error.response.data.message}`)
                    logout()
                }
            }
            
            makeRequest()
        }
    }, [])

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = async (e) => {
        e.preventDefault()
        
        try {
            const data = {
                username,
                password
            }
            const response = await axios.post(`${backend_server_url}/users/login`, data)
            const payload = response.data.payload
            localStorage.setItem('name', payload.name)
            localStorage.setItem('token', payload.token)
            navigate('/')
        } catch (error) {
            console.error(`Error making axios request: ${error.response.data.message}`)
        }
        
    }

    return (
        <>
            <form>
                
                <div>
                    <label>username: </label>
                    <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
                </div>

                <div>
                    <label>password: </label>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                </div>

                <div>
                    <button onClick={login}>Login</button>
                </div>
                
            </form>
        </>
    )
    
}


export default LoginPage