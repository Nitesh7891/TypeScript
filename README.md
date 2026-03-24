# TypeScript Practice Setup

This project is a minimal setup to learn and practice **TypeScript** using the TypeScript compiler (`tsc`).

---

## 📁 Project Structure

```
typescript/
  app.ts
  tsconfig.json
  package.json
```

---

## ⚙️ Setup

Initialize the project:

```
npm init -y
```

Install TypeScript:

```
npm install typescript --save-dev
```

Create TypeScript configuration:

```
npx tsc --init
```

---

## 🚀 Running the Project

### Compile TypeScript to JavaScript

```
npx tsc app.ts
```

### Run the compiled JavaScript

```
node app.js
```

---

## 🔁 Development Workflow

For continuous development:

```
npx tsc --watch
```

Then run:

```
node app.js
```

---

## 🧠 Notes

* TypeScript code (`.ts`) is compiled into JavaScript (`.js`)
* Node.js runs only JavaScript files
* Compiled files can be regenerated, so they are ignored in `.gitignore`

---

## 📌 Tech Used

* TypeScript
* Node.js

---

## ✨ Purpose

This project is created for learning and understanding:

* TypeScript basics
* Compilation using `tsc`
* Project structure for production-ready setup

---
