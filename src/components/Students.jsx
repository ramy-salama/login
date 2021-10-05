import { useState, useEffect } from "react";
import {useParams } from "react-router-dom";
import axios from "axios";

const Students = (props) => {
  const { class_id } = useParams();
  const [students, setStudents] = useState([]);


  useEffect(() => {
    let header = {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token")
      }
    }

    axios
      .get("http://127.0.0.1:8000/api/students/students_in_class/" + class_id , header)
      .then((res) => {
        setStudents(res.data.students_in_class);
      })
  }, []);

  return (
    <div className="students">
      <div className="head">
        <table>
          <tr>
            <th>id</th>
            <td>name</td>
            <td>email</td>
            <td>class id</td>
          </tr>
        </table>
      </div>
      {students.map((student) => (
        <div className="content">
          <table>
            <tr>
              <th>{student.student_id}</th>
              <td>
                {student.first_name} {student.last_name}
              </td>
              <td>{student.email}</td>
              <td>{student.class_id}</td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
      
};

export default Students;
