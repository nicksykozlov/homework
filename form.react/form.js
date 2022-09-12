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



// class Reservation extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         item: [],
//         newItem:'',
//       };
      
      
//     }
  
//     addItem(event){
//       event.preventDefault();
//       const item = this.state.item;
//       item.push(this.state.newItem);
//       this.setState({newItem:''});
//       this.setState({item});
//     };

//     render() {
//       return (
//         <div>
//             <ul >
//               {this.state.item.map((el,index)=> <li key ={index}>{el}</li>)}
//             </ul>
//             <form onSubmit={(event)=> this.addItem(event)}>
//           <input type="url" onChange ={(event)=>this.setState({newItem: event.target.value})}/>
//          <button type="submit">ADD</button>
//         </form>
//         </div>
        
//       );
//     }
//   }
//   const chek = ReactDOM.createRoot(document.getElementById("chek"));
//   chek.render(<Reservation/>);

//   /// добавлнеие в H2 данных которые вводит пользователь в инпут

//   class UserData extends React.Component {
//     constructor(props){
//       super(props);
//       this.state = {
//         user: '',
//      };
     
//     }
//     render() {
//       return(
//         <div>
//           <h2>{this.state.user}</h2>// сюда приходит пустой обект с конструктора
//           <input type='text' placeholder="введите текст" onChange = {event =>this.setState({user: event.target.value})}/>//при помощи setState стуимся в гыук конструктора 
//         </div>

//       )
//     }
//   };
//   const data = ReactDOM.createRoot(document.getElementById('data'));
//   data.render(<UserData/>)


//   - Создайте форму
// - Добавьте в нее `input` для ввода `url` картинки
// - Добавьте кнопку `input type='submit'`
// - Добавьте пустой `div`
// - При отправке формы нужно:
//     - Взять введенный `url` и вставить в `div` картинку с этим `url`
//     - Если картинка не грузится вывести в `div` сообщение об ошибке

class NewImg extends React.Component{
constructor(props){
  super(props);
  this.state = {
    url: "",
    img: "",
    error:''
   

  }
  this.handleChange = this.handleChange.bind(this);
  this.onClick = this.onClick.bind(this);

};

handleChange(event) {

  this.setState({img: event.target.value})
   
 
  event.preventDefault();
  
  }

onClick(event){
      
  this.setState({url: this.state.img})///присвоение только через setState
             
  event.preventDefault();
   
}
load(){
  this.setState({error:''})
  
}
loadFailed(){
  this.setState({error:"kdhfsgkhfdkglj"})
}


render(){
 
  
  return(
    <div>
    <form >
      <input type="url" placeholder = "введите url картинки" onChange={this.handleChange}  />

      <input type='submit' onClick = {this.onClick}/>
    </form>
    <div>
   
      </div>
      
      <img src={this.state.url}
      onLoad={()=>this.load()}
      onError={()=>this.loadFailed()}
      />
      <p>{this.state.error}</p>
      
    </div>
  )
};

}

const img = ReactDOM.createRoot(document.getElementById('img'));
img.render(<NewImg/>)


