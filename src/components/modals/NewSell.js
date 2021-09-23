import React from 'react'
import { useState } from 'react'

const NewSell = ({locals, search, addForm, group, vendor}) => {
    const [text, setText] = useState('')
    return (
        <div>
            <button className=" btn btn-info" data-bs-toggle="modal" data-bs-target="#newSale">وەسڵی نوێ</button>

            <div className="modal fade" id="newSale" tabIndex="-1" aria-hidden='true' width={100 + "%"}>
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
    )
}

export default NewSell
