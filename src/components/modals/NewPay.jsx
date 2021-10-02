import React, { useState } from 'react'
import Select from 'react-select'

const NewPay = ({locals, addpay, group}) => {
    const [loan, setLoan] = useState('')
    const [income, setIncome] = useState('')
    const [localID, setlocalID] = useState('')
    const options = locals.map((city) => ({ value: city.id, label: city.name + " / " + city.region }))

    return (
        <div>
            <button className="btn btn-danger fs-4" data-bs-toggle="modal" data-bs-target="#pay" >پارەدان <i className="fa fa-plus"></i></button>
            <div className="modal fade" id="pay" tabIndex="-1" aria-hidden='true'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">فۆرمی پارەدان</h5>
                            <button className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <Select placeholder={options.label} defaultValue={options[1]} onChange={(e) => setlocalID(e.value)} options={options} />
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
