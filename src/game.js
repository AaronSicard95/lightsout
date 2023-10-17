import { useState } from "react"
import Light from "./light";
let won = false;

const Game = (props) =>{
    const [lights, setLights] = useState(props.setting);
    const [showwin, setShowwin] = useState("none");

    const checkWin=(lights)=>{
        if(!lights.some(i=>i.includes(true))){
            console.log(lights);
            won = true;
            setShowwin("block");
        }
    }

    const clickLight = (location) =>{
        console.log(won);
        if(won==true){
            return;
        }
        const neighbors = [
            [location[0], location[1]],
            [location[0]+1, location[1]],
            [location[0]-1, location[1]],
            [location[0], location[1]+1],
            [location[0], location[1]-1]
        ]
        let newLights = lights.map((l,index)=>(
            lights[index].map((light,i)=>{
                if(neighbors.some(e=>(e[0]==index&&e[1]==i))){
                    return light?false:true;
                }else{
                    return light;
                }
            }))
        )
    setLights(newLights);
    checkWin(newLights);
    }
    
        
        
    //{lights.map((light,ind)=>(lights[ind].map((l,i)=>(<Light on={lights[ind][i]} click={evt=>clickLight([ind,i])}/>))))}
    return<div>
        <h1 style={{display: showwin}}>YOU WON!</h1>
        <br/>
        {lights[0].map((l,i)=>(<Light on={lights[0][i]} click={evt=>clickLight([0,i])}/>))}
        <br/>
        {lights[1].map((l,i)=>(<Light on={lights[1][i]} click={evt=>clickLight([1,i])}/>))}
        <br/>
        {lights[2].map((l,i)=>(<Light on={lights[2][i]} click={evt=>clickLight([2,i])}/>))}
    </div>
}

export default Game;