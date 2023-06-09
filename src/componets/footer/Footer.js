import React, { useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LogoFooter from '../../assets/image/LogoFooter.png';
import VkSvg from '../../assets/svg/footer/VkSvg.js';
import TelegramSvg from '../../assets/svg/footer/TelegramSVG.js';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatus } from '../../store/reducers/AuthReducer';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';

const socialMedia = [
  {
    name: 'VK',
    path: 'https://vk.com/ligauslugvk/',
    svg: <VkSvg />,
  },
  {
    name: 'Telegram',
    path: 'https://t.me/+SCl-X6gNpd00YWM6',
    svg: <TelegramSvg />,
  },
];
export default function Footer({ handleScroll, categoriesRef, reviewsRef, setFooterHeight }) {
  const { auth } = useSelector((state) => state.auth);
  const { status } = useSelector(({ auth }) => auth);
  const footerRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  // useEffect(() => {
  //   if (footerRef.current) {
  //     setFooterHeight(+footerRef.current.offsetHeight);
  //   }
  // }, [footerRef]);
  const checkLogin = async (enteredStatus) => {
    if (auth) {
      if (status === 'client' && enteredStatus !== status) {
        dispatch(changeStatus('executor'));
      } else if (status === 'executor' && enteredStatus !== status) {
        dispatch(changeStatus('client'));
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Box
      ref={footerRef}
      style={{
        backgroundColor: '#EBEBEB',
        // position: "absolute",
        // bottom: 0,
        // width: "100vw"
      }}>
      <Container maxWidth="lg">
        <Grid
          container
          sx={{
            paddingTop: 9,
            paddingBottom: 9,
            '@media (max-width: 900px)': {
              paddingTop: 4,
              paddingBottom: 3,
            },
          }}>
          <Grid item xs={24} sm={12} md={6} lg={3} sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                alignItems: 'center',
                paddingBottom: '10px',
              }}>
              <Typography sx={{ marginBottom: '5px' }}>
                <Link
                  to="/"
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                  }}>
                  Новый заказ
                </Link>
              </Typography>
              {location.pathname === '/' && (
                <>
                  <Typography
                    sx={{ marginBottom: '5px', cursor: 'pointer' }}
                    onClick={() => {
                      handleScroll(categoriesRef.current);
                    }}>
                    Все услуги{' '}
                  </Typography>
                  <Typography
                    sx={{ marginBottom: '5px', cursor: 'pointer' }}
                    onClick={() => handleScroll(reviewsRef.current)}>
                    Все отзывы{' '}
                  </Typography>
                </>
              )}

              {/* <Typography sx={{ marginBottom: "5px" }}>
                История заказов
              </Typography> */}
              <Typography>
                <Link
                  to="/documents"
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    cursor: 'pointer',
                  }}>
                  {' '}
                  Условия использования
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={24} sm={12} md={6} lg={3}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                alignItems: 'center',
                paddingBottom: '10px',
              }}>
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: 500,
                  marginBottom: '15px',
                  color: '#000',
                }}>
                Поиск работы
              </Typography>
              <Typography sx={{ marginBottom: '5px' }}>
                <Link
                  to={auth ? '/' : '/login'}
                  onClick={() => checkLogin('executor')}
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    cursor: 'pointer',
                  }}>
                  Вход для исполнителя
                </Link>
              </Typography>
              <Typography>
                <Link
                  to={auth ? '/' : '/login'}
                  onClick={() => checkLogin('client')}
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    cursor: 'pointer',
                  }}>
                  Вход для заказчика
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={24} sm={12} md={6} lg={3}>
            <Box
              sx={{
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                alignItems: 'center',
                paddingBottom: '10px',
              }}>
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: 500,
                  marginBottom: '15px',
                  color: '#000',
                }}>
                О компании
              </Typography>
              <Typography sx={{ textAlign: 'center', marginBottom: '5px' }}>
                <span>Служба поддержки</span> <br />
                <a
                  href="mailto:liga124@mail.ru"
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  liga124@mail.ru
                </a>
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gridGap: '10px',
                  marginBottom: '30px',
                  justifyContent: 'center',
                }}>
                {socialMedia.map((el, index) => {
                  return (
                    <a key={index} href={el.path} target="_blank" rel="nofollow">
                      {el.svg}
                    </a>
                  );
                })}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={24} sm={12} md={6} lg={3}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
                alignItems: 'center',
                paddingBottom: '10px',
              }}>
              <Box
                sx={{
                  marginBottom: '30px',
                  '& img': {
                    '@media (max-width: 900px)': {
                      width: '100px',
                      marginTop: '-14px',
                    },
                  },
                }}>
                <img alt="Лига Услуг" src={LogoFooter} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ width: '100%', backgroundColor: '#5A7287', height: '67px' }} />
    </Box>
  );
}
