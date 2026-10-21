import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DataProvider } from './contexts/DataContext';
import Home from './pages/public/Home';
import Booking from './pages/public/Booking';
import BookingConfirmation from './pages/public/BookingConfirmation';
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import AdminAppointments from './pages/admin/AdminAppointments';
import AdminServices from './pages/admin/AdminServices';
import AdminBarbers from './pages/admin/AdminBarbers';
import AdminClients from './pages/admin/AdminClients';
import AdminSchedule from './pages/admin/AdminSchedule';
import AdminHomeContent from './pages/admin/AdminHomeContent';
import AdminTheme from './pages/admin/AdminTheme';
import AdminTestimonials from './pages/admin/AdminTestimonials';
import AdminGallery from './pages/admin/AdminGallery';
import AdminUsers from './pages/admin/AdminUsers';
import AdminReports from './pages/admin/AdminReports';
import AdminSettings from './pages/admin/AdminSettings';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/agendar" element={<Booking />} />
          <Route path="/confirmacao/:id" element={<BookingConfirmation />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="agendamentos" element={<AdminAppointments />} />
            <Route path="agenda" element={<AdminSchedule />} />
            <Route path="servicos" element={<AdminServices />} />
            <Route path="barbeiros" element={<AdminBarbers />} />
            <Route path="clientes" element={<AdminClients />} />
            <Route path="conteudo" element={<AdminHomeContent />} />
            <Route path="tema" element={<AdminTheme />} />
            <Route path="depoimentos" element={<AdminTestimonials />} />
            <Route path="galeria" element={<AdminGallery />} />
            <Route path="usuarios" element={<AdminUsers />} />
            <Route path="relatorios" element={<AdminReports />} />
            <Route path="configuracoes" element={<AdminSettings />} />
          </Route>
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
