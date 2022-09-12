// class Todolist extends React.Component{
//     constructor (props){
//         super(props)
//         this.state={
//             text:""
//         }
//         this.onAddItem=this.onAddItem.bind(this)
//     }

//     onAddItem (item){
//         this.setState(state=>()
//         console.log(item);
//     }
    
//     render(){
//         return(
//             <div>
//             <p></p>
//             <Sun onAddItem={this.onAddItem}/>
//             </div>
//         )
        
//     }
      
    
//     };

// class Sun extends React.Component{
// constructor (props){
//     super(props);
//     this.state={
//         item:"",
        
//     }
//    this.handleChange = this.handleChange.bind(this)
//    this.onClick=this.onClick.bind(this)
// };

//     handleChange(event) {
//     this.setState({item: event.target.value})
    
//     };
//     onClick(event){
//         event.preventDefault();
//         this.props.onAddItem(this.state.item)
        
                
//       }

// render(){
//     return(
//         <form onClick = {this.onClick}>
//             <input type="text" onChange={this.handleChange}/>
//             <input type="submit" />
//         </form>
//     )
// }
 

// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// <React.Fragment>
//     <Todolist/>
// </React.Fragment>)


// сделать инпут и чек бокс и кнопку. прин нажатии на кнупку текс 
// добовляется в ли, при нажатии не чекбокс текс меняется спараво на лево


// class App extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {text : '', isReversed: false};
//         this.changeText = this.changeText.bind(this);
//     }
//     changeText(value){
//         this.setState({text: value});
//     }
//     render(){
//         let text = this.state.text;
//         if(this.state.isReversed){
//             text = text.split('').reverse().join('');
//         }
//         return (
//             <React.Fragment>
//                 <input
//                     type='checkbox'
//                     checked={this.state.isReversed}
//                     onChange={(e) => this.setState({isReversed: e.target.checked})}/>
//                 <p>{text}</p>
//                 <CustomInput onChangeText={this.changeText} />
//             </React.Fragment>
//         )
//     }
// }
// class CustomInput extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {value:''}
//         this.submitForm = this.submitForm.bind(this);
//     }
//     submitForm(event){
//         event.preventDefault();
//         this.props.onChangeText(this.state.value);
//         this.setState({value: ''});
//     }
//     render(){
//         return (
//             <form onSubmit={this.submitForm}>
//                 <input
//                     type="text"
//                     name="" id=""
//                     value={this.state.value}
//                     onChange={(e)=> this.setState({value: e.target.value})}
//                 />
//                 <input type="submit" value="Add"/>
//             </form>
//         )
//     }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App/>
// );


// удаление и добавление с тремя компонентами

// class List extends React.Component {
//     constructor(props) {
//         super(props);
//         this.supeRemove = this.supeRemove.bind(this);
//     }
//     supeRemove(item){
//         this.props.onRemove(item);
//     }
//     render() {
//         return (
//             <ul>
//                 {this.props.data.map( (item, index) => <Element onRemove={this.supeRemove} key={index} data={item}/>)}
//             </ul>
//         );
//     }
// }
// class Element extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     remove(){
//         this.props.onRemove(this.props.data)
//     }
//     render() {
//         return (
//             <li>{this.props.data} <button onClick={()=>this.remove()}>Remove</button></li>
//         );
//     }
// }
 
// class TodoList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {items:[
//                 'item 1',
//                 'item 2',
//                 'item 3'
//             ]}
//         this.addItem = this.addItem.bind(this);
//         this.superSuperRemove = this.superSuperRemove.bind(this);
//     }
//     addItem(item){
//         this.setState(state => ({items: [...state.items, item]}))
//         console.log(item);
//     }
//     superSuperRemove(item){
//         this.setState(state => ({items: state.items.filter(e => e !== item)}))
//     }
//     render() {
//         return (
//             <React.Fragment>
//                 <List onRemove={this.superSuperRemove} data={this.state.items}/>
//                 <Form onAddItem={this.addItem}/>
//             </React.Fragment>
//         );
//     }
// }
// class Form extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {item:''}
 
//     }
//     addItem(e){
//         e.preventDefault();
//         this.props.onAddItem(this.state.item)
//         this.setState({item:''})
//     }
//     render() {
//         return (
//             <form onSubmit={(e)=>this.addItem(e)}>
//                 <input
//                     type="text"
//                     value={this.state.item}
//                     onChange={(e) => this.setState({item:e.target.value})}
//                 />
//                 <input type="submit" value="Send"/>

//             </form>
//         );
//     }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <TodoList/>
// );


// Создайте список ul > li из 15 элементов. Заполните каждый цифрой он 1 до 15. Добавите обработчики событий, чтобы

// при клике левой кнопкой мыши цифра в li установливалась исходя из суммы 2 соседних элементов li
// при клике праквой кнопкой мыши цифра в li устанавливалась произведению 2 соседних элементов li

// class List extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
           
//         }
//     }
    
   
    
// render (){
//     return(
//     <ul>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//         <li>4</li>
//         <li>5</li>
//         <li>6</li>
//         <li>7</li>
//         <li>8</li>
//         <li>9</li>
//         <li>10</li>
//         <li>11</li>
//         <li>12</li>
//         <li>13</li>
//         <li>14</li>
//         <li>15</li>
//     </ul>
//     )
// }
    
// };


// Вторая попытка 

// function Li(props){
//     const li = [
        
//     ];
//     for (let i = 1; i<=15; i++){
//         li.push(i);
//     }

//     let lis = li.map((li, index) => (
//         <li key={index}>
//             {li}
//         </li>
//     ))
//     return
    
//     <ul >{lis}</ul>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <Li/>
// );

//  class Mouse extends React.Component{
// constructor(props){
//     super(props);
//     this.state={

//     };
  
//     }
//  } 


// сделать инпут и чек бокс и кнопку. прин нажатии на кнупку текс 
// добовляется в ли, при нажатии не чекбокс текс меняется спараво на лево

// класс LI делает список из 15 элементов
class Li extends React.Component{
    constructor(props) {
        super(props);
        this.state = {li : []};

        // this.changeText = this.changeText.bind(this);
    }

    // changeText(value){
    //     this.setState({text: value});
    // }
    render(){
        
        let lis = this.state.li;
        for (let i = 1; i<=15; i++){
            lis = this.state.li.push(i);
            
        }
        return (
            <React.Fragment>
                <ul>
                {this.state.li.map((el,index)=> <li key ={index}>{el}</li>)}
                </ul>
                <MouseIvent hundleClick={this.li} />
            </React.Fragment>
        )
    }
}
class MouseIvent extends React.Component {
    constructor(props){
        super(props)
        this.hundleClick = this.hundleClick.bind(this)

    };

    hundleClick = (e)=>{
        
        if(e.type==="click"){
            console.log('Left Click');
        }
        else if(e.type ==="contextmenu"){
            console.log('Right Click');
        }
    };
    render(){
        return(
            <li onClick = {this.hundleClick}></li>
        )
    }


}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Li/>
);