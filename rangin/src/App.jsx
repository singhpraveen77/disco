import { useState } from 'react'


function App() {
  const [color, setcolor] = useState("olive")

  function disco(){
    let a=["red","yellow","blue","green","olive","maroon","black"];
    let ind=0
    let fun=  setInterval(()=>{
          setcolor(a[ind++])
          ind%=7
      },50)

    
  }

  return (
    
    <>
      <div style={{
        backgroundColor:color,
        height:"90vh",
        width:"100vw",
        zIndex:"-999"


      }}></div>
      <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:'10px',
        opacity:'30',
        // backgroundColor:'red',
        position:'relative',
        top:'50',
        left:'50'
      }}>
      <button onClick={()=>setcolor('red')}>red</button>
      <button onClick={()=>setcolor('yellow')}>yellow </button>
      <button onClick={()=>setcolor('blue')}>blue</button>
      <button onClick={()=>setcolor('green')}>green</button>
      <button onClick={disco}>disco</button>

      </div>
      
      
    </>
  )
}

export default App
