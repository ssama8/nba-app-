import React, {useState} from 'react'

const Options = ({values, getData}) => {
 // const [player, setPlayer] = useState()
 // console.log(values[0])
 const [dropdownValue, setDropDownValue] = useState("")

 const tests = ["michael", "JOhn", "James", "Kyle"]
  function test(){
    if(values === undefined) return 
    return values.map((value, index)=>{
      // console.log(value)
      return (
      <option key = {value[1]} value = {value[0]} >{value[0]}</option>
      )
    })
  } 
  window.addEventListener("load", ()=>{
 const dropdown = document.querySelector(".dropdown")

  //  console.log(dropdownValue)
  })
  const updateState = ()=>{
 const dropdown = document.querySelector(".dropdown")


    getData(dropdown.value)
  }

  return (
    <select className = "dropdown" onChange={()=> updateState()}>
      {test()}
    </select>
  )
}

export default Options