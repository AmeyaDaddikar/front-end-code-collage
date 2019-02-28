function toggleTheme() {
//  document.body.classList.toggle('light');
  document.body.classList.toggle('dark');
}

document.getElementById('themeBtn').onclick = toggleTheme;

// Random theme every time you open the webpage
if (Math.round(Math.random())){
  toggleTheme();
}

// Sets modal toggle button functionality
function setupModalToggle() {
  let modalToggleBtns =[...document.querySelectorAll('button[target]')];
  
  modalToggleBtns.forEach(
    toggleBtn =>{
      let modalDiv = document.getElementById(toggleBtn.getAttribute('target'));
      toggleBtn.onclick = () => modalDiv.classList.toggle('show');
    }
  );
}
setupModalToggle();


// Side Navbar navigation
function setupSideNavbar() {
  let sideNavBtns = [...document.querySelectorAll('#sideNav > li > button')];
  let topNavBtns  = [...document.querySelectorAll('nav > ul > li > button')];

  let navBtns = [...sideNavBtns, ...topNavBtns.filter(btn => btn.getAttribute('app') !== null)];
  navBtns.forEach(btn => {
    btn.onclick = () => {

      [...document.getElementsByClassName('sub-app')].forEach(elem => elem.style.display = 'none');
      document.getElementById(btn.getAttribute('app')).style.display = 'block';
    }
  });
}

setupSideNavbar();


const colorResDiv = document.getElementById('colorResult')
let   sliders     = document.getElementsByClassName('slider');

function setColor() {
  const colorStr = `rgb(\
    ${sliders[0].value},\
    ${sliders[1].value},\
    ${sliders[2].value}\
  )`;
  colorResDiv.style.backgroundColor = colorStr;
  document.getElementById('color-value').innerText = colorStr;
}
sliders[0].oninput = setColor;
sliders[1].oninput = setColor;
sliders[2].oninput = setColor;

setColor();