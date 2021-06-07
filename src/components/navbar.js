import React from 'react'

const Navbar = () => {
    return (
        <nav className='rounded-md mb-8 px-8 md:px-20 lg:px-30'>
        <div className="hamburger" role="button" tabIndex={0} onClick={()=> setOpen(!open)} onKeyDown={()=> setOpen(!open)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <Link to="/">
          <img src="../images/logo.png" alt="logo" className='p-0'/> 
        </Link>
    </nav>
    )
}

export default Navbar