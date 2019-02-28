function makePost(){

    
    var postText = document.getElementById("postInput").value;    
    var userPost = document.createElement("P");
    var text = document.createTextNode(postText);
    userPost.appendChild(text);
    document.getElementById("posts").appendChild(userPost);

}

function makeSticky(){

    var postText = document.getElementById("postInput").value;    
    var stickPost = document.createElement("H1");
    var textnode = document.createTextNode(postText);
    stickPost.appendChild(textnode);                   

    var sticky = document.getElementById("posts");    
    sticky.insertBefore(stickPost, sticky.childNodes[0]);  

}

function removeLastPost(){
    
    var sticky = document.getElementById("posts");
    sticky.removeChild(sticky.lastChild);    
}