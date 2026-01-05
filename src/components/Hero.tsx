import { Box, Container, Heading, Text, Button, Flex, VStack, Link, Image } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import profileImage from '../assets/profile.jpeg'

function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Box
      id="home"
      minH="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(135deg, #667eea 0%, #764ba2 100%)"
      position="relative"
      overflow="hidden"
      pt={{ base: "80px", md: "88px" }}
      pb={20}
    >
      {/* Animated background elements */}
      <Box
        position="absolute"
        top="-50%"
        right="-50%"
        w="800px"
        h="800px"
        borderRadius="full"
        bgGradient="linear(135deg, #f093fb 0%, #f5576c 100%)"
        opacity={0.3}
      />
      <Box
        position="absolute"
        bottom="-30%"
        left="-30%"
        w="600px"
        h="600px"
        borderRadius="full"
        bgGradient="linear(135deg, #4facfe 0%, #00f2fe 100%)"
        opacity={0.3}
      />

      <Container maxW="1280px" position="relative" zIndex={10} px={{ base: 4, md: 8 }}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          gap={{ base: 8, lg: 12 }}
        >
          <VStack
            align={{ base: 'center', lg: 'flex-start' }}
            textAlign={{ base: 'center', lg: 'left' }}
            gap={6}
            flex={1}
          >
            <Box>
              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                color="yellow.600"
                mb={2}
                fontWeight={500}
                letterSpacing="wide"
              >
                Hello, I'm
              </Text>
              <Heading
                as="h1"
                fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                fontWeight={800}
                color="yellow.700"
                mb={4}
                lineHeight="shorter"
              >
                Nham Quoc Hung
              </Heading>
              <Heading
                as="h2"
                fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                fontWeight={600}
                color="cyan.600"
                mb={6}
              >
                Data Engineer, Software Engineer & Educator
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="purple.600"
                maxW="600px"
                lineHeight="tall"
              >
                I am a Computer Science graduate with a specialisation in Data and passion for teaching.
              </Text>
            </Box>

            <Flex
              gap={4}
              direction={{ base: 'column', sm: 'row' }}
              w={{ base: 'full', sm: 'auto' }}
            >
              <Button
                onClick={() => scrollToSection('projects')}
                size={{ base: 'md', md: 'lg' }}
                bg="yellow.600"
                color="white"
                fontWeight={600}
                px={8}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'xl',
                  bg: 'yellow.700',
                }}
                transition="all 0.3s"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                size={{ base: 'md', md: 'lg' }}
                variant="outline"
                borderColor="cyan.600"
                color="cyan.600"
                fontWeight={600}
                px={8}
                _hover={{
                  bg: 'cyan.700',
                  color: 'white',
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.3s"
              >
                Get In Touch
              </Button>
            </Flex>

            <Flex gap={6} mt={4}>
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                color="yellow.600"
                _hover={{ color: 'yellow.700', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
              >
                <FaGithub size={24} />
              </Link>
              <Link
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                color="cyan.600"
                _hover={{ color: 'cyan.700', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                href="mailto:nhamhung.gttn@gmail.com"
                color="pink.600"
                _hover={{ color: 'pink.700', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
              >
                <FaEnvelope size={24} />
              </Link>
            </Flex>
          </VStack>

          <Box
            flex={1}
            display={{ base: 'none', lg: 'flex' }}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              w="400px"
              h="400px"
              borderRadius="2xl"
              overflow="hidden"
              border="4px solid"
              borderColor="yellow.600"
              boxShadow="0 20px 60px rgba(0, 0, 0, 0.4)"
              position="relative"
            >
              <Image
                src={profileImage}
                alt="Nham Quoc Hung"
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>
          </Box>
        </Flex>
      </Container>

      <Box
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        color="yellow.600"
        _hover={{ color: 'yellow.700' }}
        cursor="pointer"
        onClick={() => scrollToSection('about')}
        transition="all 0.2s"
      >
        <HiArrowDown size={32} />
      </Box>
    </Box>
  )
}

export default Hero

