import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import googleIcon from "../public/svg/googleIcon.svg";
import githubIcon from "../public/svg/githubIcon.svg";
import eyeOpen from "../public/svg/eyeOpen.svg";
import eyeClose from "../public/svg/eyeClose.svg";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState('password');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    if (!showPassword) setPasswordType('text');
    else setPasswordType('password');
  };

  const handleSignUp = () => {
    navigate('/signup');
  }

  return (
    <div className='flex flex-col justify-center items-center h-[100vh]'>

      <h2 className='font-[700] text-[22px]'>
        Sign in to your account
      </h2>

      <div className='mt-7 bg-[#FFF] rounded-[10px] shadow-one p-[50px] max-w-[480px]'>
        <div className='mt-1'>
          <label htmlFor="email" className='label-one'>Email address</label>
          <input className='input-one' id="email" type="text" />
        </div>

        <div className='mt-5'>
          <label htmlFor="password" className='label-one'>Password</label>
          <div className='relative'>
            <input className='input-one'
              style={{ paddingRight: "35px" }}
              id="password" type={passwordType} />

            <img src={eyeClose} alt=""
              className={`${!showPassword ? 'block' : 'hidden'} cursor-pointer w-[18px] h-[18px] absolute right-[10px] top-[50%] translate-y-[-50%]`}
              onClick={togglePasswordVisibility} />
            <img src={eyeOpen} alt=""
              className={`${showPassword ? 'block' : 'hidden'} cursor-pointer w-[18px] h-[18px] absolute right-[10px] top-[50%] translate-y-[-50%]`}
              onClick={togglePasswordVisibility} />
          </div>
        </div>

        <div className='flex justify-between items-center w-full mt-5'>
          <div className='flex items-center gap-[5px]'>
            <input type="checkbox" id="remember_me" className='checkbox' />
            <label htmlFor="remember_me" className='label-one'>Remember me</label>
          </div>

          <p className='font-[500] text-[14px] text-[#4f46e5] cursor-pointer hover:text-[#4e46e5d9]'>
            Forgot password?
          </p>
        </div>

        <button className='button-one mt-5'>
          Sign In
        </button>


        <div className='mt-10 w-full relative'>
          <div className='border border-top border-[0.5px]'></div>
          <p className='label-one absolute top-[-11px] bg-[#FFF] px-[10px] left-[50%] translate-x-[-50%]'>
            Or continue with
          </p>
        </div>

        <div className='flex justify-center items-center w-full mt-7 gap-[15px]'>
          <button className='button-two w-[50%] flex justify-center items-center gap-[10px]'>
            <img src={googleIcon} alt="" className='w-[18px] h-[18px]' />
            Google
          </button>

          <button className='button-two w-[50%] flex justify-center items-center gap-[10px]'>
            <img src={githubIcon} alt="" className='w-[18px] h-[18px]' />
            GitHub
          </button>
        </div>
      </div>

      <p className='mt-5 text-[14px] text-[#7b8895]'>
        Not a member?{" "}
        <span className='font-[500] text-[#4f46e5] cursor-pointer'
          onClick={handleSignUp}
        >
          Sign Up
        </span>
      </p>
    </div>
  )
}

export default Login;