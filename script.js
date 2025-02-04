			// JavaScript to handle the dropdown menu
			const dropdown = document.querySelector(".dropdown");
			const dropbtn = document.querySelector(".dropbtn");

			dropbtn.addEventListener("click", () => {
				dropdown.classList.toggle("active");
			});

			// Close the dropdown if the user clicks outside of it
			window.addEventListener("click", (event) => {
				if (!event.target.matches(".dropbtn")) {
					dropdown.classList.remove("active");
				}
			});
