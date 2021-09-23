import React from 'react'
import { useState } from 'react'
import Select from 'react-select'

const PayLoan = ({ addPayLoan, group , traders }) => {
    const [loan, setLoan] = useState(0)
    const [income, setIncome] = useState(0)
    const [id, setId] = useState('')
    const options = traders.map((city) => ({ value: city.id, label: city.name }))

    return (
        <div>
            {group ? <td><button className="btn btn-success d-print-none" data-bs-toggle="modal" data-bs-target="#pay" > پارەدان</button></td> : <></>}
            <div className="modal fade" id="pay" tabIndex="-1" aria-hidden='true'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">فۆرمی پارەدان</h5>
                            <button className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <Select defaultValue={traders[1]} onChange={(e) => setId(e.value)} options={options} />
                                <label for="income" className="form-label">بری پارە داروە</label>
                                <input type="number" id="income" className="form-control" aria-describedby="income" value={income} onChange={(e) => setIncome(e.target.value)} />
                                <label for="loan" className="form-label">گەڕاوە </label>
                                <input type="number" id="loan" className="form-control" aria-describedby="loan" value={loan} onChange={(e) => setLoan(e.target.value)} />
                                <button className="btn btn-info" type="button" onClick={() => addPayLoan(
                                    id ,
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
        </div>
    )
}

export default PayLoan
