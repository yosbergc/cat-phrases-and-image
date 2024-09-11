import { createRoot } from "react-dom/client";
import { App } from "./components/App/App";
const rootElement = document.getElementById('app')
const root = createRoot(rootElement)
root.render(<App/>)