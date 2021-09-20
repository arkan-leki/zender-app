import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ groups, setGroupEvent, vendors, setVendorEvent, addGroup, addRegion, addVendor, regions ,addCat }) => {
    const [naw, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [regs, setRegion] = useState([])
    const [gro, setGro] = useState('')
    const [code, setCode] = useState('')


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
            <div className="modal fade" id="group" tabIndex="-1" aria-labelledby="group" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="group">زیادکردنی گرۆپ</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <label for="name" className="form-label">ناو</label>
                                <input type="text" id="name" className="form-control" aria-describedby="name" value={naw} onChange={(e) => setName(e.target.value)} />
                                <label for="phone" className="form-label">ژ.موبایل</label>
                                <input type="text" id="phone" className="form-control" aria-describedby="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">داخستن</button>
                            <button type="button" className="btn btn-primary" onClick={() => addGroup({
                                "name": naw,
                                "phone": phone
                            })}>خەزن</button>
                        </div>
                    </div>
                </div>
            </div>
            <button href="#add-group" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#group">
                زیادکردنی گروپەکان
            </button>
            <button className="btn btn-info col-md-2 m-1 " data-bs-toggle="modal" data-bs-target="#newRegion">زیادکردنی ناوچە</button>
            <div className="modal fade" id="newRegion" tabIndex="-1" aria-hidden='true'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">فۆرمی زیادکردن</h5>
                            <button className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <label for="name" className="form-label">ناونیشان</label>
                                <input type="text" id="name" className="form-control" aria-describedby="name" value={naw} onChange={(e) => setName(e.target.value)} />
                                <label for="code" className="form-label">کۆد</label>
                                <input type="text" id="code" className="form-control" aria-describedby="code" value={code} onChange={(e) => setCode(e.target.value)} />
                                <button className="btn btn-info" type="button" onClick={() => addRegion(
                                    {
                                        "name": naw,
                                        "code": code
                                    }
                                )}
                                >کڕین</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>

            <button className="btn btn-info col-md-2 m-1 " data-bs-toggle="modal" data-bs-target="#newCat">زیادکردنی جۆری کاڵا</button>
            <div className="modal fade" id="newCat" tabIndex="-1" aria-hidden='true'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">فۆرمی زیادکردن</h5>
                            <button className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <label for="name" className="form-label">ناوی جۆر</label>
                                <input type="text" id="name" className="form-control" aria-describedby="name" value={naw} onChange={(e) => setName(e.target.value)} />
                                <button className="btn btn-info" type="button" onClick={() => addCat(
                                    {
                                        "name": naw,
                                        "image": null,
                                        "deleted": false
                                    }
                                )}
                                >کڕین</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="vendor" tabIndex="-1" aria-labelledby="vendor" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="vendor">زیادکردنی مەندووب</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <label for="name" className="form-label">ناو</label>
                                <input type="text" id="name" className="form-control" aria-describedby="name" value={naw} onChange={(e) => setName(e.target.value)} />
                                <label for="phone" className="form-label">ژ.موبایل</label>
                                <input type="text" id="phone" className="form-control" aria-describedby="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                <select multiple={true} className="form-select" aria-label="multiple select example" name="regions" value={regs} onChange={(event) => setRegion(Array.from(event.target.selectedOptions, (item) => item.value))} >
                                    {regions ? regions.map((region, index) => (
                                        <option key={index} value={region.id} >{region.name}</option>
                                    )) : <></>}
                                </select>
                                <select className="form-select" name="group" >
                                    <option value="">گروپەکان</option>
                                    {groups ? groups.map((g, index) => (
                                        <option key={index} value={gro} onClick={() => setGro(g.id)}>{g.name}</option>
                                    )) : <></>}
                                </select>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">داخستن</button>
                            <button type="button" className="btn btn-primary" onClick={() => addVendor({
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
