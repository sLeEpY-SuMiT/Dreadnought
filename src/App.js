import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <div>
      <Stack>
        <Stack justifyContent="space-between" sx={{ backgroundColor: 'blue' }} className='headerfix'>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ mx: 6, my: 3 }}
          >
            <img src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://file-uploads.teachablecdn.com/ffe442a414904138b18e5b532bba9da1/167af06d542e43a999f07c44645dbc1d" />

            <Button sx={{ fontWeight: "bold" }} variant="text">
              <Typography color="white" variant="h6" sx={{ mr: 10 }}>
                <a href="#" style={{ color: 'white' }}>Login</a>
              </Typography>
            </Button>
          </Stack>

        </Stack>
        <Grid container className='landing'>
          <Grid lg={12} xs={12} sm={12} md={12}>
            <Stack className="centered">
              <Typography variant="h2" color="white"><b>Dreadnought</b></Typography>
            </Stack>
            <Stack className="centered" sx={{ my: 10 }}>
              <Typography variant="h4" color="white" padding={2}><b>School for Deep Tech founders</b></Typography>
            </Stack>
            <Stack className="centered" sx={{ my: 20 }} padding={5}>
              <Button variant="contained" size="large" sx={{ borderRadius: '20px', width: '10vw' }}><b>Sign Up</b></Button>
            </Stack>
          </Grid>
        </Grid>

        <Grid container >
          <Grid lg={12} xs={12} sm={12} md={12}>
            <Stack direction='row' padding={2} sx={{ mx: 65, my: 10 }} textAlign='center' >
              <Typography variant="h5" className="textWrap">We believe <strong >humanity's survival</strong> depends on us being a <strong >spacefaring civilisation</strong> and future deep tech founders will lead the way.</Typography>
            </Stack>

            <Stack direction='row' padding={2} sx={{ mx: 65, my: 10 }} textAlign='center' >
              <Typography variant="h5" className="textWrap"><strong >Get paid to learn</strong> the initial 2 months of founder journey that covers everything other than engineering. We trust your coding skills.</Typography>
            </Stack>
          </Grid>
        </Grid>

        <Grid container className="backC">
          <Grid lg={12} xs={12} sm={12} md={12} >
            <Stack textAlign='center' sx={{ my: 10 }}>
              <Typography variant="h4" color='blue'><strong>Social Initiative By</strong></Typography>
            </Stack>



            <Stack direction='row' justifyContent='space-around' sx={{ mx: 20, my: 5 }}>
              <Stack direction='column' alignItems='center' >
                <img src="https://cdn.fs.teachablecdn.com/iHpm1TXUQQeQk6PQVAMw" style={{ width: '14vw', height: 'auto' }}></img>
                <Typography variant="h6" padding={2}>AI for Good Foundation</Typography>
              </Stack>

              <Stack direction='column' alignItems='center'>
                <img src="https://cdn.fs.teachablecdn.com/2GJ3PRzFSAyZblVHipUF" style={{ width: '14vw', height: 'auto' }}></img>
                <Typography variant="h6" padding={2}>Y Combinator</Typography>
              </Stack>

              <Stack direction='column' alignItems='center'>
                <img src="https://cdn.fs.teachablecdn.com/xOBdZe6Q1GYXG5bPyTFS" style={{ width: '14vw', height: 'auto' }}></img>
                <Typography variant="h6" padding={2}>Stanford University</Typography>
              </Stack>

            </Stack>
          </Grid>
        </Grid>

        <Grid container >
          <Grid lg={12} xs={12} sm={12} md={12} >
            <Stack textAlign='center' sx={{ my: 8 }}>
              <Typography variant="h4" color='blue'><strong>About Dreadnought</strong></Typography>
            </Stack>

            <Stack direction='row' sx={{ mx: 65, mb: 5 }} textAlign='center' >
              <Typography variant="subtitle1" className="textWrap">Our team is comprised of digitally-native entrepreneurs, futurists and operators with strengths in AI, Space Tech, Genomics, AR/VR and Longevity. We decided to launch Dreadnought to super charge the future by helping unlock the potential of future deep tech entrepreneurs.</Typography>
            </Stack>

            <Stack direction='row' justifyContent='space-around' sx={{ mx: 20 }}>
              <Stack direction='column' alignItems='center' >
                <img src="https://cdn.fs.teachablecdn.com/wgiet3NFRvO2zWrAf7n6" style={{ width: '14vw', height: 'auto' }}></img>
                <Typography variant="h6" padding={2}>Bailee Cooper</Typography>
                <Typography variant="subtitle1" padding={2} sx={{ mx: 10 }} textAlign="center">Technophile. Left Brain. Space Nerd. UC Berkeley Alum.</Typography>
              </Stack>

              <Stack direction='column' alignItems='center'>
                <img src="https://cdn.fs.teachablecdn.com/pSMNpPEQ7qEAhujaurRp" style={{ width: '14vw', height: 'auto' }}></img>
                <Typography variant="h6" padding={2}>Jason Miller</Typography>
                <Typography variant="subtitle1" padding={2} sx={{ mx: 10 }} textAlign="center">Futurist. Entrepreneur. Hardcore Nerd. Stanford Alum.</Typography>
              </Stack>

              <Stack direction='column' alignItems='center'>
                <img src="https://cdn.fs.teachablecdn.com/44zQyTIPT5a8nqK2bkUX" style={{ width: '14vw', height: 'auto' }}></img>
                <Typography variant="h6" padding={2}>Ragini Malhotra</Typography>
                <Typography variant="subtitle1" padding={2} sx={{ mx: 10 }} textAlign="center">AI Researcher. Right Brain. Loves Dogs. MIT Alum.</Typography>
              </Stack>

            </Stack>
          </Grid>
        </Grid>


        <Grid container className="backC">
          <Grid lg={12} xs={12} sm={12} md={12} >
            <Stack textAlign='center' sx={{ my: 8 }}>
              <Typography variant="h4" color='blue'><strong>Student Experiences</strong></Typography>
            </Stack>

            <Stack direction='row' justifyContent='space-around' sx={{ mx: 20 }}>
              <Stack direction='column' alignItems='center' >
                <img src="https://cdn.fs.teachablecdn.com/A2GPqp7OSrqIi7vEA4VY" style={{ width: '14vw', height: 'auto' }}></img>
                <Typography variant="h6" padding={2}>Rob Nielsen</Typography>
                <Typography variant="subtitle2" padding={2} sx={{ mx: 10 }} textAlign="center">Sophomore year student at MIT says, 'I have been coding since I was 12 but this course blew my mind away because now I know no fear. I can keep launching again and again till I win. The startup lessons are invaluable and practical.'</Typography>
              </Stack>

              <Stack direction='column' alignItems='center'>
                <img src="https://cdn.fs.teachablecdn.com/Uf8ZAKWtTGGO8jPVyzi3" style={{ width: '14vw', height: 'auto' }}></img>
                <Typography variant="h6" padding={2}>Rashmi Tirke</Typography>
                <Typography variant="subtitle2" padding={2} sx={{ mx: 10 }} textAlign="center">Final year student at IIT Madras says, 'I almost gave up but then I realised that if I can't build these things in a controlled learning environment then I am not going to survive as an entrepreneur in the real world. I am far more confident now.'</Typography>
              </Stack>

              <Stack direction='column' alignItems='center'>
                <img src="https://cdn.fs.teachablecdn.com/44zQyTIPT5a8nqK2bkUX" style={{ width: '14vw', height: 'auto' }}></img>
                <Typography variant="h6" padding={2}>David Raum</Typography>
                <Typography variant="subtitle2" padding={2} sx={{ mx: 10 }} textAlign="center">First year student at Cambridge says, 'I learnt so much and I plan to use the money I earned as a seed money for my startup. The smartest thing I did was to refer my friends as it increased my earnings and now we are working together.'</Typography>
              </Stack>

            </Stack>
          </Grid>
        </Grid>

        <Grid container sx={{ backgroundColor: '#073e60' }}>
          <Grid lg={12} xs={12} sm={12} md={12} >
            <Stack textAlign='center' sx={{ my: 8 }}>
              <Typography variant="h4" color='white'><strong>Sign up to learn and earn</strong></Typography>
            </Stack>

            <Stack sx={{ mb: 5 }} textAlign='center' >
              <Typography variant="h6" className="textWrap" color="white">Course enables future founders to learn how to launch quickly as most first time founders pivot 4 to 5 times before achieving product-market fit.</Typography>
            </Stack>

            <Stack direction='column' sx={{ mx: 40, height: '25vw', backgroundColor: 'white', mb: 5, borderRadius: '1.5rem' }} alignItems='center'>
              <img src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/mzBHDQYXTCqItjILj7OI" style={{ width: '20vw', height: 'auto', marginTop: '20px' }} />
              <Typography variant="h5" padding={2} color='blue'><b>Future Deep Tech Founders</b></Typography>
              <Typography variant="subtitle1" textAlign='center' color='blue' sx={{ mx: 25 }}>Everything you need to know about building startup other than coding. Milestone based earnings upto USD $1000</Typography>
              <Stack direction={'row'} justifyContent='space-around' sx={{ width: '100%' }} padding={5}>
                <Stack direction='row' >
                  <img src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/hl1PBlgTTlWt9m8RnkCS" style={{ width: '2vw', height: 'auto' }} />
                  <Typography variant="subtitle1" color='blue'>Jason Miller</Typography>
                </Stack>
                <Typography variant="h6" color='blue'><small>FREE</small></Typography>
              </Stack>

            </Stack>
          </Grid>
        </Grid>

        <Grid container sx={{ backgroundColor: 'blue' }}>
          <Grid lg={12} xs={12} sm={12} md={12} >
            <Stack direction='row' justifyContent='space-around' padding={4}>
              <Stack direction='column'>
                <Typography color='white'>© Dreadnought 2022</Typography>
                <Typography component='a' href="#" color='white'>FAQs</Typography>
              </Stack>

              <Stack direction='column'>
                <Typography component='a' href="#" color='white'>Terms of Use</Typography>
                <Typography component='a' href="#" color='white'>Privacy Policy</Typography>
                <Stack direction='column' sx={{ mt: 2 }}>
                  <Typography component='a' href="#" color='white'>Teach Online with</Typography>
                  <Typography color='white'>Teach:able</Typography>
                </Stack>
              </Stack>
            </Stack>


          </Grid>
        </Grid>
      </Stack>
    </div>
  );
};


export default Home;
