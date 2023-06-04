const cartPage = createApp({
    inject: ['buylist'],
    data() {
        return {
            test: [
                {
                    num: 1,
                    shopping: {
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
                          }
                        ]
                      }
                }
            ]
        }
    },
    methods: {
        delcart: function (index) {
            console.log("删除了" + index);
            this.test.splice(index, 1);
        }
    }
}).mount("#cartPage");