import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ groups, setGroupEvent, vendors, setVendorEvent, addGroup, group, addVendor, regions }) => {
    const [naw, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [regs, setRegion] = useState([])
    const [gro, setGro] = useState('')



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
                                        <a href="#add-group" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#group">
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
                                        <a href="#add-vendor" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#vendor">
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
            <div class="modal fade" id="group" tabindex="-1" aria-labelledby="group" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="group">زیادکردنی گرۆپ</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form action="">
                                <label for="name" className="form-label">ناو</label>
                                <input type="text" id="name" className="form-control" aria-describedby="name" value={naw} onChange={(e) => setName(e.target.value)} />
                                <label for="phone" className="form-label">ژ.موبایل</label>
                                <input type="text" id="phone" className="form-control" aria-describedby="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">داخستن</button>
                            <button type="button" class="btn btn-primary" onClick={() => addGroup({
                                "name": naw,
                                "phone": phone
                            })}>خەزن</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="vendor" tabindex="-1" aria-labelledby="vendor" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="vendor">زیادکردنی مەندووب</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form action="">
                                <label for="name" className="form-label">ناو</label>
                                <input type="text" id="name" className="form-control" aria-describedby="name" value={naw} onChange={(e) => setName(e.target.value)} />
                                <label for="phone" className="form-label">ژ.موبایل</label>
                                <input type="text" id="phone" className="form-control" aria-describedby="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                <select multiple={true}  class="form-select"  aria-label="multiple select example" name="regions" value={regs} onChange={(event) => setRegion(Array.from(event.target.selectedOptions, (item) => item.value))} >
                                    {regions ? regions.map((region,index) => (
                                        <option key={index} value={region.id} >{region.name}</option>
                                    )) : <></>}
                                </select>
                                <select class="form-select"  name="group" >
                                    <option value="" selected={true}>گروپەکان</option>
                                    {groups ? groups.map((g,index) => (
                                        <option key={index} value={gro} onClick={()=>setGro(g.id)}>{g.name}</option>
                                    )) : <></>}
                                </select>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">داخستن</button>
                            <button type="button" class="btn btn-primary" onClick={() => addVendor({
                                "name": naw,
                                "phone": phone,
                                "group": gro,
                                "regions": regs
                            })}>خەزن</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
