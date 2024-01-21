let counter = 0;


function waitonesecond(){
    let c = new Promise(function(resolve, reject){
        setTimeout(resolve, 1000);
    })
    return c
    }

function counterupdate(){
    counter++;
    waitonesecond().then(counterupdate);
    console.log("The counter value is " + counter);
}

counterupdate();

