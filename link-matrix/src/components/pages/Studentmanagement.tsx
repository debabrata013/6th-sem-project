import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
  
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  CardContent,
  Button,
  TextField,
  Modal,
  IconButton,
  Toolbar,
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
  CssBaseline,
} from '@mui/material';
import {
  Add,
  Edit,
  Delete,
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  School as SchoolIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled } from '@mui/system';

// Reusable Glassmorphism Styling
const GlassCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    transform: 'translateY(-5px)',
    transition: 'transform 0.3s ease-in-out'
  }
}));

const GlassContainer = styled(Box)({
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
  padding: '24px'
});

const GlassDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    width: 240,
    boxSizing: 'border-box',
  }
}));

const GlassAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
}));

// Interfaces
interface Student {
  id: number;
  name: string;
  email: string;
  university: string;
  enrollmentDate: string;
  status: 'Active' | 'Inactive';
}

const StudentManagement: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const [students, setStudents] = useState<Student[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState<Student | null>(null);
  const [newStudentForm, setNewStudentForm] = useState({
    name: '',
    email: '',
    university: '',
    enrollmentDate: '',
    status: 'Active' as 'Active' | 'Inactive'
  });

  useEffect(() => {
    // Initial mock data
    setStudents([
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        university: 'Stanford University',
        enrollmentDate: '2023-01-15',
        status: 'Active'
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        university: 'MIT',
        enrollmentDate: '2023-02-20',
        status: 'Active'
      }
    ]);
  }, []);

  const handleAddStudent = () => {
    const newStudent: Student = {
      id: students.length + 1,
      ...newStudentForm
    };

    setStudents([...students, newStudent]);
    setIsAddModalOpen(false);
    setNewStudentForm({ name: '', email: '', university: '', enrollmentDate: '', status: 'Active' });
  };

  const handleEditStudent = (student: Student) => {
    setCurrentStudent(student);
    setIsEditModalOpen(true);
  };

  const updateStudent = () => {
    if (currentStudent) {
      setStudents(students.map(stu => 
        stu.id === currentStudent.id ? currentStudent : stu
      ));
      setIsEditModalOpen(false);
    }
  };

  const handleDeleteStudent = (id: number) => {
    setStudents(students.filter(stu => stu.id !== id));
  };

  const filteredStudents = students.filter(
    (stu) => 
      stu.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stu.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stu.university.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'Universities', icon: <SchoolIcon />, path: '/admin/universities' },
    { text: 'Students', icon: <PersonIcon />, path: '/admin/students' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/admin/settings' },
  ];

  const drawer = (
    <Box>
      <Toolbar />
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => {
              navigate(item.path);
              if (isMobile) setMobileOpen(false);
            }}
            selected={location.pathname === item.path}
            sx={{
              color: 'white',
              '&.Mui-selected': {
                background: 'rgba(255, 255, 255, 0.1)',
              },
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.2)',
              }
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <GlassAppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - 240px)` },
          ml: { sm: `240px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ color: 'white' }}>
            Student Management
          </Typography>
        </Toolbar>
      </GlassAppBar>
      
      <GlassDrawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </GlassDrawer>
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - 240px)` },
        }}
      >
        <Toolbar />
        <GlassContainer>
          <Typography variant="h4" sx={{ color: 'white', mb: 3 }}>
            Student Management
          </Typography>
          
          <GlassCard sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                Registered Students
              </Typography>
              
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search Students"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ 
                  mb: 2,
                  input: { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255,255,255,0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255,255,255,0.5)',
                    },
                  },
                }}
              />

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      {['Name', 'Email', 'University', 'Enrollment Date', 'Status', 'Actions'].map((header) => (
                        <TableCell key={header} sx={{ color: 'white' }}>{header}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredStudents.map((stu) => (
                      <TableRow key={stu.id}>
                        <TableCell sx={{ color: 'white' }}>{stu.name}</TableCell>
                        <TableCell sx={{ color: 'white' }}>{stu.email}</TableCell>
                        <TableCell sx={{ color: 'white' }}>{stu.university}</TableCell>
                        <TableCell sx={{ color: 'white' }}>{stu.enrollmentDate}</TableCell>
                        <TableCell sx={{ color: 'white' }}>{stu.status}</TableCell>
                        <TableCell>
                          <Box display="flex">
                            <Button sx={{ color: 'white', mr: 1 }} onClick={() => handleEditStudent(stu)}><Edit /></Button>
                            <Button sx={{ color: 'white' }} onClick={() => handleDeleteStudent(stu.id)}><Delete /></Button>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </GlassCard>

          <Button
            variant="contained"
            color="primary"
            startIcon={<Add />}
            onClick={() => setIsAddModalOpen(true)}
            sx={{ mb: 3 }}
          >
            Add Student
          </Button>

          <Modal
            open={isAddModalOpen}
            onClose={() => setIsAddModalOpen(false)}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <GlassCard sx={{ width: '500px', p: 3 }}>
              <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                Add New Student
              </Typography>
              <TextField
                fullWidth
                label="Name"
                value={newStudentForm.name}
                onChange={(e) => setNewStudentForm({ ...newStudentForm, name: e.target.value })}
                sx={{ mb: 2, input: { color: 'white' }, '& .MuiInputLabel-root': { color: 'white' } }}
              />
              <TextField
                fullWidth
                label="Email"
                value={newStudentForm.email}
                onChange={(e) => setNewStudentForm({ ...newStudentForm, email: e.target.value })}
                sx={{ mb: 2, input: { color: 'white' }, '& .MuiInputLabel-root': { color: 'white' } }}
              />
              <TextField
                fullWidth
                label="University"
                value={newStudentForm.university}
                onChange={(e) => setNewStudentForm({ ...newStudentForm, university: e.target.value })}
                sx={{ mb: 2, input: { color: 'white' }, '& .MuiInputLabel-root': { color: 'white' } }}
              />
              <TextField
                fullWidth
                label="Enrollment Date"
                type="date"
                value={newStudentForm.enrollmentDate}
                onChange={(e) => setNewStudentForm({ ...newStudentForm, enrollmentDate: e.target.value })}
                sx={{ mb: 2, input: { color: 'white' }, '& .MuiInputLabel-root': { color: 'white' } }}
                InputLabelProps={{ shrink: true }}
              />
              <Button variant="contained" color="primary" onClick={handleAddStudent}>
                Add Student
              </Button>
            </GlassCard>
          </Modal>

          <Modal
            open={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <GlassCard sx={{ width: '500px', p: 3 }}>
              <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                Edit Student
              </Typography>
              {currentStudent && (
                <>
                  <TextField
                    fullWidth
                    label="Name"
                    value={currentStudent.name}
                    onChange={(e) => setCurrentStudent({ ...currentStudent, name: e.target.value })}
                    sx={{ mb: 2, input: { color: 'white' }, '& .MuiInputLabel-root': { color: 'white' } }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    value={currentStudent.email}
                    onChange={(e) => setCurrentStudent({ ...currentStudent, email: e.target.value })}
                    sx={{ mb: 2, input: { color: 'white' }, '& .MuiInputLabel-root': { color: 'white' } }}
                  />
                  <TextField
                    fullWidth
                    label="University"
                    value={currentStudent.university}
                    onChange={(e) => setCurrentStudent({ ...currentStudent, university: e.target.value })}
                    sx={{ mb: 2, input: { color: 'white' }, '& .MuiInputLabel-root': { color: 'white' } }}
                  />
                  <TextField
                    fullWidth
                    label="Enrollment Date"
                    type="date"
                    value={currentStudent.enrollmentDate}
                    onChange={(e) => setCurrentStudent({ ...currentStudent, enrollmentDate: e.target.value })}
                    sx={{ mb: 2, input: { color: 'white' }, '& .MuiInputLabel-root': { color: 'white' } }}
                    InputLabelProps={{ shrink: true }}
                  />
                  <Button variant="contained" color="primary" onClick={updateStudent}>
                    Update Student
                  </Button>
                </>
              )}
            </GlassCard>
          </Modal>
        </GlassContainer>
      </Box>
    </Box>
  );
};

export default StudentManagement;