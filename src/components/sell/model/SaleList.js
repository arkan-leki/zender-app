import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Currency from '../../../Currency';
import Resell from './Resell';

const SaleList = ({ sales, addReSell, setStatus }) => {
    const summer = Object.values(sales).reduce((r, { totallint }) => r + parseFloat(totallint), 0);
    const sall = sales.length

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
                        <th scope="col">ناونیشان</th>
                        <th scope="col">کۆی وەسل</th>
                        <th scope="col">کۆی داشکان</th>
                        <th scope="col">کۆتا</th>
                        <th scope="col">کۆی گەڕاوە</th>
                        <th scope="col">بەروار</th>
                        <th className="d-print-none">حاڵەت</th>
                        <th className="d-print-none">رێکەوت</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map((sale, index) => (
                        <tr key={index}>
                            <td>{sale.group_name}</td>
                            <td>{sale.vendor_name}</td>
                            <td><Link to={`/form/${sale.id}`}>{sale.id}</Link></td>
                            <td className="fs-5 ">{sale.local_name}<Link className="d-print-none" to={`/form/${sale.id}`}><FontAwesomeIcon icon={faEdit} /></Link></td>
                            <td>{sale.local_region} </td>
                            <td>{Currency(parseFloat(sale.totall))} </td>
                            <td>{Currency(parseFloat(sale.discount))} </td>
                            <td>{Currency(parseFloat(sale.totallint))} </td>
                            <td>{Currency(parseFloat(sale.totalback))} </td>
                            <td>{moment(new Date(sale.date)).format("DD/MM/YYYY")}</td>
                            <td className="d-print-none"><input className="form-input" type="checkbox" name="status" id={sale.id} onChange={(e) => setStatus(sale)} checked={sale.status} /></td>
                            <td className="d-print-none">{moment(new Date(sale.datetime)).format("DD/MM/YYYY HH:MM:SS")}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <th>{sall}</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>{Currency(summer)}</th>
                </tfoot>
            </table> </div>
    )
}

export default SaleList
