import * as moment from 'moment'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'

const Sales = ({ sales, locals, search, addForm, group, vendor, filterBydate, addReSell }) => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [dana, setDana] = useState(0)
    const [items, setItems] = useState([])
    const [localID, setlocalID] = useState('')
    let summer = Object.values(sales).reduce((r, { totallint }) => r + parseFloat(totallint), 0);
    const groupsopt = locals.map((city) => ({ value: city.id, label: city.name }))


    return (
        <><div className="mx-auto" style={{
            width: 100 + '%'
        }} >
            <div className="d-print-none">
                <div className="container-fluid">
                    <div className="">
                        {group !== '' && vendor != '' ? <button className=" m-1 col-md-2  btn btn-info" data-bs-toggle="modal" data-bs-target="#newForm">وەسڵی نوێ</button> : <></>}
                        <button className=" m-1 col-md-2 btn btn-success">زیادکردنی کڕیار</button>
                        <div className="row">
                            <input className="col-md-4 m-4 " type="date" value={date} placeholder="11/01/2021" aria-label="date" onChange={(e) => setDate(e.target.value)} />
                            <button className="col-md-2 m-4 btn btn-outline-success" type="submit" onClick={() => filterBydate(date, localID)}>گەڕان</button>
                        </div>
                        {/* <select className=" form-control " aria-label="Default select example" >
                            <option value={localID} onClick={()=>setlocalID("")}>کۆمپانیا</option>
                            {locals.map((trader) => (
                                <option key={trader.id} value={localID} onClick={(e) => setlocalID(trader.id)} >{trader.name}</option>
                            ))}
                        </select> */}
                        <label for="name" className="form-label">کڕیار</label>
                        <Select defaultValue={groupsopt[1]} onChange={(e) => setlocalID(e.value)} options={groupsopt} />

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
                            <th scope="col">کۆی گەڕاوە</th>
                            <th scope="col">بەروار</th>
                            <th className="d-print-none">Action</th>
                            <th className="d-print-none">رێکەوت</th>
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
                                <td>{mob.totalback}$</td>
                                <td>{moment(new Date(mob.date)).format("DD/MM/YYYY")}</td>
                                <td className="d-print-none"><button className="btn btn-success " data-bs-toggle="modal" data-bs-target="#resell" onClick={() =>
                                    setItems(mob.sell_detail)
                                }>گەڕانەوە لەفرۆش</button></td>
                                <td className="d-print-none">{moment(new Date(mob.datetime)).format("DD/MM/YYYY HH:MM:SS")}</td>
                                <div className="modal fade" id="resell" tabIndex="-1" aria-hidden='true'>
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">گەڕانەوە لەفرۆش</h5>
                                                <button className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <form >
                                                    <table className="table table-striped">
                                                        <thead className="table-dark">
                                                            <tr>
                                                                <th scope="col">کاڵا</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {items.map((item, index) => (
                                                                <tr key={index}>
                                                                    <td scope="row">{item.item}</td>
                                                                    <td>{item.item_code}</td>
                                                                    <td>{item.price}</td>
                                                                    <td><input type="number" name="dana" id="dana" value={dana} onChange={(e) => setDana(e.target.value)} /></td>
                                                                    <td><button className="btn btn-info" type="button" onClick={() => addReSell({ "quantity": dana, "price": item.price, "sell": item.sell, "item": item.item_id })}>گەڕانەوە</button></td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <th>{summer}</th>
                    </tfoot>
                </table>
                <div className="modal fade" id="newForm" tabIndex="-1" aria-hidden='true' width={100 + "%"}>
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
