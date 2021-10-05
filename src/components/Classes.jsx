import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import axios from "axios";


const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    let header = {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    };

    axios
      .get("http://127.0.0.1:8000/api/classes/classes_teacher", header)
      .then((res) => {
        setClasses(res.data.classes);
      });
  }, []);

console.log(classes);
  return (
    <div className="classes">
      {classes.map((clas) => (
        <div className="classLink">
          <Link className="link" to={"/Students/" + clas.class_id}>
            <a href="*">{clas.class_name}</a>
          </Link>
          <h1 className="classTitle">{clas.class_description}</h1>
          <h1 className="classTitle">{clas.class_id}</h1>
        </div>
      ))}
    </div>
  );
};



export default Classes;
