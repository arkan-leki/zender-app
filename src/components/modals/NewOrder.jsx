import React, { useState } from 'react'

const NewOrder = ({ group, traders, searchTrader, addOrder }) => {
    const [text, setText] = useState('')
    const [code, setCode] = useState('')


    return (
        <div>
            <button className="btn btn-warning fs-4" data-bs-toggle="modal" data-bs-target="#newOrder">باری نوێ <i className="fa fa-plus"></i></button>
            <div className="modal fade" id="newOrder" tabIndex="-1" aria-hidden='true'>
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">کۆمپانیاکان</h5>
                            <button className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="container">
                            <div className="d-md-flex justify-content-between align-items-center">
                                <h5 className="mb-3 mb-md-0">گەران بۆ کۆمپانیا</h5>
                                <div className="input-group news-input">
                                    <input id='text' type="text" className="form-control" placeholder=""
                                        aria-label="Eneter Your price" aria-describedby="button-addon2" value={text} onChange={(e) => setText(e.target.value)} />
                                    <button className="btn btn-dark" type="button" id="button-addon2" onClick={() => searchTrader(text)}>گەڕان</button>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body">
                            <table className="table table-striped table-hover align-middle caption-top">
                                <thead className="table-dark">
                                    <tr>
                                        <th scope="col">کۆمپانیا</th>
                                        <th>کۆد</th>
                                        <th>وەسل</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {traders.map((trader, index) => (
                                        <tr key={index}>
                                            <td>{trader.name}</td>
                                            <td>{trader.code}</td>
                                            <input id='text' type="text" className="form-control" placeholder=""
                                                aria-label="Eneter Your price" aria-describedby="button-addon2" value={code} onChange={(e) => setCode(e.target.value)} />
                                            <td>
                                                <button className="btn btn-info" type="button" onClick={() => addOrder({ "group": group, "trader": trader.id, "code": code })}>کڕین</button></td>
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
    )
}

export default NewOrder
