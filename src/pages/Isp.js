import React , { useState, useEffect, useMemo } from 'react';
import { useTable } from 'react-table';
import { useForm } from 'react-hook-form';
import { Redirect } from "react-router-dom";

import axios from "axios";

import {ISP_CREATE_URI,getApiUrl} from './constants';

function Isp() {
    const { register, handleSubmit , formState: { errors }} = useForm();
      
    const [ispData, setIspData] = useState([]);
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
  
      const urlValue = getApiUrl(ISP_CREATE_URI);
      alert(urlValue);
      const response = await fetch( urlValue , requestOptions);
      const jsonData = await response.json();
      console.log(jsonData);
      setIspData(jsonData);
      setShowResult(true);

    }

    return (
        <div>
            { !showResult ? 

        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Fixed Whitelist Configuration</h3>

            <div className="form-group">
                <label>UserId</label>
                <input className="form-control" placeholder="Enter UserId" {...register("userId", { required: true })} />
                {errors.accountNumber && <span>userId  field is required</span>}
            </div>
            <div className="form-group">
                <label>Domain Name</label>
                <input className="form-control" placeholder="Enter DomainName" {...register("domainName", { required: true })} />
                {errors.accountNumber && <span>domainName  field is required</span>}
            </div>
            
            <button type="submit" className="btn btn-primary btn-block">Submit</button>

        </form>

           :
            <div>
                <h1>{ispData.ispId}</h1>
                <h1>{ispData.userId}</h1>
                <h1>{ispData.domainName}</h1>
                <h1>{ispData.createdOn}</h1>
                <h1>{ispData.createdBy}</h1>
                <h1>{ispData.updatedOn}</h1>
                <h1>{ispData.updatedBy}</h1>
                <h1>{ispData.deletionStatus}</h1>
                </div>
           }

        </div>

    )
}

export default Isp;

