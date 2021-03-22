var labForm = document.getElementById("tech-labyrinth");

labForm.addEventListener("submit", function (event) {
    var teamName = document.getElementById("teamName");
	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var college = document.getElementById("college");
	var course = document.getElementById("course");
	var year = document.getElementById("year");
	var phone = document.getElementById("phone");
	var instId = document.getElementById("instaId");

	var name2 = document.getElementById("name2");
	var email2 = document.getElementById("email2");
	var college2 = document.getElementById("college2");
	var course2 = document.getElementById("course2");
	var year2 = document.getElementById("year2");
	var phone2 = document.getElementById("phone2");
	var instId2 = document.getElementById("instaId2");

    fetch("https://cynosure-admin.herokuapp.com/api/register", {
		method: "POST",
        headers:{
            "Content-Type: application/json"
        },
		body: JSON.stringify({
			eventId: "tech-labyrinth",
			name: name.value,
			email: email.value,
			phoneNumber: phone.value,
			course: course.value,
			year: year.value,
			college: college.value,
			instaID: instId.value,
			teamName: teamName.value,
			teamMember: name2.value,
			teamMemberCollege: college2.value,
			teamMemberYear: year2.value,
			teamMemberCourse: course2.value,
			teamMemberPhoneNumber: phone2.value,
			teamMemberEmail: email2.value,
			memberInstaID: instId2.value,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res =>res.json())
		.then((data) => {
			alert(data.message);
		})
		.catch((err) => {
			console.log(err);
			alert("Oppsss!!! Try again");
		});

        event.preventDefault()
    })