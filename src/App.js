import { EcommerceProvider } from "@contexts/ecommerce.provider";
import { BrowserRouter as Router } from "react-router-dom";
import { Navigation } from "./screens/navigation";

function App() {
  return (
    <EcommerceProvider>
      <Router>
        <Navigation />
      </Router>
    </EcommerceProvider>
  );
}

export default App;
