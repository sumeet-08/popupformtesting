document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".containers").classList.add("active");
});

document.querySelector(".containers .close-btn").addEventListener("click", function(){
    document.querySelector(".containers").classList.remove("active");
});