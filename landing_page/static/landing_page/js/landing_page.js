const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')

 
var canvas = document.getElementById('backgroundCanvas');
var ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
let color1 = { r: 255, g: 95, b: 109 }; // Soft Sunrise
let color2 = { r: 6, g: 195, b: 113 }; // Soft Sunrise

function updateGradient() {
    gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, `rgba(${color1.r}, ${color1.g}, ${color1.b}, 1)`);
    gradient.addColorStop(1, `rgba(${color2.r}, ${color2.g}, ${color2.b}, 1)`);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function animate() {
    color1.r = (Math.sin(Date.now() * 0.001) + 1) * 127; // Color changing logic
    color2.b = (Math.cos(Date.now() * 0.001) + 1) * 127;
    updateGradient();
    requestAnimationFrame(animate);
}

animate();