
const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
};
const domContainer = document.querySelector('#reactButton');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));

const rootHello = ReactDOM.createRoot(document.getElementById('root'));
rootHello.render(<h1>Привет, мир!</h1>);


const rootRender = ReactDOM.createRoot(
    document.getElementById('rotRender')
  );
  const element = <h1>Hello, world</h1>;
  rootRender.render(element);


  // пример с часами

  const clock = ReactDOM.createRoot(
    document.getElementById('clock')
  );
  
  function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    clock.render(element);
  }
  
  setInterval(tick, 1000); 

// Компоненты и пропсы

  // function Welcome(props) {
  //   return <h1>Привет, {props.name}</h1>;
  // }
  
  // const name = ReactDOM.createRoot(document.getElementById('root'));
  // const Nelement = <Welcome name="Алиса" />;
  // root.render(element);

  function formatDate(date) {
    return date.toLocaleDateString();
  }
  
  function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
               src={props.author.avatarUrl}
               alt={props.author.name} />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
  
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  };
  
  const props = ReactDOM.createRoot(document.getElementById('props'));
  props.render(
    <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author} />
  );

  //Состояние и жизненный цикл

//   const life = ReactDOM.createRoot(document.getElementById('life'));
  
// function tickTac() {
//   const element = (
//     <div>
//       <h1>Привет, мир!</h1>
//       <h2>Сейчас {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   life.render(element);
// }

// setInterval(tickTac, 1000);


class Clock extends React.Component{
  constructor (props){
    super(props);
    this.state = {date: new Date()}
  }
  render(){
    return (
      <div>
        <h1>Привет Мир</h1>
      <h2>Сейчас: {this.state.date.toLocaleString()}</h2>
      </div>
    )
  }
};

const time = ReactDOM.createRoot(document.getElementById('life'));
time.render(<Clock />)
