import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentTableRow = (props) => {
    const { _id, Name, Email, Roll } = props.obj;
    
    const deleteStudent = async () => {
        try{
            await axios.delete("http://localhost:5000/delete-student/" +_id);
            window.location.reload();

        } catch {
            console.log("error");
        }
        
        
    };

    return (
        <tr>
            <td>{Name}</td>
            <td>{Email}</td>
            <td>{Roll}</td>
            <td>
                <Link className="edit-link"
                    to={"/edit-student/" + _id}>
                    Edit
                </Link>
                <Button onClick={deleteStudent}
                    size="sm" variant="danger">
                    Delete
                </Button>
            </td>
        </tr>
    );
};

export default StudentTableRow;
