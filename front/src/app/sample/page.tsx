import { getUser } from '@/userAPI';
import React from 'react'

export default  async function page()  {
    const users = await getUser();
  return (
    <div>
        {/* <button onClick={getData}>get Data</button> */}
        <div>Get Data</div>
        {/* {
            data ?? <p>{data}</p>
        } */}
      
    </div>
  )
}
