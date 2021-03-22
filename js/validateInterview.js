var interviewForm = document.getElementById("inter-battle-view");

interviewForm.addEventListener("submit", function (event) {
	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var college = document.getElementById("college");
	var course = document.getElementById("course");
	var year = document.getElementById("year");
	var phone = document.getElementById("phone");
	var resume = document.getElementById("file1");
	var profile = document.getElementsByName("job");
	var selectedProfile = "";
	for (i = 0; i < profile.length; i++) {
		if (profile[i].checked) selectedProfile = profile[i].value;
	}

	fetch("https://cynosure-admin.herokuapp.com/api/register", {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			eventId: "inter-battle-view",
			name: name.value,
			email: email.value,
			phoneNumber: phone.value,
			course: course.value,
			year: year.value,
			college: college.value,
			resumeURL: resume.value,
			selectedProfile,
		}),
	})
		.then((res) => res.json())
		.then((data) => {
			alert(data.message);
			window.location.assign(
				"https://prepbytes.com/mock-tests/hansraj-inter-battle-view/test-1"
			);
		})
		.catch((err) => {
			console.log(err);
			alert("Oppsss!!! Try again");
		});
	event.preventDefault();
});
