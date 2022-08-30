class SummaForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {first: 0,
                    second:0,
                    summ:0,
                    flag: true};
      
  
      this.handleChangeFirst = this.handleChangeFirst.bind(this);
      this.handleChangeSecond = this.handleChangeSecond.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.checkBox = this.checkBox.bind(this)
    }
  
    handleChangeFirst(event) {
      this.setState({first:Number.parseInt(event.target.value)});
             
    }
    handleChangeSecond(event) {
        
        this.setState({second:Number.parseInt(event.target.value)})                
      }

  
    handleSubmit(event) {
        if(this.state.flag){
            const summ = (this.state.first + this.state.second);
            this.setState({summ})
           }
           else{
            const summ = (this.state.first - this.state.second);
            this.setState({summ})
           }
      event.preventDefault();
    }

    checkBox(event){
        this.setState({flag: event.target.checked})
    }
    
    
  
    render() {
      return (
        <div>
        <form onSubmit={this.handleSubmit} >
          <label>
            
            <input type="number" value={this.state.first.value} onChange={this.handleChangeFirst} />
          </label>

          <label>
            
            <input type="number" value={this.state.second.value} onChange={this.handleChangeSecond} />
          </label>

          <input type="submit" value="Отправить" />
          <input type="checkbox" onChange={this.checkBox} checked={this.state.flag} /> // обязательно наложить обработчик и состояние cheked
          
        </form>
        <p>{this.state.summ}</p>
    
        </div>
      );
    }
  }
  const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<SummaForm/>);



class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        item: [],
        newItem: ""
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      this.setState({newItem: event.target.value})
    }
  
    render() {
      return (
        <div>
            <ul >{this.state.item.map((el,index)=> <li key ={index}>{el}
                </li>)}
            </ul>
            <form >
          
          <label>
            
            <input
             
              type="text"
             
              onChange={this.handleInputChange}
            
               />
          </label>
          <button>ADD</button>
        </form>
        </div>
        
      );
    }
  }
  const chek = ReactDOM.createRoot(document.getElementById("chek"));
  chek.render(<Reservation/>);