import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { routes } from "./routes/routes.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ ...props }, key) => {
          return <Route {...props} key={key} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
