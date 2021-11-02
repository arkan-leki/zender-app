import { useParams } from 'react-router-dom';
import * as moment from 'moment'
import Currency from '../../Currency'

const PaymentForm = ({ image, payments , DOLLAR }) => {
    let { id } = useParams();
    let waslz = payments.filter((mob) => mob.id == id)

    return (
        <div className="mx-auto border border-5 p-5" style={{ width: 100 + '%' }}>
            <div className="row mt-2 fs-4 border border-2">
                <div className="col text-center  mt-2">
                    <h2>کۆمپانیایی زەندەر</h2>
                    <p className="fs-5">بۆ بازگانی گشتی و بریکارینامەی بازرگانی / سنوردار</p>
                </div>
                <div className="text-center   col mt-2">
                    <img src={image} className="img-thumbnail" alt="..." width={50 + '%'} />
                </div>
                <div className="col text-center mt-2">
                    <h4>پسولەی پارەدان
                    </h4>
                    <p className="fs-5">
                        {/* 07719930849 - Tel */}

                        تەلەفۆن - ٠٧٧١٩٩٣٠٨٤٩
                        <p>ناونیشان کەلار - لیوکە</p>

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
                                <p>ژمارەی دەفتەر : {wasl.local_code}</p>
                                <p>پارەی دراو : {Currency(wasl.bank_income-wasl.bank_loan)} </p></div>
                            <div className="col-6"> <p> ناونیشان : {wasl.local_region}</p>
                                <p>ژمارەی پسولە : {wasl.id}</p>
                                <p>بەدینار : {((wasl.bank_income-wasl.bank_loan) * DOLLAR).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} دینار</p>
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
