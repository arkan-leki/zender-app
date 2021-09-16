import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ groups,setGroupEvent ,vendors ,setVendorEvent }) => {
    return (
        <div className="d-print-none">
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">زەندەر</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">ماوڵەوە</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/order">مەوادی هاتوو</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/forms" >داواکاریەکان</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    لقەکان
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li class="nav-item" onClick={()=>setGroupEvent('')}><a>هەموو</a></li>
                                    {groups.map((group,index) => (
                                        <li key={index} class="nav-item">
                                            <a href={`#${group.name}`} onClick={()=>setGroupEvent(group.id)} class="nav-link text-dark" >{group.name}</a>
                                        </li>
                                    ))}
                                </ul>
                                
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    فرۆشیار
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    {vendors.map((vendor,index) => (
                                        <li key={index} class="nav-item">
                                            <a href={`#${vendor.name}`} onClick={()=>setVendorEvent(vendor.id,vendor.group)} class="nav-link text-dark" >{vendor.name}</a>
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
