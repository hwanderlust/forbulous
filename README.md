# forbulous
is a basic application for any **fabulous** picture needs! Using the Unsplash API you can get any and all stunning images! 

On page load you will be presented with 50 random images broken up in chunks of 10 and you may browse through them, or search for what you need all on the same page. 

Quickly navigate with your mouse, touchpad, touch device or the keyboard!

# get started
* clone
* npm install
* npm run server & npm start
*environment variables are included in the .gitignore file for security and privacy purposes*

## technologies
* Custom Express API restricting access via CORS to only its own front end
* Webpack along with Babel and various plugins and configurations
* HTML, SASS (SCSS) and vanilla JavaScript
* Flexbox, CSS Grid, media queries
* Unsplash API

## approach
1. HTML
2. Layout and CSS
3. Interactions via JS
4. Refactor
5. Organization and Separation

## decisions
**Image loading technique** with a blured smaller resolution image in view on the modal while higher resolution image is loading

If users navigate away from an incompletely loaded image, the **connection is immediately terminated** allowing quick rendering of the next image

**Swiping capabilities** for viewing images in the modal on handheld touch devices

**Accessibility** is important and took the time to allow users to be able to fully navigate and interact with the web app easily via the tab, enter and esc keys

Used **sensible HTML tags and elements for screen readers** to provide as much context as possible to their users--if it functions like a button, made into a button instead of a div or a span

Kept as much HTML from the start reducing the necessary JavaScript and allowing maximum data and info upon page load without server-side rendering keeping initial load **as fast as possible**

Unsplash's API only allows from 1-30 results per request and to meet the 50 deliverable, fetched 25 photos twice at once with **Promise.all**

Chose Express for a **minimal backend API** just for external fetches and use environment variables for the API's authorization

Implemented a **custom serializer** minimizing data being passed through and in a clean and clear format to be used on the front end

Used flexbox for **responsive** rendering of images and other components and CSS grid where flexbox was less than ideal for a structured layout

Limited the pictures height on the masonry layout for a **symmetrical and consistent view** allowing users to get a glimpse at a smaller resolution image and the option to open them up for a better picture and some basic information in a **custom made modal**

Once the modal is opened, you can navigate through the other photos without closing it up again; you can use the left and right **navigation keys** to shift through them too 

**Focus** is vital for screen readers and can be for keyboard users too--ensured the correct elements were to be focused whenever an action is taken

**User-feedback** is given through subtle animations and transitions like when a button or an image is clicked

Leaving the most recent searched term in the input box for your **convenience** in case you may have forgotten

Lovely **animation** when opening up the modal and a clean sliding animation upon closing

Not all fields are always provided--can never fully trust an external API after all--**defaults and fallbacks** provided; the p tag for the image's description is completely hidden if nothing is received

Included simple **icons** providing quick context and better design than the word itself

**Media queries** toggling styling for elements on the page depending on the screen size

SCSS variables for most vital information allowing **quick manipulation and design changes** without searching and traversing throughout the files

**Single point of entry** for SCSS and JS files

Banner image is static and to **prevent an extra HTTP request** is included and loaded

**Cross-browser compatibility** should be fine with the autoprefixer plugin and webpack