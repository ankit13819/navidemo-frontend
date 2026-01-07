'use client';

import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Link,
  TextField,
  Typography,
  Alert,
} from '@mui/material';
import Image from 'next/image';

export default function BankLoginUI() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f2f2f2' }}>
      <Box
        sx={{
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #ddd',
          px: 2,
          py: 1,
          textAlign: 'center',
          color: 'lightgray'
        }}
      >
        <Typography fontSize={17} fontWeight={500}>
          Bank of America deposit products:
          <strong> FDIC-Insured – Backed by the full faith and credit of the U.S. Government</strong>
        </Typography>
      </Box>

      {/* Main Content */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box
          sx={{
            px: 4,
            py: 2,
            maxWidth: 'md',
            display: 'flex'
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Image
              src="/BOFA.png"
              width={300}
              height={500}
              alt="Picture of the author"
            />
            <Typography variant="h6" fontWeight={600} style={{ color: 'black', px: 3 }}>
              Log In
            </Typography>
          </Box>

        </Box>
        <Box
          sx={{
            backgroundColor: '#d4001a',
            color: '#fff',
            px: 4,
            py: 2,
            maxWidth: 'md'
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            Log In to Online Banking
          </Typography>
        </Box>
        <Alert severity="success" sx={{ mb: 3 }}>
          <strong>Congratulations!</strong> You re now enrolled in Online and Mobile Banking.
        </Alert>

        <Card sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Box sx={{ flex: 1 }}>
              <Typography fontWeight={600} mb={1}>
                User ID
              </Typography>

              <TextField
                fullWidth
                placeholder="Enter your User ID"
                margin="dense"
              />

              <Typography fontWeight={600} mt={2} mb={1}>
                Password
              </Typography>

              <TextField
                fullWidth
                type="password"
                placeholder="Enter your Password"
                margin="dense"
              />

              <Link
                href="#"
                underline="hover"
                sx={{ display: 'block', mt: 1, fontSize: 14 }}
              >
                Forgot your Password?
              </Link>

              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  backgroundColor: '#0066b2',
                  '&:hover': { backgroundColor: '#004a87' },
                }}
              >
                Log In
              </Button>
            </Box>

            <Divider orientation="vertical" flexItem />
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Typography fontWeight={600} fontSize={18}>
                Stay connected with our app
              </Typography>

              <Typography fontSize={14} sx={{ mt: 1, color: '#555' }}>
                Secure, convenient banking anytime.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  backgroundColor: '#d4001a',
                  '&:hover': { backgroundColor: '#a80014' },
                }}
              >
                Get the app
              </Button>
            </Box>
          </Box>
        </Card>
      </Container>

      {/* Footer */}
      <Box sx={{ textAlign: 'center', mt: 5, fontSize: 12, color: '#555' }}>
        © 2026 Bank of America Corporation · Secure Area
      </Box>
    </Box>
  );
}

