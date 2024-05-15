let boxs = document.querySelectorAll(".lazyLoadText");

let observer = new IntersectionObserver(entries => {

	entries.forEach(box => {

		if (box.isIntersecting) {

			box.target.classList.add("slide");
			
		};

	});

}, {rootMargin: "-100px"});

window.addEventListener("load", _ => {

	setTimeout(() => {
		boxs.forEach(box => {

			observer.observe(box);

		});
	}, 3000)

});