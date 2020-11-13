
document.getElementById("song1").addEventListener("click", function(){
    var audio = document.getElementById("music");
    if (audio.paused) {
        audio.play();}
        else{
            audio.pause();
            audio.currentTime = 0;}
    
});

document.getElementById("song2").addEventListener("click", function(){
    var audio = document.getElementById("music1");
    if (audio.paused) {
        audio.play();}
        else{
            audio.pause();
            audio.currentTime = 0;}
    
});

document.getElementById("song3").addEventListener("click", function(){
    var audio = document.getElementById("music2");
    if (audio.paused) {
        audio.play();}
        else{
            audio.pause();
            audio.currentTime = 0;}
});