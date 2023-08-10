# Landing Page Project

## Table of Contents

* breif of the Landing Page Project
* what i used to create the Page

## breif of the Landing Page Project

	the page is consisting of 4 sections, and a navigation bar with the four sections links to go directly to the section we want.
	we can go to any section we want with two ways: 
	1- scroll to the desired section.
	2- click on the section link on the navigation bar to go directly to the desired section.
	clicking to the link of the desired section on the navigation bar will transport to the desired section.
	standing on a scetion will color the background of this section with black and the font will be white.

## what I used to create the Page

	we need to create 3 files : Html, Css, and JavaScript files.
	Html file was needed to create the contents of the page like: paragraphs, sections, the navigation bar, and the unordered list inside the navigation bar.
	
	what will be the contents look like when i open the html file ??? that's what the Css file do. it's the file that is controlling the appearance of each content.
	
	what if we want to make the page responsive dynamically??? that's the JavaScript file's job.
	
Html file:contains:	the head which contains the title of the Page and linking the java file and the css file.
		
			the sections need a navigation bar so first i created a header consisting of the navigation bar which an unoredered list is contained into ,and each element of the list
			was the link of each section.
			then i created a main tag that contains the sections and the "Landing Page" heading.
			then a footer.

Css file:	Here, we control the appearance of each element of the css file.

		
JavaScript file:Here how the page response to your action.


		1- I stored the unorderd list to a variable called navBar using document.getElementById(), stored the sections to a NodeList called
		   sections using document.querySelectorAll().

	*functions:
		
		2- I created a function called sectionsBar and inside of it(I created  a DocumentFragment using document.createDocumentFragment() and stored it to a variable called fragment
							 and "li" elements of the unordered List and the anchor elements of the sections using document.createElement(elementName)
		   					 then set for each anchor its textcontent using element.textContent = ancText and set the ancText to black and set a padding using element.style.cssText()
							 and set the "href" value for each anchor the id of the section which the anchor is related to using element.setAttribute(name,value)
 							 and for each li append each anchor to it using parent.appendChild(child) then append each li to the "fragment" variable.
							 after append the li elements then we append Document Fragment as a child to the unordered list.).

		3- I used intersectionObserver api to observe if the section is intersecting with the viewport or not and partially visible 
		   this api is stored to a variable called observing 
		   this api has two parameters (callbackfunction(entries),options)
		   inside the callBackFunction a for loop for each entry using entries.forEach(function(entry){}) and inside the function it 
		   checks if the target is partially visible to set the class of the target "your-active-class" using entry.target.classList.add("your-active-class") if true 
		   and remove "your-active-class" using entry.target.classList.remove("your-active-class") if false and change the backgroundColor of the li element and the color of the anchor element linked with the active section.
		
		4- A "clicking" function is created to scroll to the desired section using window.scrollTo(options) event when the anchor related to the section is clicked
		   the options is to go to the top of the desired section with smooth behavior.

		
	*events:
		5- i called the sectionsBar function to build the navigation bar.

		6- the I add an event listener to listen to the click event using document.addEventListener('click',clicking) and calling the "clicking" function inside it.
		
		7- then another event listener was added for the scroll event and a function is created inside it to observe each section of section calling observing.observe(section).  