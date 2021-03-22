var quizForm = document.getElementById("tech-quizzards");

quizForm.addEventListener("submit", function (event) {
	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var college = document.getElementById("college");
	var course = document.getElementById("course");
	var year = document.getElementById("year");
	var phone = document.getElementById("phone");

	fetch("https://cynosure-admin.herokuapp.com/api/register", {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			eventId: "tech-quizzards",
			name: name.value,
			email: email.value,
			phoneNumber: phone.value,
			course: course.value,
			year: year.value,
			college: year.value,
		}),
	})
		.then((res) => res.json())
		.then((data) => {
			alert(data.message);
			window.location.assign("https://cynosure2k21.github.io/");
		})
		.catch((err) => {
			console.log(err);
			alert("Oppsss!!! Try again");
		});
	event.preventDefault();
});
