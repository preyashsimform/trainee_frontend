// EditStudent Component for update student data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./form";

// EditStudent Component
const EditStudent = (props) => {
const [formValues, setFormValues] = useState({
	name: "",
	email: "",
	rollno: "",
});
	
//onSubmit handler
const onSubmit = (studentObject) => {
	axios.put("http://localhost:5000/update-student/" +props.match.params.id,studentObject)
	.then((res) => {
		if (res.status === 200) {
		alert("Student successfully updated");
		props.history.push("/student-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize student form
useEffect(() => {
	try {
		const res = axios.get("http://localhost:5000/update-student/"+ props.match.params.id)
		var promise = Promise.resolve(res);
		promise.then(function(val){
			const { Name, Email, Roll } = val.data;
			setFormValues({ name:Name, email:Email, rollno:Roll });
		})

		
	} catch {
		console.log("error");
	}
}, []);

// Return student form
return (
	<StudentForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Student
	</StudentForm>
);
};

// Export EditStudent Component
export default EditStudent;
