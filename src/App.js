import { Button, Title } from "./components";
import { Layout } from "./layouts";

function App() {
  return (
    <Layout>
      <Button value="Component Button" />
      <Button color="secondary" value="Segundo Button" />
      <Title value="Nuestras Ofertas" />
    </Layout>
  );
}

export default App;
