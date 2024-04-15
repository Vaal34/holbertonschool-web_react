interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "Valentin",
    location: "Toulouse",
    lastName: "",
    age: 0
}

const student2: Student = {
    firstName: "Amandine",
    location: "Agen",
    lastName: "",
    age: 0
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table")
const tbody = document.createElement("tbody")

studentsList.forEach(student => {
    const ligne = document.createElement("tr")
    const cellFirstname = document.createElement("td")
    const cellLocation = document.createElement("td")

    cellFirstname.textContent = student.firstName
    cellLocation.textContent = student.location

    ligne.appendChild(cellFirstname)
    ligne.appendChild(cellLocation)
    tbody.appendChild(ligne)
})

table.appendChild(tbody)
document.body.appendChild(table);