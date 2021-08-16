import "./App.css";
import Signup from "./components/Signup";
function App() {
  return (
    <div className="grid grid-cols-2 p-6 bg-gray-200 shadow-xl rounded-md w-3/4 m-auto">
      <div>
        <Signup />
      </div>
      <div>
        <img src="./signup.jpg" alt="sgnup" />
      </div>
    </div>
  );
}

export default App;
