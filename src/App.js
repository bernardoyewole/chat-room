import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AccountConfirmation from './pages/AccountConfirmation';
import PrivateRoute from './components/PrivateRoute';
import AuthProvider from './provider/AuthProvider';

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
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App