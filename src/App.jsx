import { BrowserRouter } from "react-router-dom";

// pages
import AnimatedRoutes from "./components/app/AnimatedRoutes";

import Toolbar from "./components/app/Toolbar";

function App() {
  return (
    <BrowserRouter>
      <Toolbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
