import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React from 'react'
import { Link } from 'react-router-dom';
import Resell from './Resell';

const SaleList = ({ sales, addReSell }) => {
    let summer = Object.values(sales).reduce((r, { totallint }) => r + parseFloat(totallint), 0);

    return (
        <div className="table-responsive-xl aling.center">
            <table className="table table-striped table-hover col-12 caption-top">
                <caption>وەسڵەکان</caption>
                <thead>
                    <tr>
                        <th scope="col"> وەسڵ</th>
                        <th scope="col"> فرۆشیار</th>
                        <th scope="col">ژمارەی وەسڵ</th>
                        <th scope="col">کڕیار</th>
                        <th scope="col">کۆی وەسل</th>
                        <th scope="col">کۆی داشکان</th>
                        <th scope="col">کۆتا</th>
                        <th scope="col">کۆی گەڕاوە</th>
                        <th scope="col">بەروار</th>
                        <th className="d-print-none">گەڕانەوە لەفرۆش</th>
                        <th className="d-print-none">رێکەوت</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map((sale, index) => (
                        <tr key={index}>
                            <td>{sale.group_name}</td>
                            <td>{sale.vendor_name}</td>
                            <td><Link to={`/form/${sale.id}`}>{sale.id}</Link></td>
                            <td className="fs-5 ">{sale.local_name}<Link className="d-print-none" to={`/form/${sale.id}`}><FontAwesomeIcon  icon={faEdit} /></Link></td>
                            <td>{sale.totall}$</td>
                            <td>{sale.discount}$</td>
                            <td>{sale.totallint}$</td>
                            <td>{sale.totalback}$</td>
                            <td>{moment(new Date(sale.date)).format("DD/MM/YYYY")}</td>
                            <td className="d-print-none"><Resell sale={sale} addReSell={addReSell} /></td>
                            <td className="d-print-none">{moment(new Date(sale.datetime)).format("DD/MM/YYYY HH:MM:SS")}
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <th>{summer}</th>
                </tfoot>
            </table> </div>
    )
}

export default SaleList
