import { Link, useParams } from 'react-router-dom';
import * as moment from 'moment'
import LocalEdit from './LocalEdit';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Currency from '../../Currency'

const LocalForm = ({ image, locals, EditLocal, group, addOld }) => {

    let { id } = useParams();
    const people = locals.filter((ppl) => ppl.id == id);
    const [loc, setLoc] = useState([])


    const fetchData = () => {
        axios.get("http://127.0.0.1:8000/api/local/" + id + "/").then(res => {
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
        pp.oldacc_compnay.map((val, index) => (
            arr.push({ "id": <a >نقل حساب {val.id} </a>, "name": val.local_name, "group": val.group_name, "pay": val.loan, "loan": val.income, "date": val.date })
        ))
        pp.attempts.map((val, index) => (
            arr.push({ "id": <Link to={`/form/${val.id}`}> کڕین {val.id} </Link>, "name": val.local_name, "group": val.group_name, "pay": val.totall, "loan": val.discount, "date": val.date })
        ))
        pp.payments.map((val, index) => (
            arr.push({ "id": <Link to={`/paymentForm/${val.id}`}> پارەدان {val.id} </Link>, "name": val.local_name, "group": val.group_name, "pay": val.bank_loan, "loan": val.bank_income, "date": val.date })
        ))

        let suumer = parseFloat(pp.exchange)
        return (
            arr.sort((a, b) => a.date > b.date).map((attempt, index) => (
                <tr key={index}>
                    <th scope="row"> {attempt.id}</th>
                    <th scope="row" >{attempt.name}</th>
                    <th scope="row">{attempt.group}</th>
                    <th scope="row">{Currency(parseFloat(attempt.pay))}</th>
                    <th scope="row">{Currency(parseFloat(attempt.loan))}</th>
                    <th scope="row">{attempt.date}</th>
                    <th>{Currency(suumer += parseFloat(attempt.pay) - parseFloat(attempt.loan))}</th>
                </tr>
            ))
        )
    }

    return (
        <section className="row">
            <div className=" d-print-none col border border-3 m-5" >
                <LocalEdit local={loc} EditLocal={EditLocal} group={group} addOld={addOld} />
            </div>
            <div className=" border border-3 col m-5" >
                <div className="row m-2">
                    <div className="col text-center m-2">
                        <h4>کۆمپانیایی زەندەر</h4>
                        <p>بۆ بازگانی گشتی و بریکارینامەی بازرگانی / سنوردار</p>
                    </div>
                    <div className="text-center col m-2">
                        <img src={image} className="img-thumbnail" alt="..." width={50 + '%'} />
                    </div>
                    <div className="col text-center m-2">
                        <h4>پسولەی فرۆش
                        </h4>
                        <p>
                            {/* 07719930849 - Tel */}

                            تەلەفۆن - ٠٧٧١٩٩٣٠٨٤٩
                            <p>ناونیشان کەلار - لیوکە</p>

                        </p>
                    </div>
                </div>
                {people.map((ppl, index) => (
                    <>
                        <h4> بەرێز {ppl.owner_name}</h4>
                        <hr />
                        <div className="row m-2">
                            <div className="row col border border-3 text-right m-2">
                                <div className="col "> <p>ناو : {ppl.name}</p>
                                    <p>ناوچە : {ppl.region}</p>
                                    <p>ژمارەی موبایل : {ppl.phone}</p></div>
                                <div className="col "> <p>کۆد : {ppl.code}</p>
                                    <p>قەرز : {ppl.mawe}</p>
                                    <p>قەرز یەکەم جار : {ppl.exchange}</p>
                                </div>
                            </div>
                            <div className="col-4 border border-3 m-2 text-center">
                                <p>بەرواری فرۆش</p>
                                <p>{moment(new Date(ppl.date)).format("YYYY/MM/DD")}</p>
                                <p>زنجیرە {ppl.id}</p>
                            </div>
                        </div>
                        <div key={index} className="table-responsive ">

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
                                        <th scope="row"><a >{ppl.id}</a> </th>
                                        <th scope="row" >{ppl.name}</th>
                                        <th scope="row"> یەکەم جار</th>
                                        <th scope="row">{Currency(parseFloat(ppl.exchange))}$</th>
                                        <th scope="row">0$</th>
                                        <th scope="row">{ppl.date}</th>
                                    </tr>

                                    {lists({
                                        "exchange": ppl.exchange,
                                        "attempts": group != '' ?  ppl.attempts.filter((att)=> att.group == group) : ppl.attempts,
                                        "payments": group != '' ? ppl.payment_compnay.filter((att)=> att.group == group) : ppl.payment_compnay ,
                                        "oldacc_compnay": ppl.oldacc_compnay
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </>
                ))}

            </div>
        </section>
    )
}

export default LocalForm
