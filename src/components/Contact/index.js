// import React from 'react'
import "./style.scss"
// import TextField from '@mui/material/TextField';
// import OpenSourceIcon from "../../assets/icons/open-source.png"
// import Contactimg from "../../assets/icons/inbox.png"
// import TextareaAutosize from '@mui/material/TextareaAutosize';
// import SendIcon from '@mui/icons-material/Send';
// import LoadingButton from '@mui/lab/LoadingButton';
// import { makeStyles } from '@mui/styles';
// import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
// import emailjs from '@emailjs/browser';
// import { FormControl } from '@mui/material';
import useState from 'react-hook-use-state';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast('Message Sent!');
const styles = {
    root: {
        // width:"20%",
        border: 0,
        borderRadius: 3,
        spacing: 8,
    },
};
const Contact = (props) => {
    const form = useRef(null);
    const [count, setCount] = useState('');
    const { classes } = props;
    // toast.success('Message Sent!', {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    // });

    // const theme = {
    //     spacing: [0, 2, 3, 5, 8],
    // }
    //   const classes = use

    // Styles();
    const sendEmail = (e) => {
        console.log(e, form.current)
        e.preventDefault();
        emailjs.sendForm('service_z7mv24b', 'template_qp4wgd7', form.current, 'xzxxePSCHCGlSl1xh')
            .then((result) => {
                console.log(result.text);
                notify()
                nameForm.current.value = "";
                emailForm.current.value = "";
                messageForm.current.value = "";
            }, (error) => {
                console.log(error.text);
            });
    };
    const nameForm = useRef()
    const emailForm = useRef()
    const messageForm = useRef()
    const formhandler = () => {
        console.log(nameForm.current, emailForm.current, messageForm.current)
        if (nameForm.current.value.length === 0 || emailForm.current.value.length === 0 || messageForm.current.value.length === 0) {
            const notify = () => toast('error!');
        }
    }
    function textareaHandler(e) {
        if (e.length <= 300) {
            setCount(e);
        }
    }
    //      const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('Gmail', 'template_eq48oax', e.current, 'see.rohit525@gmail.com')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //   };
    return (

        <form id="contact" ref={form} onSubmit={sendEmail}  >
            <div className="contact-us">
                <h1>How can we help</h1>
                <div className="personal">
                    <div className="firstname">
                        <h2>Name</h2>
                        <input ref={nameForm} required type="name" name="name" />
                    </div>
                    {/* <div className="lastname">
                    <h2>Last Name</h2>
                    <input />
                </div> */}
                </div>
                <div className="email">
                    <h2>Email</h2>
                    <input ref={emailForm} required type="email" name="email" />
                </div>
                <div className="textarea">
                    <p>Breifly describe how we can help.</p>
                    <textarea ref={messageForm} required name="message"
                        value={count}
                        onChange={(e) => textareaHandler(e.target.value)}
                    />

                    {count.length > 0 ? (
                        <span> {count.length} of 1300 max Character</span>
                    ) : null}
                </div>

                {/* <div className="checkbox">
                <input type="checkbox" />
                <span>
                    Yes, please sign me up for EOSIO developer information, event
                    information, newsletters, and general EOSIO marketing materials
                    (optional)
                </span>
            </div> */}

                {/* <h3>
                By clicking the submit button, you agree to our{' '}
                <a href="#">terms of use and privacy</a> terms of use and{' '}
                <a href="#">
                    privacy policy
                </a>
            </h3> */}

                <button onClick={formhandler} >
                    <span>Submit</span>
                    <div class="liquid"></div>
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />


                </button>

            </div>




        </form>
    );
}

// Contact.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Contact)