import React from 'react'
import { Link } from 'react-router-dom' // Add this import

const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div>
                    <Link to="/" className='navbar-brand'>
                        Expense Tracker Application
                    </Link>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent