import React from "react";

const TextInput:React.FC<{value:string, inputChange:(event:any)=>void}> = ({value, inputChange}) => {
  return (
    <input onChange={inputChange} value={value}  />
  )
}

export default TextInput;