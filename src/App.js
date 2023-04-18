import './App.css';
import Tabledata from './Tabledata';
import {Route,Routes} from "react-router-dom"
import Replybox from './Replybox';

function App() {

return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Tabledata/>}/>
            <Route path='/reply' element={<Replybox/>}/>
        </Routes>
    </div>
);
}
export default App;