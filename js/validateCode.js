const codeForm = document.getElementById("code-a-thon");

codeForm.addEventListener("submit", function (event) {
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
			eventId: "Code-a-thon",
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
			window.location.assign(
				"https://mycode.prepbytes.com/contest/CODEATHONHANSRAJ"
			);
		})
		.catch((err) => {
			console.log(err);
			alert("Oppsss!!! Try again");
		});
	event.preventDefault();
});
