import moment from 'moment'
import { useState } from 'react'
import Select from 'react-select'
import SaleList from './model/SaleList'

const Sales = ({ sales, locals, search, addForm, group, vendor, filterBydate, addReSell, setStatus }) => {
    const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"))
    const [localID, setlocalID] = useState('')
    const groupsopt = [{ value: '', label: 'hich' }, ...locals.map((city) => ({ value: city.id, label: city.name }))]

    return (
        <section>
            <div className="mx-auto" style={{
                width: 100 + '%'
            }} >
                <div className="container d-print-none p-5">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <h5 className="mb-3 mb-md-0">گەران بۆ بارەکان</h5>
                        <div className="input-group news-input">
                            <input id='date' type type="date" className="form-control" placeholder=""
                                aria-label="Eneter Your price" aria-describedby="button-addon2" value={date} onChange={(e) => setDate(e.target.value)} />
                            <Select className="form-control" onChange={(e) => setlocalID(e.value)} options={groupsopt} />
                            <button className="btn btn-dark" type="button" id="button-addon2" onClick={() => filterBydate(date, localID)}>گەڕان</button>
                        </div>
                    </div>
                </div>
                <hr />
                <SaleList setStatus={setStatus} sales={sales} addReSell={addReSell} />
            </div>
        </section>
    )
}

export default Sales
