/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

document.addEventListener('DOMContentLoaded', function () {
        


    /**
     * Define Global Variables
     * 
    */
    
    const navBar = document.getElementById("navbar__list");
    let sections = document.querySelectorAll("section");
    

    /**
     * End Global Variables
     * Start Helper Functions
     * 
    */
    
    sections.forEach(function(section){
        section.classList.remove("your-active-class");
    })
    /**
     * End Helper Functions
     * Begin Main Functions
     * 
    */

    // build the nav

    
    function sectionsBar(){
        const fragment = document.createDocumentFragment();
        sections.forEach(function (section){
            const li = document.createElement("li");
            const anc = document.createElement("a");
            anc.textContent = section.getAttribute("data-nav");
            anc.setAttribute("href","#" + section.id);
            li.appendChild(anc);
            anc.style.cssText = "color: black;padding: 4px;text-decoration: none";
            li.id = "sec" + section.id[section.id.length - 1];

            fragment.appendChild(li);
        });
        navBar.appendChild(fragment);
    }
    
    



    // Add class 'active' to section when near top of viewport
    const observing = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                entry.target.classList.add("your-active-class");
                document.getElementById("sec" + entry.target.id[entry.target.id.length - 1]).classList.add("item-active-class");
                document.getElementById("sec" + entry.target.id[entry.target.id.length - 1]).firstChild.style.color = "white";
                document.getElementById("sec" + entry.target.id[entry.target.id.length - 1]).style.backgroundColor = "black";
            }else {
                document.getElementById("sec" + entry.target.id[entry.target.id.length - 1]).firstChild.style.color = "black";
                document.getElementById("sec" + entry.target.id[entry.target.id.length - 1]).style.backgroundColor = "white";
                document.getElementById("sec" + entry.target.id[entry.target.id.length - 1]).classList.remove("item-active-class");
                entry.target.classList.remove("your-active-class");
            }
        })
    },{
        threshold:0.8,
        rootMargin: '0px'
    })
    



    
    // Scroll to anchor ID using scrollTO event
    function clicking(evt){
        let lis = document.querySelectorAll("li");
        if (evt.target.nodeName === "A"){
            evt.preventDefault();
            for (li of lis){
                li.firstChild.style.color = "black";
                li.style.backgroundColor = "white";    
            }
            evt.target.style.color = "white";
            evt.target.parentElement.style.backgroundColor = "black";
        }
        const section = document.querySelector(evt.target.getAttribute("href")); 
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth"
        })
    }

    


    /**
     * End Main Functions
     * Begin Events
     * 
    */

    // Build menu 
    sectionsBar();
    
    // Scroll to section on link click
    document.addEventListener('click',clicking)
    
    // Set sections as active
    window.addEventListener('scroll',function(){
        sections.forEach(function(section){
            observing.observe(section);
        })
    })
    
    
});
