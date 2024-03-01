# Load required libraries
library(plumber)
library(RSQLite)

# Establish connection to SQLite database
con <- dbConnect(RSQLite::SQLite(), "student_database.db")

# Define Plumber API
#* @apiTitle Student Management API

#* Get all students
#* @get /students
function() {
  query <- "SELECT * FROM students"
  result <- dbGetQuery(con, query)
  return(result)
}

#* Add a student
#* @param name The name of the student
#* @param email The email of the student
#* @param birthDate The birth date of the student
#* @param hometown The hometown of the student
#* @param finalGrade The final grade of the student
#* @post /add_student
function(name, email, birthDate, hometown, finalGrade) {
  query <- sprintf("INSERT INTO students (name, email, birth_date, hometown, final_grade) VALUES ('%s', '%s', '%s', '%s', %f)", name, email, birthDate, hometown, finalGrade)
  dbExecute(con, query)
  return("Student added successfully")
}

#* Update a student
#* @param id The id of the student to update
#* @param name The new name of the student
#* @param email The new email of the student
#* @param birthDate The new birth date of the student
#* @param hometown The new hometown of the student
#* @param finalGrade The new final grade of the student
#* @put /update_student
function(id, name, email, birthDate, hometown, finalGrade) {
  query <- sprintf("UPDATE students SET name='%s', email='%s', birth_date='%s', hometown='%s', final_grade=%f WHERE id=%d", name, email, birthDate, hometown, finalGrade, id)
  dbExecute(con, query)
  return("Student updated successfully")
}

#* Delete a student
#* @param id The id of the student to delete
#* @delete /delete_student
function(id) {
  query <- sprintf("DELETE FROM students WHERE id=%d", id)
  dbExecute(con, query)
  return("Student deleted successfully")
}