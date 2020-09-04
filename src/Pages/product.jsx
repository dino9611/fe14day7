import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import {tambahangkaAction,kurangAction} from './../redux/actions'


const Product=(props)=>{

  const [data,setdata]=useState([])
  const [datakabupaten,setdatakabupaten]=useState([])
  const [datakecamatan,setdatakecamatan]=useState([])
  const [datakelurahan,setdatakelurahan]=useState([])
  const [datapilihan,setdatapilihan]=useState({provinsi:'0',kab:'0',kec:'0',kel:'0'})
  const [angka,setangka]=useState(1)
  useEffect(()=>{
    axios.get(`https://x.rajaapi.com/MeP7c5ne${props.datatoken}/m/wilayah/provinsi`)
    .then((res)=>{
      console.log(res.data.data)
      setdata(res.data.data)
      props.gantidata(res.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

    const renderProvinsi=()=>{
      // if(data.length==0){
      //   return <option value="">Loading...</option>
      // }
      return data.map((val)=>{
        return(
          <option key={val.id} value={val.id}>{val.name}</option>
        )
      })
    }
    const renderKabupaten=()=>{
      // if(data.length==0){
      //   return <option value="">Loading...</option>
      // }
      return datakabupaten.map((val)=>{
        return(
          <option key={val.id} value={val.id}>{val.name}</option>
        )
      })
    }
    const renderKecamatan=()=>{
      // if(data.length==0){
      //   return <option value="">Loading...</option>
      // }
      return datakecamatan.map((val)=>{
        return(
          <option key={val.id} value={val.id}>{val.name}</option>
        )
      })
    }

    const renderKelurahan=()=>{
      // if(data.length==0){
      //   return <option value="">Loading...</option>
      // }
      return datakelurahan.map((val)=>{
        return(
          <option key={val.id} value={val.id}>{val.name}</option>
        )
      })
    }

    const onChangeProvince=(e)=>{
      axios.get(`https://x.rajaapi.com/MeP7c5ne${props.datatoken}/m/wilayah/kabupaten?idpropinsi=${e.target.value}`)
      .then((res)=>{
        setdatakabupaten(res.data.data)
        // setdatapilihan({...datapilihan,kab:'0',kel:'0',kec:'0'})
        // setdatapilihan({...datapilihan,provinsi:e.target.value})
      }).catch((err)=>{
        console.log(err)
      })
    }

    const onChangeKabupaten=(e)=>{
      axios.get(`https://x.rajaapi.com/MeP7c5ne${props.datatoken}/m/wilayah/kecamatan?idkabupaten=${e.target.value}`)
      .then((res)=>{
        setdatakecamatan(res.data.data)
      }).catch((err)=>{
        console.log(err)
      })
    }
    const onChangeKecamatan=(e)=>{
      axios.get(`https://x.rajaapi.com/MeP7c5ne${props.datatoken}/m/wilayah/kelurahan?idkecamatan=${e.target.value}`)
      .then((res)=>{
        setdatakelurahan(res.data.data)
      }).catch((err)=>{
        console.log(err)
      })
    }
    const tambahangka=()=>{
      props.tambahangkaAction(angka)
    }
    const kurangangka=()=>{
      props.kurangAction()
    }
    return(
      <div className='ml-3'>
        <select defaultValue={datapilihan.provinsi} onChange={onChangeProvince} >
          <option value="0" hidden>Pilih Provinsi</option>
          {renderProvinsi()}
        </select>
        <select defaultValue={datapilihan.kab}  onChange={onChangeKabupaten} >
          <option value="0" hidden>Pilih kabupaten</option>
          {renderKabupaten()}
        </select>
        <select defaultValue={datapilihan.kec} onChange={onChangeKecamatan} >
          <option value="0" hidden>Pilih kecamatan</option>
          {renderKecamatan()}
        </select>
        <select defaultValue={datapilihan.kel} >
          <option value="0" hidden>Pilih kelurahan</option>
          {renderKelurahan()}
        </select>
        <div className='mt-3'>
          <h1>
            {props.bebas} 
          </h1>
          <input type="number" value={angka} onChange={(e)=>setangka(parseInt(e.target.value))}/>
          <button className="btn btn-danger" onClick={kurangangka} >-</button>
          <button className="btn btn-success" onClick={tambahangka}>+</button>
          <textarea id="" cols="30" rows="10"></textarea>
        </div>
      </div>
    )
}

const MapstatetoProps=(state)=>{
  return {
    bebas:state.angka,

  }
}

export default connect(MapstatetoProps,{tambahangkaAction,kurangAction})(Product)