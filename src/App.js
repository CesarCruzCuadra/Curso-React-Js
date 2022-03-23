import { Component } from 'react';
import './App.css';

import tasks from './sample/tasks.json';

import Tasks from './components/Tasks';

// function Helloworld(props) {
//   return (
//     <div id="hello">
//       <h3>{props.subtitle}</h3>
//       {props.mytext}
//     </div>
//   )
// }

// class Helloworld extends React.Component {

//   state = {
//     show: true
//   }
// toggleShow = () => {
//   this.setState({show: !this.state.show})
// }
//   render() {
//     if (this.state.show) {
//       return (
//         <div id="hello">
//           <h3>{this.props.subtitle}</h3>
//           {this.props.mytext}
//           <button onClick={this.toggleShow}> Toggle show</button>
//         </div>
//       )
//     } else {
//       return <h1>The are not element
//         <button onClick={this.toggleShow}>
//           Toggle Show
//         </button>
//       </h1>
//     }
//   }
// }

// function App() {
//   return (
//     <div>This is my component:
//       <Helloworld mytext="Hello cesar " subtitle="Saludando al mas guapo" />
//       <Helloworld mytext="Real Madrid " subtitle="El mejor equipo " />
//       <Helloworld mytext="CR7 God " subtitle="El mejor jugador " />
//     </div>
//   );
// }


class App extends Component {

  state = {
    tasks: tasks
  }

  render() {
    return <div>
      <Tasks tasks={this.state.tasks}/>
    </div>
  }
}


export default App;
