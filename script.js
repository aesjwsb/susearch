alert("this website contains bad words");
function searcht(){
    var text=document.getElementById("search").value;
    text=text.toLowerCase();
    document.getElementById("content").innerHTML="";
    for(let i=0;i < database.length ; i++){
        let result = database[i].match(text);
       if(result == null  ){
        console.log(text+database[i]);
       }else{
       createEle(i); 
       };
    }
}
function copyt(x) {
    var copyText = document.getElementById("myInput");
    copyText.value=x;
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard
    .writeText(copyText.value)
    .then(() => {
      alert("successfully copied");
    })
    .catch(() => {
      alert("something went wrong");
    });
  }

function createEle(a){
   
    var ele = document.createElement("div");
    ele.innerHTML=database[ a ];
    ele.classList.add("results");
    ele.ondblclick=function() {location.assign("https://searx.garudalinux.org/search?q="+database[a]+"+meaning");}
    ele.onclick= function () {copyt(database[a]);}
    document.getElementById("content").appendChild(ele);
}
