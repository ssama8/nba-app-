import React, {useState, useEffect} from "react"
import Option from "./components/options"
import logo from './logo.svg';
import './App.css';

function App() {
 
const [players, setPlayer]= useState()

  useEffect(()=>{
  console.log("test")
  getStats()
  .then(players=>{
   // console.log(players)
    //setPlayer(players)
    converttoArray(players)
    const dropDown = document.querySelector(".dropdown")
 
   getData(dropDown.value)

    
  })

 }, [])
 window.addEventListener("load", ()=>{
   console.log("reloaded")
   const testing = localStorage.getItem("players")
   console.log(JSON.parse(testing))
   const dropDown = document.querySelector(".dropdown")
   
   
 })
function setPLayerArr(arr){
  setPlayer(arr)

}
 //console.log(players)
 function converttoArray(players){
  let arr = []
 const check =  players.map((player,index)=>{
    const convert = Object.entries(player)
    console.log(convert[2][1])
   arr.push([convert[1][1], convert[2][1]])
     //)
  })

  setPlayer(arr)
  localStorage.setItem("players", JSON.stringify(arr))
  const dropdownValue = document.querySelector(".dropdown")

 }
//  const getOptions = (players)=>{
// setPlayer(players.map((player, index)=>{

//   return (
//     <option key ={index} value= {player.Name}>{player.Name}</option>
//   )
// }))
//  }

  async function getStats(){
    const test = await fetch('http://localhost:550')
    .then(data=> data.json())
    return test
  }
  const getData = (data) =>{
    console.log(data)
    let playerId; 
    if(players === undefined) {
      console.log(players)
      return 
    }
    const playersCopy = players;
    for(let i =0; i< playersCopy.length; i++){
      if(playersCopy[i][0] === data ){
        playerId = playersCopy[i][1]
        break
      }
    }
    console.log(playerId)
    getPlayer(playerId)

  }
  async function getPlayer(id){
    const getPlayer = await fetch(`http://localhost:550/players/${id}`)
    .then(player=> player.json())
    .then(resp => {
      const image = document.querySelector(".App-logo")
      image.src = resp.image
    const paragraph = document.querySelector(".text")
    console.log(resp)
    paragraph.textContent = resp.Name
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img  className="App-logo" alt="logo" />
        <p className = "text">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Option values = {players} getData = {getData}/> 

      </header>
    </div>
  );
}

export default App;
