// AdminPage.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Card,
  CardContent,
  styled
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  School as SchoolIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  TrendingUp,
  People,
  School
} from '@mui/icons-material';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const drawerWidth = 240;

// Styled Components
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

const GlassDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    width: drawerWidth,
    boxSizing: 'border-box',
  }
}));

const GlassAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
}));

const GlassContainer = styled(Box)({
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
  padding: '24px'
});

// Interfaces
interface Student {
  id: number;
  name: string;
  age: number;
  university: string;
  status: 'Active' | 'Graduated' | 'Withdrawn';
}

interface University {
  id: number;
  name: string;
  location: string;
  status: 'Active' | 'Inactive';
}

interface StatsData {
  totalStudents: number;
  activeUniversities: number;
  graduationRate: number;
  newRegistrations: number;
}

const AdminPage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [students, setStudents] = useState<Student[]>([]);
  const [universities, setUniversities] = useState<University[]>([]);
  const [registrationData, setRegistrationData] = useState<any[]>([]);
  const [statsData, setStatsData] = useState<StatsData>({
    totalStudents: 2500,
    activeUniversities: 45,
    graduationRate: 85,
    newRegistrations: 120
  });

  const pieData = [
    { name: 'Active', value: 400 },
    { name: 'Graduated', value: 300 },
    { name: 'Withdrawn', value: 100 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  useEffect(() => {
    // Mock data initialization
    setStudents([
      { id: 1, name: 'John Doe', age: 20, university: 'MIT', status: 'Active' },
      { id: 2, name: 'Jane Smith', age: 22, university: 'Stanford', status: 'Graduated' },
    ]);

    setUniversities([
      { id: 1, name: 'MIT', location: 'Cambridge, MA', status: 'Active' },
      { id: 2, name: 'Stanford', location: 'Stanford, CA', status: 'Active' },
    ]);

    setRegistrationData([
      { month: 'Jan', registrations: 65 },
      { month: 'Feb', registrations: 85 },
      { month: 'Mar', registrations: 120 },
      { month: 'Apr', registrations: 90 },
      { month: 'May', registrations: 110 },
      { month: 'Jun', registrations: 130 },
    ]);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/admin/dashboard' },
    { text: 'Universities', icon: <SchoolIcon />, path: '/admin/universities' },
    { text: 'Students', icon: <PersonIcon />, path: '/admin/students' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/admin/settings' },
  ];

  const StatCard = ({ title, value, icon }: { title: string; value: number; icon: React.ReactNode }) => (
    <GlassCard>
      <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h6" sx={{ color: 'white', opacity: 0.8 }}>{title}</Typography>
          <Typography variant="h4" sx={{ color: 'white' }}>{value}</Typography>
        </Box>
        <Box sx={{ color: 'white', opacity: 0.8 }}>{icon}</Box>
      </CardContent>
    </GlassCard>
  );

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

  const renderDashboardContent = () => (
    <GlassContainer>
      <Typography variant="h4" gutterBottom sx={{ color: 'white', mb: 4 }}>
        Welcome to Super Admin Dashboard
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Total Students" 
            value={statsData.totalStudents}
            icon={<People sx={{ fontSize: 40 }} />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Active Universities" 
            value={statsData.activeUniversities}
            icon={<School sx={{ fontSize: 40 }} />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Graduation Rate" 
            value={statsData.graduationRate}
            icon={<TrendingUp sx={{ fontSize: 40 }} />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="New Registrations" 
            value={statsData.newRegistrations}
            icon={<PersonIcon sx={{ fontSize: 40 }} />}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <GlassCard>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
                Student Registrations Trend
              </Typography>
              <Box sx={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={registrationData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="month" stroke="white" />
                    <YAxis stroke="white" />
                    <Tooltip 
                      contentStyle={{ 
                        background: 'rgba(255,255,255,0.1)', 
                        border: 'none',
                        borderRadius: '8px',
                        color: 'white'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="registrations" 
                      stroke="#8884d8" 
                      strokeWidth={2}
                      dot={{ fill: '#8884d8' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </GlassCard>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <GlassCard>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
                Student Status Distribution
              </Typography>
              <Box sx={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ 
                      background: 'rgba(255,255,255,0.1)', 
                      border: 'none',
                      borderRadius: '8px',
                      color: 'white'
                    }} />
                    <Legend wrapperStyle={{ color: 'white' }} />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </GlassCard>
        </Grid>

        <Grid item xs={12}>
          <GlassCard>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
                Universities Overview
              </Typography>
              <TableContainer component={Box} sx={{ background: 'transparent' }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ color: 'white', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>Name</TableCell>
                      <TableCell sx={{ color: 'white', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>Location</TableCell>
                      <TableCell sx={{ color: 'white', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {universities.map((university) => (
                      <TableRow key={university.id}>
                        <TableCell sx={{ color: 'white', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>{university.name}</TableCell>
                        <TableCell sx={{ color: 'white', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>{university.location}</TableCell>
                        <TableCell sx={{ color: 'white', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>{university.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </GlassCard>
        </Grid>
      </Grid>
    </GlassContainer>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <GlassAppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
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
            Super Admin Dashboard
          </Typography>
        </Toolbar>
      </GlassAppBar>
      
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
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
      </Box>
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {renderDashboardContent()}
      </Box>
    </Box>
  );
};

export default AdminPage;