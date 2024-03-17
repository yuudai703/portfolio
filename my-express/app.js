// app.js

// Express モジュールの読み込み
const express = require('express');
// Express アプリケーションの作成
const app = express();

// ルートパスへのリクエストに対するレスポンス
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// アプリケーションを指定のポートでリッスン
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});