// App.tsx
import { LanguageProvider } from "./LanguageContext";
import LanguageSelector from "./LanguageSelector";
import Greeting from "./Greeting";

export default function App() {
  return (
    <LanguageProvider>
      <LanguageSelector />
      <Greeting />
    </LanguageProvider>
  );
}
