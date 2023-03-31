import "./styles.css";
import CartContainer from "./Components/CartContainer";
import Todo from "./Components/Todo";
//import Useeffect from './Components/UseEffectExamples/Useeffect';
//import NestedComponent from "./Components/UseEffectExamples/NestedComponent";
import TodoWithPagination from "./Components/TodoWithPagination";
import Timer from "./Components/Timer";
export default function App() {
  return (
    <div className="App">
      <CartContainer />
      <br />
      <br />
      <br />
      <Todo />
      <br />
      <br />
      <br />
      {/* <Useeffect/> */}
      <br />
      <br />
      <br />
      {/* <NestedComponent/> */}
      <br />
      <br />
      <br />
      <TodoWithPagination />
      <br />
      <br />
      <br />
      <Timer />
      <br />
      <br />
      <br />
    </div>
  );
}
