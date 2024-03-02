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
#* @param birthDate The birthDate of the student
#* @param finalGrade The finalGrade of the student
#* @post /add_student
function(name, birthDate, finalGrade) {
  query <- sprintf("INSERT INTO students (name, birthDate, final_grade) VALUES ('%s', '%s', '%s')", name, as.character(birthDate), finalGrade)
  dbExecute(con, query)
  return("Student added successfully")
}

#* Update a student
#* @param id The id of the student to update
#* @param name The new name of the student
#* @param birthDate The new birthDate of the student
#* @param finalGrade The new finalGrade of the student
#* @put /update_student
function(id, name, birthDate, finalGrade) {
  # check if id not exist -> not exist user ?? 
  # return("User not exist with id")
  query <- sprintf("UPDATE students SET name='%s', birth_date='%s', final_grade='%s' WHERE id=%s", name, as.character(birthDate), finalGrade, as.integer(id))
  dbExecute(con, query)
  return("Student updated successfully")
}

#* Delete a student
#* @param id The id of the student to delete
#* @delete /delete_student
function(id) {
  query <- sprintf("DELETE FROM students WHERE id=%s", as.integer(id))
  dbExecute(con, query)
  return("Student deleted successfully")
}
