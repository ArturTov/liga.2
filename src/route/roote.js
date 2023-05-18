import { Outlet } from 'react-router';
import Footer from '../componets/footer/Footer';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

const Container = styled(Box)(({ props, theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 1921,
  };
});

export default function Roote() {
  return (
    <Container>
      heder
      <Outlet />
      <Footer />
    </Container>
  );
}
