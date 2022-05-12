function open_menu() {
	let menu = document.getElementsByClassName('menu')[0];
	if (menu.style.display == 'flex') {
		menu.style.display = 'none'
	} else {
		menu.style.display = 'flex';
	}
}
