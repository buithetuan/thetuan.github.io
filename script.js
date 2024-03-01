// Function to fetch and display list of students
async function showStudentList() {
    try {
        const response = await fetch('http://127.0.0.1:8000/students');
        const students = await response.json();
        const studentList = document.getElementById('studentList');
        studentList.innerHTML = ''; // Clear previous data
        students.forEach(student => {
            const studentDiv = document.createElement('div');
            studentDiv.innerHTML = `
                <p><strong>Name:</strong> ${student.name}</p>
                <p><strong>Email:</strong> ${student.email}</p>
                <p><strong>Birth Date:</strong> ${student.birth_date}</p>
                <p><strong>Hometown:</strong> ${student.hometown}</p>
                <p><strong>Final Grade:</strong> ${student.final_grade}</p>
                <hr>
            `;
            studentList.appendChild(studentDiv);
        });
    } catch (error) {
        console.error('Error fetching student list:', error);
    }
}

// Function to run on page load
window.onload = () => {
    showStudentList(); // Fetch and display list of students when page loads
};
