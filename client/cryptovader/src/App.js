import { Navbar, Welcome , Footer , Services , Transactions } from "./Components/index.js"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Snowfall from 'react-snowfall';
const App = () => {

  return (
    <div className='min-h-screen'>
      <Snowfall />
      <div className="gradient-bg-welcome">      
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
      
    </div>
  )
}

export default App;
