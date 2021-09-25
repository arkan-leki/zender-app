import React, { useState } from 'react'

const NewPay = ({addpay, group}) => {
    const [loan, setLoan] = useState('')
    const [income, setIncome] = useState('')
    const [localID, setlocalID] = useState('')

    return (
        <div>
            <button className="btn btn-warning " data-bs-toggle="modal" data-bs-target="#pay" >پارەدان</button>
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
    )
}

export default NewPay
