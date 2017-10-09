// Toggle Images
var elonMusk = document.getElementById('elon-pic');
var elonLink = document.getElementById('elon');
elonLink.addEventListener('click', function() {
    elonMusk.className = '', timCook.className = 'hide', jeffBezos.className = 'hide';
});

var timCook = document.getElementById('tim-pic');
var timLink = document.getElementById('tim');
timLink.addEventListener('click', function() {
    elonMusk.className = 'hide', timCook.className = '', jeffBezos.className = 'hide';
});

var jeffBezos = document.getElementById('jeff-pic');
var jeffLink = document.getElementById('jeff');
jeffLink.addEventListener('click', function() {
    elonMusk.className = 'hide', timCook.className = 'hide', jeffBezos.className = '';
});
