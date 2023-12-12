import React, { useState } from 'react'
import './Contact.css'
import Title from '../Helper/Title'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
    const [contactDetails,setContactDetails] = useState({});
    const [loader,setLoader] = useState(false);
    const sendEmail=(e)=>{
        e.preventDefault();
        setLoader(true);
        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, contactDetails,process.env.REACT_APP_PUBLIC_KEY)
          .then(function(response) {
            if(response.text === "OK"){toast.success("Email Sent Successfully.");setLoader(false)};
          }, function(error) {
            console.log(error);
            toast.warn(error.message);
            setLoader(false);
          });
    }
  return (
    <div id="Contact" className="container">
        <Title title={'Contact'} index={7}/>
        <div className="box">
            <div className="left">
                <div className="outer">
                    <div className="inner">
                        {
                            (loader)?'':
                            <img className='img' src={require('../../Assets/animeMe.png')} alt="" />
                        }
                    </div>
                </div>
            </div>
            {
                (loader)?'':
                <div className="right">
                    <h3>Send Me an email</h3>
                    <form onSubmit={(e)=>sendEmail(e)}>
                        <input onChange={(e)=>setContactDetails({...contactDetails,from_name:e.target.value})} type="text" placeholder='Enter your name' required />
                        <input onChange={(e)=>setContactDetails({...contactDetails,from_email:e.target.value})} type="email" placeholder='Enter your email' required/>
                        <textarea onChange={(e)=>setContactDetails({...contactDetails,message:e.target.value})} required placeholder='Enter your message'></textarea>
                        <input type="submit" value="Send Email" />
                    </form>
                </div>
            }
        </div>
    </div>
  )
}

export default Contact