import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Display from "./components/Display";

function App() {
  const [inputBin,setInputBin] = useState({
    value:'',
    binary:false,
  })

  const [decNum,setDecNum] = useState()

  useEffect(() => {
    if(inputBin.value.length > 0 && inputBin.binary){
      setDecNum(convertToDec(inputBin.value))
    }
    else if(inputBin.value.length === 0){
      setDecNum('')
    }
  },[inputBin])

  const regExpNotBin = /[^01]/

  const handleBinaryInput = (e) => {
    const value = e.target.value
    setInputBin({
      value,
      binary:!regExpNotBin.test(value)
    })
  }

  const convertToDec = (num) => {
    let convertedNum = 0;
    num.split('').reverse()
    .map((item,index) => {
      return item === '1' && (convertedNum += Math.pow(2,index))
    })
    return convertedNum
  }

  const Alert = () => {
    if (inputBin.value.length > 0) {
      if (!inputBin.binary) {
        return (
          <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>
            You entered a non-binary digit (please enter only 0 or 1).
          </span>
        )
      } else if (inputBin.binary) {
        return (
          <span style={{ color: '#27ae60', fontWeight: 'bold' }}>
            Here is your decimal!
          </span>
        )
      } else {
        return ' '
      }
    }
    return null
  }

  return (
    <div className="flex flex-col flex-wrap justify-center items-center h-screen text-center font-serif font-helvetica text-base leading-6 bg-gradient-to-br from-black via-black to-transparent bg-no-repeat bg-center bg-fixed text-white">
      <div>
        <span className="inline-block font-mono opacity-5 text-3xl">000</span>
        <h1 className="inline-block m-0 p-0 font-mono text-3xl">Bin2Dec</h1>
        <span className="inline-block font-mono opacity-5 text-3xl">000</span>
      </div>
      <div>
        <p className="my-6">
          Enter a{" "}
          <a
            href="https://en.wikipedia.org/wiki/Binary_number"
            target="_blank"
            rel="noopener noreferrer"
            className="text-no-underline bg-green-500 bg-opacity-20 transition duration-200"
          >
            binary number
          </a>
          , get a{" "}
          <a
            href="https://en.wikipedia.org/wiki/Decimal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-no-underline bg-green-500 bg-opacity-20 transition duration-200"
          >
            decimal
          </a>{" "}
          conversion
          <br/>
          <Alert/>
        </p>

        <Input inputBin={inputBin} handleBinaryInput={handleBinaryInput}/>
        <Display inputBin={inputBin} decNum={decNum}/>
      </div>
    </div>
  );
}

export default App;
