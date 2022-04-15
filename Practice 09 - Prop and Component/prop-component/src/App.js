import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import  Alert  from "./components/Alert/alert";
import Calculator from "./components/Calculator/calculator";
import Students from "./components/Students/students";

function App() {
    const textAlert = "Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại.";
    const studentList = [
        {
            id: 1,
            name: 'Nguyễn Văn A',
            age: 30,
            address: 'Hà Nội'
        },
        {
            id: 2,
            name: 'Nguyễn Văn A',
            age: 30,
            address: 'Hà Nội'
        },
        {
            id: 3,
            name: 'Nguyễn Văn A',
            age: 30,
            address: 'Hà Nội'
        },
    ]

    return (
        <div>
            <Alert text={textAlert}/>
            <Calculator></Calculator>
            <Students  studentList={studentList}></Students>
        </div>
    );
}

export default App;
