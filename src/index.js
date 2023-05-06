import { Button } from './Button';
import { TsButton } from "@treeshaking-libs/tsbutton"
import { TsLink } from "@treeshaking-libs/tscomponents"
import { createRoot } from 'react-dom/client';

const App = () => (
  <div>
    <h1>
      Tree Shaking 🌳

      <Button>A button</Button>

      <TsButton color="blue">TS Button</TsButton>

      <TsLink href="https://google.com">Google</TsLink>
    </h1>
  </div>
)

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);
