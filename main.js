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
  var _ = lib;
  var menuGap = 60;//percentage of opening
  
  //===Driver's Seat===
  initialize();
  _(window).on("resize", adjustRootEm);
  _("#menu").toggle(openMenu,closeMenu);
  
  //===Under The Hood===
  function initialize(){    
    disolveSplashPanel();
    adjustRootEm();
    
    //----helpers----
    function disolveSplashPanel(){
      _("#splashPanel")
        .css("opacity","0")
        .css("visibility","hidden")
      ;
    }

  }//===END initialize()===
  function adjustRootEm(){
    //delay an introductory meu flash
    setTimeout(function(){
      flashRedMenu(0.5);      
    },5000);

    var size = 35 + window.innerWidth/64;
    _(document.documentElement).css("fontSize", size +"px");
  }
  //---
  function openMenu(){
    flashRedMenu(0.5);
    _("#mainPanel")
      .css("transition","left 0.5s ease")
      .css("left",menuGap + "%")
      .css("right",-menuGap + "%")
      //.css("","")
    ;    
  }
  function closeMenu(){
    flashRedMenu(0.25);    
    _("#mainPanel")
      .css("transition","left 0s ease")    
      .css("left","0")
      .css("right","0")
      //.css("","")
    ;
  }
  //----
  function flashRedMenu(time){
    _("#menu").css("color","red");
    setTimeout(function(){
      _("#menu").css("color","black");      
    },1000*time);    
  }
}












