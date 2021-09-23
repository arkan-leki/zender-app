import React, { useState } from 'react'
import Select from 'react-select'

const NewLocal = ({addLocal ,regions}) => {
    const [naw, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [code, setCode] = useState('')
    const [address, setAddress] = useState('')
    const [owner, setOwner] = useState('')
    const [exchange, setExchange] = useState('')
    const [regionID, setRegionID] = useState('')
    const options = regions.map((city) => ({ value: city.id, label: city.name }))

    return (
        <div>
            <button className=" btn btn-success" data-bs-toggle="modal" data-bs-target="#newLocal">کڕیاری نوێ</button>
            <div className="modal fade" id="newLocal" tabIndex="-1" aria-hidden='true'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">فۆرمی زیادکردن</h5>
                            <button className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <label for="name" className="form-label">فرۆشگا</label>
                                <input type="text" id="name" className="form-control" aria-describedby="name" value={naw} onChange={(e) => setName(e.target.value)} />
                                <label for="code" className="form-label">کۆد</label>
                                <input type="text" id="code" className="form-control" aria-describedby="code" value={code} onChange={(e) => setCode(e.target.value)} />
                                <label for="address" className="form-label">ناونیشان</label>
                                <input type="text" id="address" className="form-control" aria-describedby="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                <label for="phone" className="form-label">ژمارەی موبایل</label>
                                <input type="text" id="phone" className="form-control" aria-describedby="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                <label for="owner" className="form-label">خاوەنی کار</label>
                                <input type="text" id="owner" className="form-control" aria-describedby="owner" value={owner} onChange={(e) => setOwner(e.target.value)} />
                                <label for="loan" className="form-label">قەرزی کۆن</label>
                                <input type="number" id="loan" className="form-control" aria-describedby="loan" value={exchange} onChange={(e) => setExchange(e.target.value)} />
                                <label for="name" className="form-label">ناوچەکان</label>
                                <Select defaultValue={options[1]} onChange={(e) => setRegionID(e.value)} options={options} />
                                <button className="btn btn-info" type="button" onClick={() => addLocal(
                                    {
                                        "name": naw,
                                        "code": code,
                                        "address": address,
                                        "phone": phone,
                                        "owner_name": owner,
                                        "exchange": exchange,
                                        "region": regionID,
                                        "status": false,
                                        "zip_code": "",
                                        "state": "",
                                        "country": "",
                                        "image": null,
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

export default NewLocal
