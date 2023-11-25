'use client'
import React from 'react'
import {useState} from 'react';

const Sample = () => {

    const [token, setToken] = useState('');
    const [data, setData] = useState(null);

    const getData = async () => {
        try {
            const yourToken = "ssssssss";
            const response = await fetch('http://localhost:8000/api/sample', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + yourToken,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
        });
            const result = await response.json();
            setData(result);
            console.log(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }
  return (

    <div>
        <button onClick={getData}>get Data</button>
        <div>Get Data</div>
        {
            data ?? <p>{data}</p>
        }
      
    </div>
  )
}
export default Sample;