import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Locals = ({ locals, group, addpay }) => {
    const [loan, setLoan] = useState('')
    const [income, setIncome] = useState('')
    const [id, setId] = useState('')

    return (
        <><div className="mx-auto" style={{
            width: 100 + '%'
        }} >
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {locals.map((mob, index) => (
                            <tr key={index}>
                                <td><Link to={`/form/${mob.id}`}>{mob.id}</Link></td>
                                <td><Link to={`/localForm/${mob.id}`}>{mob.name}</Link></td>
                                <td>{mob.code}</td>
                                <td>{mob.address}</td>
                                <td>{mob.phone}</td>
                                <td>{mob.owner_name}</td>
                                <td>{mob.exchange}$</td>
                                <td>{mob.region}</td>
                                <td>{mob.totallSell}$</td>
                                <td>{mob.mawe}$</td>
                                <td>{mob.totallPay}$</td>
                                {group ? <td><button className="btn btn-success " data-bs-toggle="modal" data-bs-target="#payModal" onClick={() => setId(mob.id)}>پارەدان</button></td> : <></>}
                                {/* <td>{moment(new Date(mob.date)).format("DD/MM/YYYY")}</td> */}
                                <div className="modal fade" id="payModal" tabIndex="-1" aria-hidden='true'>
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
                                                            "local": id,
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
