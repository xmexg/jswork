
const { createApp } = Vue

const goods = createApp({
    data() {
        return {
            message: 'Hello Vue!',
            checkId: 'k60',
            goodsList: [
                {
                    "id": "k60",
                    "name": "Redmi K60 骁龙8+处理器 2K高光屏 6400万超清相机 5500mAh长续航 16GB+256GB 墨羽 小米红米5G",
                    "price": "2499.00",
                    "img": "./media/goods/k60/0.jpg.avif",
                    "webLink": "https://item.jd.com/100052892476.html",
                    "imgList": [
                        { "img": "./media/goods/k60/0.jpg.avif" },
                        { "img": "./media/goods/k60/1.jpg.avif" },
                        { "img": "./media/goods/k60/2.jpg.avif" },
                        { "img": "./media/goods/k60/3.jpg.avif" }
                    ],
                    "evaluation": [{
                        "score": 5,
                        "content": "手机很好，很喜欢，物流也很快"
                    }]
                },
                {
                    "id": "flipper",
                    "name": "Flipper Zero, (FLP-ZW-R04)",
                    "price": "2206.07",
                    "img": "./media/goods/flipper/0.jpg",
                    "webLink": "https://www.amazon.cn/dp/B0BFXKSFNT/",
                    "imgList": [
                        { "img": "./media/goods/flipper/0.jpg" },
                        { "img": "./media/goods/flipper/1.jpg" },
                        { "img": "./media/goods/flipper/2.jpg" },
                        { "img": "./media/goods/flipper/3.jpg" }
                    ],
                    "evaluation": []
                },
                {
                    "id": "reaspberry",
                    "name": "CreateBlock 树莓派 4B Raspberry Pi 4 代 B型 3b+ 3B 树莓派4B/8G主板",
                    "price": "1089.00",
                    "img": "./media/goods/reaspberry/0.jpg.avif",
                    "webLink": "https://item.jd.com/10048625219168.html",
                    "imgList": [
                        { "img": "./media/goods/reaspberry/0.jpg.avif" },
                        { "img": "./media/goods/reaspberry/1.jpg.avif" },
                        { "img": "./media/goods/reaspberry/2.jpg.avif" },
                        { "img": "./media/goods/reaspberry/3.jpg.avif" }
                    ],
                    "evaluation": []
                },
                {
                    "id": "wireless",
                    "name": "kali无线网卡B系统支持aircrack-ng渗透测试实验监听注入 富德 有天线",
                    "price": "54.00",
                    "img": "./media/goods/wireless/0.jpg.avif",
                    "webLink": "https://item.jd.com/10062700185169.html",
                    "imgList": [
                        { "img": "./media/goods/wireless/0.jpg.avif" },
                        { "img": "./media/goods/wireless/1.jpg.avif" },
                        { "img": "./media/goods/wireless/2.jpg.avif" },
                        { "img": "./media/goods/wireless/3.jpg.avif" }
                    ],
                    "evaluation": []
                },
                {
                    "id": "copilot",
                    "name": "github copilot学生包正规1年授权激活AI编程智能代码 激活自己号+1年授权",
                    "price": "49.00",
                    "img": "./media/goods/copilot/0.jpg.avif",
                    "webLink": "https://item.jd.com/10074842111644.html",
                    "imgList": [
                        { "img": "./media/goods/copilot/0.jpg.avif" },
                        { "img": "./media/goods/copilot/1.jpg.avif" },
                        { "img": "./media/goods/copilot/2.jpg.avif" },
                        { "img": "./media/goods/copilot/3.webp" }
                    ],
                    "evaluation": []
                },
                {
                    "id": "xmexg",
                    "name": "xmexg",
                    "price": "∞",
                    "img": "./media/goods/xmexg/0.jpg",
                    "webLink": "https://github.com/xmexg",
                    "imgList": [
                        { "img": "./media/goods/xmexg/0.jpg" },
                        { "img": "./media/goods/xmexg/0.jpg" },
                        { "img": "./media/goods/xmexg/0.jpg" },
                        { "img": "./media/goods/xmexg/0.jpg" }
                    ],
                    "evaluation": []
                }
            ]
        }
    },
    methods: {
        checkgoods: function (e) {
            console.log(e);
        }
    }
})
goods.mount('#goodsPage')
