const React = require("react");

class Cub extends React.Component{
    constructor(){
    super();
    this.state={
        x:0,
        y:0
        
    }
   
}
    move(deltaX,deltaY){
        this.setState(state =>({
            x:state.x + deltaX,
            y:state.y + deltaY
        } 
        ))   
    }

render(){
    return(
        <div style={{left:this.state.x, top:this.state.y}}>
            <button onClick={()=>this.move(-10,0)}>left</button>
            <button onClick={()=>this.move(10,0)}>right</button>
            <button onClick={()=>this.move(0,-10)}>top</button>
            <button onClick={()=>this.move(0,10)}>down</button>
            </div>
    )
}
   }

   module.exports = Cub;