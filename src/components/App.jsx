import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import SignUp from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
        <SignUp />
        <Login />
        <Quiz />
        <Result />
      </Layout>
    </div>
  );
}

export default App;
