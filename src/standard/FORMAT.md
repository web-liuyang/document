# Format

## Prettier

```ts
// .prettierrc.js
module.exports = {
  // 字符串使用单引号
  singleQuote: true,
  // 每行末尾自动添加分号
  semi: true,
  // tab缩进大小,默认为2
  tabWidth: 2,
  // 使用tab缩进，默认false
  useTabs: false,
  // 对象中打印空格 默认true
  // true: { foo: bar }
  // false: {foo: bar}
  bracketSpacing: true,
  // 箭头函数参数括号 默认avoid 可选 avoid| always
  // avoid 能省略括号的时候就省略 例如x => x
  // always 总是有括号
  arrowParens: 'avoid',
  // 换行长度，默认80
  printWidth: 100,
  // 设置为true时,将多行JSX元素的 > 放在最后一行的末尾，而不是单独放在下一行
  /* 
    <button
       className="prettier-class"
       id="prettier-id"
       onClick={this.handleClick}>
       Click Here
    </button> 
     */
  // 设置为false时
  /*
    <button
        className="prettier-class"
        id="prettier-id"
        onClick={this.handleClick}
    >
        Click Here
    </button>
     */
  jsxBracketSameLine: false
};
```

## TypeScript

```json
// .tsconfig.json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "importHelpers": true,
    "jsx": "react-jsx",
    "esModuleInterop": true,
    "sourceMap": true,
    "baseUrl": "./",
    "strict": true,
    "paths": {
      "@/*": ["src/*"]
    },
    "allowSyntheticDefaultImports": true
  },
  "include": ["mock/**/*", "src/**/*", "config/**/*", "typings.d.ts"],
  "exclude": [
    "node_modules",
    "lib",
    "es",
    "dist",
    "typings",
    "**/__test__",
    "test",
    "docs",
    "tests"
  ]
}
```

## EditorConfig

```ts
// .editorconfig
# http://editorconfig.org
root = true

[*]
charset = utf-8
end_of_line = lf
indent_style = space
indent_size = 2
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[Makefile]
indent_style = tab
```

## Husky and LintStaged

```json
// package.json
{
  "scripts": {
    "prepare": "husky install && husky add .husky/pre-commit 'yarn pre-commit' ",
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.{js,jsx,less,json}": [
      "prettier --write",
      "eslint --fix"
    ],
    "*.ts?(x)": [
      "prettier --parset=typescript --write",
      "eslint --fix"
    ]
  },
  "devDependencies": {
    "husky": "^6.0.0",
    "lint-staged": "^10.5.4",
    "pinst": "^2.1.6",
    "prettier": "^2.2.1",
  },
  ...
}
```

## ESLint

```ts
// .eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    semi: 'error',
  },
};

// package.json
{
  ...,
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^4.21.0",
    "@typescript-eslint/parser": "^4.21.0",
    "eslint": "^7.23.0",
    "eslint-plugin-react": "^7.23.1",
    "typescript": "^4.2.3"
  }
}
```
