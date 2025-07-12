import { LanguageVersion } from "@/types";

const LANGUAGE_VERSIONS: LanguageVersion[] = [
  { language: "javascript", version: "18.15.0" },
  { language: "typescript", version: "5.0.3" },
  { language: "python", version: "3.10.0" },
  { language: "java", version: "15.0.2" },
  { language: "c", version: "10.2.0" },
  { language: "cpp", version: "10.2.0" },
  { language: "csharp", version: "6.12.0" },
  { language: "go", version: "1.16.2" },
  { language: "ruby", version: "3.0.1" },
  { language: "rust", version: "1.68.2" },
  { language: "scala", version: "3.2.2" }
];

const LANGUAGE_VERSIONS_MAP: Record<string, string> = LANGUAGE_VERSIONS.reduce((acc, {language, version}) => {
  acc[language] = version;
  return acc
}, {} as Record<string, string>)

export {LANGUAGE_VERSIONS, LANGUAGE_VERSIONS_MAP}