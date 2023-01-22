import "./App.css";
import { Route, Routes } from "react-router";
import TodoList from "./Pages/TodoList";
import ShoppingList from "./Pages/ShoppingList";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import ContactForm from "./Pages/ContactForm";
import About from "./Pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="todo" element={<TodoList />} />
        <Route path="list" element={<ShoppingList />} />
        <Route path="/" element={<Navbar />} />
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<ContactForm />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}
export default App;
