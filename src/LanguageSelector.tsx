// LanguageSelector.tsx
import { useLanguage } from "./LanguageContext";

export default function LanguageSelector() {
  const { lang, setLang } = useLanguage();

  return (
    <select value={lang} onChange={(e) => setLang(e.target.value as any)}>
      <option value="en">English</option>
      <option value="fa">فارسی</option>
      <option value="es">Español</option>
    </select>
  );
}
