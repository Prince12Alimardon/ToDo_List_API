import React, {Component} from "react"
import axios from "axios"

class App extends Component {
    state = {
        todos: []
    };

    // yangi
    componentDidMount() {
        this.getTodos();
    }

    getTodos() {
        axios
            .get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({todos: res.data})
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return(
        <div>
            {this.state.todos.map(item => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <span>{item.body}</span>
                </div>
            ))}
        </div>
    );
    }
}
export default App;

// bu bir usuli
// const list = [{"id": 1, "title": "English lesson", "body": "Bugun ingliz tiliga borishim kerak"}, {
//     "id": 2,
//     "title": "Programming",
//     "body": "Bugun Python9 guruhimga dars o'tishim kerak"
// }, {"id": 3, "title": "API", "body": "API chiqarishni zo'r o'rganishim kerak"}, {
//     "id": 4,
//     "title": "Kitob",
//     "body": "Kitob o'qishim kerak"
// }]
//
// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {list};
//     }
//
//     render() {
//         return (
//             <div>
//                 {this.state.list.map(item => (
//                     <div key={item.id}>
//                         <h1>{item.title}</h1>
//                         <p>{item.body}</p>
//                     </div>
//                 ))}
//             </div>
//         );
//     }
// }
// export default App;