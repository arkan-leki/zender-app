import React, { useState } from 'react'

const Bank = ({ banks, addBuy, group }) => {

    const [loan, setLoan] = useState('')
    const [income, setIncome] = useState('')
    const [ho, setHo] = useState('')

    const eco = Object.values(banks).reduce((r, { income }) => r + parseFloat(income), 0);
    const loa = Object.values(banks).reduce((r, { loan }) => r + parseFloat(loan), 0);
    return (
        <div>
            {group ? <button className="btn btn-success " data-bs-toggle="modal" data-bs-target="#pay">گۆرینی قاسە</button> : <></>}
            <div className="modal fade" id="pay" tabIndex="-1" aria-hidden='true'>
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
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <ul className="list-group col-md-4">
                            <li className="list-group-item"> ماوە {eco - loa}$</li>
                            <li className="list-group-item"> هاتوو {eco}$</li>
                            <li className="list-group-item">دەرچوو {loa}$</li>
                        </ul>

                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>هاتوو </th>
                                    <th>رۆشتوو</th>
                                    <th>گروپ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {banks.map((e) => (
                                    <tr key={e.id}>
                                        <td>{e.id}</td>
                                        <td>{e.income}$</td>
                                        <td>{e.loan}$</td>
                                        <td>{e.group_name}</td>
                                    </tr>
                                ))}

                            </tbody>
                            <tfoot>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bank
