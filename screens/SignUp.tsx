import React from 'react'
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc"
import { FaFacebookF } from "react-icons/fa"
import { FaApple } from "react-icons/fa"

const SignUp = () => {
    return (
        <>
            <div className='login--container'>
                <div className='login--content'>
                    <div className='form--logo'>
                        <Link href="/">
                            <h1 className="text-primary">World<span className="text-secondary">Beat</span></h1>
                            <p className='login--paragraph'>Please enter your details to signin</p>
                        </Link>
                        <div className='login--icons'>
                            <span><FcGoogle /></span>
                            <span><FaFacebookF className='facebook--icon' /></span>
                            <span><FaApple className='apple--icon' /></span>
                        </div>
                    </div>
                    <div className='divider'>
                        <span className='left--line'></span>
                        <span className='mid--content'>OR</span>
                        <span className='right--line'></span>
                    </div>
                    <div className='login--form'>
                        <div className="login--input">
                            <label>Enter your username</label>
                            <input 
                                type="text" 
                                name="name"
                                className='form-control'
                                placeholder="John Doe" 
                            />
                        </div>
                       <div className="login--input">
                            <label>Enter your email address</label>
                            <input 
                                type="text" 
                                name="name"
                                className='form-control'
                                placeholder="example@gmail.com" 
                            />
                        </div>
                        <div className="login--input">
                            <label>Enter your password</label>
                            <input 
                                type="password" 
                                name="name"
                                className='form-control'
                                placeholder="***********" 
                            />
                        </div>
                        <button className='bg-primary login--btn'>Submit</button>
                    </div>
                    <div className='signin--container'>
                        <p>
                            Do you have an account?
                        </p>
                        <Link href="/login">Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp