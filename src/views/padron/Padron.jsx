import React, { useEffect, useState } from 'react';

import '../global.css'

import Header from '../../components/header/Header'



export default function Padron() {

  return (
    <div className='container-afiliado'>
    <div className='header'>
      <Header />
     </div>
    <div className='afiliado'>
      <div className='title'>
          <h3>Padron</h3>
      </div> 
      <div className='content'>
          aqui padron 
      </div>

    </div>
</div>
  )
}
