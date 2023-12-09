// components/GetDataButton.js
import React from 'react';
import axios from 'axios';

export async function getStaticProps () {
    

}

const GetDataButton = () => {
    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/sample', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });
            const result = response.data;
            console.log(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return <button onClick={getData}>get Data</button>;
};

export default GetDataButton;