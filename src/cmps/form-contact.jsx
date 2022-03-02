import React from 'react'
import { useForm } from '../hooks/useForm'

export function FormContact() {
    const [form, handleChange, setForm] = useForm(
        { name: '', emailAddress: '', companyName: '', title: '', message: '' }
    )
    return (
        <section className='form-contact'>
            <form className='form '>
                <input onChange={handleChange} value={form.name} type='text' name='name' id='name' placeholder='Name'></input>
                <input onChange={handleChange} value={form.emailAddress} type='email' name='emailAddress' id='emailAddress' placeholder='Email Address'></input>
                <input onChange={handleChange} value={form.companyName} type='text' name='companyName' id='companyName' placeholder='Company Name'></input>
                <input onChange={handleChange} value={form.title} type='text' name='title' id='title' placeholder='Title'></input>
                <textarea onChange={handleChange} value={form.message} type='text' name='message' id='message' placeholder='Message'></textarea>
                <button type='submit'>submit</button>
            </form>
        </section>
    )
}
