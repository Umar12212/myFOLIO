import React, { useState } from "react";
import axios from "axios";
import './SendForm.scss'

const TOKEN = '7065106802:AAGppyCDa17_2l5JzTW1nmZu6qv0IiCCTtc';
const CHAT_ID = '-1002125591900';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const SendMessage = () => {
    const [form, setForm] = useState({
        userName: "",
        lastName: "",
        number: "",
        email: "",
        content: ""
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            const message = `Заявка с сайта!\nИмя: ${form.userName}\nФамилия: ${form.lastName}\nНомер телефона: ${form.number}\nПочта отправителя: ${form.email}\nСообщение: ${form.content}`;

            try {
                await axios.post(URL_API, {
                    chat_id: CHAT_ID,
                    parse_mode: 'html',
                    text: message
                });
                setSuccess(true);
                setTimeout(() => setSuccess(false), 4000);
                setForm({ userName: "", lastName: "", number: "", email: "", content: "" });
            } catch (err) {
                setError(true);
                setTimeout(() => setError(false), 4000);
            }
        }
    };

    const validateForm = () => {
        let errors = {};
        let formIsValid = true;

        if (!form.userName.trim()) {
            formIsValid = false;
        }

        if (!form.lastName.trim()) {
            formIsValid = false;
        }

        if (!form.number.trim()) {
            formIsValid = false;
        }

        if (!form.email.trim()) {
            formIsValid = false;
        }
        if (!form.content.trim()) {
            formIsValid = false;
        }
        else {
            let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!pattern.test(form.email)) {
                formIsValid = false;
            }
        }

        setErrors(errors);
        return formIsValid;
    };



    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={form.userName} onChange={handleChange} name="userName" className='about__input' placeholder='Name' />
            {errors.userName && <span >{errors.userName}</span>}
            
            <input type="text" value={form.lastName} onChange={handleChange} name='lastName' className='about__input' placeholder='LastName' />
            {errors.lastName && <span >{errors.lastName}</span>}
            
            <input type='text' value={form.number} onChange={handleChange} name='number' className='about__input' placeholder='Number' />
            {errors.number && <span >{errors.number}</span>}
            
            <input type="email" value={form.email} onChange={handleChange} name='email' className='about__input' placeholder='Email' />
            {errors.email && <span >{errors.email}</span>}
            
            <textarea  value={form.content} onChange={handleChange} name="content" className='about__input' placeholder='Content'>  </textarea>
            {errors.content && <span >{errors.content}</span>}
            {success && <h2 id='success'>Сообщение отправлено!</h2>}
            {error && <h2 id='successErr'>Ошибка при отправке сообщения!</h2>}
            
            <button className='button'>Submit</button>
        </form>
    );
};

export default SendMessage;
