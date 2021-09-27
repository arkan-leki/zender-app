import React, { useState } from 'react'

const NewReg = ({addRegion}) => {
    const [naw, setName] = useState('')
    const [code, setCode] = useState('')

    return (
        <div>
            <button className="btn btn-info " data-bs-toggle="modal" data-bs-target="#newRegion">زیادکردنی ناوچە</button>
            <div className="modal fade" id="newRegion" tabIndex="-1" aria-hidden='true'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">فۆرمی زیادکردن</h5>
                            <button className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <label for="name" className="form-label">ناونیشان</label>
                                <input type="text" id="name" className="form-control" aria-describedby="name" value={naw} onChange={(e) => setName(e.target.value)} />
                                <label for="code" className="form-label">کۆد</label>
                                <input type="text" id="code" className="form-control" aria-describedby="code" value={code} onChange={(e) => setCode(e.target.value)} />
                                <button className="btn btn-info" type="button" onClick={() => addRegion(
                                    {
                                        "name": naw,
                                        "code": code
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

export default NewReg
