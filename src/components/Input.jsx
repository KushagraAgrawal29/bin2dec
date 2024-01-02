import React from 'react'
import PropTypes from 'prop-types'

const Input = ( {inputBin,handleBinaryInput} ) => {
  return (
    <div className='w-full'>
      <input
        name="binarynum"
        type="text"
        minLength="1"
        maxLength="20"
        value={inputBin.value}
        onChange={(e) => handleBinaryInput(e)}
        autoFocus
        className="w-full max-w-80% px-3 py-2 font-mono text-2xl text-white border border-white outline-none bg-transparent"
      />
    </div>
  )
}

Input.propTypes = {
    value:PropTypes.string,
}

export default Input
