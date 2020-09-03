import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'

const token='KaQbfZtYkRoZUwh6XsgkwVC1g1oNmMQmHpfKNpu5Tc6WbFr2KF'

const Product=()=>{
  const [data,setdata]=useState([])
  useEffect(()=>{
    axios.get(`https://x.rajaapi.com/MeP7c5ne${token}/m/wilayah/provinsi`)
    .then((res)=>{
      console.log(res.data.data)
      setdata(res.data.data)
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
    return(
      <div className='ml-3'>
        <select defaultValue='0'  >
          <option value="0" hidden>Pilih Provinsi</option>
          {renderProvinsi()}
        </select>
        <select defaultValue='0' >
          <option value="0" hidden>Pilih kabupaten</option>
          {/* {renderProvinsi()} */}
        </select>
        <select defaultValue='0' >
          <option value="0" hidden>Pilih kecamatan</option>
          {/* {renderProvinsi()} */}
        </select>
        <select defaultValue='0' >
          <option value="0" hidden>Pilih kelurahan</option>
          {/* {renderProvinsi()} */}
        </select>
      </div>
    )
}

export default Product