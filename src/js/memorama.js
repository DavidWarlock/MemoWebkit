$(document).on('ready',function(event){
    var listaImagenes = [".../image/memorama/img01.png",
                         ".../images/memorama/img02.png",
                         ".../images/memorama/img03.png",
                         ".../images/memorama/img04.png",
                         ".../images/memorama/img05.png",
                         ".../images/memorama/img06.png",
                         ".../images/memorama/img07.png",
                         ".../images/memorama/img08.png",
                         ".../images/memorama/img01.png",
                         ".../images/memorama/img02.png",
                         ".../images/memorama/img03.png",
                         ".../images/memorama/img04.png",
                         ".../images/memorama/img05.png",
                         ".../images/memorama/img06.png",
                         ".../images/memorama/img07.png",
                         ".../images/memorama/img08.png"];
    var listaRandom;
    var $button = $('button');
    var str = "img";
    var $img1 = $('#null'), $img2 = $('#null');
    var cont = 0;
    var win = 0;
    var contperder = 0;
    
    $button.on('click',function(eventClick){
        contperder = 0;
        win = 0;
        cont = 0;
        $img1 = $('#null'); 
        $img2 = $('#null');
        $img1.attr("name","noimage");
        $img2.attr("name","noimage");
        listaRandom = listaImagenes.sort(function() {return 0.5 - Math.random()});
        console.log(listaRandom);
        for(i = 0; i <= 15; i++)
        {
            document.getElementById(str.concat(i+1)).src = "";
            document.getElementById(str.concat(i+1)).onclick = clickImg;
        }
        alert("Haz empezado un nuevo juego")
    });
    
    var clickImg = function(){
        console.log(contperder);
        if(contperder != 5){
        if(win < 8){
        var $image = $(this);
        if($image.attr("name")==$img1.attr("name")){
        }else{
            if(cont==0){
                $img1 = $image; $image.attr("src",listaRandom[parseInt($image.attr("name"))]);
                cont++;
            }else{
                $img2 = $image; $image.attr("src",listaRandom[parseInt($image.attr("name"))]);
                contperder++;
                setTimeout(function(){
                if($img1.attr("src") != $img2.attr("src")){
                    alert("No es par");
                    $img1.attr("src","");
                    $img2.attr("src","");
                    $img1 = $('#null');
                    $img2 = $('#null');
                    contperder ++;
                }else{
                    win++;
                    $img1.prop("onclick", null);
                    $img2.prop("onclick", null);                 
                    if(win == 8){
                        alert("Haz Ganado");
                    }
                }
                cont = 0;
                $img1 = $('#null');
                $img2 = $('#null');
                },100);
            }
        }
    }
    }else{
        alert("Haz perdido")
    }
    }
});