function open_menu() {
	let menu = document.getElementsByClassName('menu')[0];
	if (menu.style.display == 'flex') {
		menu.style.display = 'none'
	} else {
		menu.style.display = 'flex';
	}
}

document.addEventListener("DOMContentLoaded", () => {
	let partners = document.getElementById('partners');
	let partners_child = document.getElementById('partners_child');

	let mouse_down = false;
	let first_px = 0;
	let now_px = 0;
	let difference_px = 0;
	let partners_marginLeft = 0;
	let change_px = 0;
	let min_margin = 0;

	partners.addEventListener("mousedown", (e) => {
		mouse_down = true;
		event.preventDefault();
		first_px = e.pageX;
		partners_marginLeft = parseFloat(partners_child.style.marginLeft);
		min_margin = (partners_child.scrollWidth - document.documentElement.clientWidth) * -1;
	})

	partners.addEventListener("mouseup", () => {
		mouse_down = false;
	})

	partners.addEventListener("mousemove", (e) => {
		if (mouse_down) {
			now_px = e.pageX;
			difference_px = (first_px - now_px) * (-1);
			change_px = partners_marginLeft + difference_px;
			if (change_px <= 0 && change_px >= min_margin) {
				partners_child.style.marginLeft = change_px + 'px';
			}
		}
	})

	partners.addEventListener("touchstart", function(e) { 
		mouse_down = true;
		event.preventDefault();
		first_px = e.targetTouches[0]['clientX'];
		partners_marginLeft = parseFloat(partners_child.style.marginLeft);
		min_margin = (partners_child.scrollWidth - document.documentElement.clientWidth) * -1;
	}, true);

	partners.addEventListener("touchend", function(e) {
		mouse_down = false;
	}, true)

	partners.addEventListener("touchmove", function(e) {
		if (mouse_down) {
			now_px = e.targetTouches[0]['clientX'];
			difference_px = (first_px - now_px) * (-1);
			change_px = partners_marginLeft + difference_px;
			if (change_px <= 0 && change_px >= min_margin) {
				partners_child.style.marginLeft = change_px + 'px';
			}
		}
	}, true)

	window.addEventListener('resize', function(event) {
		partners_child.style.marginLeft = '0px';
	}, true);
});
