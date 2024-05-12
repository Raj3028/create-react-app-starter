import React from 'react'
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/logout');
  }

  return (
    <header className='flex justify-between items-center bg-[#FFF] sticky top-0 h-[50px] px-3 shadow-one'>
      <Link to={'/home'}>
        <strong className='text-[20px] text-gradient-one'>
          Header
        </strong>
      </Link>

      <div>
        <button
          className='button-three shadow-one hover:shadow-none'
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </header>
  )
}

export default Header;