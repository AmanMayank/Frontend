import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
