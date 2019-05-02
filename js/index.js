const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav items
const navItems = document.querySelectorAll('nav a');
navItems.forEach((link, i) => {
  link.innerHTML = siteContent.nav[`nav-item-${i+1}`];
});

// nav items green
const navItemsColor = document.querySelectorAll('nav a');
navItemsColor.forEach((link, i) => {
  link.style.color = 'green';
});

// nav append 
const navItemsAppend = document.querySelector('nav');
navItemsAppend.appendChild('Home');

// cta h1
const ctaHeader = document.querySelector('h1');
ctaHeader.textContent = siteContent['cta']['h1'];

// cta button
const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

// cta img-src
const ctaImg = document.getElementById('cta-img').setAttribute('src', siteContent['cta']['img-src']);

//  main-content features-h4
const featuresHeader = document.querySelector('h4');
featuresHeader.textContent = siteContent['main-content']['features-h4'];

// main-content features-content
const featuresText = document.querySelector('p');
featuresText.textContent = siteContent['main-content']['features-content'];

// main-content about-h4
const aboutHeader = document.querySelectorAll('h4')[1];
aboutHeader.textContent = siteContent['main-content']['about-h4'];

// main-content about-content
const aboutText = document.querySelectorAll('p')[1];
aboutText.textContent = siteContent['main-content']['about-content'];

// main-content img
const mainImg = document.getElementById('middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);

// main-content services-h4
const servicesHeader = document.querySelectorAll('h4')[2];
servicesHeader.textContent = siteContent['main-content']['services-h4'];

// main-content services-content
const servicesText = document.querySelectorAll('p')[2];
servicesText.textContent = siteContent['main-content']['services-content'];

// main-content product-h4
const productHeader = document.querySelectorAll('h4')[3];
productHeader.textContent = siteContent['main-content']['product-h4'];

// main-content product-content
const productText = document.querySelectorAll('p')[3];
productText.textContent = siteContent['main-content']['product-content'];

// main-content vision
const visionHeader = document.querySelectorAll('h4')[4];
visionHeader.textContent = siteContent['main-content']['vision-h4'];

// main-content vision-content
const visionText = document.querySelectorAll('p')[4];
visionText.textContent = siteContent['main-content']['vision-content'];

// contact h4
const contactHeader = document.querySelectorAll('h4')[5];
contactHeader.textContent = siteContent['contact']['contact-h4'];

// contact address
const addressText = document.querySelectorAll('p')[5];
addressText.textContent = siteContent['contact']['address'];

// contact phone
const phoneText = document.querySelectorAll('p')[6];
phoneText.textContent = siteContent['contact']['phone'];

// contact email
const emailText = document.querySelectorAll('p')[7];
emailText.textContent = siteContent['contact']['email'];

// footer copyright
const footerText = document.querySelector('footer');
footerText.textContent = siteContent['footer']['copyright'];