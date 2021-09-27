import React, { useState } from 'react'
import Select from 'react-select'

const NewVendor = ({ addVendor ,groups ,regions }) => {
    const [naw, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [regs, setRegion] = useState([])
    const [gro, setGro] = useState('')
    const groupsopt = groups.map((city) => ({ value: city.id, label: city.name }))

    return (
        <div>
            <button href="#add-group" className="btn btn-info " data-bs-toggle="modal" data-bs-target="#vendor">
                زیادکردنی مەندوب
            </button>
            <div className="modal fade" id="vendor" tabIndex="-1" aria-labelledby="vendor" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="vendor">زیادکردنی مەندووب</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <label for="name" className="form-label">ناو</label>
                                <input type="text" id="name" className="form-control" aria-describedby="name" value={naw} onChange={(e) => setName(e.target.value)} />
                                <label for="phone" className="form-label">ژ.موبایل</label>
                                <input type="text" id="phone" className="form-control" aria-describedby="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                <select multiple={true} className="form-select" aria-label="multiple select example" name="regions" value={regs} onChange={(event) => setRegion(Array.from(event.target.selectedOptions, (item) => item.value))} >
                                    {regions ? regions.map((region, index) => (
                                        <option key={index} value={region.id} >{region.name}</option>
                                    )) : <></>}
                                </select>
                                <label for="name" className="form-label">گرۆپ</label>
                                <Select defaultValue={groupsopt[1]} onChange={(e) => setGro(e.value)} options={groupsopt} />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">داخستن</button>
                            <button type="button" className="btn btn-primary" onClick={() => addVendor({
                                "name": naw,
                                "phone": phone,
                                "group": gro,
                                "regions": regs
                            })}>خەزن</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewVendor
