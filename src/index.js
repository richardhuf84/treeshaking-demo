import { Button } from './Button';
import { createRoot } from 'react-dom/client';

const App = () => (
  <div>
    <h1>
      Tree Shaking 🌳

      <Button>A button</Button>
    </h1>
  </div>
)

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);
