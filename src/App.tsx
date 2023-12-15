import { useEffect } from "react";
import { get } from "./reducers/todo";
import { useDispatch, useSelector } from "react-redux";
function App() {
  let dispatch = useDispatch()
  let data = useSelector((store) => store.todo.data);
  console.log(data);
  useEffect(() => {
    dispatch(get())
  },[])
  return <div></div>;
}

export default App;
