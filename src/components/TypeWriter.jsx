import React, { useEffect } from 'react'
import { TypewriterUtil } from '../util/TypeWriterUtil';

export const TypeWriter = ({ texts }) => {
  useEffect(() => {
    const data = document ?? null;
    if(data){
      new TypewriterUtil({texts: texts, element: data.querySelector('.react-typewriter-text')}).start()
    }
  },[])
  return (
    <div className="react-typewriter-text"></div>
  )
}

