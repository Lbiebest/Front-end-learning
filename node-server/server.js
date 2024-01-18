// server.js

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// 使用 body-parser 中间件解析请求体
app.use(bodyParser.json());

// 添加 CORS 头，允许所有域进行访问
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// 处理前端请求，并转发到目标 API
// 搜索api
app.get('/searchMusic', async (req, res) => {
    const { name } = req.query;
    try {
        // const response = await axios.get(`https://autumnfish.cn/search?keywords=${name}`);
        const response = await axios.get(`https://api.paugram.com/netease/?id=${name}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// 歌曲id
app.get('/playMusic', async (req, res) => {
    const { name } = req.query;
    try {
        const response = await axios.get(`https://api.paugram.com/netease/?id=${name}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// 歌曲info
app.get('/infoMusic', async (req, res) => {
    const { name } = req.query;
    try {
        const response = await axios.get(`https://autumnfish.cn/song/detail?id=${name}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// 歌曲comment
/* app.get('/commentMusic', async (req, res) => {
    const { name } = req.query;
    try {
        const response = await axios.get(`https://autumnfish.cn/comment?type=0&id=${name}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}); */

// 启动服务器
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
