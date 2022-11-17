import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import SingleBlog from './SingleBlog';
import NotFound from './NotFound';
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="container" style={{width: "75% ",margin: "auto"}}>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/create" element={<Create />}/>
      <Route path="/blogs/:id" element={<SingleBlog />}/>
      <Route path="*" element={<NotFound />}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
