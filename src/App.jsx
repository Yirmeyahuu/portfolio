// src/App.jsx
import Home from './pages/Home';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="min-h-screen">
      <Home />
      <Analytics />
    </div>
  );
}

export default App;