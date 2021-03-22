const codeForm = document.getElementById("code-a-thon");

codeForm.addEventListener("submit", function (event) {
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const college = document.getElementById("college").value;
	const course = document.getElementById("course").value;
	const year = document.getElementById("year").value;
	const phone = document.getElementById("phone").value;

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
