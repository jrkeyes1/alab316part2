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


subMenuEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--sub-menu-bg');

subMenuEl.classList.add('flex-around');

const topMenuLinks = topMenuEl.querySelectorAll('a');

topMenuEl.addEventListener('click', function (event) {

    event.preventDefault();

    if (event.target.tagName !== 'A') {
        return;
    }

    console.log(event.target.textContent);
});

if (Event.target.classList.contains('active')) {
    Event.target.classList.remove('active');
} else {
    Event.target.classList.add('active');
}

// Remove the active class from each other <a> element in topMenuLinks
topMenuLinks.forEach(link => {
    if (link !== Event.target) {
        link.classList.remove('active');
    }
});

// Log the content of the <a> element to verify the handler is working
console.log(Event.target.textContent);

