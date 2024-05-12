import { useNavigate } from 'react-router-dom';
import googleIcon from "../public/svg/googleIcon.svg";
import githubIcon from "../public/svg/githubIcon.svg";

const SignUp = () => {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate('/');
  }


  return (
    <div className='flex flex-col justify-center items-center h-[100vh]'>

    <h2 className='font-[700] text-[22px]'>
      Sign up to your account
    </h2>

    <div className='mt-7 bg-[#FFF] rounded-[10px] shadow-one p-[50px] max-w-[480px]'>
      <div className='mt-1'>
        <label htmlFor="full_name" className='label-one'>Full name</label>
        <input className='input-one' id="full_name" type="text" />
      </div>

      <div className='mt-3'>
        <label htmlFor="email" className='label-one'>Email address</label>
        <input className='input-one' id="email" type="text" />
      </div>

      <div className='mt-3'>
        <label htmlFor="phone" className='label-one'>Phone number</label>
        <input className='input-one' id="phone" type="text" />
      </div>

      <div className='mt-3'>
        <label htmlFor="password" className='label-one'>Password</label>
        <input className='input-one' id="password" type="password" />
      </div>

      <div className='mt-3'>
        <label htmlFor="confirm_password" className='label-one'>Confirm password</label>
        <input className='input-one' id="confirm_password" type="text" />
      </div>

      <button className='button-one mt-8'>
        Sign Up
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
      Already a member?{" "}
      <span className='font-[500] text-[#4f46e5] cursor-pointer'
        onClick={handleLogIn}
      >
        Sign In
      </span>
    </p>
  </div>
  )
}

export default SignUp;