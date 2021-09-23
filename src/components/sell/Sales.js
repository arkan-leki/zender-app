import { useState } from 'react'
import Select from 'react-select'
import SaleList from './model/SaleList'

const Sales = ({ sales, locals, search, addForm, group, vendor, filterBydate, addReSell }) => {
    const [date, setDate] = useState('')
    const [localID, setlocalID] = useState('')
    const groupsopt =  [{ value: '', label: 'hich' } ,...locals.map((city) => ({ value: city.id, label: city.name }))]

    return (
        <>
            <div className="mx-auto" style={{
                width: 100 + '%'
            }} >
                <div className="d-print-none">
                    <div className="container-fluid">
                        <div className="">
                            <div className="row">
                                <input className="col-md-4 m-4 " type="date" value={date} placeholder="11/01/2021" aria-label="date" onChange={(e) => setDate(e.target.value)} />
                                <button className="col-md-2 m-4 btn btn-outline-success" type="submit" onClick={() => filterBydate(date, localID)}>گەڕان</button>
                            </div>
                            <label for="name" className="form-label">کڕیار</label>
                            <Select defaultValue={groupsopt[1]} onChange={(e) => setlocalID(e.value)} options={groupsopt} />

                        </div>
                    </div>
                </div>

                <SaleList sales={sales} addReSell={addReSell} />

            </div>
        </>
    )
}

export default Sales
