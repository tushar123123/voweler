function x() {
  var x  = document.querySelector("textArea").value;
  var l = x.length;
  var count=0;
  var alpha = 0;
for(var i=0;i<l;i++){
   if(x[i]!=" "){
       alpha++;
   }
   console.log("alpha:"+alpha);
   if(/^[a-zA-Z0-9- ]*$/. test(x[i]) == false || /^[0-9]+$/.test(x[i])==true){
     alpha--;
   }
   console.log("alpha:"+alpha);
  if(x[i]=='i' || x[i]=='e' || x[i]=='o' || x[i]=='u' || x[i]=='a' || x[i]=='I' || x[i]=='E' || x[i]=='O' || x[i]=='U' || x[i]=='A') {
      count++;
  }
}
document.getElementById("temp").textContent=count;
document.getElementById("alpha").textContent=alpha;
document.getElementById("cons").textContent=eval(alpha-count);
}
function reset() {
    document.querySelector("textArea").value = "";
    document.getElementById("temp").textContent="0";
    document.getElementById("alpha").textContent="0";
    document.getElementById("cons").textContent="0";
}