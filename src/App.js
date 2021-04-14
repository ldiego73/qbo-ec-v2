import { EcommerceProvider } from "@contexts/ecommerce.provider";
import { BrowserRouter as Router } from "react-router-dom";
import { Navigation } from "./screens/navigation";
import { TranslationProvider } from "./translations/translation.provider";

function App() {
  return (
    <TranslationProvider>
      <EcommerceProvider>
        <Router>
          <Navigation />
        </Router>
      </EcommerceProvider>
    </TranslationProvider>
  );
}

export default App;
