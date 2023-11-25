window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
});



function openTab(tabId) {
    let tabContents, tabLinks;
    //Hide all tab content
    tabContents = document.getElementsByClassName('tab-content');

    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none"
    }

    //Remove "active" from all tab links buttons
    tabLinks = tabContents = document.getElementsByClassName('tab-link');
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    //Make aria-selected as false
    document.querySelector('[aria-selected="true"]').setAttribute("aria-selected", false);

    // Show the specific tab content
    let selectedTab = document.getElementById(tabId);
    selectedTab.style.display = "grid";

    // Add the "active" class to the button that opened the tab
    let selectedLink = document.getElementById(tabId + "_link");
    selectedLink.className += " active";

    //Make aria-selected as true for selected tab
    selectedLink.setAttribute("aria-selected", true);

}

function openAccordionClick(event) {
    let selectedIndex = event.currentTarget.dataset.index;
    let headings = document.querySelectorAll('.accordion__item-heading');
    let contents = document.querySelectorAll('.accordion__item-content');

    headings.forEach(item => {
        //Handle the contents
        if (item.dataset.index == selectedIndex && !item.childNodes[3].childNodes[0].classList.contains('fa-chevron-up-open')) {
            contents[selectedIndex].removeAttribute('hidden');
            item.childNodes[3].childNodes[0].classList.add('fa-chevron-up-open');

        } else {
            contents[item.dataset.index].setAttribute('hidden', true);
            item.childNodes[3].childNodes[0].classList.remove('fa-chevron-up-open');
        }
    });
}


function onExpandCollapse(event) {
    let selectedIndex = event.currentTarget.parentNode.parentNode.dataset.index;
    let headings = document.querySelectorAll('.accordion__item-heading');
    let contents = document.querySelectorAll('.accordion__item-content');

    headings.forEach(item => {
        //Handle the contents
        if (item.dataset.index == selectedIndex && !item.childNodes[3].childNodes[0].classList.contains('fa-chevron-up-open')) {
            contents[selectedIndex].removeAttribute('hidden');
            item.childNodes[3].childNodes[0].classList.add('fa-chevron-up-open');

        } else {
            contents[item.dataset.index].setAttribute('hidden', true);
            item.childNodes[3].childNodes[0].classList.remove('fa-chevron-up-open');
        }

    });
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

var contactformEl = document.getElementById("contactformId");

contactformEl.addEventListener("submit", (e) =>{
    e.preventDefault();

    let emailEL = document.getElementsByName('email')[0];   
    let emailtext = emailEL.value;
    let errorMessage = document.getElementsByClassName("error-message")[0];
    let errorIcon = document.getElementsByClassName("error-icon")[0];
    if(validateEmail(emailtext)){
        emailEL.classList.remove("error");
        errorMessage.style.display = "none";
        errorIcon.style.display = "none";
    }else{
        emailEL.classList.add("error");
        errorIcon.style.display = "block";
        errorMessage.style.display = "block";
    }   
})

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });
});

function openMenu(){
    let menuBox = document.querySelector(".mobile-menu");
    menuBox.style.display = "block";
   // let body = document.getElementsByTagName("body");
    document.body.style.overflowY = "hidden";

}

function setBodyScoll(){
    document.body.style.overflowY = "auto";
    let menuBox = document.querySelector(".mobile-menu");
    menuBox.style.display = "none";

}