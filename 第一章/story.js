let storyData = {
    0:{
        text:["革命军首领吉姆雷诺正一个人喝着闷酒，电视上。帝国元首蒙斯克将他斥为无恶不作的叛党，吉姆看着手中红发女子的照片，心中百感交集。"],
        name:"旁白",
        next:[1],
    },
    1:{
        text:["……我向你们保证。很快，这个罪犯就会被绳之以法。"],
        name:"蒙斯克",
        next:[2],
    },
    2:{
        text:["咱们不是你死就是我活，人渣"],
        name:"雷诺",
        next:[3],
    },
    3:{
        text:["副官，我的军队准备好了吗？"],
        name:"雷诺",
        next:[4],
    },
    4:{
        text:["指挥官，您的部队已经就绪，等候调遣"],
        name:"副官",
        next:[5],
    },
    5:{
        text:["很好，简单说说，副官"],
        name:"雷诺",
        next:[6],
    },
    6:{
        text:["帝国军在死水基地的城镇中建立了一个后勤总部。它为全玛萨拉的行动提供补给。帝国最近把军队抽调走了，那里守备空虚。当地的民众都是有名的造反派，只是缺少装备和组织。"],
        name:"副官",
        next:[7],
    },
    7:{
        text:["好，只要拿下这里，蒙斯克对这颗行星的统治就会陷入瘫痪。备好舰船，这场革命即将白热化了。"],
        name:"雷诺",
        next:[8],
    },
    101:{
        text:["吉姆一个人喝着酒，突然身后传来沉重的脚步声，吉姆酒意全消，放下酒杯，右手缓缓地向手枪靠近。"],
        name:"旁白",
        next:[102]
    },
    102:{
        text:["作为星区头号通缉犯，你也不是那么难找嘛。我得亲眼看看。传说中的吉姆 雷诺……"],
        name:"神秘人",
        next:[103]
    },
    103:{
        text:["人民的英雄"],
        name:"泰凯斯",
        next:[104]
    },
    104:{
        text:["哼，泰凯斯 芬利。我听说你进去了。还是个终身监禁。怎么，表现良好，减刑出狱了？"],
        name:"雷诺",
        next:[105]
    },
    105:{
        text:["没错，老兄。我现在可是模范公民了"],
        name:"泰凯斯",
        next:[106]
    },
    106:{
        text:["大驾光临，有何贵干？"],
        name:"雷诺",
        next:[107]
    },
    107:{
        text:["想跟老朋友谈笔生意而已。知道帝国最近在干什么吗？他们正忙着挖掘外星神器呢。蒙斯克为这些东西着了魔。但是我找了个买家，要是能把神器卖给他的话……价钱随便我们开。"],
        name:"泰凯斯",
        next:[108]
    },
    108:{
        text:["这么好的差事，我没理由拒绝，对吧？\n"+
        "两人碰杯：哈哈"],
        name:"雷诺",
        next:[109]
    },
    109:{
        text:["：两人边喝酒便叙旧，当提及泰凯斯是如何出狱时，泰凯斯声称他在押解过程中挣脱束缚，赤手空拳打倒十几个守卫逃脱"],
        name:"旁白",
        next:[110]
    },
    110:{
        text:["说说正事吧，伙计。"],
        name:"泰凯斯",
        next:[111]
    },
    111:{
        text:["这是一处挖掘场，帝国的工程师已经在这挖了几个月了。看到那吊臂了吗？他们正准备把外星神器运走呢。"],
        name:"泰凯斯",
        next:[112]
    },
    112:{
        text:["啊，真是见鬼了。"],
        name:"雷诺",
        next:[113]
    },
    113:{
        text:["看到了吧？别这么没信心，吉姆。"],
        name:"泰凯斯",
        next:[114]
    },
    114:{
        text:["好。该给他们点厉害瞧瞧了。先端了那个基地，再把宝贝弄出来。"],
        name:"雷诺",
        next:[115]
    },
    201:{
        text:["有运输机会来接我们，待会要做的就是坐稳咯。"],
        name:"雷诺",
        next:[202]
    },
    202:{
        text:["听起来不错。我看还有点时间稍事休整。"],
        name:"泰凯斯",
        next:[209]
    },
    209:{
        text:["你的神秘买家是谁，泰凯斯?我们应该把神器交给谁?"],
        name:"雷诺",
        next:[210]
    },
    210:{
        text:["一群书呆子，自称莫比亚斯基金会。"],
        name:"泰凯斯",
        next:[211]
    },
    211:{
        text:["莫比亚斯?那可是个正统的研究组织。他们怎么会找上你?"],
        name:"雷诺",
        next:[212]
    },
    212:{
        text:["蒙斯克禁止外星物品交易让这伙人绝望了。而且你了解我的，吉米——我是个伟大的科学支持者。"],
        name:"泰凯斯",
        next:[213]
    },
    213:{
        text:["……"],
        name:"雷诺",
        next:[203]
    },
    203:{
        text:["指挥官，我侦测到密集的异虫生物信号正降落在废弃的采掘站附近。"],
        name:"副官",
        next:[204]
    },
    204:{
        text:["我早该想到的！你耍我，泰凯斯。"],
        name:"雷诺",
        next:[205]
    },
    205:{
        text:["我发誓，伙计。虫子的事我完全不清楚。"],
        name:"泰凯斯",
        next:[206]
    },
    206:{
        text:["根据当前的形势，虫群会在一小时内席卷这里。"],
        name:"副官",
        next:[207]
    },
    207:{
        text:["见鬼……我们必须撑到撤离。看来要打一场硬仗了。"],
        name:"雷诺",
        next:[208]
    },

}

function updateStory(index) {
    let data = storyData[index];
    if (!data) return;

    document.getElementById("speakerName").innerText = data.name;
    document.getElementById("speakerText").innerText = data.text[0];
    document.getElementById("speakerImage").src = "../images/" + data.name + ".jpg";
}

/*function nextStory() {
    let data = storyData[currentIndex];
    if (data && data.next) {
        currentIndex = data.next[0];
        updateStory(currentIndex);
    } else {
        // Optionally, you can handle when the story ends, like:
        // alert("Story ends!");
    }
}*/

// 初始化页面
updateStory(currentIndex);
