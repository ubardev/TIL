import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div>
      <Button>버튼!</Button>
      <div className="text-primary">Primary</div>
      <div className="text-muted">Muted</div>
      <div className="text-destructive">Destructive</div>
    </div>
  );
}

export default App;
