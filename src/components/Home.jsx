import {Box, Container, Heading, Img, Stack,Text} from '@chakra-ui/react';
import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:"4",
    size:"4xl"
}

const Home = () => {
  return <Box>
    <MyCarousel />

    <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        
        <Heading textTransform={'uppercase'} py={'2'} m={'auto'} w={'fit-content'} borderBottom={'2px solid'}>Services</Heading>

        <Stack h={"full"} p={"4"} alignItems={"center"} direction={["column","row"]}>
            <Img src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'} />
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod tempus diam, ac rutrum massa euismod ut. Vivamus blandit venenatis diam ac finibus. Integer eros sapien, accumsan eget nunc ac, euismod pellentesque sem. Vestibulum luctus gravida magna, nec fermentum nulla porttitor sit amet. Curabitur eget tortor mi. Maecenas at mi volutpat nulla egestas luctus. Proin nec arcu tristique, dignissim libero a, pretium magna. Cras ac lectus sit amet justo finibus ultricies. Mauris suscipit lacus vel facilisis semper. Vestibulum egestas neque nec dui blandit, ac consequat massa porttitor. Etiam ipsum arcu, consectetur sit amet laoreet id, congue vitae turpis. Cras dictum enim vitae sapien tristique aliquam. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin laoreet rhoncus dapibus. Vestibulum eget ipsum ipsum.</Text>
        </Stack>
    </Container>
  </Box>
}

const MyCarousel=()=>(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box w={'full'} h={'100vh'}>
            <Img src={img1} h={'full'} w={'full'} objectFit={'cover'}/>
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Watch the Future</Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Img src={img2} h={'full'} w={'full'} objectFit={'cover'}/>
            <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions}>Future is Gaming</Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Img src={img3} h={'full'} w={'full'} objectFit={'cover'}/>
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>Gaming Console</Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Img src={img4} h={'full'} w={'full'} objectFit={'cover'}/>
            <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions}>Night Life</Heading>
        </Box>
    </Carousel>
);

export default Home
