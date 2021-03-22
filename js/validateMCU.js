const mcuForm = document.getElementById("mcu-trivia");

mcuForm.addEventListener("submit", function (event) {
	document
		.getElementById("form1button")
		.classList.add("fa-spinner", "fa-spin", "fa-2x");
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let college = document.getElementById("college").value;
	let course = document.getElementById("course").value;
	let year = document.getElementById("year").value;
	let phone = document.getElementById("phone").value;

	fetch("https://cynosure-admin.herokuapp.com/api/register", {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			eventId: "mcu-trivia",
			name,
			email,
			phoneNumber: phone,
			course,
			year,
			college,
		}),
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			alert(data.message);
			name = college = email = year = course = phone = "";
			window.location.assign("https://cynosure2k21.github.io/");
		})
		.catch((err) => {
			console.log(err);
			alert("Oppsss!!! Try again");
		});
	event.preventDefault();
});
