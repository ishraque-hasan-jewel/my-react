import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="signup" element={<Signup />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="quiz" element={<Quiz />} />
          <Route exact path="result" element={<Result />} />
        </Routes>
      </Layout>
    </Router>
  );
}
export default App;
//----------------------------------------
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "../styles/App.css";
// import Layout from "./Layout";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Quiz from "./pages/Quiz";
// import Result from "./pages/Result";
// import Signup from "./pages/Signup";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />}>
//             <Route path="signup" element={<Signup />} />
//             <Route path="login" element={<Login />} />
//             <Route path="quiz" element={<Quiz />} />
//             <Route path="result" element={<Result />} />
//           </Route>
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
