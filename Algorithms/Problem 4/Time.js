function processData(input) {
     var a = input.split(":");
    var b = a[2].substring(2);
    var d= parseInt(a[0]);
    if(b === "PM")
     {   
         if(d!==12)
            d+=12;
         if(d>23)
         {
             console.log("00:"+a[1]+":"+a[2].substring(0,2));
         }
         else
             {
                 console.log(d+":"+a[1]+":"+a[2].substring(0,2));
             }
     }
    else
    {
        if(d !== 12)
         console.log(input.substring(0,8));
        else
            console.log("00:"+a[1]+":"+a[2].substring(0,2));
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});