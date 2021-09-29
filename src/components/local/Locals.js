import { faEdit, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'

export const Locals = ({ locals, group, addpay, filterLocalsX, groupDetail, search, image }) => {
    const [loan, setLoan] = useState('')
    const [income, setIncome] = useState('')
    const [id, setId] = useState('')
    const [text, setText] = useState('')

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
                    <h5 className="mb-3 mb-md-0 fs-3">گەران بۆ کڕیارەکان</h5>
                    <div className="input-group news-input">
                        <button className="btn btn-info fs-4" type="button" id="button-addon2" onClick={() => filterLocalsX()}>قەرزارەکان</button>
                        <input id='text' type="text" className="form-control fs-4" placeholder=""
                            aria-label="Eneter Your price" aria-describedby="button-addon2" value={text} onChange={(e) => setText(e.target.value)} />
                        <button className="btn btn-dark fs-4" type="button" id="button-addon2" onClick={() => search(text)}>گەڕان <FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="table-responsive-xl align-center ">
                <table className="table table-striped table-hover col-12 caption-top border border-3">
                    <caption>
                        <div className="row m-2">
                            <div className="col text-center m-2">
                                <h4>کۆمپانیایی زەندەر</h4>
                                <p>بۆ بازگانی گشتی و بریکارینامەی بازرگانی / سنوردار</p>
                            </div>
                            <div className="text-center col m-2">
                                <img src={image} className="img-thumbnail" alt="..." width={40 + '%'} />
                            </div>
                            <div className="col text-center m-2">
                                <h4>راپۆرتی کڕیارانی نوێ
                                </h4>
                                <p>
                                    {/* 07719930849 - Tel */}
                                    {moment(new Date()).format("DD/MM/YYYY")}
                                </p>
                            </div>
                        </div>
                    </caption>
                    <thead>
                        <tr >
                            <th scope="col"> زنجیرە</th>
                            <th scope="col" > فرۆشگا</th>
                            <th scope="col">کۆد</th>
                            <th scope="col">ژمارەی موبایل</th>
                            <th scope="col">ناونیشان</th>
                            <th className="d-print-none" scope="col">قەرزی یەکەم جار</th>
                            <th className="d-print-none">{(groupDetail.length > 0) ? groupDetail.map((gro) => (gro.name)) : "هەموو"} کۆن</th>
                            <th className="d-print-none" scope="col">کۆی کڕین</th>
                            <th scope="col">کۆی پارە</th>
                            <th scope="col">پارەی دراو</th>
                            <th scope="col">لای ماوە</th>
                            <th className="d-print-none"></th>
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

                                <th><Link className="text-decoration-none" to={`/form/${mob.id}`}>{mob.id}</Link></th>
                                <th scope="col" className="fs-5">{mob.name}</th>
                                <th>{mob.code}</th>
                                <th >{mob.phone}</th>
                                <th >{mob.region}</th>
                                <td className="d-print-none">{mob.exchange}$</td>
                                <td className="d-print-none">{oldValue}$</td>
                                <td className="d-print-none">{attemptsValue}$</td>
                                <th>{mawe}$</th>
                                <th>{pay}$</th>
                                <th>{mawe - pay}$</th>
                                {group ? <td><button className="btn btn-success " data-bs-toggle="modal" data-bs-target="#payModal" onClick={() => setId(mob.id)}>پارەدان</button></td> : <></>}
                                <td><Link className="d-print-none btn btn-warning  " to={`/localForm/${mob.id}`}><FontAwesomeIcon icon={faEdit} /></Link></td>
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
                        <th>10</th>
                    </tfoot>
                </table>

            </div>
        </div></>
    )
}
