# React Compiler test run

This is a few code examples of the React Compiler working and not working. They are written to illustrate the article [I tried React Compiler today, and guess what... 😉](https://developerway.com/posts/i-tried-react-compiler)

## Getting Started

Install the dependencies:

```bash
npm install --force
```

Patch react-query with compiled version:

```bash
cp patches/@tanstack+react-query+5.35.1+build+useMutation.js node_modules/@tanstack/react-query/build/modern/useMutation.js
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
