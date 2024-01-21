function showtime(){
    const time = new Date();
    const hour = time.getHours();
    const min  = time.getMinutes();
    const sec = time.getSeconds();
    console.log(hour,":",min,":",sec)
}

setInterval(function(){
    console.clear();
    showtime()
},1000)