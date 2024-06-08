import * as Icon1 from 'react-icons/bi'
import * as Icon2 from 'react-icons/bs'
import * as Icon3 from 'react-icons/ci'
import * as Icon4 from 'react-icons/fa'
import * as Icon5 from 'react-icons/fi'
import logo from "../Images/Logo/logo.png";
import style from '../styles/Contact.module.css'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image';
export default function Contact (){
    const [name , setName] =useState('')
    const [email , setEmail] =useState('')
    const [subject , setSubject] =useState('')
    const [message , setMessage] =useState('')
    const [validName , setValidName] =useState()
    const [validMail , setValidMail] =useState()
    const [validSubject , setValidSubject] =useState()
    const [validMessage , setValidMessage] =useState()
    const [validSubmit , setValidSubmit] =useState()


    const [loading, setLoading] = useState(false);


    const ContactData =[
        {
            id : 1,
            title : 'Mail',
            line : 'mohammedmagdy6522@gmail.com',
            icon : <Icon1.BiMessageSquareDots/>,
        },
        {
            id : 2,
            title : 'Contact',
            line : '01117125043',
            icon : <Icon2.BsTelephone/>,
        },
        {
            id : 3,
            title : 'Location',
            line : 'Cairo, Egypt',
            icon : <Icon3.CiLocationOn/>,
        }
    ]
    const socialData = [
        {
            id : 1,
            link:'https://www.instagram.com/migzzawy/',
            icon: <Icon2.BsInstagram/>,
        },
        {
            id:2,
            link:'https://www.linkedin.com/in/mohamed-magdy-0a305924a/',
            icon:<Icon4.FaLinkedinIn/>,
        },
        {
            id:3,
            link:'https://github.com/MohamedMagdy63',
            icon:<Icon5.FiGithub/>,
        }
    ]
    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true);
        name === '' ? setValidName(true) : setValidName(false)
        email === '' ? setValidMail(true) : setValidMail(false)
        subject === '' ? setValidSubject(true) : setValidSubject(false)
        message === '' ? setValidMessage(true) : setValidMessage(false )
        validMail || validName || validMessage || validSubject ===true ? setValidSubmit(true) : setValidSubmit(false)
        const data = {
            name,
			email,
            subject,
			message,
        }
        console.log(data)
        const response = await fetch("/api/form", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
        if (response.ok) {
			console.log("Message sent successfully");
			setLoading(false);
			// reset the form
			event.target.name.value = "";
			event.target.email.value = "";
            event.target.subject.value = "";
			event.target.message.value = "";
		}
		if (!response.ok) {
			console.log("Error sending message");
			setLoading(false);
		}
      }
      
    return(
        <div className={style.container}>
            <div className={style.infoBox}>
                <p className={style.mainTitle}>Contact Info</p>
                {
                    ContactData.map((item , index) => (
                        <div className={style.dataBox} key={item.id}>
                            <div className={style.left}>
                                <div className={style.icon}>{item.icon}</div>
                            </div>
                            <div className={style.right}>
                                <p className={style.line}>{item.title}</p>
                                <p className={style.data}>{item.line}</p>
                            </div>
                        </div>
                    ))
                }
                <br></br>
                <br></br>
                <p className={style.mainTitle}>Social Info</p>
                <div className={style.socialData}>
                    {
                        socialData.map((item,index)=>(
                            <div className={style.iconBox} key={item.id}>
                                <Link href={item.link} target='_blank' className={style.linkIcon}>{item.icon}</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={style.mailBox}>
                <p>Let's work <span>together.</span></p>
                <form className={style.formBox}  onSubmit={handleSubmit}>
                    <input placeholder='Name *'  id='name' className={`${style.commonStyle}`} onChange={(e)=>{setName(e.target.value)}} required type='text'></input>
                    {
                        validName === true ? <p className={style.error}>please fill this field</p> : ''
                    }
                    <br></br>
                    <input placeholder='Email *' id='email' className={`${style.commonStyle}`} onChange={(e)=>{setEmail(e.target.value)}}></input>
                    {
                        validMail === true ? <p className={style.error}>please fill this field</p> : ''
                    }
                    <br></br>
                    <input placeholder='Your Subject *' id='subject' className={`${style.commonStyle}`} onChange={(e)=>{setSubject(e.target.value)}}></input>
                    {
                        validSubject === true ? <p className={style.error}>please fill this field</p> : ''
                    }
                    <br></br>
                    <textarea placeholder='Your Message *'
                    rows={4}
					required
					minLength={10}
					maxLength={500}
                    id='message'
                    className={`${style.data } 
                    ${style.commonStyle}`} 
                    onChange={(e)=>{setMessage(e.target.value)}}
                    ></textarea>
                    {
                        validMessage === true ? <p className={style.error}>please fill this field</p> : ''
                    }
                    <button className={`${style.buttonBox }  ${style.commonStyle}`} type="submit" onClick={handleSubmit}>Submit</button>
                    {
                        validMail || validName || validMessage || validSubject ===true ?
                        <p className={style.errorMassage}>One or more fields have an error. Please check it</p> : ''
                    }
                </form>
            </div>
        </div>
    )
}