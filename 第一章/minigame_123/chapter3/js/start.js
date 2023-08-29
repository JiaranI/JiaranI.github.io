xuewu();

function xuewu() {
    // 创建跳过按钮
    var body = document.body;
    body.innerHTML = "";
    document.getElementsByTagName('html')[0].style.backgroundImage = "url('img/background.jpg')";
    center = document.createElement('div')
    center.id = "center"
    center.style = "width: 1200px; height: 602px; margin: 0 auto; position: relative;"

    touMing = document.createElement('div')
    touMing.id = "touMing";
    touMing.style = "width: 1000px; height: 602px; margin: 5px auto; color: white; text-align: center; font-size: 30px; border-bottom: 2px solid #fff; visibility: hidden;"

    txt = document.createTextNode("已击杀异虫: ")
    span = document.createElement('span');
    span.id = "score";

    touMing.appendChild(txt);
    touMing.appendChild(span);

    rule = document.createElement('div')
    rule.id = 'rule';
    rule.style = "width: 1000px; height: 500px; margin: 120px auto 0; color: white; text-align: center; background-color: rgba(0, 0, 0, 0.3);"

    h3 = document.createElement('h3')
    h3.style = "font-size: 30px; padding-top: 30px;"
    t0 = document.createTextNode("游戏规则")
    h3.appendChild(t0)

    p1 = document.createElement('p');
    t1 = document.createTextNode('雷诺和泰凯斯筑起了一道防线，以此抵御虫群。异虫的特点各不相同,需要分别用特定的武器击杀。');
    p2 = document.createElement('p');
    t2 = document.createTextNode('从上方会掉下来WASD等字母, 当字母达到下方白线时, 请按下键盘上对应按键');
    p3 = document.createElement('p');
    t3 = document.createTextNode('A代表斧头(axe), D代表飞镖(dart), W代表鞭子(whip), S代表霰弹枪(shotgun)');
    p4 = document.createElement('p');
    t4 = document.createTextNode('累积击杀50只异虫便可暂时击退虫群,快来帮雷诺抵御虫群吧');

    p1.appendChild(t1);
    p2.appendChild(t2);
    p3.appendChild(t3);
    p4.appendChild(t4);

    p1.style = "font-size: 20px; padding-top: 20px; margin: 20px auto"
    p2.style = "font-size: 20px; padding-top: 20px; margin: 20px auto"
    p3.style = "font-size: 20px; padding-top: 20px; margin: 20px auto"
    p4.style = "font-size: 20px; padding-top: 20px; margin: 20px auto"

    comfirm = document.createElement("input");
    comfirm.type = "button"
    comfirm.value = "接受挑战"
    comfirm.id = "comfirm";
    comfirm.style = "position: relative; top: 50px; height: 60px; text-align: center; width: 150px; line-height: 30px; font-size: 30px; color: #fff; background-color: #000; border-radius: 10px;"

    rule.appendChild(h3)
    rule.appendChild(p1)
    rule.appendChild(p2)
    rule.appendChild(p3)
    rule.appendChild(p4)
    rule.appendChild(comfirm)

    center.appendChild(rule);
    center.appendChild(touMing);

    body.appendChild(center);

    comfirm.addEventListener("click", function () {
        rule.style.display = "none";
        touMing.style.visibility = "visible";
        music_game();
    })
    // 创建跳过按钮
    // 创建跳过按钮
    var skipButton = document.createElement("button");
    skipButton.id = "skipButton"; // 为按钮设置ID，以便应用上述的CSS样式
    skipButton.innerHTML = "跳过";

    // 添加跳过逻辑
    skipButton.addEventListener("click", function() {
        // 在这里写下你希望跳过时实现的逻辑，例如隐藏某个元素或跳转到另一个页面。
        window.location.href="../../chapter3-end.html";
    });

    body.appendChild(skipButton); // 把按钮添加到body上
}

function music_game() {
    var t;
    var MAX_HEIGHT = 602;      //超过这个高度的方块不显示
    var blocks = new Array();  //放置每个下落的方块
    var speed = 5;	  //每次下落速度
    var timeMin = 1;  //最快1秒产生一个方块
    var timeMax = 2;  //最慢2秒产生一个方块
    var numMax = 10;  //最多同时有6个方块

    var lastGenTime = 0;  //上次产生方块的时间
    var timeGrid = 800; //产生方块的时间间隔不能比这个短

    var clearRand = 60; //距离MAX_HEIGHT上下多少像素就能消去方块而且加分
    var score = 0;

    var keyB = new Array("url('img/W.png') no-repeat", "url('img/S.png') no-repeat", "url('img/A.png') no-repeat", "url('img/D.png') no-repeat");
    var KEY_W = 0;	//对应数组的位置
    var KEY_S = 1;
    var KEY_A = 2;
    var KEY_D = 3;
    var pageX = new Array("220px", "300px", "380px", "460px", "550px", "620px", "700px", "780px", "860px", "940px");

    /*
     * 每隔一个时间就调用一个函数
     */
    function doOnTime(func, time) {
        return setInterval(func, time);
    }
    /*
     * 产生方块
     */
    function generateBlock() {
        setTimeout(function () {
            var nowTime = new Date().getTime();
            if ((blocks.length < numMax) && (nowTime - lastGenTime > timeGrid)) {
                lastGenTime = nowTime;
                var randPos = Math.floor(pageX.length * Math.random());
                var randPic = Math.floor(keyB.length * Math.random());
                var touMing = document.getElementById("touMing");
                var thing = document.createElement("div");
                touMing.appendChild(thing);
                thing.style.width = "30px";
                thing.style.height = "30px";
                thing.style.overflow = "hidden";
                thing.style.position = "absolute";
                thing.style.background = keyB[randPic];
                thing.style.left = pageX[randPos];
                thing.keyNum = randPic;				//为IE准备的
                thing.setAttribute("keyNum", randPic);	//为FF准备的
                thing.style.top = "-30px";
                blocks.push(thing);  //将方块加入数组中
            }
        }, Math.random() * (timeMax - timeMin + 1) * 1000 + timeMin * 1000);
    }

    /*
     * 游戏入口，每隔一定时间被调用
     */
    function game() {
        generateBlock();
        update();
        showScore("score", score);
    }

    /*
     * 更新游戏数据，比如方块位置
     */
    function update() {
        for (var i = 0; i < blocks.length; i++) {
            if (parseInt(blocks[i].style.top) > MAX_HEIGHT) {
                blocks[i].style.display = "none";
                blocks.remove(i);
                i--;
            } else {
                blocks[i].style.top = parseInt(blocks[i].style.top) + speed + "px";
            }
        }
    }

    /*
     * 显示分数
     */
    function showScore(showId, score) {
        document.getElementById(showId).innerHTML = parseInt(score);
    }

    /*
     * 给Array添加移除的方法
     */
    Array.prototype.remove = function (dx) {
        if (isNaN(dx) || dx > this.length) { return false; }
        for (var i = 0, n = 0; i < this.length; i++) {
            if (this[i] != this[dx]) {
                this[n++] = this[i];
            }
        }
        this.length -= 1;
    }

    /*
     * 添加事件监听
     */
    function response_keydown(evt) {
        var evt = evt || window.event;
        var evtKey = evt.keyCode || evt.which || evt.charCode;

        for (var u = 0; u < blocks.length; u++) {
            var blockKeyNum = blocks[u].keyNum || blocks[u].getAttribute("keyNum");
            if ((evtKey == 87 && blockKeyNum == KEY_W) ||
                (evtKey == 83 && blockKeyNum == KEY_S) ||
                (evtKey == 65 && blockKeyNum == KEY_A) ||
                (evtKey == 68 && blockKeyNum == KEY_D)
            ) {
                var top = parseInt(blocks[u].style.top);
                var height = parseInt(blocks[u].style.height);
                if (top > MAX_HEIGHT - clearRand - height && top < MAX_HEIGHT + clearRand) {	//在消失高度范围内
                    score += 1;

                    blocks[u].style.display = "none";
                    blocks.remove(u);
                    u--;
                }
            }
        }
    }

    function start_trigger() {
        t = doOnTime(game, 25);
        stop = setInterval(function () {
            if (score >= 50) {
                clearInterval(t);
                center = document.getElementById('center')
                touMing = document.getElementById('touMing')
                div = document.createElement('div')
                div.style = "margin: 200px auto 0; color: white; text-align: center; background-color: rgba(0, 0, 0, 0.3); height: 400px; width: 630px; line-height: 300px; font-size: 24px;"

                h4 = document.createElement('h4');
                h4.style = "height: 300px; line-height: 300px; text-align: center;"
                content = document.createTextNode("成功击退虫群!");
                next = document.createElement('input')
                next.type = "button";
                next.value = "确认"
                next.style = "position: absolute; top: 232px; left:520px; height: 60px; width: 150px; background-color: #000; color: #fff; font-size: 24px; border-radius: 10px;"
                next.addEventListener("click", function () {
                    window.location.href="../../chapter3-end.html"; /*此处改为要跳转到的地方*/
                })

                h4.appendChild(content);

                touMing.style.display = 'none';
                div.appendChild(h4);
                div.appendChild(next);
                center.appendChild(div);
                clearInterval(stop);
            }
        }, 25)
    }

    function start() {
        start_trigger();
    }

    start();

    document.addEventListener('keydown', function (evt) {
        var evt = evt || window.event;
        var evtKey = evt.keyCode || evt.which || evt.charCode;

        for (var u = 0; u < blocks.length; u++) {
            var blockKeyNum = blocks[u].keyNum || blocks[u].getAttribute("keyNum");
            if ((evtKey == 87 && blockKeyNum == KEY_W) ||
                (evtKey == 83 && blockKeyNum == KEY_S) ||
                (evtKey == 65 && blockKeyNum == KEY_A) ||
                (evtKey == 68 && blockKeyNum == KEY_D)
            ) {
                var top = parseInt(blocks[u].style.top);
                var height = parseInt(blocks[u].style.height);
                if (top > MAX_HEIGHT - clearRand - height && top < MAX_HEIGHT + clearRand) {	//在消失高度范围内
                    var mid = top + height / 2;

                    score += 1;

                    blocks[u].style.display = "none";
                    blocks.remove(u);
                    u--;
                }
            }
        }
    }
    )

}
