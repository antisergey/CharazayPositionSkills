// ==UserScript==
// @name        PositionSkills
// @namespace   Charazay
// @description Position Skills
// @include     *charazay.com*act=player*code=1
// @include     *charazay.com*act=youthplayer*code=1
// @version     1
// @grant       none
// ==/UserScript==

// a function that loads jQuery and calls a callback function when jQuery has finished loading
function addScript(scriptPath, callback) {
  var script = document.createElement("script");
  script.setAttribute("src", scriptPath);
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    if (callback) {
       script.textContent = "(" + callback.toString() + ")();";
    }
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

addScript("http://code.jquery.com/jquery-1.7.1.min.js", function() {
  jQuery.noConflict();
  (function($) {
    //alert('hello')  
   /*
   skillLang = [
        'Подбор',//0 REB
        'В.позиции',//1 FTW
        'Защита',//2 DEF
        'Скорость',//3 SPEED
        'Дриблинг',//4 DRIB
        'Пас',//5 PASS
        'Опыт',//6 EXP
        'Штрафные',//7 FT
        '3 очка',//8 3P
        '2 очка'//9 2P
    ];*/
    /*
    player_skills = {
            name: '',
            type: 'area',
            data: [7, 10, 17, 22, 13, 5, 19, 5, 5, 7]
        } 
   */       
   if(typeof(player_skills) == 'undefined')
     {
       return;
     }
   var FTW = player_skills.data[1];
   var DEF = player_skills.data[2];
   var SPEED = player_skills.data[3];
   var DRIB = player_skills.data[4];
   var PASS = player_skills.data[5];
   
   // PG: Passing, Dribbling > Speed > Footwork
   var PGoff = ''; 
   if(PASS>DRIB)
     {
       PGoff+=PASS+'/'+DRIB;
     }
   else
     {
       PGoff+=DRIB+'/'+PASS;
     }    
   PGoff+='<br>'+SPEED+'<br>'+FTW;
   // SG: Dribbling, Speed > Passing > Footwork
   var SGoff = '';
   if(DRIB>SPEED)
     {
       SGoff+=DRIB+'/'+SPEED;
     }
    else
      {
        SGoff+=SPEED+'/'+DRIB;
      }
   SGoff+='<br>'+PASS+'<br>'+FTW;   
   //SF: Speed > Dribbling > Footwork > Passing
   var SFoff = '' + SPEED+'<br>'+DRIB+'<br>'+PASS+'<br>'+FTW;                            
   //PF: Footwork > Speed > Dribbling > Passing
   var PFoff = '' + FTW+'<br>'+SPEED+'<br>'+DRIB+'<br>'+PASS;      
   //C: Footwork > Speed > Passing > Dribbling    
   var Coff = '' +FTW+'<br>'+SPEED+'<br>'+PASS+'<br>'+DRIB;
     
   var TotalOff = FTW+SPEED+DRIB+PASS;
   
    
   //PG: Defense > Speed > Dribbling, Passing > Footwork
   var PGdef = '' +DEF+'<br>'+SPEED+'<br>';
   if(DRIB>PASS)
     {
       PGdef+=DRIB+'/'+PASS;
     }
    else
      {
        PGdef+=PASS+'/'+DRIB;
      }
   PGdef+='<br>'+FTW;   
   //SG: Defense > Speed > Footwork, Dribbling > Passing
   var SGdef = '' +DEF+'<br>'+SPEED+'<br>';
   if(FTW>DRIB)
     {
       SGdef+=FTW+'/'+DRIB;
     }
    else
      {
        SGdef+=DRIB+'/'+FTW;
      }    
   SGdef+='<br>'+PASS;   
   //SF: Defense > Speed > Footwork > Passing, Dribbling
   var SFdef = '' +DEF+'<br>'+SPEED+'<br>'+FTW+'<br>';
    if(PASS>DRIB)
      {
        SFdef+=PASS+'/'+DRIB; 
      }
    else
      {
        SFdef+=DRIB+'/'+PASS; 
      }     
   //PF: Defense > Footwork > Speed > Passing, Dribbling
   var PFdef = '' +DEF+'<br>'+FTW+'<br>'+SPEED+'<br>';
    if(PASS>DRIB)
      {
        PFdef+=PASS+'/'+DRIB;
      }
    else
      {
        PFdef+=DRIB+'/'+PASS;
      }    
   //C: Defense > Footwork > Speed > Passing > Dribbling 
   var Cdef = '' +DEF+'<br>'+FTW+'<br>'+SPEED+'<br>'+PASS+'<br>'+DRIB;
   var TotalDef = TotalOff+DEF;
    
   var playerTable = $("<table id='addPlayerView' cellspacing='2' cellpadding='5' width='80%' style='margin: 0 auto;'/>");
   playerTable.append($("<thead><tr><th width=50px></th><th width=50px>PG</th><th width=50px>SG</th><th width=50px>SF</th><th width=50px>PF</th><th width=50px>C</th><th width=50px>Total</th></tr></thead>"));
   playerTable = playerTable.append($("<tbody/>"));
   var tr = playerTable.append(
                $("<tr/>")
                  .append(
                    $("<td/>").append('DEFENSE'),
                    $("<td/>").append(PGdef),
                    $("<td/>").append(SGdef),
                    $("<td/>").append(SFdef),
                    $("<td/>").append(PFdef),
                    $("<td/>").append(Cdef),
                    $("<td/>").append(TotalDef)
                  )).append(
                $("<tr/>")
                  .append(
                    $("<td/>").append('OFFENSE'),
                    $("<td/>").append(PGoff),
                    $("<td/>").append(SGoff),
                    $("<td/>").append(SFoff),
                    $("<td/>").append(PFoff),
                    $("<td/>").append(Coff),
                    $("<td/>").append(TotalOff)
                  ));
   $("img.FAPercent:first")
            .parents("div.mc-ls")
            .prepend(playerTable);
      })(jQuery);
});