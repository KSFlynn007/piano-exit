let drums = document.querySelector("#drums");
let guitar = document.querySelector("#guitar");
let cascade = document.querySelector("#cascadeSky");
let hiLo = document.querySelector("#hiLoBase");
let cloudlines = document.querySelector("#cloudlines");

function playDrums()
{
    drums.play();
    drums.volume = 0.6;
    $("#playDrums").html("Playing");
    $("#playDrums").addClass("bg-dark").addClass("text-light");

}

function stopDrums()
{
    drums.pause();
    drums.currentTime = 0;
    $("#playDrums").html("Start Drums");
    $("#playDrums").removeClass("bg-dark").removeClass("text-light");

}

function playGuitar()
{
    guitar.play();
    guitar.volume = 0.5;
    $("#playGuitar").html("Playing");
    $("#playGuitar").addClass("bg-dark").addClass("text-light");
}

function stopGuitar()
{
    guitar.pause();
    guitar.currentTime = 0;
    $("#playGuitar").html("Play Guitar");
    $("#playGuitar").removeClass("bg-dark").removeClass("text-light");
}

function playCascadeSky()
{
    cascade.play();
    cascade.volume = 0.6;
    $("#playCascadeSky").html("Playing");
    $("#playCascadeSky").addClass("bg-dark").addClass("text-light");
}

function stopCascadeSky()
{
    cascade.pause();
    cascade.currentTime = 0;
    $("#playCascadeSky").html("Play Cascase Sky");
    $("#playCascadeSky").removeClass("bg-dark").removeClass("text-light");
}

function playHiLoBase()
{
    hiLo.play();
    hiLo.volume = 0.7;
    $("#playHiLoBase").html("Playing");
    $("#playHiLoBase").addClass("bg-dark").addClass("text-light");
}

function stopHiLoBase()
{
    hiLo.pause();
    hiLo.currentTime = 0;
    $("#playHiLoBase").html("Play Hi Lo Base");
    $("#playHiLoBase").removeClass("bg-dark").removeClass("text-light");
}

function playCloudlines()
{
    cloudlines.play();
    cloudlines.volume = 0.5;
    $("#playCloudlines").html("Playing");
    $("#playCloudlines").addClass("bg-dark").addClass("text-light");
}

function stopCloudlines()
{
    cloudlines.pause();
    cloudlines.currentTime = 0;
    $("#playCloudlines").html("Play Cloudlines");
    $("#playCloudlines").removeClass("bg-dark").removeClass("text-light");
}



function playPiano()
{
    function cloneAndPlay(audioNode)
    {
        var clone = audioNode.cloneNode(true);
        clone.play();
    }

    $(document).keydown(function(event) {
 
        var key = (event.keyCode ? event.keyCode : event.which);

        // LOW NOTE
        if(key == '65'){
            // a
            $("#sat-FLow").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-FLow").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(FLow)
        }
        if(key == '87'){
            // w
            $("#sat-GLow").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-GLow").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(GLow)
        }
        if(key == '83'){
            // s
            $("#sat-GSharpMLow").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-GSharpMLow").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(GSharpmLow)
        }
        if(key == '69'){
            // e
            $("#sat-ASharp").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-ASharp").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(ASharp)
        }
        if(key == '68'){
            // d
            $("#sat-CSharpM").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-CSharpM").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(CSharpm)
        }
        if(key == '82'){
            // r
            $("#sat-DSharp").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-DSharp").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(DSharp)
        }
        if(key == '70'){
            // f
            $("#sat-C").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-C").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(C)
        }


        // HI NOTE

        if(key == '72'){
            // h
            $("#sat-G").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-G").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(G)
        }
        if(key == '85'){
            // u
            $("#sat-Em").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-Em").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(Em)
        }
        if(key == '74'){
            // j
            $("#sat-F").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-F").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(F)
        }
        if(key == '73'){
            // i
            $("#sat-GSharpM").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-GSharpM").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(GSharpm)
        }
        if(key == '75'){
            // k
            $("#sat-GM").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-GM").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(Gm)
        }
        if(key == '79'){
            // o
            $("#sat-A").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-A").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(A)
        }
        if(key == '76'){
            // l
            $("#sat-Cm").addClass("bg-dark").delay(1000).queue(function(){
                $(this).removeClass("bg-dark").dequeue();
            });
            $("#sat-Cm").addClass("text-white").delay(60).queue(function(){
                $(this).removeClass("text-white").dequeue();
            });
            cloneAndPlay(Cm)
        }
    
    });
   
    
}


