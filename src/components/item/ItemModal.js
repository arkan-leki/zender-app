import React, { useEffect, useState } from 'react'
import Item from './Item'

const ItemModal = ({ items ,addtoListEvent}) => {
    return (
        <><button className=" m-1 col-md-4  btn btn-success d-print-none" data-bs-toggle="modal" data-bs-target="#newForm">زیادکردن</button><div className="modal fade" id="newForm" tabIndex="-1" aria-hidden='true'>
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">کاڵاکان</h5>
                        <button className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h1 className="align-left">کاڵاکان</h1>
                        <div className="row row-cols-1 row-cols-md-4 text-center g-4">
                            {items.map((item, index) => (
                                <Item key={index} item={item} addtoList={addtoListEvent} />
                            )
                            )}
                        </div>
                    </div>
                    <div className="modal-footer">
                    </div>
                </div>
            </div>
        </div></>

    )
}

export default ItemModal
