window.addEventListener("scroll", function(){
    if(window.scrollY > 0){
        document.querySelector("header").style = "background: rgba(0,0,0,0.6);"
    }else {
        document.querySelector("header").style = "default"
    }
})