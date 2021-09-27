import React, { useState } from 'react'

const NewCat = ({addCat}) => {
    const [naw, setName] = useState('')

    return (
        <div>
            <button className="btn btn-info " data-bs-toggle="modal" data-bs-target="#newCat">زیادکردنی جۆری کاڵا</button>
            <div className="modal fade" id="newCat" tabIndex="-1" aria-hidden='true'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">فۆرمی زیادکردن</h5>
                            <button className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <label for="name" className="form-label">ناوی جۆر</label>
                                <input type="text" id="name" className="form-control" aria-describedby="name" value={naw} onChange={(e) => setName(e.target.value)} />
                                <button className="btn btn-info" type="button" onClick={() => addCat(
                                    {
                                        "name": naw,
                                        "image": null,
                                        "deleted": false
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

export default NewCat
