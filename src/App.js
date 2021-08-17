import "./App.css";
import Signup from "./components/Signup";
function App() {
  return (
    <div className="grid md:grid-cols-4 p-6 bg-white shadow-xl rounded-md w-3/4 m-auto">
      <div className="col-span-3">
        <Signup />
      </div>
      <div className="flex justify-center items-center col-span-1">
        <img src="./signup.jpg" alt="sgnup" />
      </div>
    </div>
  );
}

export default App;
