import React from 'react';
// import system from '../../locales/en.json'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from '../../pages/NotFound';
import OtpVerification from '../../pages/SignUp/OtpVerification';
import SignUp from '../../pages/SignUp/SignUp';
import SignUpView from '../../pages/SignUp/SignUpView';
import MainLayout from '../MainLayout'



const App: React.FC = ()=> {
	return (
		<BrowserRouter>
			<MainLayout>
				<Routes>
					<Route  path="/" element={<SignUpView/>} />
                	<Route  path="signup" element={<SignUp/>} />
                	<Route  path="otp-verification" element={<OtpVerification/>} />
					<Route  path="*" element={<NotFound/>} />
				</Routes>
			</MainLayout>
		</BrowserRouter>
	);
}
export default App;
