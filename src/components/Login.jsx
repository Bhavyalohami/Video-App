import { Container, Heading, Input, VStack,Button,Text } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import React from 'react'

const Login = () => {
  return <>
  <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
    <form>
        <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
            <Heading textTransform={'uppercase'}>Welome Back!</Heading>

            <Input required placeholder={'Enter Email'} type={'email'} focusBorderColor={'purple'}/>
            <Input required placeholder={'Enter Password'} type={'password'} focusBorderColor={'purple'}/>

            <Button variant={'link'} alignSelf={'flex-end'}>
                <Link to={'/forgetpassword'}>Forget Password?</Link>
            </Button>

            <Button colorScheme={'purple'} type={'submit'}>Log In</Button>

            <Text align={'right'}>New User?{" "} 
            <Button variant={'link'} colorScheme={'purple'}>
                <Link to={'/signup'}>Sign Up</Link>
            </Button>
            </Text>

        </VStack>
    </form>
  </Container>
  </>
}

export default Login