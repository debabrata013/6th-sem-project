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
  styled 
} from '@mui/material';
import { 
  Add, 
  Edit, 
  Delete, 
  Check, 
  Close, 
  Info 
} from '@mui/icons-material';

// Reuse Glassmorphism Styling from Previous Implementation
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

// Interfaces
interface University {
  id: number;
  name: string;
  location: string;
  studentsEnrolled: number;
  registrationDate: string;
  status: 'Active' | 'Inactive';
}

interface UniversityRequest {
  id: number;
  name: string;
  contactPerson: string;
  email: string;
  location: string;
  submissionDate: string;
}

const UniversitiesManagementPage: React.FC = () => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [universityRequests, setUniversityRequests] = useState<UniversityRequest[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRequest, setSelectedRequest] = useState<UniversityRequest | null>(null);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  useEffect(() => {
    // Mock Data
    setUniversities([
      {
        id: 1,
        name: 'Stanford University',
        location: 'California, USA',
        studentsEnrolled: 17000,
        registrationDate: '2023-01-15',
        status: 'Active'
      },
      {
        id: 2,
        name: 'MIT',
        location: 'Massachusetts, USA',
        studentsEnrolled: 11000,
        registrationDate: '2023-02-20',
        status: 'Active'
      }
    ]);

    setUniversityRequests([
      {
        id: 1,
        name: 'UC Berkeley',
        contactPerson: 'Jane Doe',
        email: 'jane.doe@berkeley.edu',
        location: 'California, USA',
        submissionDate: '2024-01-10'
      }
    ]);
  }, []);

  const filteredUniversities = universities.filter(
    (uni) => 
      uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRequestAction = (request: UniversityRequest, action: 'approve' | 'reject' | 'info') => {
    switch (action) {
      case 'approve':
        const newUniversity: University = {
          id: request.id,
          name: request.name,
          location: request.location,
          studentsEnrolled: 0,
          registrationDate: new Date().toISOString().split('T')[0],
          status: 'Active'
        };
        setUniversities([...universities, newUniversity]);
        setUniversityRequests(
          universityRequests.filter(req => req.id !== request.id)
        );
        break;
      
      case 'reject':
        setUniversityRequests(
          universityRequests.filter(req => req.id !== request.id)
        );
        break;
      
      case 'info':
        setSelectedRequest(request);
        setIsInfoModalOpen(true);
        break;
    }
  };

  const renderUniversitiesSection = () => (
    <GlassCard sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
          Registered Universities
        </Typography>
        
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search Universities"
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
                {['Name', 'Location', 'Students', 'Registration', 'Status', 'Actions'].map((header) => (
                  <TableCell key={header} sx={{ color: 'white' }}>{header}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUniversities.map((uni) => (
                <TableRow key={uni.id}>
                  <TableCell sx={{ color: 'white' }}>{uni.name}</TableCell>
                  <TableCell sx={{ color: 'white' }}>{uni.location}</TableCell>
                  <TableCell sx={{ color: 'white' }}>{uni.studentsEnrolled}</TableCell>
                  <TableCell sx={{ color: 'white' }}>{uni.registrationDate}</TableCell>
                  <TableCell sx={{ color: 'white' }}>{uni.status}</TableCell>
                  <TableCell>
                    <Box display="flex">
                      <Button sx={{ color: 'white', mr: 1 }}><Edit /></Button>
                      <Button sx={{ color: 'white' }}><Delete /></Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </GlassCard>
  );

  const renderUniversityRequestsSection = () => (
    <GlassCard>
      <CardContent>
        <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
          New University Requests
        </Typography>
        
        <Grid container spacing={2}>
          {universityRequests.map((request) => (
            <Grid item xs={12} md={4} key={request.id}>
              <GlassCard>
                <CardContent>
                  <Typography variant="subtitle1" sx={{ color: 'white' }}>
                    {request.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white', opacity: 0.7 }}>
                    Contact: {request.contactPerson}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white', opacity: 0.7 }}>
                    Email: {request.email}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white', opacity: 0.7 }}>
                    Location: {request.location}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white', opacity: 0.7 }}>
                    Submitted: {request.submissionDate}
                  </Typography>
                  
                  <Box display="flex" justifyContent="space-between" mt={2}>
                    <Button 
                      variant="contained" 
                      color="success" 
                      startIcon={<Check />}
                      onClick={() => handleRequestAction(request, 'approve')}
                    >
                      Approve
                    </Button>
                    <Button 
                      variant="contained" 
                      color="error" 
                      startIcon={<Close />}
                      onClick={() => handleRequestAction(request, 'reject')}
                    >
                      Reject
                    </Button>
                    <Button 
                      variant="contained" 
                      color="info" 
                      startIcon={<Info />}
                      onClick={() => handleRequestAction(request, 'info')}
                    >
                      Info
                    </Button>
                  </Box>
                </CardContent>
              </GlassCard>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </GlassCard>
  );

  const renderInfoModal = () => (
    <Modal 
      open={isInfoModalOpen}
      onClose={() => setIsInfoModalOpen(false)}
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}
    >
      <GlassCard sx={{ width: '500px', p: 3 }}>
        <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
          Request More Information
        </Typography>
        {selectedRequest && (
          <Box>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Additional Questions"
              sx={{ 
                mb: 2,
                '& .MuiInputLabel-root': { color: 'white' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                },
              }}
            />
            <Button variant="contained" color="primary">
              Send Request
            </Button>
          </Box>
        )}
      </GlassCard>
    </Modal>
  );

  return (
    <GlassContainer>
      <Typography variant="h4" sx={{ color: 'white', mb: 3 }}>
        Universities Management
      </Typography>
      
      {renderUniversitiesSection()}
      {renderUniversityRequestsSection()}
      {renderInfoModal()}
    </GlassContainer>
  );
};

export default UniversitiesManagementPage;