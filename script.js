document.addEventListener("DOM ContentLoaded",()=>{
	const loginForm = document.getElementById("loginForm");
	if(loginForm){
		loginForm.addEventListener("submit",Function(e){
			e.preventDefault();
			const name = document.getElementById("studentName").value;
			const id = document.getElementById("studentId").value;
			const teacher = document.getElementById("teacherName").value;
			const Password = document.getElementById("examPassword").value;
			if(Password==="exam123"){
				sessionstorage.setItem("studentName", name);
				window.Location.href="exam.html";
			}else{
				alert("Invalid exam Password!");
			}
		});
	}
	const examform = document.getElementById("examform");
if(examform){
	examform.addEventListener("submit",Function(e){
		e.preventDefault();
		let score=0;
		if(document.querySelector('input[name="q1"]:checked')?.value==="paris")score++;
		if(document.querySelector('input[name="q2"]:checked')?.value==="javaScript")score++;
		window.Location.href='result.html?score=${score}';
	});
}
});
		
			