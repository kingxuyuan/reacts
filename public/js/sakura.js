var stop, staticx;
var img = new Image();
img.src = `data:image/png;base64,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`;

function Sakura(x, y, s, r, fn) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.r = r;
    this.fn = fn;
}
Sakura.prototype.draw = function (cxt) {
    cxt.save();
    var xc = 40 * this.s / 4;
    cxt.translate(this.x, this.y);
    cxt.rotate(this.r);
    cxt.drawImage(img, 0, 0, 40 * this.s, 40 * this.s)
    cxt.restore();
}
Sakura.prototype.update = function () {
    this.x = this.fn.x(this.x, this.y);
    this.y = this.fn.y(this.y, this.y);
    this.r = this.fn.r(this.r);
    if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) {
        this.r = getRandom('fnr');
        if (Math.random() > 0.4) {
            this.x = getRandom('x');
            this.y = 0;
            this.s = getRandom('s');
            this.r = getRandom('r');
        } else {
            this.x = window.innerWidth;
            this.y = getRandom('y');
            this.s = getRandom('s');
            this.r = getRandom('r');
        }
    }
}
SakuraList = function () {
    this.list = [];
}
SakuraList.prototype.push = function (sakura) {
    this.list.push(sakura);
}
SakuraList.prototype.update = function () {
    for (var i = 0, len = this.list.length; i < len; i++) {
        this.list[i].update();
    }
}
SakuraList.prototype.draw = function (cxt) {
    for (var i = 0, len = this.list.length; i < len; i++) {
        this.list[i].draw(cxt);
    }
}
SakuraList.prototype.get = function (i) {
    return this.list[i];
}
SakuraList.prototype.size = function () {
    return this.list.length;
}

function getRandom(option) {
    var ret, random;
    switch (option) {
        case 'x':
            ret = Math.random() * window.innerWidth;
            break;
        case 'y':
            ret = Math.random() * window.innerHeight;
            break;
        case 's':
            ret = Math.random();
            break;
        case 'r':
            ret = Math.random() * 6;
            break;
        case 'fnx':
            random = -0.5 + Math.random() * 1;
            ret = function (x, y) {
                return x + 0.5 * random - 1.7;
            };
            break;
        case 'fny':
            random = 1.5 + Math.random() * 0.7
            ret = function (x, y) {
                return y + random;
            };
            break;
        case 'fnr':
            random = Math.random() * 0.03;
            ret = function (r) {
                return r + random;
            };
            break;
    }
    return ret;
}

function startSakura() {
    requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    var canvas = document.createElement('canvas'),
        cxt;
    staticx = true;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none;');
    canvas.setAttribute('id', 'canvas_sakura');
    // document.getElementsByTagName('body')[0].appendChild(canvas);
    
    var el = document.querySelector('.login');
    el && el.appendChild(canvas);

    cxt = canvas.getContext('2d');
    var sakuraList = new SakuraList();
    for (var i = 0; i < 20; i++) {
        var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny;
        randomX = getRandom('x');
        randomY = getRandom('y');
        randomR = getRandom('r');
        randomS = getRandom('s');
        randomFnx = getRandom('fnx');
        randomFny = getRandom('fny');
        randomFnR = getRandom('fnr');
        sakura = new Sakura(randomX, randomY, randomS, randomR, {
            x: randomFnx,
            y: randomFny,
            r: randomFnR
        });
        sakura.draw(cxt);
        sakuraList.push(sakura);
    }
    stop = requestAnimationFrame(function () {
        cxt.clearRect(0, 0, canvas.width, canvas.height);
        sakuraList.update();
        sakuraList.draw(cxt);
        stop = requestAnimationFrame(arguments.callee);
    })
}
window.onresize = function () {
    // var canvasSnow = document.getElementById('canvas_snow');
}
img.onload = function () {
    // startSakura();
}

function stopp() {
    if (staticx) {
        var child = document.getElementById("canvas_sakura");
        child.parentNode.removeChild(child);
        window.cancelAnimationFrame(stop);
        staticx = false;
    } else {
        // startSakura();
    }
}

window.startSakura = startSakura;