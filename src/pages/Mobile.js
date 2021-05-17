import React , { useState, useEffect, useMemo } from 'react';
import { useTable } from 'react-table';
import { useForm } from 'react-hook-form';
import { Redirect } from "react-router-dom";

import axios from "axios";

import {MOBILE_CREATE_URI,getApiUrl} from './constants';



function Mobile() {

    const { register, handleSubmit , formState: { errors }} = useForm();
      
    const [mobData, setMobData] = useState([]);
    const [showLoading, setShowLoading] = useState(true);
    const [showResult, setShowResult] = useState(false);

    const onSubmit  = async (data) => {
      //alert(JSON.stringify(data));
      console.log(JSON.stringify(data));
      setShowResult(false);
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
      };
  
      const urlValue = getApiUrl(MOBILE_CREATE_URI);
      alert(urlValue);
      const response = await fetch( urlValue , requestOptions);
      const jsonData = await response.json();
      console.log(jsonData);
      setMobData(jsonData);
      setShowResult(true);

      /*
      await axios.post(urlValue, data)
        .then(response => {
            console.log("Status: ", response.status);
            console.log("Data: ", response.data);
            alert(response.data);
        }).catch(error => {
            console.error('Something went wrong!', error);
        });
        
        useEffect(() => {
            setShowLoading(false);
            const fetchData = async () => {
             const result = await axios(urlValue);
             setData(result.data);
             alert(result.data);
             setShowLoading(false);
            };      
            fetchData();
           }, []);
           */

    }

    

    return (
        <div>
            { !showResult ? 

        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Mobile Whitelist Configuration</h3>

            <div className="form-group">
                <label>MSISDN</label>
                <input className="form-control" placeholder="Enter MSISDN" {...register("msisdn", { required: true })} />
                {errors.msisdn && <span>MSISDN field is required</span>}

            </div>

            <div className="form-group">
                <label>Imsi</label>
                <input  className="form-control" placeholder="Enter Imsi" {...register("imsi", { required: true })}  />
                {errors.imsi && <span>IMSI field is required</span>}
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>

        </form>

           :
           <div>
                <h1>{mobData.mobileId}</h1>
                <h1>{mobData.msisdn}</h1>
                <h1>{mobData.imsi}</h1>
                <h1>{mobData.createdOn}</h1>
                <h1>{mobData.createdBy}</h1>
                </div>
           }

        </div>
        

    )
}

export default Mobile;


