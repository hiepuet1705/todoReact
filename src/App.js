
import './App.css';
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import ToDo from './components/ToDo';
function App() {
  return (
    <div className="App">
      <Header/>
      <ToDoForm/>
      <ToDo/>
    </div>
  );
}

export default App;
