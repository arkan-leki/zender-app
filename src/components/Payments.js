import * as moment from 'moment'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'

const Payments = ({ payments, locals, group, filterBydate, addpay }) => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [localID, setlocalID] = useState('')
    const [loan, setLoan] = useState('')
    const [income, setIncome] = useState('')
    const localsopt = locals.map((city) => ({ value: city.id, label: city.name }))

    return (
        <><div className="mx-auto" style={{
            width: 100 + '%'
        }} >
            <div className="d-print-none">
                <div className="container-fluid">
                    <div className="">
                        {group !== '' && payments != '' ? <button className=" m-1 col-md-2  btn btn-info" data-bs-toggle="modal" data-bs-target="#newForm">وەسڵی نوێ</button> : <></>}
                        <div className="row">
                            <input className="col-md-4 m-4 " type="date" value={date} placeholder="11/01/2021" aria-label="date" onChange={(e) => setDate(e.target.value)} />
                            <button className="col-md-2 m-4 btn btn-outline-success" type="submit" onClick={() => filterBydate(date, localID)}>گەڕان</button>
                        </div>
                        {/* <select className=" form-control " aria-label="Default select example" >
                            <option value={localID} onClick={() => setlocalID("")}>کڕیار</option>
                            {locals.map((trader) => (
                                <option key={trader.id} value={localID} onClick={(e) => setlocalID(trader.id)} >{trader.name}</option>
                            ))}
                        </select> */}
                        <label for="name" className="form-label">کڕیار</label>
                        <Select defaultValue={localsopt[1]} onChange={(e) => setlocalID(e.value)} options={localsopt} />
                        {group ? <td><button className="btn btn-success " data-bs-toggle="modal" data-bs-target="#pay" >پارەدان</button></td> : <></>}
                        <div className="modal fade" id="pay" tabIndex="-1" aria-hidden='true'>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">فۆرمی پارەدان</h5>
                                        <button className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form >
                                            <label for="income" className="form-label">بری پارە</label>
                                            <input type="number" id="income" className="form-control" aria-describedby="income" value={income} onChange={(e) => setIncome(e.target.value)} />
                                            <label for="loan" className="form-label">گەڕاوە </label>
                                            <input type="number" id="loan" className="form-control" aria-describedby="loan" value={loan} onChange={(e) => setLoan(e.target.value)} />
                                            <button className="btn btn-info" type="button" onClick={() => addpay(
                                                {
                                                    "group": group,
                                                    "local": localID,
                                                    "bank": null
                                                },
                                                {
                                                    "group": group,
                                                    "income": income,
                                                    "loan": loan
                                                }
                                            )}
                                            >وەرگرتن</button>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="table-responsive-xl aling.center">
                <table className="table table-striped table-hover col-12 caption-top">
                    <caption>وەسڵەکان</caption>
                    <thead>
                        <tr>
                            <th scope="col"> وەسڵی پارەدان</th>
                            <th scope="col"> کڕیار</th>
                            <th >پارەی دراو</th>
                            <th >بنکەی فرۆش</th>
                            <th>کۆی داشکان</th>
                            <th >بەروار</th>
                            <th className="d-print-none">رێکەوت</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((mob, index) => (
                            <tr key={index}>
                                <td>{mob.id}</td>
                                <td><Link to={`/paymentForm/${mob.id}`}>{mob.local_name}</Link></td>
                                <td>{mob.bank_loan}$</td>
                                <td>{mob.group_name}</td>
                                <td>{mob.date}</td>
                                <td>{moment(new Date(mob.date)).format("DD/MM/YYYY")}</td>
                                <td className="d-print-none">{moment(new Date(mob.datetime)).format("DD/MM/YYYY HH:MM:SS")}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>
            </div>
        </div>
        </>
    )
}

export default Payments
