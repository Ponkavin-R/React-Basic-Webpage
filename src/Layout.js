import React from 'react'
import './Layout.css'
import { Outlet, Link } from 'react-router-dom'
export default function Layout() {
    return (
        <div>
            <nav>
                <ul type="none">
                    <li>
                        <Link className="menu" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="menu" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="menu" to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav >
            <Outlet />
        </div >
    )
}
