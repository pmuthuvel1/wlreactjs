import React , { useState, useEffect, useMemo } from 'react';
import { useTable } from 'react-table';
import { useForm } from 'react-hook-form';
import { Redirect } from "react-router-dom";

import axios from "axios";

import {FIXED_CREATE_URI,getApiUrl} from './constants';

function Fixed() {

    const { register, handleSubmit , formState: { errors }} = useForm();
      
    const [fixedData, setFixedData] = useState([]);
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
  
      const urlValue = getApiUrl(FIXED_CREATE_URI);
      alert(urlValue);
      const response = await fetch( urlValue , requestOptions);
      const jsonData = await response.json();
      console.log(jsonData);
      setFixedData(jsonData);
      setShowResult(true);

    }

    return (
        <div>
            { !showResult ? 

        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Fixed Whitelist Configuration</h3>

            <div className="form-group">
                <label>Account Number</label>
                <input className="form-control" placeholder="Enter AccountNumber" {...register("accountNumber", { required: true })} />
                {errors.accountNumber && <span>Account  field is required</span>}

            </div>
            
            <button type="submit" className="btn btn-primary btn-block">Submit</button>

        </form>

           :
            <div>
                <h1>{fixedData.fixedId}</h1>
                <h1>{fixedData.accountNumber}</h1>
                <h1>{fixedData.createdOn}</h1>
                <h1>{fixedData.createdBy}</h1>
                <h1>{fixedData.updatedOn}</h1>
                <h1>{fixedData.updatedBy}</h1>
                <h1>{fixedData.deletionStatus}</h1>
                </div>
           }

        </div>

    )
}

export default Fixed;

