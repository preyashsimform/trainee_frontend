import React, { useState, useEffect } from "react";
import axios from 'axios';
import StudentForm from "./form";

// CreateStudent Component
const CreateStudent = () => {
	const [formValues, setFormValues] =
		useState({ name: '', email: '', rollno: '' })
	// onSubmit handler
	const onSubmit = async studentObject => {
		const res = axios.post('http://localhost:5000/create-student',studentObject)
		console.log(res)
		await window.location.reload();
	}

	// Return student form
	return (
		<StudentForm initialValues={formValues}
			onSubmit={onSubmit}
			enableReinitialize>
			Create Student
		</StudentForm>
	)
}

// Export CreateStudent Component
export default CreateStudent
