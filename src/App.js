import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import AuthGuard from './_helpers/AuthGuard';
import AdminRouter from './Pages/Admin/AdminRouter';
import PublicRoute from './Pages/Public/PublicRoute';
import AuthRouter from './Pages/Auth/AuthRouter';
import InstructerRouter from './Pages/Instructeur/InstructerRouter';
function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/*' element={<PublicRoute/>}/>
      <Route path='/admin/*' element={
        <AuthGuard>
          <AdminRouter/>
        </AuthGuard>
        }/>
      <Route path='/dashboard/*' element={
        <AuthGuard>
          <InstructerRouter/>
        </AuthGuard>
        }/>
      <Route path='/auth/*' element={<AuthRouter/>}/>
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
