# Learn NodeJS
- NodeJS is a JavaScript runtime built on Chrome's V8 JavaScript engine.

- NodeJS is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library.

# 1. Install express

```bash
npm insall --save-exact express@4.18.2
```

Khi clone 1 project về, chạy lệnh `npm install` để cài đặt các package cần thiết cho project (cài tất cả các dependencies trong file package.json)


# 2. Demo express
```bash
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('I am Nguyen Tuan Hiep');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
```

Syntax cũ:
```bash
import express from 'express';
```
Syntax mới:
```bash
const express = require('express');
```

# 3. Install dependencies
- Đây là các package cần thiết cho project. Chúng ta sẽ cài đặt các package này bằng lệnh `npm install` hoặc `npm i`. Các package này sẽ được lưu vào file package.json.

- Khi clone 1 project về, chạy lệnh `npm install` để cài đặt các package cần thiết cho project (cài tất cả các dependencies trong file package.json)
## 3.1. Install ejs
- View engine là một công cụ giúp chúng ta render ra HTML từ các file template. Có nhiều view engine khác nhau như: Jade, EJS, Pug, Handlebars, ...

- Với EJS, chúng ta có thể viết HTML bình thường, nhưng có thể nhúng các biến, hàm, vòng lặp, điều kiện vào HTML.
```bash
npm install --save-exact ejs@3.1.9
```


## 3.2. Install body-parser
```bash
npm install --save-exact body-parser@1.20.2
```
- ```body-parser``` là một middleware giúp chúng ta có thể lấy được dữ liệu từ form. Nó sẽ parse dữ liệu từ form thành đối tượng JavaScript. Chúng ta có thể lấy được dữ liệu từ form bằng cách sử dụng req.body.
- Ví dụ: ```req.body.username```, ```req.body.password```, ...

## 3.3. Install nodemon
```bash
npm install --save-exact nodemon@2.0.21
```

- nodemon là một package giúp chúng ta tự động restart lại server khi có sự thay đổi trong code. Chúng ta sẽ sử dụng nodemon thay cho node để chạy server.


## 3.4. Install babel
```bash
npm install --save-exact @babel/core@7.21.3 @babel/node@7.20.7 @babel/preset-env@7.20.2
```

- Babel là một công cụ giúp chuyển đổi code ES6 sang ES5. Chúng ta sẽ sử dụng Babel để chuyển đổi code ES6 sang ES5 để có thể chạy trên NodeJS.
- Chuyển đổi ES6 sang ES5 để có thể chạy trên NodeJS vì NodeJS chưa hỗ trợ ES6.

- ```@babel/core``` là một package chính của Babel. Nó sẽ chuyển đổi code ES6 sang ES5.
- ```@babel/node``` is a CLI that works exactly the same as the Node. js CLI, with the added benefit of compiling with Babel presets and plugins before running it
- ```@babel/preset-env``` is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!


## Config babel
- Tạo file .babelrc
```bash
{
   "presets": [
     "@babel/preset-env"
   ]
}
```

- Now, the setup is ready. we need to create a script to transpile our code on run time.
```bash
# To do this, edit the package.json file from
"scripts": {
  "start": "node server.js"
}

# to

"scripts": {
  "start": "nodemon --exec babel-node src/server.js"
}
```
- Create file viewEngine.js
```bash
import express from "express";

const configViewEngine = (app) => {
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
}

export default configViewEngine;
```

- ```export default configViewEngine;``` là cách export mặc định của ES6. Nó sẽ export mặc định 1 function configViewEngine. Khi import, chúng ta có thể đặt tên bất kỳ cho function này.
- Ví dụ: ```import configViewEngine from "./viewEngine.js";```


## 4. Run server
### Render HTML page
```bash
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});
```
- However, this is not the best way to send HTML files. The best way to send HTML files is to use a template engine. We will use EJS as our template engine later.


