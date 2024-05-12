import React from 'react'
import './FallbackPage.scss'
import { useNavigate } from 'react-router-dom'


const FallbackPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/home`)
    }

    return (
        <div className='outer-container'>
            <div className='inner-container'>
                <h1 className='font-outfit not-found'>Error 404</h1>
                <h3 className='font-outfit text-2xl text-[#66728a] mb-1'>Looks like you're lost</h3>
                <h5 className='font-outfit text-lg text-[#66728a] mb-4'>The page you are looking for is not available!</h5>
                <button className='dashboard-button font-outfit' onClick={handleClick}>Go to Home</button>
            </div>
        </div>
    )
}

export default FallbackPage;