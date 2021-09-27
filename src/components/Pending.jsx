import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Pending = () => {
    const [data, setData] = useState([]);
    const [sales, setSales] = useState([]);

    const fetchData = () => {
        axios.get("http://127.0.0.1:8000/api/sales/").then(res => {
            console.log(res);
            setData(res.data.filter((mob) => mob.status == false))
            setSales(res.data.filter((mob) => mob.status == true))
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        fetchData();
    }, []);


    const setStat = (item) => {
        axios.patch("http://127.0.0.1:8000/api/sale/" + item.id + "/", { "status": (!item.status) }).then(res => {
            console.log(res);
            fetchData();
        }).catch(err => {
            console.log(err);
        })
    }


    return (
        <div className="table-responsive-xl aling.center ">
            <table className="table table-striped table-hover align-middle caption-top">
                <thead>
                    <tr>
                        <th># زنجیرە</th>
                        <th> ناو </th>
                        <th> دانە </th>
                        <th> نرخ</th>
                        <th> بەروار</th>
                        <th> وەسڵ</th>
                        <th> حاڵەت</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr key={i}>
                            <th>{item.id}</th>
                            <th>{item.item}</th>
                            <th>{item.quantity} دانە</th>
                            <th>{item.price}$</th>
                            <th>{item.date}</th>
                            <th>{item.sell}</th>
                            <th><input type="checkbox" name="status" id={i} checked={item.status} onClick={(e) => setStat(item)} /></th>
                        </tr>
                    ))}
                    {sales.map((item, i) => (
                        <tr key={i}>
                            <th>{item.id}</th>
                            <th>{item.item}</th>
                            <th>{item.quantity} دانە</th>
                            <th>{item.price}$</th>
                            <th>{item.date}</th>
                            <th>{item.sell}</th>
                            <th><input type="checkbox" name="status" id={i} checked={item.status} /></th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Pending
