import { Container, Heading, Input, VStack,Button,Text, Avatar } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import React from 'react'

const SignUp = () => {
  return <>
  <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
    <form>
        <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
            <Heading textTransform={'uppercase'}>VIDEO HUB</Heading>
            <Avatar alignSelf={'center'} boxSize={'32'} />
            
            <Input required placeholder={'Enter Name'} type={'text'} focusBorderColor={'purple'}/>
            <Input required placeholder={'Enter Email'} type={'email'} focusBorderColor={'purple'}/>
            <Input required placeholder={'Enter Password'} type={'password'} focusBorderColor={'purple'}/>

            <Button colorScheme={'purple'} type={'submit'}>Sign Up</Button>

            <Text align={'right'}>Already a User?{" "}
            <Button variant={'link'} colorScheme={'purple'}>
                <Link to={'/login'}>Log In</Link>
            </Button>
            </Text>

        </VStack>
    </form>
  </Container>
  </>
}

export default SignUp