function f3(x, y) {
    x.classList.remove('animated');
    x.classList.remove(y);
}

function f1(x, y) {
    let a = document.querySelectorAll(x);
    a.onclick = function (e) {
        e.preventDefault();
        a.classList.add('animated');
        a.classList.add(y);
        setTimeout(f3, 1000, a, y);
    }
}

function f2(x, y) {
    let a = document.querySelectorAll(x);
    for (let b of a) {
        b.onclick = function (e) {
            e.preventDefault();
            b.classList.add('animated');
            b.classList.add(y);
            setTimeout(f3, 1000, b, y);
        }
    }
}



//Для имени - f1
//Для массива имён - f2

f2('.nav-text-2','bounce');
f2('.MP1-btn','heartBeat');
f2('.MP6-btn','bounceOut');
f2('.MP7-btn','jello');
f2('.footer-btn','shake');
