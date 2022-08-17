class Todos extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            items: [],
            
        };
        
    }
    

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => this.setState({items:data}))
        .catch(e=> console.error(e))
        .finally(()=>{
            this.setState({isLoading: false})
        })
    }
    removeItem(id){
        const items = this.state.items.filter(item =>item.id !== id);
        this.setState({items});
    }
    getRandomColor(){
       return "#" + Math.floor(Math.random()*16777215).toString(16);// разный цвет
    }
    changeColor(e, id){
        e.preventDefault();
        const items = this.state.items.map(item=>{
            if(item.id===id){
                item.color=this.getRandomColor()
                item.backgroundColor = this.getRandomColor()
            }
            return item;
        })
        this.setState({items})
    }

    render(){
        const loading = this.state.isLoading;
        return(
            <div>
                {loading && <h1> Loading</h1>}
                <ul>
                    {this.state.items.map(item => {
                     return <li 
                     style = {{backgroundColor:item.backgroundColor, color: item.color}}
                    onClick={()=>this.removeItem(item.id)}
                    onContextMenu={(e)=>this.changeColor(e, item.id)}
                    key ={item.id}>{item.title}</li>})}
                </ul>
            </div>
        )
    }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Todos/>)