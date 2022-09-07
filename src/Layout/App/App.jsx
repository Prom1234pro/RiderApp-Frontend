import React from 'react';
// import system from '../../locales/en.json'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from '../../pages/NotFound';
import SignUp from '../../pages/SignUp/SignUp';
import SignUpView from '../../pages/SignUp/SignUpView';
import MainLayout from '../MainLayout'

function App() {
	return (
		<BrowserRouter>
			<Routes>
                <Route exact path="signup" element={<SignUp/>} />
			</Routes>
			<MainLayout>
				<Routes>
					<Route path="/" element={<SignUpView/>} />
					<Route exact path="*" element={<NotFound/>} />
				</Routes>
			</MainLayout>
		</BrowserRouter>
	);
}

export default App;
