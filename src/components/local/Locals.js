import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'

export const Locals = ({ locals, group, addpay, filterLocalsX, groupDetail,addOld }) => {
    const [loan, setLoan] = useState('')
    const [income, setIncome] = useState('')
    const [id, setId] = useState('')

    // const tradersopt = [{ value: '', label: 'hich' }, ...traders.map((city) => ({ value: city.id, label: city.name }))]
    let attemptsValue = 0
    let oldValue = 0
    let mawe = 0
    let pay = 0
    return (
        <><div className="mx-auto" style={{
            width: 100 + '%'
        }} >
            <div className="container d-print-none p-5">
                <div className="d-md-flex justify-content-between align-items-center">
                    <h5 className="mb-3 mb-md-0">گەران بۆ کڕیاران</h5>
                    <button className="btn btn-dark" type="button" id="button-addon2" onClick={() => filterLocalsX()}>گەڕان</button>
                    <div className="input-group news-input">
                        {/* <input className="form-control " type="text" value={text} placeholder="" aria-label="date" onChange={(e) => setText(e.target.value)} /> */}
                        {/* <Select className="form-control" onChange={(e) => setTradeID(e.value)} options={tradersopt} /> */}
                        {/* <button className="btn btn-dark" type="button" id="button-addon2" onClick={() => filterItems(tradeID, text)}>گەڕان</button> */}
                    </div>
                </div>

            </div>
            <hr />
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
                            <th>{(groupDetail.length > 0) ? groupDetail.map((gro) => (gro.name)) : "هەموو"} کۆن</th>
                            <th scope="col">ناوچە</th>
                            <th scope="col">کۆی کڕین</th>
                            <th scope="col">کۆی قەرز</th>
                            <th scope="col">کۆی دراو</th>
                            <th scope="col">کۆی ماوە</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {locals.map((mob, index) => (
                            <tr key={index}>
                                <div hidden>
                                    {attemptsValue = (groupDetail.length > 0) ?
                                        Object.values(mob.attempts.filter((para) => {
                                            return (para.group) == group
                                        })).reduce((r, { totallint }) => r + parseFloat(totallint), 0)
                                        : Object.values(mob.attempts).reduce((r, { totallint }) => r + parseFloat(totallint), 0)
                                    }
                                    {oldValue = (groupDetail.length > 0) ?
                                        Object.values(mob.oldacc_compnay.filter((para) => {
                                            return (para.group) == group
                                        })).reduce((r, { loan }) => r + parseFloat(loan), 0)
                                        : Object.values(mob.oldacc_compnay).reduce((r, { loan }) => r + parseFloat(loan), 0)
                                    }
                                    {pay = (groupDetail.length > 0) ?
                                        Object.values(mob.payment_compnay.filter((para) => {
                                            return (para.group) == group
                                        })).reduce((r, { bank_income }) => r + parseFloat(bank_income), 0)
                                        : Object.values(mob.payment_compnay).reduce((r, { bank_income }) => r + parseFloat(bank_income), 0)
                                    }
                                    {mawe = attemptsValue + oldValue + parseFloat(mob.exchange)}
                                </div>

                                <td><Link to={`/form/${mob.id}`}>{mob.id}</Link></td>
                                <td><Link to={`/localForm/${mob.id}`}>{mob.name}</Link></td>
                                <td>{mob.code}</td>
                                <td>{mob.address}</td>
                                <td>{mob.phone}</td>
                                <td>{mob.owner_name}</td>
                                <td>{mob.exchange}$</td>
                                <th>{oldValue}$</th>
                                <td>{mob.region}</td>
                                <td>{attemptsValue}$</td>
                                <td>{mawe}$</td>
                                <td>{pay}$</td>
                                <td>{mawe - pay}$</td>
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
