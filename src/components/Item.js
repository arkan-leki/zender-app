import React from 'react'

const Item = ({item,addtoList}) => {
    return (
        <div className="col-md-4">
            <div className="card bg-light mb-3">
                <div className="row g-0">
                    <div className="col-4">
                        {/* <img src={item.mobile['image']}
                            className="img-fluid rounded-start m-2 w-50" alt="....." /> */}
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <div className="card-image"></div>
                            <h5 className="card-title"> ناو {item.name} </h5>
                            <p className="card-text"><strong className="text-muted">{item.mawe}</strong> ماوە</p>
                            <h3 className="card-text">نرخ فرۆش {item.finalprice}$</h3> <h٤ className="card-text">نرخ {item.price}$</h٤>
                            {/* <Link to={`/mobile/${mobile.id}`} className="btn btn-primary">زیاتر بزانە</Link> */}
                        </div>
                    </div>
                    <button onClick={() => addtoList(item)} className="btn btn-success"> <i className="bi bi-plus"></i> add to list</button>
                </div>
            </div>
        </div>
    )
}

export default Item
