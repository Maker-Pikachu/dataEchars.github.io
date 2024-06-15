let showTime = document.querySelector('.showTime');
let t = null;
function time(){
    clearTimeout(t);
    let date = new Date();
    let y = date.getFullYear();
    let mt = date.getMonth() + 1;
    if(mt <= 9){
        mt = "0" + mt
    }
    let day = date.getDate();
    if(day <= 9){
        day = "0" + day
    }
    let h = date.getHours();
    if(h <= 9){
        h = "0" + h
    }
    let m = date.getMinutes();
    if(m <= 9){
        m = "0" + m
    }
    let s = date.getSeconds();
    if(s <= 9){
        s = "0" + s
    }
    showTime.innerHTML = '当前时间：' + y + '年' + mt + '月' + day + '日 ' + h + " : " + m + " : " + s 
    // 设定计时器
    t = setTimeout(time, 1000)
}
time()