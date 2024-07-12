// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
];
//step 1
const mainEl = document.querySelector('main');
console.log(mainEl);
//step 2
mainEl.style.backgroundColor = 'var(--main-bg)'
//let backGroundColor = 'var(--main-bg)'
//step 3 
mainEl.innerHTML = '<h1>DOM Manipulation</h1>'
//step 4 
mainEl.classList = 'flex-ctr';

const topMenuEl = document.getElementById('top-menu');

topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--top-menu-bg');

topMenuEl.classList.add('flex-around');

menuLinks.forEach(link => {
    //create an <a>
    const a = document.createElement('a');

    a.setAttribute('href', link.href);

    a.textContent = link.text;

    topMenuEl.appendChild(a);
}
);

///Part 2

const subMenuEl = document.getElementById("sub-menu")

subMenuEl.style.height = "100%";

subMenuEl.style.backgroundColor = document.getElementById('--sub-menu-bg');

subMenuEl.classList.add('flex-around');

//submenu 

subMenuEl.style.position = 'absolute'

subMenuEl.style.top = '0'

//Adding Menu Interaction 

// 1. Select and cache all of the <a> elements inside of topMenuEl in a variable named topMenuLinks

const topMenuLinks = topMenuEl.getElementsByTagName('a');

// 2. Attach a delegated 'click' event listener to topMenuEl
topMenuEl.addEventListener('click', function(event) {
    // Call the event object's preventDefault() method
    event.preventDefault();
    
    // Immediately return if the element clicked was not an <a> element
    if (event.target.tagName !== 'A') {
        return;
    }
    
    // Log the content of the <a> to verify the handler is working
    console.log(event.target.textContent);

    // Add the active class to the <a> element that was clicked, unless it was already active
    if (event.target.classList.contains('active')) {
        event.target.classList.remove('active');
    } else {
        event.target.classList.add('active');
    }

    // Remove the active class from each other <a> element in topMenuLinks
    for (let i = 0; i < topMenuLinks.length; i++) {
        if (topMenuLinks[i] !== event.target) {
            topMenuLinks[i].classList.remove('active');
        }
    }
});

////Part 5
// 1. Clear the current contents of subMenuEl
    subMenuEl.innerHTML = '';




