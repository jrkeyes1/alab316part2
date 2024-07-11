    // Menu data structure
    let menuLinks = [
        { text: 'about', href: '/about' },
        { text: 'catalog', href: '/catalog' },
        { text: 'orders', href: '/orders' },
        { text: 'account', href: '/account' },
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

menuLinks.forEach (link => {
    //create an <a>
    const a = document.createElement('a');
    
a.setAttribute('href', link.href);

a.textContent = link.text;

topMenuEl.appendChild(a);
}
);

