import './App.css';
import Header from './components/header';
import ScheduleForm from './components/scheduleForm'
import Calls from './components/Calls'

function App() {
  return (
    <div className="App">
      <Header />
      <ScheduleForm />
      <Calls />
      <div id='notification-box'></div>
    </div>
  );
}

export default App;