import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PostHogProvider } from 'posthog-js/react';

const options = {
  api_host: 'https://us.i.posthog.com',
};

createRoot(document.getElementById("root")!).render(
  <PostHogProvider 
    apiKey='phc_SjoY7ZodosmewPLlSOg539PXqpfVpx7ExYXqsFlOpVG'
    options={options}
  >
    <App />
  </PostHogProvider>
);
