import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/authService'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      const res = await login(form)
      const token = res.data.token
      localStorage.setItem('edupath_token', token)
      navigate('/')
    } catch (err) {
      setError(err.response?.data?.message || err.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form className="w-full max-w-md bg-white p-6 rounded shadow" onSubmit={onSubmit}>
        <h2 className="text-xl font-bold mb-4">Login</h2>
        {error && <div className="text-red-600 mb-2">{error}</div>}
        <input name="email" placeholder="Email" value={form.email} onChange={onChange} className="w-full mb-2 p-2 border" />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={onChange} className="w-full mb-4 p-2 border" />
        <button className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
    </div>
  )
}
