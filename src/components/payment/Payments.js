import * as moment from 'moment'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'

const Payments = ({ payments, locals, group, filterBydate, addpay }) => {
    // const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [localID, setlocalID] = useState('')
    const localsopt = [{ value: '', label: 'hich' }, ...locals.map((city) => ({ value: city.id, label: city.name }))]
    
    return (
        <><div className="mx-auto" style={{
            width: 100 + '%'
        }} >
            <div className="container d-print-none p-5">
                <div className="d-md-flex justify-content-between align-items-center">
                    <h5 className="mb-3 mb-md-0">گەران بۆ وەسڵەکان</h5>
                    <div className="input-group news-input">
                        <input id='date' type type="date" className="form-control" placeholder=""
                            aria-label="Eneter Your price" aria-describedby="button-addon2" value={date} onChange={(e) => setDate(e.target.value)} />
                        <Select className="form-control" onChange={(e) => setlocalID(e.value)} options={localsopt} />
                        <button className="btn btn-dark" type="button" id="button-addon2" onClick={() => filterBydate(date, localID)}>گەڕان</button>
                    </div>
                </div>
            </div>
            <hr />
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
                                <td>{mob.bank_income}$</td>
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
