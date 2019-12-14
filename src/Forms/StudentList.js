import React, { Component } from 'react';

const Student = props => (
    <tr>
        <td>{props.student.id}</td>
        <td>{props.student.Fname}</td>
        <td>{props.student.Mname}</td>
        <td>{props.student.Lname}</td>
        <td>{props.student.Age}</td>
        <td>{props.student.Section}</td>
    </tr>
)


class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('http://localhost:4000')
          .then(res => res.json())
          .then(
            json => {
              this.setState({
                isLoaded: true,
                students: json.data
              });
            })
            .catch(function (error){
                console.log(error);
            })
      }

      studentList = () => {
        return   this.state.students && this.state.students.map((currentStudent) => {

            return <Student key={currentStudent.id} student={currentStudent} /> ;
        });
     }


    render() { 
      var {isLoaded, students} = this.state;
      if(!isLoaded){
        return <div>Loading......</div>
      }
      else {
        return(
            <div className="content-fluid">
                <h2 className="text-center">Student List</h2>
            <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">FirstName</th>
                <th scope="col">MiddleName</th>
                <th scope="col">LastName</th>
                <th scope="col">Age</th>
                <th scope="col">Section</th>
              </tr>
            </thead>
            <tbody>
            {this.studentList()}
            </tbody>
        </table>
          </div>
         );
    }
}
}
export default StudentList;