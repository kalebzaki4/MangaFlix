const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      siderbarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");
      const searchField = document.querySelector(".search-field");
      const searchIcon = document.querySelector(".search");

      searchToggle.addEventListener("click", () =>{
        searchToggle.classList.toggle("active");
        
      });

      document.getElementById("vejaMaisButton").addEventListener("click", function() {
        this.style.display = "none";
        document.querySelector(".mangaContainer").style.display = "flex";
        });

