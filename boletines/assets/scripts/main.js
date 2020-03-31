let links = document.querySelectorAll('.close')

links.forEach((link) => {
	link.addEventListener('click', function(e){
		e.preventDefault()
		let content = document.querySelector('.content')
		
		content.classList.remove('fadeInRight')
		content.classList.remove('animated')
		
		content.classList.add('fadeOutRight')
		content.classList.add('animated')

		setTimeout(() => {
		location.href = '/boletines'

		}, 1000)


	})
})
