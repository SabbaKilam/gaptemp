//============================
/*
  Author: Abbas Abdulmalik
  Creation Date: March 10, 2016
  Title: KillingMe
  Revised: 
  Purpose: 
  Note:
  //-----------------
  <body>
    <div id="menuPanel" class="panel"></div>    
    <div id="mainPanel" class="panel">
      <div id="topBanner">
        <span id="menu">&#9776;</span>
        <span id="title">Title Goes Here</span>
        <hr>
      </div>
    </div>
    <div id="splashPanel" class="panel"></div>
  <script src="main.js" class="panel"></script>        
  </body>  
*/
/*global lib*/
/*global jQuery*/
/*global $*/
//=============================
$(document).ready(runApplication);
function runApplication(){
  //===Data===
  var backGroundColor = "hsl(189, 68%, 36%)";
  var backGroundComplement = "hsl(10, 68%, 36%)";
  var textColor = "hsl(189, 68%, 10%)";
  var _ = lib;
  var menuGap = 70;//percentage of opening
  var delay = 0.5;
  //===Driver's Seat===
  initialize();  
  _(window).on("resize", adjustRootEm);
  _("#menu").toggle(openMenu,closeMenu);
  _("#menuPanel").click(function(){
      window.close();
      //navigator.app.exitApp(); 
  });
  
  //===Under The Hood===
  function initialize(){     
    disolveSplashPanel();
    adjustRootEm();
    //delay an introductory menu flash
    setTimeout(function(){
      flashRedMenu(0.5);      
    },5000);
    //----helpers----
    function disolveSplashPanel(){
      _("#splashPanel")
        .css("opacity","0")
        .css("visibility","hidden")
      ;
    }
  }//===END initialize()===
  function adjustRootEm(){
    var size = 32 + window.innerWidth/55;
    _(document.documentElement).css("fontSize", size +"px");
  }
  //---
  function openMenu(){
    flashRedMenu(0.5);
    _("#mainPanel")     
      .css("transition", "left "+ delay +"s ease")
      .css("left",menuGap + "%")
      .css("right",-menuGap + "%")
      //.css("","")
    ;
    _("#title")
        .css("transition", "all "+ 0.5*delay +"s ease")     
        .css("visibility","hidden")
    ;    
  }
  //--------
  function closeMenu(){
    flashRedMenu(0.5);    
    _("#mainPanel")
      .css("transition","left "+ delay +"s ease")   
      .css("left","0")
      .css("right","0")
      //.css("","")
    ;
    setTimeout(function(){
        _("#title")
            .css("transition", "visibility"+ 5*delay +"s ease")
            .css("visibility","visible");          
    },delay*700);
  }
  //----
  function flashRedMenu(time){
    _("#menu").css("color", backGroundComplement);
    setTimeout(function(){
      _("#menu").css("color", textColor);      
    },1000*time);    
  }
}
//===END of runApplication()===












