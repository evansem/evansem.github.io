import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypeScript,
  prettier,
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "_next/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
