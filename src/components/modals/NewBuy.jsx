import React, { useState } from 'react'

const NewBuy = ({ addBuy, group }) => {
    const [loan, setLoan] = useState('')
    const [income, setIncome] = useState('')
    const [ho, setHo] = useState('')

    return (
        <div>
            <button className="btn btn-danger " data-bs-toggle="modal" data-bs-target="#buy">خەرجی</button>
            <div className="modal fade" id="buy" tabIndex="-1" aria-hidden='true'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">فۆرمی قاسە</h5>
                            <button className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <label for="ho" className="form-label">هۆکار</label>
                                <input type="text" id="ho" className="form-control" aria-describedby="ho" value={ho} onChange={(e) => setHo(e.target.value)} />
                                <label for="income" className="form-label">رۆشتوو</label>
                                <input type="number" id="income" className="form-control" aria-describedby="income" value={income} onChange={(e) => setIncome(e.target.value)} />
                                <label for="loan" className="form-label">هاتوو </label>
                                <input type="number" id="loan" className="form-control" aria-describedby="loan" value={loan} onChange={(e) => setLoan(e.target.value)} />
                                <button className="btn btn-info" type="button" onClick={() => addBuy(
                                    {
                                        "name": ho,
                                        "group": group,
                                        "bank": null
                                    },
                                    {
                                        "group": group,
                                        "income": loan,
                                        "loan": income
                                    }
                                )}
                                >خەزن</button>
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

export default NewBuy
