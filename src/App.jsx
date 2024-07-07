import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  let gradient1 = "linear-gradient(to top, #fbc2eb 0%,length #a6c1ee 100%)";
  
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8);
  const [numallow, setNumAllow] = useState(false);
  const [charallow, setCharAllow] = useState(false);
  let passref = useRef(null);
  let clickFunc = () =>{
    passref.current?.select();
    window.navigator.clipboard.writeText(password);
  }
  let passwordGenerator = useCallback( () =>{
    let pas = "";
    let str = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numallow) str+="0123456789"
    if (charallow) str+="@#$.&"
    for (let i = 1; i<=length; i++){
      let ran = Math.floor(Math.random() * str.length + 1)
      pas+=str.charAt(ran);
      
    }
    setPassword(pas);
    
    
  }, [length, numallow, charallow])
  useEffect( ()=>{
    passwordGenerator();
  },[length, numallow,charallow])

  return (
    <>
      <div className="h-screen w-screen bg-color1 flex p-[4rem] justify-center">
        <div className="h-[40vmin] w-[80vmin] bg-slate-700 text-white text-[1.2rem] flex flex-col items-center gap-8 p-4 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold">Password Generator</h2>
            <div className="flex">
                <input className='relative z-[0.5] w-[60vmin] outline-none text-[1.1rem] font-[600] text-orange-600 rounded-2xl p-4 overflow-hidden' 
                type="text" 
                value={password} 
                placeholder="Password" 
                id="passwd"
                ref={passref} 
                readOnly/>
                <button className='relative z-[1] right-5 w-[10vmin] bg-green-500 outline-none rounded-lg border-none text-lg font-bold cursor-pointer hover:bg-green-700' 
                id="copy"
                onClick={clickFunc}
                >Copy</button>
            </div>
            <div className="flex gap-3 text-[1.1rem] ">
                <input type="range" min="6" max="70" value={length} id="slider"
                onChange={(e)=>{
                  setLength(e.target.value)
                }}
                />
                <label>Length: {length}</label>
                <div className='flex content-center items-center gap-1' id="num">
                    <input type="checkbox"
                    defaultChecked={numallow}
                    onChange={()=>{
                      setNumAllow((prev)=>!prev)
                    }} 
                    />
                    <label >Numeric</label>
                </div>
                <div className="flex content-center items-center gap-1">
                    <input type="checkbox"
                    defaultChecked={charallow}
                    onChange={()=>{
                      setCharAllow((prev)=>!prev)
                    }}
                    />
                    <label >Special Character</label>                   
                </div>
                
            </div>

        </div>
    </div>
    </>
  )
}

export default App
