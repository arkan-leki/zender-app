import moment from 'moment'
import React, { useState } from 'react'

const Trader = ({ group, addTrade ,traders }) => {
    const [naw, setName] = useState('')
    const [code, setCode] = useState('')
    const [exchange, setExchange] = useState('')

    return (
        <><div className="mx-auto" style={{
            width: 100 + '%'
        }} >
            <div className="d-print-none">
                <div className="container-fluid">
                    <div className="row">
                        {group != '' ? <button className=" m-1 col-md-2  btn btn-success" data-bs-toggle="modal" data-bs-target="#newTrade">وەسڵی نوێ</button> : <></>}
                    </div>
                </div>
            </div>
            <div className="table-responsive-xl aling.center">
                <table className="table table-striped table-hover col-12 caption-top">
                    <caption>کۆمپانیاکان</caption>
                    <thead>
                        <tr>
                            <th scope="col"> زنجیرە</th>
                            <th scope="col"> فرۆشگا</th>
                            <th scope="col">کۆد</th>
                            <th scope="col">قەرزی پێشوو</th>
                            <th scope="col">قەرزی ماوە</th>
                            <th scope="col"> دراوە</th>
                            <th scope="col">بەروار </th>
                        </tr>
                    </thead>
                    <tbody>
                        {traders.map((mob, index) => (
                            <tr key={index}>
                                <td>{mob.id}</td>
                                <td>{mob.name}</td>
                                <td>{mob.code}</td>
                                <td>{mob.exchange}$</td>
                                <td>{mob.mawe}$</td>
                                <td>{mob.totallLoan}$</td>
                                <td>{moment(new Date(mob.date)).format("DD/MM/YYYY")}</td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>
                <div className="modal fade" id="newTrade" tabIndex="-1" aria-hidden='true'>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">فۆرمی زیادکردن</h5>
                                <button className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form >
                                    <label for="name" className="form-label">ناو</label>
                                    <input type="text" id="name" className="form-control" aria-describedby="name" value={naw} onChange={(e) => setName(e.target.value)} />
                                    <label for="code" className="form-label">کۆد</label>
                                    <input type="text" id="code" className="form-control" aria-describedby="code" value={code} onChange={(e) => setCode(e.target.value)} />
                                    <label for="loan" className="form-label">قەرزی کۆن</label>
                                    <input type="number" id="loan" className="form-control" aria-describedby="loan" value={exchange} onChange={(e) => setExchange(e.target.value)} />
                                    <button className="btn btn-info" type="button" onClick={() => addTrade(
                                        {
                                            "name": naw,
                                            "code": code,
                                            "exchange": exchange,
                                            "group": group,
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

export default Trader
