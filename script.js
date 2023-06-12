
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
function createEle(a){
   
    var ele = document.createElement("div");
    ele.innerHTML=database[ a ];
    ele.classList.add("results");
    document.getElementById("content").appendChild(ele);
}
function copy(text) {
    var copyText = document.getElementById("search").value=text;;
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
  } 
