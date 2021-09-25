import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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

const Header = ({ addpay, addTrade, group , searchTrader, addOrder, groups, setGroupEvent, vendors, addLocal, setVendorEvent, addGroup, addRegion, addVendor, regions, addCat, cats, traders, itemPost , vendor, locals, addForm, search }) => {

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
                                <Link className="nav-link active" aria-current="page" to="/">ماڵەوە</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/traders">کۆمپانیاکان</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/items">مەوادەکان</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/locals">کڕیارەکان</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/order">مەوادی هاتوو</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/forms" >داواکاریەکان</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/payments" >پارەوەرگرتن</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/pending" >دەرچوون لە کۆگا</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    لقەکان
                                </a>
                                <ul className="dropdown-menu list" aria-labelledby="navbarDropdownMenuLink">
                                    <li className="nav-item" onClick={() => setGroupEvent('')}><a>هەموو</a></li>
                                    {groups.map((group, index) => (
                                        <li key={index} className="nav-item">
                                            <a href={`#${group.name}`} onClick={() => setGroupEvent(group.id)} className="nav-link text-dark" >{group.name}</a>
                                        </li>
                                    ))}
                                    <li className="nav-item">
                                        <a href="#add-group" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#group">
                                            +
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
                                        <li key={index} className="nav-item">
                                            <a href={`#${vendor.name}`} onClick={() => setVendorEvent(vendor.id, vendor.group)} className="nav-link text-dark" >{vendor.name}</a>
                                        </li>
                                    ))}
                                    <li className="nav-item">
                                        <a href="#add-vendor" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#vendor">
                                            +
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
                <NewLocal addLocal={addLocal} regions={regions} />
                {group != '' ? <NewTrade group={group} addTrade={addTrade} /> : <></>}
                {group != '' && vendor != '' ? <NewSell locals={locals} addForm={addForm} search={search} group={group} vendor={vendor} /> : <></>}
                {group != '' ? <NewOrder searchTrader={searchTrader} group={group} traders={traders} search={search} addOrder={addOrder} /> : <></>}
                {group ? <NewPay addpay={addpay , group} /> : <></>}
            </div>
        </div>
    )
}

export default Header
