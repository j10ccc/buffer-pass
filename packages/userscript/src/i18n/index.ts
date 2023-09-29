import tokens from "./tokens";

export default function(field: string) {
  const lang = document.documentElement.lang;
  const matchedLang = Object.keys(tokens).find(item => {
    return lang.startsWith(item);
  }) || "en";
  return tokens[matchedLang][field] || "";
}