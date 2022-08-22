import React from 'react';
import { Redirect } from 'umi';
const Auth = (props:any) => {
  console.log(props);
  const isLogin = false
  if(!isLogin){
    return (
      <div>
        {props.children}
      </div>
    );
  }else {
    console.log('跳登录')
    return (  <Redirect to='/login' />)
  }
};

export default Auth;

