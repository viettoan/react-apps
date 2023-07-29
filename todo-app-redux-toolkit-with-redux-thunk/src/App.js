import { Typography, Divider } from 'antd';
import './App.css';
import TodoList from './components/TodoList';
import Filters from './components/Filters';
import {setupServer} from "./fakeApis";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getTodos} from "./redux/reducers/todoListSlice";
const { Title } = Typography;
setupServer();
function App() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   fetch('api/todos', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       id: 1,
  //       name: 'Cong viec 1'
  //     })
  //   }).then (
  //     res => {
  //       // fetch('/api/todos')
  //       //   .then(
  //       //     res => res.json()
  //       //   )
  //       //   .then(
  //       //     res => console.log(res)
  //       //   );
  //
  //       fetch('api/update-todo', {
  //         method: 'PUT',
  //         body: JSON.stringify({
  //           id: 1,
  //           name: 'Cong viec 1 update'
  //         })
  //       }).then (
  //         res => {
  //           fetch('/api/todos')
  //             .then(
  //               res => res.json()
  //             )
  //             .then(
  //               res => console.log(res)
  //             )
  //         }
  //       )
  //     }
  //   )
  //
  // }, []);
  useEffect(() => {
    dispatch(getTodos());
  }, []);
  return (
    <div
      style={{
        width: 500,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '90vh',
      }}
    >
      <Title style={{ textAlign: 'center' }}>TODO APP with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
