import React, { useState } from 'react'

const NewGroup = ({ addGroup }) => {
    const [naw, setName] = useState('')
    const [phone, setPhone] = useState('')

    return (
        <div>
            <button href="#add-group"  type="button" className="btn btn-primary fs-4" data-bs-toggle="modal" data-bs-target="#group">
                زیادکردنی گرۆپ <i className="fa fa-plus"></i>
            </button>
            <div className="modal fade" id="group" tabIndex="-1" aria-labelledby="group" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="group">زیادکردنی گرۆپ</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <label for="name" className="form-label">ناو</label>
                                <input type="text" id="name" className="form-control" aria-describedby="name" value={naw} onChange={(e) => setName(e.target.value)} />
                                <label for="phone" className="form-label">ژ.موبایل</label>
                                <input type="text" id="phone" className="form-control" aria-describedby="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">داخستن</button>
                            <button type="button" className="btn btn-primary" onClick={() => addGroup({
                                "name": naw,
                                "phone": phone
                            })}>خەزن</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewGroup
