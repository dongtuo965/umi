import React, { useEffect, useRef, useMemo } from 'react';
// @ts-ignore
import {getData} from '@/request/api.js'
const User = (props:any) => {
  console.log(props,'user');
  useEffect(()=>{
    getDataRes()
  },[])

  const getDataRes = ()=>{
    getData().then((res: any)=>{
      console.log(res)
    }).catch((err: any)=>{
      console.log(err)
    })
  }


  return (
    <div>
      User Page
    </div>
  );
};

export default User;
