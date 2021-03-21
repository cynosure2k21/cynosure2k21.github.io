var eregex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]{2,20})$/;

function validateCode() {
	var name = document.forms["code-a-thon"]["name"].trim();
	var email = document.forms["code-a-thon"]["email"].trim();
	var college = document.forms["code-a-thon"]["college"].trim();
	var course = document.forms["code-a-thon"]["course"].trim();
	var year = document.forms["code-a-thon"]["year"].trim();
	var phone = document.forms["code-a-thon"]["phone"].trim();

	if (name.value == "") {
		alert("Name cannot be empty");
		name.focus();
		return false;
	}
	if (email.value == "") {
		alert("Email cannot be empty");
		email.focus();
		return false;
	}

	if (college.value == "") {
		alert("College cannot be empty");
		college.focus();
		return false;
	}

	if (course.value == "") {
		alert("course cannot be empty");
		course.focus();
		return false;
	}

	if (year.value == "") {
		alert("year cannot be empty");
		year.focus();
		return false;
	}

	if (phone.value == "") {
		alert("phone cannot be empty");
		phone.focus();
		return false;
	}

	if (!eregex.test(email.value)) {
		alert("Incorrect Email.");
		email.focus();
		return false;
	}

	fetch("https://cynosure-admin.herokuapp.com/api/register", {
		method: "POST",
		body: JSON.stringify({
			eventId: "Code-a-thon",
			name,
			email,
			phoneNumber: phone,
			course,
			year,
			college,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((data) => {
			alert("Registration Complete");
			window.location.href(
				"https://mycode.prepbytes.com/contest/CODEATHONHANSRAJ"
			);
		})
		.catch((err) => {
			console.log(err);
			alert("Oppsss!!! Try again");
		});
}

function validateQuizzards() {
	var name = document.forms["tech-quizzards"]["name"].trim();
	var email = document.forms["tech-quizzards"]["email"].trim();
	var college = document.forms["tech-quizzards"]["college"].trim();
	var course = document.forms["tech-quizzards"]["course"].trim();
	var year = document.forms["tech-quizzards"]["year"].trim();
	var phone = document.forms["tech-quizzards"]["phone"].trim();

	if (name.value == "") {
		alert("Name cannot be empty");
		name.focus();
		return false;
	}
	if (email.value == "") {
		alert("Email cannot be empty");
		email.focus();
		return false;
	}

	if (college.value == "") {
		alert("College cannot be empty");
		college.focus();
		return false;
	}

	if (course.value == "") {
		alert("course cannot be empty");
		course.focus();
		return false;
	}

	if (year.value == "") {
		alert("year cannot be empty");
		year.focus();
		return false;
	}

	if (phone.value == "") {
		alert("phone cannot be empty");
		phone.focus();
		return false;
	}

	if (!eregex.test(email.value)) {
		alert("Incorrect Email.");
		email.focus();
		return false;
	}

	fetch("https://cynosure-admin.herokuapp.com/api/register", {
		method: "POST",
		body: JSON.stringify({
			eventId: "tech-quizzards",
			name,
			email,
			phoneNumber: phone,
			course,
			year,
			college,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((data) => {
			alert("Registration Complete");
			window.location.href(""); //redirect to main website
		})
		.catch((err) => {
			console.log(err);
			alert("Oppsss!!! Try again");
		});
}

function validateLabyrinth() {
	var teamName = document.forms["tech-labyrinth"]["teamName"];
	var name = document.forms["tech-labyrinth"]["name"];
	var email = document.forms["tech-labyrinth"]["email"];
	var college = document.forms["tech-labyrinth"]["college"];
	var course = document.forms["tech-labyrinth"]["course"];
	var year = document.forms["tech-labyrinth"]["year"];
	var phone = document.forms["tech-labyrinth"]["phone"];
	var instId = document.forms["tech-labyrinth"]["instaId"];

	var name2 = document.forms["tech-labyrinth"]["name2"];
	var email2 = document.forms["tech-labyrinth"]["email2"];
	var college2 = document.forms["tech-labyrinth"]["college2"];
	var course2 = document.forms["tech-labyrinth"]["course2"];
	var year2 = document.forms["tech-labyrinth"]["year2"];
	var phone2 = document.forms["tech-labyrinth"]["phone2"];
	var instId2 = document.forms["tech-labyrinth"]["instaId2"];

	if (name.value === "" || name2.value === "") {
		alert("Name cannot be empty");
		return false;
	}
	if (email.value === "" || email2.value === "") {
		alert("Email cannot be empty");
		return false;
	}

	if (college.value === "" || college2.value === "") {
		alert("College cannot be empty");
		return false;
	}

	if (course.value === "" || course2.value === "") {
		alert("course cannot be empty");
		return false;
	}

	if (year.value === "" || year2 === "") {
		alert("year cannot be empty");
		return false;
	}

	if (phone.value === "" || phone2.value === "") {
		alert("phone cannot be empty");
		return false;
	}

	if (!eregex.test(email.value)) {
		alert("Incorrect Email.");
		email.focus();
		return false;
	}
	if (!eregex.test(email2.value)) {
		alert("Incorrect Email.");
		email2.focus();
		return false;
	}

	fetch("https://cynosure-admin.herokuapp.com/api/register", {
		method: "POST",
		body: JSON.stringify({
			eventId: "tech-labyrinth",
			name,
			email,
			phoneNumber: phone,
			course,
			year,
			college,
			instaID: instId,
			teamName,
			teamMember: name2,
			teamMemberCollege: college2,
			teamMemberYear: year2,
			teamMemberCourse: course2,
			teamMemberPhoneNumber: phone2,
			teamMemberEmail: email2,
			memberInstaID: instId2,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((data) => {
			alert("Registration Complete");
			window.location.href(""); //redirect to main website
		})
		.catch((err) => {
			console.log(err);
			alert("Oppsss!!! Try again");
		});
}
