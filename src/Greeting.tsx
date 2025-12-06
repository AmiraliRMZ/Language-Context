// Greeting.tsx
import { useLanguage } from "./LanguageContext";

export default function Greeting() {
  const { lang } = useLanguage();

  const messages = {
    en: "Welcome!",
    fa: "خوش آمدی!",
    es: "¡Bienvenido!"
  };

  return <h1>{messages[lang]}</h1>;
}
