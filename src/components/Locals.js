import React, { useState } from 'react'

export const Locals = ({ locals, group, addLocal, regions, addRegion }) => {
    const [naw, setName] = useState('')
    const [code, setCode] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [owner, setOwner] = useState('')
    const [exchange, setExchange] = useState('')
    const [regionID, setRegionID] = useState('')

    return (
        <><div className="mx-auto" style={{
            width: 100 + '%'
        }} >
            <div className="d-print-none">
                <div className="container-fluid">
                    <div className="row">
                        {group !== '' ? <button className=" m-1 col-md-2  btn btn-success" data-bs-toggle="modal" data-bs-target="#newLocal">وەسڵی نوێ</button> : <></>}
                        <button className="btn btn-info col-md-2 m-1 " data-bs-toggle="modal" data-bs-target="#newRegion">زیادکردنی ناوچە</button>
                        <select className=" form-control  " aria-label="Default select example" onChange={(e) => setRegionID(e.target.value)}>
                            <option value="">ناوچەکان</option>
                            {regions ? regions.map((region) => (
                                <option key={region.id} value={region.id} >{region.name}</option>
                            )) : <></>}
                        </select>
                    </div>
                </div>
            </div>
            <div className="table-responsive-xl aling.center">
                <table className="table table-striped table-hover col-12 caption-top">
                    <caption>كریاران</caption>
                    <thead>
                        <tr>
                            <th scope="col"> زنجیرە</th>
                            <th scope="col"> فرۆشگا</th>
                            <th scope="col">کۆد</th>
                            <th scope="col">ناونیشان</th>
                            <th scope="col">ژمارەی موبایل</th>
                            <th scope="col">ناوی کڕیار</th>
                            <th scope="col">قەرزی یەکەم جار</th>
                            <th scope="col">ناوچە</th>
                            <th scope="col">کۆی کڕین</th>
                            <th scope="col">قەرز</th>
                            <th scope="col">کۆی دراو</th>
                        </tr>
                    </thead>
                    <tbody>
                        {locals.map((mob, index) => (
                            <tr key={index}>
                                <td>{mob.id}</td>
                                <td>{mob.name}</td>
                                <td>{mob.code}</td>
                                <td>{mob.address}</td>
                                <td>{mob.phone}</td>
                                <td>{mob.owner_name}</td>
                                <td>{mob.exchange}$</td>
                                <td>{mob.region}</td>
                                <td>{mob.totallSell}$</td>
                                <td>{mob.mawe}$</td>
                                <td>{mob.totallPay}$</td>
                                {/* <td>{moment(new Date(mob.date)).format("DD/MM/YYYY")}</td> */}
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>
                <div className="modal fade" id="newLocal" tabIndex="-1" aria-hidden='true'>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">فۆرمی زیادکردن</h5>
                                <button className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form >
                                    <label for="name" className="form-label">فرۆشگا</label>
                                    <input type="text" id="name" className="form-control" aria-describedby="name" value={naw} onChange={(e) => setName(e.target.value)} />
                                    <label for="code" className="form-label">کۆد</label>
                                    <input type="text" id="code" className="form-control" aria-describedby="code" value={code} onChange={(e) => setCode(e.target.value)} />
                                    <label for="address" className="form-label">ناونیشان</label>
                                    <input type="text" id="address" className="form-control" aria-describedby="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                    <label for="phone" className="form-label">ژمارەی موبایل</label>
                                    <input type="text" id="phone" className="form-control" aria-describedby="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    <label for="owner" className="form-label">خاوەنی کار</label>
                                    <input type="text" id="owner" className="form-control" aria-describedby="owner" value={owner} onChange={(e) => setOwner(e.target.value)} />
                                    <label for="loan" className="form-label">قەرزی کۆن</label>
                                    <input type="number" id="loan" className="form-control" aria-describedby="loan" value={exchange} onChange={(e) => setExchange(e.target.value)} />
                                    <button className="btn btn-info" type="button" onClick={() => addLocal(
                                        {
                                            "name": naw,
                                            "code": code,
                                            "address": address,
                                            "phone": phone,
                                            "owner_name": owner,
                                            "exchange": exchange,
                                            "region": regionID
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

            </div>
        </div></>
    )
}
