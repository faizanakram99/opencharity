window.onload = function(){
          var menuToggle = document.querySelector(".menu-toggle");
          var menu = document.querySelector(".menu");
          var dotsLink =   document.querySelectorAll(".dots-link");
          var joinus =   document.querySelector("#joinus");
          var form =   document.querySelector("form");
          var main = document.querySelector("main");
	  var register = document.querySelector("#register");




          menuToggle.addEventListener("click", function(){
            menu.classList.toggle("open");
          });

          joinus.addEventListener("click", function(){
            menu.classList.toggle("open");
            form.classList.toggle("open");
            main.style.display = "none";
          });

	  register.addEventListener("click", function(){
	    window.location.reload();
	  });

          dotsLink.forEach(function(elm){
            elm.addEventListener("click", function(){
              this.classList.toggle("active");
            });
          });
        };
