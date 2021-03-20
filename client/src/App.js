import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

import Todos from "./Todos";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Todos />
      </div>
    </QueryClientProvider>
  );
}

export default App;
