import { Link, useParams } from 'react-router-dom';
import * as moment from 'moment'
import LocalEdit from './LocalEdit';
import { useEffect, useState } from 'react';
import axios from 'axios';


const LocalForm = ({ image, locals, EditLocal , group, addOld }) => {

    let { id } = useParams();
    const people = locals.filter((ppl)=>ppl.id=id);
    const [loc, setLoc] = useState([])


    const fetchData = () => {
        axios.get("http://127.0.0.1:8000/api/local/"+id+"/").then(res => {
            setLoc(res.data)
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

    const lists = (pp) => {
        let arr = []
        pp.attempts.map((val, index) => (
            arr.push({ "id": <Link to={`/form/${val.id}`}> کڕین {val.id} </Link>, "name": val.local_name, "group": val.group_name, "pay": val.totall, "loan": val.discount, "date": val.date })
        ))
        pp.payments.map((val, index) => (
            arr.push({ "id": <Link to={`/paymentForm/${val.id}`}> پارەدان {val.id} </Link>, "name": val.local_name, "group": val.group_name, "pay": 0, "loan": val.bank_income, "date": val.date })
        ))
        let suumer = parseFloat(pp.exchange)
        return (
            arr.sort((a, b) => a.date > b.date).map((attempt, index) => (
                <tr key={index}>
                    <th scope="row"> {attempt.id}</th>
                    <th scope="row" >{attempt.name}</th>
                    <th scope="row">{attempt.group}</th>
                    <th scope="row">{attempt.pay}$</th>
                    <th scope="row">{attempt.loan}$</th>
                    <th scope="row">{attempt.date}</th>
                    <th>{(suumer += parseFloat(attempt.pay).toFixed(2) - parseFloat(attempt.loan).toFixed(2)).toFixed(2)}</th>
                </tr>
            ))
        )
    }

    return (
        <section>
            <div className="modal-body d-print-none">
                    <LocalEdit local={loc} EditLocal={EditLocal} group={group} addOld={addOld} />
            </div>
            <div className="mx-auto border border-5 p-5" style={{ width: 100 + '%' }}>
                <div className="row border ">
                    <div className="col-4 ">
                        <h4>کۆمپانیایی زەندەر</h4>
                        <p>بۆ بازگانی گشتی و بریکارینامەی بازرگانی / سنوردار</p>
                    </div>
                    <div className="text-center col-4">
                        <img src={image} className="img-thumbnail" alt="..." width={100 + '%'} />
                    </div>
                    <div className="col-4">
                        <h4>پسولەی پارەدان
                        </h4>
                        <p>
                            Tel: 07709994444 - 09933338888
                        </p>
                    </div>
                </div>
                {people.map((ppl, index) => (
                    <>
                        <h4> بەرێز {ppl.owner_name}</h4>
                        <hr />
                        <div className="row fs-6">
                            <div className="col-8 border row">
                                <div className="col-6"> <p>ناو : {ppl.name}</p>
                                    <p>ناوچە : {ppl.region}</p>
                                    <p>ژمارەی موبایل : {ppl.phone}</p></div>
                                <div className="col-6"> <p>کۆد : {ppl.code}</p>
                                    <p>قەرز : {ppl.mawe}</p>
                                    <p>قەرز یەکەم جار : {ppl.exchange}</p>
                                </div>
                            </div>
                            <div className="col-4 border text-center">
                                <p>بەرواری فرۆش</p>
                                <p>{moment(new Date(ppl.date)).format("YYYY/MM/DD")}</p>
                                <p>زنجیرە {ppl.id}</p>
                            </div>

                        </div>
                        <div key={index} className="table-responsive">

                            <table className=" table table-striped table-hover align-middle caption-top border border-5">
                                <thead className="table-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col" >کڕیار</th>
                                        <th >لەبنکەی</th>
                                        <th>بری قەرز</th>
                                        <th >بڕی پارە</th>
                                        <th>بەروار</th>
                                        <th className="d-print-none">#</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr key={index}>
                                        <th scope="row"><Link to={`/form/${ppl.id}`}>{ppl.id}</Link> </th>
                                        <th scope="row" >{ppl.name}</th>
                                        <th scope="row"> یەکەم جار</th>
                                        <th scope="row">{ppl.exchange}$</th>
                                        <th scope="row">0$</th>
                                        <th scope="row">{ppl.date}</th>
                                    </tr>

                                    {lists({
                                        "exchange": ppl.exchange,
                                        "attempts": ppl.attempts,
                                        "payments": ppl.payment_compnay
                                    })}
                                    {/* {cats.map((attempt, index) => (
                                <tr key={index}>
                                    <th scope="row"> <Link to={`/paymentForm/${attempt.id}`}>کڕێن {attempt.id} </Link></th>
                                    <th scope="row" >{attempt.local_name}</th>
                                    <th scope="row">{attempt.group_name}</th>
                                    <th scope="row">{attempt.totall}$</th>
                                    <th scope="row">{attempt.discount}$</th>
                                    <th scope="row">{attempt.date}</th>
                                </tr>
                            ))} */}
                                    {/* {ppl.attempts.map((attempt, index) => (
                                <>
                                    <tr key={index}>
                                        <th scope="row"> <Link to={`/paymentForm/${attempt.id}`}>کڕێن {attempt.id} </Link></th>
                                        <th scope="row" >{attempt.local_name}</th>
                                        <th scope="row">{attempt.group_name}</th>
                                        <th scope="row">{attempt.totall}$</th>
                                        <th scope="row">{attempt.discount}$</th>
                                        <th scope="row">{attempt.date}</th>
                                    </tr>

                                </>
                            ))}

                            {ppl.payment_compnay.map((pay, index) => (
                                <tr key={index}>
                                    <th scope="row"><Link to={`/paymentForm/${ppl.id}`}>پارەدان {pay.id} </Link></th>
                                    <th scope="row" >{pay.local_name}</th>
                                    <th >{pay.group_name}</th>
                                    <th >{pay.bank_income}$</th>
                                    <th>{pay.bank_loan}$</th>
                                    <th >{pay.date}</th>
                                </tr>
                            ))} */}

                                </tbody>
                                {/* <tfoot>
                            <th>
                                <Link className="btn d-print-none btn-info" to={`/itemlist/${wasl.id}`}>زیادکردن</Link>
                            </th>
                            <th></th>
                            <th> وەزن {Math.trunc( wights )} کیلۆ</th>
                            <th> عدد {summer} کارتۆن</th>
                            <th> {summerprice}$</th>
                            <th> <Link className="btn d-print-none btn-info" to={`/`}>گەرانەوە</Link></th>
                        </tfoot> */}
                            </table>
                        </div>
                    </>
                ))}

            </div>
        </section>
    )
}

export default LocalForm
