'use strict';
const btn = document.querySelector('.header__nav--li-btn');
const nav = document.querySelector('.header__nav-overlay');

btn.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});

// Nav sticky
// As the '.header__name' height is dynamically resized,
// since its font-size uses the unit 'vw', and we want
// to stick the nav bar to the top, we set the element header
// the property 'position: sticky' and calculate the 'top' value
// as follows:
const header = document.querySelector('.header');
const headerName = document.querySelector('.header__name');
const portWidth = window.visualViewport;
// Event listener on visualViewport interface
portWidth.addEventListener('resize', () => {
  // If viewport width is higher than 990px:
  if (portWidth.width >= 990) {
    // Get the computed height property of ".header__name"
    const headerHeight = window
      .getComputedStyle(headerName)
      .getPropertyValue('height');
    // Assign to .header to property 'top' equals to the
    // height of '.header__name':
    header.style.top = `-${headerHeight}`;
  }
});
