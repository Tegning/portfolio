import { Box, Container, Heading, Text, Button, Flex, VStack, Link, Image } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'
import { FaGithub, FaEnvelope } from 'react-icons/fa'
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
      position="relative"
      overflow="hidden"
      pt={{ base: "80px", md: "88px" }}
      pb={20}
      bg="#0a0e17"
    >
      {/* Grid background */}
      <Box
        position="absolute"
        inset={0}
        bgImage="linear-gradient(rgba(34, 211, 238, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.03) 1px, transparent 1px)"
        bgSize="48px 48px"
        css={{ animation: 'gridPulse 8s ease-in-out infinite' }}
      />
      <Box
        position="absolute"
        top={0}
        left="50%"
        w="1px"
        h="100%"
        bg="linear-gradient(180deg, transparent, rgba(34, 211, 238, 0.2), transparent)"
        transform="translateX(-50%)"
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
            <Box css={{ animation: 'fadeInUp 0.8s ease-out' }}>
              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                color="#22d3ee"
                mb={2}
                fontWeight={500}
                letterSpacing="wider"
                fontFamily="var(--font-mono)"
                css={{ animation: 'fadeIn 0.8s ease-out' }}
              >
                &gt; hello_world
              </Text>
              <Heading
                as="h1"
                fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                fontWeight={700}
                color="#f1f5f9"
                mb={3}
                lineHeight="shorter"
                fontFamily="var(--font-sans)"
                css={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }}
              >
                Nguyen Trong Duy
              </Heading>
              <Heading
                as="h2"
                fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                fontWeight={500}
                color="#94a3b8"
                mb={5}
                fontFamily="var(--font-mono)"
                css={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}
              >
                Student Researcher · AI & Computer Vision
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="#94a3b8"
                maxW="560px"
                lineHeight="tall"
                css={{ animation: 'fadeInUp 0.8s ease-out 0.3s both' }}
              >
                High school Mathematics student with researcher experiences in the application of AI and computer vision into real-world problems.
              </Text>
            </Box>

            <Flex
              gap={4}
              direction={{ base: 'column', sm: 'row' }}
              w={{ base: 'full', sm: 'auto' }}
              justify={{ base: 'center', lg: 'flex-start' }}
              css={{ animation: 'fadeInUp 0.8s ease-out 0.5s both' }}
            >
              <Button
                onClick={() => scrollToSection('projects')}
                size={{ base: 'md', md: 'lg' }}
                bg="#22d3ee"
                color="#0a0e17"
                fontWeight={600}
                px={8}
                fontFamily="var(--font-mono)"
                _hover={{
                  bg: '#67e8f9',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 0 24px rgba(34, 211, 238, 0.4)',
                }}
                transition="all 0.2s"
              >
                View Projects
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                size={{ base: 'md', md: 'lg' }}
                variant="outline"
                borderColor="#334155"
                borderWidth="1px"
                color="#f1f5f9"
                fontWeight={500}
                px={8}
                bg="transparent"
                fontFamily="var(--font-mono)"
                _hover={{
                  borderColor: '#22d3ee',
                  color: '#22d3ee',
                  bg: 'rgba(34, 211, 238, 0.06)',
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.2s"
              >
                Get In Touch
              </Button>
            </Flex>

            <Flex
              gap={6}
              mt={2}
              css={{ animation: 'fadeInUp 0.8s ease-out 0.6s both' }}
            >
              {/* <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                color="#64748b"
                _hover={{ color: '#22d3ee', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
              >
                <FaGithub size={22} />
              </Link> */}
              {/* <Link
                href="mailto:kallerswith@gmail.com"
                color="#64748b"
                _hover={{ color: '#22d3ee', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
              >
                <FaEnvelope size={22} />
              </Link> */}
            </Flex>
          </VStack>

          <Box
            flex={1}
            display={{ base: 'none', lg: 'flex' }}
            justifyContent="center"
            alignItems="center"
            css={{ animation: 'fadeInRight 0.8s ease-out 0.3s both' }}
          >
            <Box
              w="360px"
              h="360px"
              borderRadius="var(--radius-lg)"
              overflow="hidden"
              border="2px solid"
              borderColor="#1e3a5f"
              boxShadow="0 0 0 1px rgba(34, 211, 238, 0.1), 0 24px 48px rgba(0,0,0,0.4)"
              position="relative"
              css={{
                animation: 'floatImage 5s ease-in-out infinite',
              }}
            >
              <Image
                src={profileImage}
                alt="Profile"
                w="100%"
                h="100%"
                objectFit="cover"
              />
              <Box
                position="absolute"
                inset={0}
                bg="linear-gradient(180deg, transparent 50%, rgba(10, 14, 23, 0.6) 100%)"
                pointerEvents="none"
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
        color="#64748b"
        cursor="pointer"
        onClick={() => scrollToSection('about')}
        transition="all 0.2s"
        zIndex={10}
        display={{ base: 'none', md: 'block' }}
        css={{ animation: 'bounce 2s infinite' }}
        _hover={{ color: '#22d3ee' }}
      >
        <HiArrowDown size={28} />
      </Box>
    </Box>
  )
}

export default Hero
