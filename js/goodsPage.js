
const { createApp } = Vue

const goods = createApp({
    data() {
        return {
            message: 'Hello Vue!',
            clickIndex: '0',// 用户浏览商品时点击的商品的索引
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
                    "evaluation": [
                        {
                            "star": 5,
                            "content": "手机很好，很喜欢，物流也很快"
                        },
                        {
                            "star": 5,
                            "content": "买，不买你等啥呢，要换机的给我冲啊"
                        },
                        {
                            "star": 5,
                            "content": "红米k60，确实很不错，2k加上高频pwm调光，特别是5500毫安的大电池，用的很放心，就是充电只有67w（虽然充电也很快了啦）要不然就很完美了"
                        },
                        {
                            "star": 5,
                            "content": "屏幕看着很舒服，不伤眼，音效是杜比全景声，从旧手机换过来后感觉提升很大。"
                        },
                        {
                            "star": 1,
                            "content": "一个多月掉价400多，还过了价保"
                        },
                        {
                            "star": 1,
                            "content": "买了不到一周就降价500，这还怎么支持"
                        },
                        {
                            "star": 3,
                            "content": "外观手感略显廉价，勉强合格"
                        },
                        {
                            "star": 3,
                            "content": "感觉还可以，但是屏幕有时候会断触"
                        },
                        {
                            "star": 5,
                            "content": "12g运行支持大部分的应用"
                        },
                        {
                            "star": 5,
                            "content": "这款手机整体性价比高，拍照效果很棒，电池续航能力强，通信音质好，运行速度快，显示效果也不错。同时，手机颜色好看，手感舒适，使用起来顺畅，带有广角和景深感。另一款手机的音质非常好，拍照效果非常清晰，电池续航能力强，运行速度快，屏幕养眼。"
                        },
                        {
                            "star": 5,
                            "content": "手感很好，还没激活，感觉还不错。快递很快，一天就送到了。外观还可以，质感是有的。看网上说屏幕很棒，确实不错，看续航也不错，很好的选择。"
                        },
                        {
                            "star": 5,
                            "content": "包装非常结实，东西保护得很好，值得好评很好看，制作工艺很精美，材质也很好！给个赞！第一次在网上购买，也是看评价才买的，质量还不错，也很便宜，有需要的朋友可放心购买大小合适，做工精良，出口品质，最满意的一次淘货，很喜欢，下次会再来！高颜值，高品质，非常好，一分钱一分货，材质外观和质量一看就很上档次，非常喜欢非常好，宝贝很高大上，质量很好，看上去就给人一种高级感，价格也合适，这次网购很愉快，大赞?"
                        },
                        {
                            "star": 5,
                            "content": "看了好久的测评贴 在这个价位 对比了很久最终选择了这款手机 也是第一次买红米 买来送给妈妈的 目前反馈是不错的 体验感不错 玻璃后盖还是稍稍有些份量的 但屏幕清晰度确实好评 京东也是值得信赖的 速度真的超快 前一天晚上才下的单 第二天就到了 希望这个手机不会有什么bug 给好评！"
                        },
                        {
                            "star": 5,
                            "content": "客服很专业，感谢客服的贴心服务，手机很好看，使用起来非常流畅，拍照效果也非常好，客服对每一个问题都很有耐心，客服很专业"
                        },
                        {
                            "star": 5,
                            "content": "非常不错的一次购物体验商品活动，这个小米K60的确是高配版的设置，性能超级强大，一到手后，就迫不及待的用上了，真心不错，已经是K字系列的第6代了，我一直从第一代用起，已经买了6代，希望继续加油！"
                        }
                    ]
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
                    "evaluation": [
                        {
                            "star": 5,
                            "content": "关键的部分限制 一个玩具玩玩"
                        },
                        {
                            "star": 1,
                            "content": "比闲鱼贵1000"
                        },
                        {
                            "star": 1,
                            "content": "老板咸鱼进货淘宝卖,妙!"
                        },
                        {
                            "star": 4,
                            "content": "I recently purchased the Flipper Zero and I must say, I am impressed with its performance and features. This device is really interesting and versatile, with a range of functionalities that can be useful for a variety of tasks.The Flipper Zero is well designed and easy to use. The device is quite portable and fits easily in my pocket, making it convenient to carry around. The battery life is also quite good, so I don't have to worry about recharging it too often.One of the most notable features of the Flipper Zero is its ability to function as a multi-tool, with a range of tools and functionalities such as radio signal scanning, infrared control, NFC emulation, and more. It can also function as a password manager, a web server, and even a gaming console. The possibilities are endless.However, the only downside of this device is that it's a bit overpriced compared to other similar products on the market. But if you're looking for a high-quality and versatile multi-tool with a lot of functionalities, the Flipper Zero is definitely worth considering.Overall, I would recommend the Flipper Zero to anyone who needs a portable, versatile, and feature-rich multi-tool. Despite the price, the performance and features make it a great device to have on hand."
                        },
                        {
                            "star": 3,
                            "content": "This is a neat little device that takes all the tools that are already out there and puts it in the palm of your hand instead of needing to carry around the backpack. The downside however, is the small range it has. To capture a key card it basically needs to be touching the device. I guess if you're looking to steal someone's RFID information and you can get very close to them then this device might be for you however keep in mind the short range and most RFID technology has safety protocols so just having that information won't do you very much good when you try to replicate it or send the signal out. I guess if you're looking to break into someone's apartment complex and they have a gate that uses low tech RFID and you manage to capture somebody's RFID code then you can replicate it and open the door. So there's really only one type of person that this device is meant for haha.Also keep in mind if you're trying to use this so you can copy or RFID tags that you have, home Depot offers an RFID copy and a pretty cheap cost.Another feature that might seem like a selling point is being able to use it as a universal remote on any TV which is true you can use this device for that but you can also buy $20 keychain universal remotes that do the same thing.I've been in IT my whole life and I'm a nerd when it comes to gadgets like this so I bought it but quickly found out there's not much use for it that I'm going to benefit from and most people won't either, not really even criminals, especially with how common it's becoming for RFID blockers to be built into wallets"
                        },
                        {
                            "star": 5,
                            "content": "I am a script kiddie and maybe im being modest I have developed my own kali lab so im a mid-grade level I was hesitant to order off here as its twice the price of the company, but they are out of stock. It works i have already upgraded it to unleashed and one thing i can tell you is you need to know what device you are needing to emulate/ whatever to get it to work. for example a tv or tv remote is not rfid. There are many tutorials and discords out there but its not a point and click you will need to have knowledge of what is and what kind of frequency you are wanting to get into is on. Also this comes with no sdhc card i assumed it would, i got the 256 ( thats the max) and do not order off here get it in store as many sellers on here sell generic off brands. The manual says its best to get the brand SanDisk or the expensive card. Trust me Ive been a photographer for years cheap cards are worthless and break down as soon as you buy them.Also the WIFI dev board does not come with, I am looking to purchase and just a recommendation it would have been nice to buy this in a bundle with a case and screen protector and the wifi dev board and sdhc card. Anyways I received this faster then estimated shipping time. Wonderful seller will buy again."
                        }
                    ]
                },
                {
                    "id": "raspberry",
                    "name": "CreateBlock 树莓派 4B Raspberry Pi 4 代 B型 3b+ 3B 树莓派4B/8G主板",
                    "price": "1089.00",
                    "img": "./media/goods/raspberry/0.jpg.avif",
                    "webLink": "https://item.jd.com/10048625219168.html",
                    "imgList": [
                        { "img": "./media/goods/raspberry/0.jpg.avif" },
                        { "img": "./media/goods/raspberry/1.jpg.avif" },
                        { "img": "./media/goods/raspberry/2.jpg.avif" },
                        { "img": "./media/goods/raspberry/3.jpg.avif" }
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
            ],
            buylist: []
        }
    },
    methods: {
        clickgoods: function (index) {
            this.clickIndex = index;
            this.pageChange();
        },
        changeBigImg: function (index, image_index) {
            this.goodsList[index].img = this.goodsList[index].imgList[image_index].img;
        },
        addcart: function () {
            let buynum = $("#buycount").val();
            console.log("数量:"+buynum);
            let buyinfo = {
                "shopping": this.goodsList[this.clickIndex],
                "num": buynum
            }
            this.buylist.push(buyinfo);
            alert("已加入购物车");
        },
        addeva: function () {
            let star = $("#evastar");
            let content = $("#evacontent");
            let s = star.val();
            console.log("评分:"+s);
            let evaluationitem = {
                "star": s,
                "content": content.val()
            }
            this.goodsList[this.clickIndex].evaluation.push(evaluationitem);
            star.val("");
            content.val("");
            alert("评论成功");
        },
        pageChange: function () {
            $("#goodsPage_for").toggle(300);
            $("#goods_detail").toggle(300);
        }
    }
})
goods.mount('#goodsPage')
