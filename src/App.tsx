import { useEffect, useState } from "react";
import { get } from "./reducers/todo";
import { deleteUser } from "./reducers/todo";
import "../src/App.css";
import { setModal } from "./reducers/todo";
import { useDispatch, useSelector } from "react-redux";
function App() {
  let [inp , setInp] = useState("")
  let dispatch = useDispatch();
  let data = useSelector((store: any) => store.todo.data);
  let modalEdit = useSelector((store: any) => store.todo.modalEdit);

  useEffect(() => {
    dispatch(get());
  }, []);
  return (
    <div id="divA">
      {data.map((elem: any) => {
        return (
          <div id="div">
            <img src={elem.img} alt="" />
            <h1>{elem.name}</h1>
            <div id="div2">
              <button onClick={() => dispatch(setModal())}>Edit</button>
              <button onClick={() => dispatch(deleteUser(elem.id))}>
                Delete
              </button>
              <input type="checkbox" />
            </div>
          </div>
        );
      })}
      {modalEdit? <div><input  value={inp} type="text" name="" id="" /> <button>Edit</button></div>:null}
    </div>
  );
}

export default App;
