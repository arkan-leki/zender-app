import { useState } from "react/cjs/react.development"
import * as moment from 'moment'
import { Link } from 'react-router-dom'

const Sales = ({ sales, locals, search, addForm, group, vendor, filterBydate }) => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')

    return (
        <><div className="mx-auto" style={{ width: 100 + '%' 
        }} >
            <div className="d-print-none">
                <div className="container-fluid">
                    <div className="">
                        {group !== '' ? <button className=" m-1 col-md-2  btn btn-info" data-bs-toggle="modal" data-bs-target="#newForm">وەسڵی نوێ</button> : <></>}
                        <button className=" m-1 col-md-2 btn btn-success">زیادکردنی کڕیار</button>
                        <div className="row">
                            <input className="col-md-4 m-4 " type="date" value={date} placeholder="11/01/2021" aria-label="date" onChange={(e) => setDate(e.target.value)} />
                            <button className="col-md-2 m-4 btn btn-outline-success" type="submit" onClick={() => filterBydate(date)}>گەڕان</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="table-responsive-xl aling.center">
                <table className="table table-striped table-hover col-12 caption-top">
                    <caption>وەسڵەکان</caption>
                    <thead>
                        <tr>
                            <th scope="col"> وەسڵ</th>
                            <th scope="col"> فرۆشیار</th>
                            <th scope="col">ژمارەی وەسڵ</th>
                            <th scope="col">کڕیار</th>
                            <th scope="col">کۆی وەسل</th>
                            <th scope="col">کۆی داشکان</th>
                            <th scope="col">کۆتا</th>
                            <th scope="col">بەروار</th>
                            {/* <th scope="col">Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map((mob, index) => (
                            <tr key={index}>
                                <td>{mob.group_name}</td>
                                <td>{mob.vendor_name}</td>
                                <td><Link to={`/form/${mob.id}`}>{mob.id}</Link></td>
                                <td><Link to={`/form/${mob.id}`}>{mob.local_name}</Link></td>
                                <td>{mob.totall}$</td>
                                <td>{mob.discount}$</td>
                                <td>{mob.totallint}$</td>
                                <td>{moment(new Date(mob.date)).format("DD/MM/YYYY")}</td>
                                {/* <td><button className="btn btn-info">Open</button></td> */}
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>
                <div className="modal fade" id="newForm" tabIndex="-1" aria-hidden='true' width={100+"%"}>
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">کڕیارەکان</h5>
                                <button className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                            </div>
                            <div className="container">
                                <div className="d-md-flex justify-content-between align-items-center">
                                    <h5 className="mb-3 mb-md-0">گەران بۆ کڕیارەکان</h5>
                                    <div className="input-group news-input">
                                        <input id='text' type="text" className="form-control" placeholder=""
                                            aria-label="Eneter Your price" aria-describedby="button-addon2" value={text} onChange={(e) => setText(e.target.value)} />
                                        <button className="btn btn-dark" type="button" id="button-addon2" onClick={() => search(text)}>گەڕان</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-body">
                                <table className="table table-striped">
                                    <thead className="table-dark">
                                        <tr>
                                            <th scope="col">کاڵا</th>
                                            <th>ژ.موبایل</th>
                                            <th>کۆد</th>
                                            <th>ناوچە</th>
                                            <th>خاوەن</th>
                                            <th>کۆی کڕین</th>
                                            <th>وەسل</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {locals.map((people, index) => (
                                            <tr key={index}>
                                                <td scope="row">{people.name}</td>
                                                <td>{people.phone}</td>
                                                <td>{people.code}</td>
                                                <td>{people.region}</td>
                                                <td>{people.owner_name}</td>
                                                <td>{people.totallSell}</td>
                                                <td><button className="btn btn-info" type="button" onClick={() => addForm({ "vendor": vendor, "group": group, "local": people.id })}>کڕین</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
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

export default Sales
