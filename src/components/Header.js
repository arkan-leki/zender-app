import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ groups,setGroupEvent ,vendors ,setVendorEvent }) => {
    return (
        <div className="d-print-none">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">زەندەر</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">ماوڵەوە</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/order">مەوادی هاتوو</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/forms" >داواکاریەکان</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    لقەکان
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li className="nav-item" onClick={()=>setGroupEvent('')}><a>هەموو</a></li>
                                    {groups.map((group,index) => (
                                        <li key={index} className="nav-item">
                                            <a href={`#${group.name}`} onClick={()=>setGroupEvent(group.id)} className="nav-link text-dark" >{group.name}</a>
                                        </li>
                                    ))}
                                </ul>
                                
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    فرۆشیار
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    {vendors.map((vendor,index) => (
                                        <li key={index} className="nav-item">
                                            <a href={`#${vendor.name}`} onClick={()=>setVendorEvent(vendor.id,vendor.group)} className="nav-link text-dark" >{vendor.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
