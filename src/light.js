function Light(props){
    let color = props.on?"white":"black";
    return <div onClick={props.click} style={{display: "inline-block", backgroundColor: color, width: "200px", height: "200px"}}>

    </div>
}

export default Light;