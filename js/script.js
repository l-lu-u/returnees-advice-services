let services = [
    ["From Finland to the world", "#"],
    ["Return to Finland", "return-to-finland.html"],
    ["Advice services for youth", "#"],
    ["Advice services for expatriate families", "#"],
    ["Advice services for senior", "#"],
    ["Services for small entrepreneurship", "#"],
    ["Services for expatriate organisations", "#"],
    ["Services for expatriate initiatives", "#"]
];

function createServicesList() {
    let container = document.getElementById("content-services");
    let servicesList = document.createElement("ul");
    servicesList.setAttribute("class", "content-list");
    for (let i=0; i<services.length; i++){
        let servicesItemWrapper = document.createElement("li");
        servicesItemWrapper.setAttribute("class", "service-link");
        let servicesItem = document.createElement("a");
        servicesItem.innerText = services[i][0];
        servicesItem.setAttribute("href", services[i][1]);
        servicesItemWrapper.appendChild(servicesItem);
        servicesList.appendChild(servicesItemWrapper);
    }
    container.appendChild(servicesList);
}

// Accordion Functions
function manageAccordions() {
    let accordions = document.getElementsByClassName("accordion-tab");

    for (let i = 0; i < accordions.length; i++) {
        // When one of the buttons are clicked run this function
        accordions[i].onclick = function() {
        // DOM Elements
        let panel = this.nextElementSibling;
        let accordionPanel = document.getElementsByClassName("accordion-panel");
        let accordion = document.getElementsByClassName("accordion-tab");
        let accordionActive = document.getElementsByClassName("accordion-tab active");

        /* If pannel is already open - minimize*/
        if (panel.style.maxHeight){
            //minifies current pannel if already open
            panel.style.maxHeight = null;
            //removes the 'active' class as toggle didnt work on browsers minus chrome
            this.classList.remove("active");
        } else { //pannel isn‘t open...
            //goes through the buttons and removes the 'active' css (+ and -)
            for (let stepper = 0; stepper < accordionActive.length; stepper++) {
                accordionActive[stepper].classList.remove("active");
            }
            //Goes through and removes 'active' from the css, also minifies any 'panels' that might be open
            for (let stepper = 0; stepper < accordionPanel.length; stepper++) {
                this.classList.remove("active");
                accordionPanel[stepper].style.maxHeight = null;
            }
            //opens the specified pannel
            panel.style.maxHeight = panel.scrollHeight + "px";
            //adds the 'active' addition to the css.
            this.classList.add("active");
        } 
        }//closing to the acc onclick function
    }//closing to the for loop.
}
