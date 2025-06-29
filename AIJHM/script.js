
const database = {
    "2316467865": {
        name: "PRIYANKA",
        father: "KULDEEP",
        mother: "ANITA",
	Sem: "2nd Year",
        course: "B.A.",
        fees: "4126"
    },
    "2316467866": {
        name: "ANJALI",
        father: "RAKESH",
        mother: "POONAM",
	Sem: "2nd Year",
        course: "B.A.",
        fees: "4126"
    }
};

function fetchDetails() {
    const regNo = document.getElementById("regNo").value;
    const data = database[regNo];
    const detailsDiv = document.getElementById("studentDetails");
    if (data) {
        document.getElementById("name").innerText = data.name;
        document.getElementById("father").innerText = data.father;
        document.getElementById("mother").innerText = data.mother;
	document.getElementById("Sem").innerText = data.Sem;
        document.getElementById("course").innerText = data.course;
        document.getElementById("fees").innerText = data.fees;
        detailsDiv.style.display = "block";
    } else {
        alert("No record found for this registration number.");
        detailsDiv.style.display = "none";
    }
}
