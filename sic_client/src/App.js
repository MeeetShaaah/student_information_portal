import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from "./Home";
import NavBar from "./component/common/NavigationBar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

import AddStudent from "./component/student/AddStudent";
import EditStudent from "./component/student/EditStudent";
import StudentPofile from "./component/student/StudentProfile";
import StudentsView from "./component/student/StudentsView";



function App() {
	return (
		<main className="container mt-5">
			<Router>
				<NavBar />
				<Routes>
					<Route
						exact
						path="/"
						element={<Home />}></Route>
					<Route
						exact
						path="/view-students"
						element={<StudentsView />}></Route>
					<Route
						exact
						path="/add-students"
						element={<AddStudent />}></Route>
					<Route
						exact
						path="/edit-student/:id"
						element={<EditStudent />}></Route>
					<Route
						exact
						path="/student-profile/:id"
						element={<StudentPofile />}></Route>
				</Routes>
			</Router>
		</main>
	);
}

export default App;