import {useParams } from 'react-router-dom';
import * as moment from 'moment'

const PaymentForm = ({ image, payments }) => {
    let { id } = useParams();
    let waslz = payments.filter((mob) => mob.id == id)

    return (
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
            {waslz.map((wasl, index) => (
                <>
                    <h4> بەرێز {wasl.local_owner_name}</h4>
                    <hr />
                    <div className="row fs-6">
                        <div className="col-8 border row">
                            <div className="col-6"> <p>بازار : {wasl.local_name}</p>
                                <p>ژمارەی دەفتەر : {wasl.group_name}</p>
                                <p>پارەی دراو : {wasl.bank_income} $</p></div>
                            <div className="col-6"> <p>لەلایەن : {wasl.local_code}</p>
                                <p>ژمارەی پسولە : {wasl.id}</p>
                                <p>بری ماوە : {wasl.bank_loan * 1470} دینار</p>
                            </div>
                        </div>
                        <div className="col-4 border text-center">
                            <p>بەرواری وەرگرتن</p>
                            <p>{moment(new Date(wasl.date)).format("YYYY/MM/DD")}</p>
                            <p>زنجیرە {wasl.id}</p>
                        </div>

                    </div>
                </>
            ))}

        </div>
    )
}

export default PaymentForm
