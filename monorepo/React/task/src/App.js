import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Step2 from './components/Step2/Step2';

function App() {
	const [currentStep, setCurrentStep] = useState('1/2');

	return (
		<div className="App">
			<Router>
				<Header currentStep={currentStep} />
				<Routes>
					<Route exact path="/" element={<Main setCurrentStep={setCurrentStep} />} />
					<Route path="/step2/:optionId" element={<Step2 setCurrentStep={setCurrentStep} />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
