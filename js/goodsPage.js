const { createApp, computed } = Vue;
// 实例化
const goods = createApp({
    data() {
        return {
            message: "Hello Vue!",
            clickIndex: "0", // 用户浏览商品时点击的商品的索引
            goodsList: [
                {
                    id: "k60",
                    name: "Redmi K60 骁龙8+处理器 2K高光屏 6400万超清相机 5500mAh长续航 16GB+256GB 墨羽 小米红米5G",
                    price: "2499.00",
                    img: "./media/goods/k60/0.jpg.avif",
                    webLink: "https://item.jd.com/100052892476.html",
                    imgList: [
                        { img: "./media/goods/k60/0.jpg.avif" },
                        { img: "./media/goods/k60/1.jpg.avif" },
                        { img: "./media/goods/k60/2.jpg.avif" },
                        { img: "./media/goods/k60/3.jpg.avif" },
                    ],
                    evaluation: [
                        {
                            star: 5,
                            content: "手机很好，很喜欢，物流也很快",
                        },
                        {
                            star: 5,
                            content: "买，不买你等啥呢，要换机的给我冲啊",
                        },
                        {
                            star: 5,
                            content:
                                "红米k60，确实很不错，2k加上高频pwm调光，特别是5500毫安的大电池，用的很放心，就是充电只有67w（虽然充电也很快了啦）要不然就很完美了",
                        },
                        {
                            star: 5,
                            content:
                                "屏幕看着很舒服，不伤眼，音效是杜比全景声，从旧手机换过来后感觉提升很大。",
                        },
                        {
                            star: 1,
                            content: "一个多月掉价400多，还过了价保",
                        },
                        {
                            star: 1,
                            content: "买了不到一周就降价500，这还怎么支持",
                        },
                        {
                            star: 3,
                            content: "外观手感略显廉价，勉强合格",
                        },
                        {
                            star: 3,
                            content: "感觉还可以，但是屏幕有时候会断触",
                        },
                        {
                            star: 5,
                            content: "12g运行支持大部分的应用",
                        },
                        {
                            star: 5,
                            content:
                                "这款手机整体性价比高，拍照效果很棒，电池续航能力强，通信音质好，运行速度快，显示效果也不错。同时，手机颜色好看，手感舒适，使用起来顺畅，带有广角和景深感。另一款手机的音质非常好，拍照效果非常清晰，电池续航能力强，运行速度快，屏幕养眼。",
                        },
                        {
                            star: 5,
                            content:
                                "手感很好，还没激活，感觉还不错。快递很快，一天就送到了。外观还可以，质感是有的。看网上说屏幕很棒，确实不错，看续航也不错，很好的选择。",
                        },
                        {
                            star: 5,
                            content:
                                "包装非常结实，东西保护得很好，值得好评很好看，制作工艺很精美，材质也很好！给个赞！第一次在网上购买，也是看评价才买的，质量还不错，也很便宜，有需要的朋友可放心购买大小合适，做工精良，出口品质，最满意的一次淘货，很喜欢，下次会再来！高颜值，高品质，非常好，一分钱一分货，材质外观和质量一看就很上档次，非常喜欢非常好，宝贝很高大上，质量很好，看上去就给人一种高级感，价格也合适，这次网购很愉快，大赞?",
                        },
                        {
                            star: 5,
                            content:
                                "看了好久的测评贴 在这个价位 对比了很久最终选择了这款手机 也是第一次买红米 买来送给妈妈的 目前反馈是不错的 体验感不错 玻璃后盖还是稍稍有些份量的 但屏幕清晰度确实好评 京东也是值得信赖的 速度真的超快 前一天晚上才下的单 第二天就到了 希望这个手机不会有什么bug 给好评！",
                        },
                        {
                            star: 5,
                            content:
                                "客服很专业，感谢客服的贴心服务，手机很好看，使用起来非常流畅，拍照效果也非常好，客服对每一个问题都很有耐心，客服很专业",
                        },
                        {
                            star: 5,
                            content:
                                "非常不错的一次购物体验商品活动，这个小米K60的确是高配版的设置，性能超级强大，一到手后，就迫不及待的用上了，真心不错，已经是K字系列的第6代了，我一直从第一代用起，已经买了6代，希望继续加油！",
                        },
                    ],
                },
                {
                    id: "flipper",
                    name: "Flipper Zero, (FLP-ZW-R04)",
                    price: "2206.07",
                    img: "./media/goods/flipper/0.jpg",
                    webLink: "https://www.amazon.cn/dp/B0BFXKSFNT/",
                    imgList: [
                        { img: "./media/goods/flipper/0.jpg" },
                        { img: "./media/goods/flipper/1.jpg" },
                        { img: "./media/goods/flipper/2.jpg" },
                        { img: "./media/goods/flipper/3.jpg" },
                    ],
                    evaluation: [
                        {
                            star: 5,
                            content: "关键的部分限制 一个玩具玩玩",
                        },
                        {
                            star: 1,
                            content: "比闲鱼贵1000",
                        },
                        {
                            star: 1,
                            content: "老板咸鱼进货淘宝卖,妙!",
                        },
                        {
                            star: 4,
                            content:
                                "I recently purchased the Flipper Zero and I must say, I am impressed with its performance and features. This device is really interesting and versatile, with a range of functionalities that can be useful for a variety of tasks.The Flipper Zero is well designed and easy to use. The device is quite portable and fits easily in my pocket, making it convenient to carry around. The battery life is also quite good, so I don't have to worry about recharging it too often.One of the most notable features of the Flipper Zero is its ability to function as a multi-tool, with a range of tools and functionalities such as radio signal scanning, infrared control, NFC emulation, and more. It can also function as a password manager, a web server, and even a gaming console. The possibilities are endless.However, the only downside of this device is that it's a bit overpriced compared to other similar products on the market. But if you're looking for a high-quality and versatile multi-tool with a lot of functionalities, the Flipper Zero is definitely worth considering.Overall, I would recommend the Flipper Zero to anyone who needs a portable, versatile, and feature-rich multi-tool. Despite the price, the performance and features make it a great device to have on hand.",
                        },
                        {
                            star: 3,
                            content:
                                "This is a neat little device that takes all the tools that are already out there and puts it in the palm of your hand instead of needing to carry around the backpack. The downside however, is the small range it has. To capture a key card it basically needs to be touching the device. I guess if you're looking to steal someone's RFID information and you can get very close to them then this device might be for you however keep in mind the short range and most RFID technology has safety protocols so just having that information won't do you very much good when you try to replicate it or send the signal out. I guess if you're looking to break into someone's apartment complex and they have a gate that uses low tech RFID and you manage to capture somebody's RFID code then you can replicate it and open the door. So there's really only one type of person that this device is meant for haha.Also keep in mind if you're trying to use this so you can copy or RFID tags that you have, home Depot offers an RFID copy and a pretty cheap cost.Another feature that might seem like a selling point is being able to use it as a universal remote on any TV which is true you can use this device for that but you can also buy $20 keychain universal remotes that do the same thing.I've been in IT my whole life and I'm a nerd when it comes to gadgets like this so I bought it but quickly found out there's not much use for it that I'm going to benefit from and most people won't either, not really even criminals, especially with how common it's becoming for RFID blockers to be built into wallets",
                        },
                        {
                            star: 5,
                            content:
                                "I am a script kiddie and maybe im being modest I have developed my own kali lab so im a mid-grade level I was hesitant to order off here as its twice the price of the company, but they are out of stock. It works i have already upgraded it to unleashed and one thing i can tell you is you need to know what device you are needing to emulate/ whatever to get it to work. for example a tv or tv remote is not rfid. There are many tutorials and discords out there but its not a point and click you will need to have knowledge of what is and what kind of frequency you are wanting to get into is on. Also this comes with no sdhc card i assumed it would, i got the 256 ( thats the max) and do not order off here get it in store as many sellers on here sell generic off brands. The manual says its best to get the brand SanDisk or the expensive card. Trust me Ive been a photographer for years cheap cards are worthless and break down as soon as you buy them.Also the WIFI dev board does not come with, I am looking to purchase and just a recommendation it would have been nice to buy this in a bundle with a case and screen protector and the wifi dev board and sdhc card. Anyways I received this faster then estimated shipping time. Wonderful seller will buy again.",
                        },
                    ],
                },
                {
                    id: "raspberry",
                    name: "CreateBlock 树莓派 4B Raspberry Pi 4 代 B型 3b+ 3B 树莓派4B/8G主板",
                    price: "1089.00",
                    img: "./media/goods/raspberry/0.jpg.avif",
                    webLink: "https://item.jd.com/10048625219168.html",
                    imgList: [
                        { img: "./media/goods/raspberry/0.jpg.avif" },
                        { img: "./media/goods/raspberry/1.jpg.avif" },
                        { img: "./media/goods/raspberry/2.jpg.avif" },
                        { img: "./media/goods/raspberry/3.jpg.avif" },
                    ],
                    evaluation: [
                        {
                            star: 5,
                            content:
                                "树莓派做工很好，质量过关，性能杠杠的，接口也丰富，是一款非常好用的单片机，同时也具有很好的计算性能和嵌入式开发优势，对于开发，是一种很好的通用选择",
                        },
                        {
                            star: 5,
                            content:
                                "树莓派是非常好的单片机，同时具有很好的计算性能和嵌入式开发优势，对于现在的开发，树莓派是一个很好的通用选择。价格也比较合适",
                        },
                        {
                            star: 5,
                            content:
                                "东西很好，以前搞过之前版本的树莓派，现在的整体性能提高了不少，赶紧再更新一下，套装里面对于物联网的东西还是很齐全的，可以折腾好一段时间了，卖家也很周到，包装还有发的教材什么的，都很全面，需要花点时间搞起来！",
                        },
                        {
                            star: 1,
                            content: "资料老旧过时，技术指导手册没有，也是卖的全平台最贵的！",
                        },
                        {
                            star: 1,
                            content:
                                "我习惯在京东买东西，一是京东快递速度，另外一个就是售后服务，你这是**过来的吧，客服态度垃圾的很！有问题就跟你扯皮",
                        },
                        {
                            star: 1,
                            content:
                                "4B的用户还是买官方的吧 这个虽然也能用 但是兼容性不高 可用监测是0 opencv拉不起来视频 只能用用libcamera",
                        },
                        {
                            star: 1,
                            content:
                                "摄像头检测不到，技术人员直接摆烂，他的教程是raspistill，新版本系统是libcamera不支持raspistill了，他让我安装老系统直接说不会。直接不管你爱买不买，要不退回来吧。呼和浩特目前疫情静默，退也退不回去，只能看着吃哑巴亏。",
                        },
                    ],
                },
                {
                    id: "wireless",
                    name: "实验|kali Linux免驱USB无线网卡|深度系统ubuntu|centos|cdlinux",
                    price: "38.88",
                    img: "./media/goods/wireless/0.jpg.avif",
                    webLink: "https://item.taobao.com/item.htm?id=607640270804",
                    imgList: [
                        { img: "./media/goods/wireless/0.jpg.avif" },
                        { img: "./media/goods/wireless/1.jpg.avif" },
                        { img: "./media/goods/wireless/2.jpg.avif" },
                        { img: "./media/goods/wireless/3.jpg.avif" },
                    ],
                    evaluation: [
                        {
                            star: 5,
                            content:
                                "产品很好用，功能强大，是我想要的，老板还给了教程，没想到，出奇的好用",
                        },
                        {
                            star: 5,
                            content:
                                "原先我是觉得这么低的价格买到的东西能正常使用吗，结果发现确实如描述所说免驱而且能进入Monitor模式。不过因为没有天线所以接收信号的能力不强，基本就和手机差不多水平。另外也不支持wifi中5g的那些频道。总之如果只是用来做实验的话完全是值得推荐使用的。",
                        },
                        {
                            star: 5,
                            content:
                                "我买的这个rt3070就够用了，确实好用，实验可以做出来，mua的，你做出来你就知道，原来这个b站这个教程就是教你跑字典，不在字典里面的密码你根本破解不出来，不过这个网卡抓包确实快，nb。网卡是nb的，b站教程教的像是原始人",
                        },
                        {
                            star: 5,
                            content:
                                "完全没问题，完全支持kali，自己按照教程来非常轻松就把实验用的wifi破解了",
                        },
                        {
                            star: 5,
                            content:
                                "挺方便，openSUSE Leap 15.4插上就能识别。看一下模块名字是rt2800usb 信号还可以，AP模式我还没试，不过暂时先用着了",
                        },
                        {
                            star: 5,
                            content: "牛*克拉斯，昨天到的，现在已经开始跑字典了",
                        },
                        {
                            star: 5,
                            content: "老板真的很奈斯。技术杠杠滴且有耐心",
                        },
                        {
                            star: 3,
                            content:
                                "就学习抓包用，玩玩还可以，当网卡是真当不了。信号超级弱，我坏的笔记本内置网卡都比这个强。所以pin是不可能的，太弱了信号",
                        },
                        {
                            star: 1,
                            content:
                                "我只能说很垃圾哦 避雷 连wifi握手包都抓不到 客户端mac地址都抓不了😆 试了很久",
                        },
                        {
                            star: 5,
                            content:
                                "使用简单方便，可以搜到一些平时搜索不到的ssid，结合kali可以实现wi-fi爆破测试",
                        },
                    ],
                },
                {
                    id: "copilot",
                    name: "github copilot正规官方授权两年学生包授权激活AI编程智能代码",
                    price: "35.00",
                    img: "./media/goods/copilot/0.jpg.avif",
                    webLink: "https://item.taobao.com/item.htm?id=677608337747",
                    imgList: [
                        { img: "./media/goods/copilot/0.jpg.avif" },
                        { img: "./media/goods/copilot/1.jpg" },
                        { img: "./media/goods/copilot/2.jpg.avif" },
                        { img: "./media/goods/copilot/3.webp" },
                    ],
                    evaluation: [
                        {
                            star: 5,
                            content: "买的独享号，顺利使用上Copilot，也激活了IDEA",
                        },
                        {
                            star: 5,
                            content: "发货快，操作教程完整。很不错，非常推荐",
                        },
                        {
                            star: 5,
                            content: "用了一周，很靠谱，客服有问题也热心解决，谢谢！",
                        },
                        {
                            star: 5,
                            content: "因新号容易被封，后面又改成了独享号，咨询客服很有耐心。",
                        },
                        {
                            star: 5,
                            content: "需要用注册过一段时间的账号。第二天了，用的挺好。",
                        },
                        {
                            star: 5,
                            content:
                                "我自己用学信网和学生证的资料申请直接被机器人秒拒，这边几分钟就激活了连资料都不用……真不知道github的机器人有多zz，希望不会封号，翻车了就来追评",
                        },
                        {
                            star: 5,
                            content:
                                "有一说一 服务不错 至少我问了半小时 逐一给了解答 确实辛苦卖家了。目前成功激活了**和copilot，卖家承诺如果后续有问题会解决，至少开始服务很棒。",
                        },
                        {
                            star: 5,
                            content:
                                "这个三分钟就好了，看教程自己申请得几天，价格真的很划算了",
                        },
                        {
                            star: 5,
                            content: "东西质量非常好，与卖家描述的完全一致，非常满意",
                        },
                        {
                            star: 5,
                            content:
                                "登陆成功，主要用copilot就看账号的稳定性如何了，还有店家的售后",
                        },
                        {
                            star: 5,
                            content: "还真是10分钟搞定，牛哇牛哇",
                        },
                        {
                            star: 5,
                            content:
                                "卖家发货快，耐心教导使用教程，还提供视频教程，vscode、idea都安装好copilot并且都能使用，非常满意！",
                        },
                    ],
                },
                {
                    id: "xmexg",
                    name: "xmexg",
                    price: "∞",
                    disBuy: "该商品禁止购买",
                    img: "./media/goods/xmexg/0.jpg",
                    webLink: "https://github.com/xmexg",
                    imgList: [
                        { img: "./media/goods/xmexg/0.jpg" },
                        { img: "./media/goods/xmexg/0.jpg" },
                        { img: "./media/goods/xmexg/0.jpg" },
                        { img: "./media/goods/xmexg/0.jpg" },
                    ],
                    evaluation: [
                        {
                            star: 5,
                            content: "作业地址：https://github.com/xmexg/jswork",
                        },
                    ],
                },
            ],
            buylist: [],
            typeItInstances: {}, // 存储 TypeIt 实例的对象,
            locObject: areaData,// 地区数据
            chooseprovince: "110000",// 选择的省份
            choosecity: "110100",// 选择的市
            choosecounty: "",// 选择的县
        };
    },
    mounted() {
        this.initTypeIt();
        this.startTyping();
    },
    methods: {
        clickgoods: function (index) {
            this.clickIndex = index;
            this.pageChange();
        },

        initTypeIt() {
            this.goodsList.forEach((item) => {
                const instance = new TypeIt("#goodsList-" + item.id, {
                    strings: item.id,
                    speed: 400,
                    lifeLike: true,
                    loop: true,
                    cursor: true,
                });

                this.typeItInstances[item.id] = instance; // 将 TypeIt 实例保存到 typeItInstances 对象中
            });
        },
        startTyping() {
            for (const id in this.typeItInstances) {
                if (this.typeItInstances.hasOwnProperty(id)) {
                    this.typeItInstances[id].go();
                }
            }
        },

        changeBigImg: function (index, image_index) {
            this.goodsList[index].img =
                this.goodsList[index].imgList[image_index].img;
        },
        addcart: function () {
            let buynum = $("#buycount").val();
            if (this.goodsList[this.clickIndex].disBuy != undefined) {
                Toash(this.goodsList[this.clickIndex].disBuy);
                return;
            }
            let allprice = this.goodsList[this.clickIndex].price * buynum;
            let buyinfo = {
                shopping: this.goodsList[this.clickIndex],
                num: buynum,
                prices: allprice,
            };
            this.buylist.push(buyinfo);
            Toash("已加入购物车");
        },
        addeva: function () {
            let star = $("#evastar");
            let content = $("#evacontent");
            let s = parseInt(star.val());
            if (s > 5) s=5;
            if (s < 1) s=1;
            console.log("评分:" + s);
            let evaluationitem = {
                star: s,
                content: content.val(),
            };
            this.goodsList[this.clickIndex].evaluation.push(evaluationitem);
            star.val("");
            content.val("");
            Toash("评价成功");
        },
        pageChange: function () {// 商品页面切换
            $("#goodsPage_for").toggle(300);
            $("#goods_detail").toggle(300);
        },
        changenum: function (type, buyindex) {// 购买数量加减按钮
            switch (type) {
                case "add":
                    if (this.buylist[buyindex].num >= 100) return Toash("购买数量已达最大值");
                    this.buylist[buyindex].num++;
                    this.buylist[buyindex].prices = this.buylist[buyindex].shopping.price * this.buylist[buyindex].num;
                    break;
                case "dec":
                    if (this.buylist[buyindex].num <= 1) return Toash("购买数量已达最小值");
                    this.buylist[buyindex].num--;
                    this.buylist[buyindex].prices = this.buylist[buyindex].shopping.price * this.buylist[buyindex].num;
                    break;
            }
        },
        delcart: function (buyindex) {// 删除购物车中的商品
            this.buylist.splice(buyindex, 1);
        },
        paybutton: function () {// 购物车结算按钮
            if (this.buylist.length == 0) return Toash("购物车为空");
            let allprice = 0;
            this.buylist.forEach(item => {
                allprice += item.prices;
            });
            Toash("假装支付成功<br>总价为:" + allprice.toFixed(2) + "元");
            this.buylist = [];
        },
        fun_chooseprovince: function (e) {// 地区选择
            this.chooseprovince = e.target.value;
        },
        fun_choosecity: function (e) {// 选择市
            this.choosecity = e.target.value;
        },
        fun_choosecounty: function (e) {// 选择县
            this.choosecounty = e.target.value;
        },
    }
});
goods.mount("#webCon");
