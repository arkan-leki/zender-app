import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Select from 'react-select'

const LocalEdit = ({ local, EditLocal,addOld , group}) => {

    const [naw, setName] = useState(local.name)
    const [phone, setPhone] = useState(local.phone)
    const [code, setCode] = useState(local.code)
    const [address, setAddress] = useState(local.address)
    const [owner, setOwner] = useState(local.owner_name)
    const [exchange, setExchange] = useState(local.exchange)
    const [regionID, setRegionID] = useState(local.region)
    const [options, setOptions] = useState([])
    const [loan, setLoan] = useState('')
    const [groupz, setGroupz] = useState()
    const [groups, setGroups] = useState([])

    const fetchData = () => {
        axios.get("http://127.0.0.1:8000/api/region/").then(res => {
            setOptions(res.data.map((city) => ({ value: city.id, label: city.name })))
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

    const fetchGroup = () => {
        axios.get("http://127.0.0.1:8000/api/group/").then(res => {
            setGroups(res.data.map((city) => ({ value: city.id, label: city.name })))
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        fetchGroup();
    }, []);

    return (
        <div>
            <form >
                <h1>زانیاری کڕیار</h1>
                <label for="name" className="form-label">فرۆشگا</label>
                <input placeholder={local.name} type="text" id="name" className="form-control" aria-describedby="name" value={naw} onChange={(e) => setName(e.target.value)} />
                <label for="code" className="form-label">کۆد</label>
                <input placeholder={local.code} type="text" id="code" className="form-control" aria-describedby="code" value={code} onChange={(e) => setCode(e.target.value)} />
                <label for="address" className="form-label">ناونیشان</label>
                <input placeholder={local.address} type="text" id="address" className="form-control" aria-describedby="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                <label for="phone" className="form-label">ژمارەی موبایل</label>
                <input placeholder={local.phone} type="text" id="phone" className="form-control" aria-describedby="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <label for="owner" className="form-label">خاوەنی کار</label>
                <input placeholder={local.owner_name} type="text" id="owner" className="form-control" aria-describedby="owner" value={owner} onChange={(e) => setOwner(e.target.value)} />
                <label for="loan" className="form-label">قەرزی کۆن</label>
                <input placeholder={local.exchange} type="number" id="loan" className="form-control" aria-describedby="loan" value={exchange} onChange={(e) => setExchange(e.target.value)} />
                <label for="name" className="form-label">ناوچەکان</label>
                <Select defaultValue={options[1]} onChange={(e) => setRegionID(e.value)} options={options} />
                <button className="btn btn-info" type="button" onClick={() => EditLocal(local.id,
                    {
                        "name": naw,
                        "code": code,
                        "address": address,
                        "phone": phone,
                        "owner_name": owner,
                        "exchange": exchange,
                        "region": regionID,
                        "status": false,
                        "zip_code": "",
                        "state": "",
                        "country": "",
                        "image": null,
                    }
                )}
                >خەزن</button>
            </form>
            <hr />

            {group!=""? <form >
                <h1>قەرزی کۆن</h1>
                <Select value={groupz} onChange={(e) => setGroupz(e.value)} options={groups} />
                <label for="loan" className="form-label">بری قەرز </label>
                <input type="number" id="loan" className="form-control" aria-describedby="loan" value={loan} onChange={(e) => setLoan(e.target.value)} />
                <button className="btn btn-info" type="button" onClick={() => addOld(
                    {
                        "group": group,
                        "income": '0',
                        "loan": loan,
                        "local": 1,
                    }
                )}
                >زیادکردن</button>
            </form>:<></>}
        </div>
    )
}

export default LocalEdit
