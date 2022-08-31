class Todolist extends React.Component{
    constructor (props){
        super(props)
        this.state={
            text:""
        }
        this.onAddItem=this.onAddItem.bind(this)
    }

    onAddItem (item){
        this.setState(state=>()
        console.log(item);
    }
    
    render(){
        return(
            <div>
            <p></p>
            <Sun onAddItem={this.onAddItem}/>
            </div>
        )
        
    }
      
    
    };

class Sun extends React.Component{
constructor (props){
    super(props);
    this.state={
        item:"",
        
    }
   this.handleChange = this.handleChange.bind(this)
   this.onClick=this.onClick.bind(this)
};

    handleChange(event) {
    this.setState({item: event.target.value})
    
    };
    onClick(event){
        event.preventDefault();
        this.props.onAddItem(this.state.item)
        
                
      }

render(){
    return(
        <form onClick = {this.onClick}>
            <input type="text" onChange={this.handleChange}/>
            <input type="submit" />
        </form>
    )
}
 

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.Fragment>
    <Todolist/>
</React.Fragment>)