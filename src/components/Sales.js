import React from 'react'
import * as moment from 'moment'
import { Link } from 'react-router-dom'

const Sales = ({ sales }) => {
    let yourDate = new Date() ;
    return (
        <div className="mx-auto" style={{ width: 700 + 'px' }}>
            <div className="table-responsive-xl aling.center">
                <table className="table table-striped table-hover col-12 caption-top">
                    <caption>List of users</caption>
                    <thead>
                        <tr>
                            <th scope="col">ژمارەی وەسڵ</th>
                            <th scope="col">کڕیار</th>
                            <th scope="col">کۆی وەسل</th>
                            <th scope="col">کۆی داشکان</th>
                            <th scope="col">بەروار</th>
                            {/* <th scope="col">Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map((mob, index) => (
                            <tr key={index}>
                                <td><Link to={`/form/${mob.id}`}>{mob.id}</Link></td>
                                <td>{mob.local}</td>
                                <td>{mob.totall}$</td>
                                <td>{mob.discount}$</td>
                                <td>{moment(new Date(mob.date)).format("DD/MM/YYYY")}</td>
                                {/* <td><button className="btn btn-info">Open</button></td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Sales
