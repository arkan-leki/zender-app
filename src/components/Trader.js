import moment from 'moment'
import React, { useState } from 'react'

const Trader = ({ group, traders, addPayLoan }) => {
    const [loan, setLoan] = useState(0)
    const [income, setIncome] = useState(0)
    const [id, setId] = useState('')

    return (
        <><div className="mx-auto" style={{
            width: 100 + '%'
        }} >
            <div className="table-responsive-xl aling.center">
                <table className="table table-striped table-hover col-12 caption-top">
                    <caption>کۆمپانیاکان</caption>
                    <thead>
                        <tr>
                            <th scope="col"> زنجیرە</th>
                            <th scope="col"> کۆمپانیا</th>
                            <th scope="col">کۆد</th>
                            <th scope="col">ژ.موبایل</th>
                            <th scope="col">کۆد</th>
                            <th scope="col">نقل حساب</th>
                            <th scope="col">کۆی داواکردن</th>
                            <th scope="col"> دراوە</th>
                            <th scope="col">قەرزی ماوە</th>
                            <th scope="col">بەروار </th>
                        </tr>
                    </thead>
                    <tbody>
                        {traders.map((mob, index) => (
                            <tr key={index}>
                                <td>{mob.id}</td>
                                <td>{mob.name}</td>
                                <td>{mob.code}</td>
                                <td>{mob.address}</td>
                                <td>{mob.phone}</td>
                                <td>{mob.exchange}$</td>
                                <td>{mob.totallBuy}$</td>
                                <td>{mob.totallLoan}$</td>
                                <td>{mob.mawe}$</td>
                                <td>{moment(new Date(mob.date)).format("DD/MM/YYYY")}</td>
                                {group?<td><button className="btn btn-success d-print-none" data-bs-toggle="modal" data-bs-target="#pay"  onClick={()=>setId(mob.id)}>پارەدان</button></td>:<></>}
                                {/* <td>{moment(new Date(mob.date)).format("DD/MM/YYYY")}</td> */}
                                <div className="modal fade" id="pay" tabIndex="-1" aria-hidden='true'>
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">فۆرمی پارەدان</h5>
                                                <button className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <form >
                                                    <label for="income" className="form-label">بری پارە داروە</label>
                                                    <input type="number" id="income" className="form-control" aria-describedby="income" value={income} onChange={(e) => setIncome(e.target.value)} />
                                                    <label for="loan" className="form-label">گەڕاوە </label>
                                                    <input type="number" id="loan" className="form-control" aria-describedby="loan" value={loan} onChange={(e) => setLoan(e.target.value)} />
                                                    <button className="btn btn-info" type="button" onClick={() => addPayLoan(
                                                        {
                                                            "group": group,
                                                            "trader": id,
                                                            "bank": null
                                                        },
                                                        {
                                                            "group": group,
                                                            "income": loan,
                                                            "loan": income
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

                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>

            </div>
        </div></>
    )
}

export default Trader
