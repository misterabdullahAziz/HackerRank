function processData(input) {
    //Enter your code here
   var inp = input.split('\n')  

var n = parseInt(inp[0]);  //Number of elements
var ar = inp[1].split(' ').map(function(item){
    return parseInt(item);
});
    var n1 = 0;
    var p=0;
    var z=0;
    for (var x=0; x<n ; x++)
    {
        if(ar[x]<0)
            n1+=1;
        else if(ar[x]>0)
            p+=1;
        else
            z+=1;
    }
    var zD = z/n;
    var n1D = n1/n;
    var pD = p/n;
     console.log(pD.toFixed(3));
    console.log(n1D.toFixed(3));
      console.log(zD.toFixed(3));
   
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
