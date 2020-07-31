const { createProxyMiddleware } = require("http-proxy-middleware");
const { default: Axios } = require("axios");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", {
            // 5000에서 /api로 오는것을 받는거?
            target: "http://localhost:5000",
            changeOrigin: true,
        })
    );
};

