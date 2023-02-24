import React, { useEffect } from 'react'
import TypeWriterEffect from 'react-typewriter-effect'

const TypeWriter = ({ texts }) => {
  console.log(texts)
  return (
    <TypeWriterEffect
      startDelay={2000}
      cursorColor="#3F3D56"
      multiText={texts}
      multiTextDelay={5000}
      typeSpeed={30}
      multiTextLoop={true}
    />
  )
}

export default TypeWriter
