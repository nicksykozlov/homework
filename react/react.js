
class SuperString extends React.Component {

    constructor(props) {
      super(props);
      this.state = {text:props.message};
      this.click = this.click.bind(this);  
      
    }

   click(){

    this.setState(state =>({
        text : this.state.text + "!"
    }))

   }
  
    render() {
      return <p onClick = {this.click}>{this.state.text}</p>;
    }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.Fragment>
<SuperString message = "dsfsfdsfdsfsdf"/>
<SuperString message = "dsfsfdsfssssssssssdsfsdf"/>
<SuperString message = "ssdsdfdsf"/>
<SuperString message = "222222"/>

    </React.Fragment>
);

