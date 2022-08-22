//Создайте div шириной и высотой 300px и добавьте в него 4 кнопки
//с тектом вверх, влево, вниз, вправо. Реализуйте функционал сдвига
//div на 10px при нажатии на кнопку, соответствующую направлению

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isToggleOn: true };

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this); // метод который создает новую функцию  которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение.
//   }

//   handleClick() {
//     this.setState((prevState) => ({
//       //Set state что бы рендерить повторно компонет
//       isToggleOn: !prevState.isToggleOn,
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? "ON" : "OFF"}
//       </button>
//     );
//   }
// }

// const dz = ReactDOM.createRoot(document.getElementById("dz"));
// dz.render(<Toggle />);

//Дан массив с картинками. Сделать, чтобы при нажатии на картинку
//она менялась на следующую, последняя меняется на первую.

function Img(props) {
    return <img src = {props.src}/>;
  }
  
 
    

const images = [
    "https://cdn.pixabay.com/photo/2019/10/15/13/40/winter-4551699_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/04/22/06/40/duck-6198196_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/04/17/23/58/bunny-6187026_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/09/18/21/16/child-5582985_960_720.jpg",
  ];

const elemets=images.map(()=>new Image());

const img = ReactDOM.createRoot(document.getElementById('img')); 
img.render(elements);


//вход выход

// function UserGreeting(props) {
//   return <h1>С возвращением!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Войдите, пожалуйста.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// //   const root2 = ReactDOM.createRoot(document.getElementById('root2'));
// // Попробуйте заменить на isLoggedIn={true}:
// //   root2.render(<Greeting isLoggedIn />);

// // кнопка вход
// function LoginButton(props) {
//   return <button onClick={props.onClick}>Войти</button>;
// }

// function LogoutButton(props) {
//   return <button onClick={props.onClick}>Выйти</button>;
// }
// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = { isLoggedIn: false };
//   }

//   handleLoginClick() {
//     this.setState({ isLoggedIn: true });
//   }

//   handleLogoutClick() {
//     this.setState({ isLoggedIn: false });
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }

// const vhod = ReactDOM.createRoot(document.getElementById("vhod"));
// vhod.render(<LoginControl />);

// // не прочитаные сообщения

// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Здравствуйте!</h1>
//       {unreadMessages.length > 0 && (
//         <h2>У вас {unreadMessages.length} непрочитанных сообщений.</h2>
//       )}
//     </div>
//   );
// }

// const messages = ["React", "Re: React", "Re:Re: React", "React"];

// const mail = ReactDOM.createRoot(document.getElementById("mail"));
// mail.render(<Mailbox unreadMessages={messages} />);

// //Рендер нескольких компонентов
// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((numbers) => <li>{numbers * 2}</li>);

// const ul = ReactDOM.createRoot(document.getElementById("ul"));
// ul.render(<ul>{listItems}</ul>);

// //Пример правильного использования ключей

// function ListItem(props) {
//     // Correct! There is no need to specify the key here:
//     return <li>{props.value}</li>;
//   }

//   function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//       // Correct! Key should be specified inside the array.
//       <ListItem key={number.toString()}
//                 value={number} />
//     );
//     return (
//       <ul>
//         {listItems}
//       </ul>
//     );
//   }

//   const number = [1, 2, 3, 4, 5];

//   const spisok = ReactDOM.createRoot(document.getElementById('spisok'));
//   spisok.render(<NumberList numbers={numbers} />);

//   //Ключи должны быть уникальными среди соседних элементов

//   function Blog(props) {
//     const sidebar = (
//       <ul>
//         {props.posts.map((post) =>
//           <li key={post.id}>
//             {post.title}
//           </li>
//         )}
//       </ul>
//     );
//     const content = props.posts.map((post) =>
//       <div key={post.id}>
//         <h3>{post.title}</h3>
//         <p>{post.content}</p>
//       </div>
//     );
//     return (
//       <div>
//         {sidebar}
//         <hr />
//         {content}
//       </div>
//     );
//   }

//   const posts = [
//     {id: 1, title: 'Привет, мир', content: 'Добро пожаловать в документацию React!'},
//     {id: 2, title: 'Установка', content: 'React можно установить из npm.'}
//   ];

//   const blog = ReactDOM.createRoot(document.getElementById('blog'));
//   blog.render(<Blog posts={posts} />);

//   //Встраивание map() в JSX
//   function ListItem(props) {
//     return <li>{props.value}</li>;
//   }

//   function NumberList(props) {
//     const numbers = props.numbers;
//     return (
//       <ul>
//         {numbers.map((number) =>
//           <ListItem key={number.toString()}
//                     value={number} />
//         )}
//       </ul>
//     );
//   }

//   const numbe = [1, 2, 3, 4, 5];

//   const map = ReactDOM.createRoot(document.getElementById('map'));
//   map.render(<NumberList numbers={numbers} />);
