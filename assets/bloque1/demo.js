var str = '';
for (i=0;i<20000000;i++) {
    str += 'a';
}
window.addEventListener('load', function() {
	document.querySelector('h3').innerHTML='Script terminado.';
})