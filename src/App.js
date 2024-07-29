import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AccountConfirmation from './pages/AccountConfirmation';
import ForgotPassword from './pages/ForgotPassword';
import PrivateRoute from './components/PrivateRoute';
import AuthProvider from './provider/AuthProvider';
import ResetPassword from './pages/ResetPassword';
import CreateProfile from './pages/CreateProfile';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<PrivateRoute />}>
            <Route path='/' element={<Home />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/accountConfirmation' element={<AccountConfirmation />} />
          <Route path='/createProfile/:userEmail' element={<CreateProfile />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
          <Route path='/resetPassword' element={<ResetPassword />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App