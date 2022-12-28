$(document).ready(function(){
    $(".w").click(()=>audiow.play()).css("background-image","url(images/crash.png)");
    $(".a").click(()=>audioa.play()).css("background-image","url(images/kick.png)");
    $(".s").click(()=>audios.play()).css("background-image","url(images/snare.png)");
    $(".d").click(()=>audiod.play()).css("background-image","url(images/tom1.png)");
    $(".j").click(()=>audioj.play()).css("background-image","url(images/tom2.png)");
    $(".k").click(()=>audiok.play()).css("background-image","url(images/tom3.png)");
    $(".l").click(()=>audiol.play()).css("background-image","url(images/tom4.png)");
    $(".drum").click(function(){
        console.log(this.innerHTML);
    $(document).keydown(function(event){
        console.log(`audio${event.key}`)

    })
    });
});


let audiow = new Audio("sounds/crash.mp3");
let audioa = new Audio("sounds/kick-bass.mp3");
let audios = new Audio("sounds/snare.mp3");
let audiod = new Audio("sounds/tom-1.mp3");
let audioj = new Audio("sounds/tom-2.mp3");
let audiok = new Audio("sounds/tom-3.mp3");
let audiol = new Audio("sounds/tom-4.mp3");

