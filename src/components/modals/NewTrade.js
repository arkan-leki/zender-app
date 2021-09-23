import React, { useState } from 'react'

const NewTrade = ({group, addTrade}) => {
    const [naw, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [code, setCode] = useState('')
    const [address, setAddress] = useState('')
    const [exchange, setExchange] = useState('')

    return (
        <div>
            <button className=" btn btn-success" data-bs-toggle="modal" data-bs-target="#newTrade">کۆمپانیایی نوێ</button>
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
                                <label for="name" className="form-label">ماونیشان</label>
                                <input type="text" id="name" className="form-control" aria-describedby="name" value={address} onChange={(e) => setAddress(e.target.value)} />
                                <label for="name" className="form-label">ژ.موبایل</label>
                                <input type="text" id="name" className="form-control" aria-describedby="name" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                <label for="code" className="form-label">کۆد</label>
                                <input type="text" id="code" className="form-control" aria-describedby="code" value={code} onChange={(e) => setCode(e.target.value)} />
                                <label for="loan" className="form-label">قەرزی کۆن</label>
                                <input type="number" id="loan" className="form-control" aria-describedby="loan" value={exchange} onChange={(e) => setExchange(e.target.value)} />
                                <button className="btn btn-info" type="button" onClick={() => addTrade(
                                    {
                                        "name": naw,
                                        "code": code,
                                        "phone": phone,
                                        "address": address,
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
    )
}

export default NewTrade
