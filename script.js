// Function to fetch and display list of students
async function showStudentList() {
    try {
        // const axios = require('axios/dist/browser/axios.cjs'); // browser
        // const response = await axios.get('http://localhost:8000/students',
        //     {
        //         crossdomain: true,
        //         headers:{
        //             'Access-Control-Allow-Origin':'*'
        //         }
        //     }
        // );
        // console.log(response)
        const students = students_api;
        const studentList = document.querySelector('#studentTable tbody');
        studentList.innerHTML = ''; // Clear previous data
        students.forEach(student => {
            const studentRow = document.createElement('tr');
            studentRow.innerHTML = `
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.birth_date}</td>
                <td>${student.hometown}</td>
                <td>${student.final_grade}</td>
                <td></td>
                <td class="action">
                    <button class="edit" onclick="${() => addEditForm()}">Edit</button>
                    <button class="delete">Delete</button>
                </td>
            `;
            studentList.appendChild(studentRow);
        });
        
    } catch (error) {
        console.error('Error fetching student list:', error);
    }
}

// Function to run on page load
window.onload = () => {
    showStudentList(); // Fetch and display list of students when page loads
};

const addForm = document.querySelector('#addStudentForm');
const editForm = document.querySelector('#editStudentForm');
const btnAdd = document.querySelector('#btnAdd');


const addEditForm = ()=>{
    const btnEdit = document.querySelector('.edit');
    console.log(btnEdit)


    btnEdit?.addEventListener('click',()=>{
        editForm.classList.toggle('hidden')
    })
}

const addDeleteBtn = ()=>{
    const btnDelete = document.querySelector('.delete');

    btnDelete?.addEventListener('click' , () => {

    })
}

btnAdd.addEventListener('click',()=>{
    addForm.classList.toggle('hidden')
})


let students_api = [
    {
      id: 2,
      name: "B",
      email: "B@gmail.com",
      birth_date: "2/2/2003",
      hometown: "Tuyên Quang",
      final_grade: 10
    },
    {
      id: 3,
      name: "C",
      email: "C@gmail.com",
      birth_date: "3/3/2003",
      hometown: "Nghệ An",
      final_grade: 9
    },
    {
      id: 4,
      name: "D",
      email: "D@gmal.com",
      birth_date: "4/4/2003",
      hometown: "Hà Tĩnh",
      final_grade: 9
    },
    {
      id: 5,
      name: "E",
      email: "E@gmail.com",
      birth_date: "5/5/2003",
      hometown: "Thái Nguyên",
      final_grade: 8
    },
    {
      id: 6,
      name: "huong",
      email: "mr.flooo",
      birth_date: "18/08/2003",
      hometown: "huong",
      final_grade: 5
    }
  ]