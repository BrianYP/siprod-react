import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./routes/Routes"
import Register from './components/Register/Register.jsx'

const App = () => {
  return (
    <div>
      <Router>
        <Routes />
      </Router>
      <Register />
    </div>
  )
}

export default App;
