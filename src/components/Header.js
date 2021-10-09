import { faBoxes, faBuilding, faCartArrowDown, faCartPlus, faCoffee, faHome, faMehBlank, faPeopleArrows, faPeopleCarry, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NewBuy from './modals/NewBuy'
import NewCat from './modals/NewCat'
import NewGroup from './modals/NewGroup'
import NewItem from './modals/NewItem'
import NewLocal from './modals/NewLocal'
import NewOrder from './modals/NewOrder'
import NewPay from './modals/NewPay'
import NewReg from './modals/NewReg'
import NewSell from './modals/NewSell'
import NewTrade from './modals/NewTrade'
import NewVendor from './modals/NewVendor'

const Header = ({ addBuy, addpay, addTrade, group, searchTrader, addOrder, groups, setGroupEvent, vendors, addLocal, setVendorEvent, addGroup, addRegion, addVendor, regions, addCat, cats, traders, itemPost, vendor, locals, addForm, search }) => {

    return (
        <div className="d-print-none " >
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid fs-3">
                    <a className="navbar-brand fs-1" href="#">زەندەر</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active " aria-current="page" to="/">ماڵەوە 
                                    <FontAwesomeIcon icon={faHome} /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/traders">کۆمپانیاکان 
                                <FontAwesomeIcon icon={faBuilding} /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/items">مەوادەکان 
                                <FontAwesomeIcon icon={faBoxes} /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/locals">
                                کڕیارەکان <FontAwesomeIcon icon={faMehBlank} /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/order">مەوادی هاتوو</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/forms" >داواکاریەکان</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/payments" >پارەوەرگرتن</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/pending" >دەرچوون لە کۆگا</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/report" >راپۆرت</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    لقەکان
                                </a>
                                <ul className="dropdown-menu list" aria-labelledby="navbarDropdownMenuLink">
                                    <li className="nav-item fs-3" onClick={() => setGroupEvent('')}><a>هەموو</a></li>
                                    {groups.map((group, index) => (
                                        <li key={index} className="nav-item fs-3">
                                            <a href={`#${group.name}`} onClick={() => setGroupEvent(group.id)} className="nav-link text-dark" >{group.name}</a>
                                        </li>
                                    ))}
                                    <li className="nav-item ">
                                        <a href="#add-group" className="btn btn-success " data-bs-toggle="modal" data-bs-target="#group">
                                        <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </li>
                                </ul>

                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    فرۆشیار
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    {vendors.map((vendor, index) => (
                                        <li key={index} className="nav-item fs-3">
                                            <a href={`#${vendor.name}`} onClick={() => setVendorEvent(vendor.id, vendor.group)} className="nav-link text-dark" >{vendor.name}</a>
                                        </li>
                                    ))}
                                    <li className="nav-item">
                                        <a href="#add-vendor" className="btn btn-success " data-bs-toggle="modal" data-bs-target="#vendor">
                                        <FontAwesomeIcon icon={faUserPlus} />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- Modal --> */}
            <div className="btn-group mb-5" role="group" aria-label="Basic example">
                <NewGroup addGroup={addGroup} />
                <NewVendor regions={regions} addVendor={addVendor} groups={groups} />
                <NewReg addRegion={addRegion} />
                <NewCat addCat={addCat} />
                {(group != "") ? <NewItem group={group} itemPost={itemPost} traders={traders} cats={cats} /> : <></>}
                {group != '' ? <NewTrade group={group} addTrade={addTrade} /> : <></>}
                <NewLocal addLocal={addLocal} regions={regions} />
                {group != '' && vendor != '' ? <NewSell locals={locals} addForm={addForm} search={search} group={group} vendor={vendor} /> : <></>}
                {group != '' ? <NewOrder searchTrader={searchTrader} group={group} traders={traders} search={search} addOrder={addOrder} /> : <></>}
                {group ? <NewPay locals={locals} addpay={addpay} group={group} /> : <></>}
                {group ? <NewBuy addBuy={addBuy, group} /> : <></>}
            </div>
        </div>
    )
}

export default Header
