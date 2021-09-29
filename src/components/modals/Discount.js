import { faDisease, faSearchDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Discount = ({wasl,dashkan}) => {
    const [DashText, setDashText] = useState('')
    return (
        <div>
            <button className=" d-print-none btn btn-info fs-4" data-bs-toggle="modal" data-bs-target="#dicount">داشکاندن <FontAwesomeIcon icon={faSearchDollar} /></button>
            <div className="modal fade" id="dicount" tabIndex="-1" aria-hidden='true'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">لیستەکەم</h5>
                            <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-item">
                                <label htmlFor="">داشکان: </label>
                                <input className="form-control" type="number" placeholder={wasl.discount} value={DashText} onChange={(e) => setDashText(e.target.value)} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" onClick={() => dashkan(wasl.id, {
                                "discount": DashText,
                            })}>خەزن</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Discount
