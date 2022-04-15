import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import  Alert  from "./components/Alert/alert";
import Calculator from "./components/Calculator/calculator";

function App() {
    const textAlert = "Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại.";

    return (
        <div>
            <Alert text={textAlert}/>
            <Calculator></Calculator>
        </div>
    );
}

export default App;
