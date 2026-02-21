import { Box, Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'

function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Box
      id="about"
      minH="100vh"
      w="100%"
      position="relative"
      overflow="hidden"
      bg="#0f1629"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={{ base: 16, md: 24 }}
      px={0}
    >
      <Box w="100%" px={{ base: 4, md: 8, lg: 12 }} position="relative" zIndex={1}>
        <VStack align="stretch" gap={8}>
          <VStack gap={2} mb={2}>
            <Text
              fontSize="xs"
              fontWeight={500}
              color="#22d3ee"
              letterSpacing="wider"
              fontFamily="var(--font-mono)"
            >
              / about
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight={700}
              textAlign="center"
              color="#f1f5f9"
              letterSpacing="tight"
              fontFamily="var(--font-sans)"
            >
              About Me
            </Heading>
          </VStack>

          <VStack gap={4} align="stretch">
            <Box
              bg="#131b2e"
              p={{ base: 6, md: 8 }}
              borderRadius="var(--radius-lg)"
              border="1px solid"
              borderColor="#1e3a5f"
              _hover={{ borderColor: 'rgba(34, 211, 238, 0.3)' }}
              transition="border-color 0.2s"
            >
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="#94a3b8"
                lineHeight="tall"
                textAlign="center"
              >
                I focus on <Text as="span" fontWeight={600} color="#22d3ee">Computer Vision and AI</Text> for real-world impact. I developed a cost-efficient AI-based traffic management system using <Text as="span" fontWeight={600} color="#67e8f9">YOLOv10 and NVIDIA Jetson Nano</Text>, with vehicle detection and driver drowsiness monitoring, achieving 94.4% vehicle recognition and 91.8% drowsiness detection accuracy.
              </Text>
            </Box>
            <Box
              bg="#131b2e"
              p={{ base: 6, md: 8 }}
              borderRadius="var(--radius-lg)"
              border="1px solid"
              borderColor="#1e3a5f"
              _hover={{ borderColor: 'rgba(34, 211, 238, 0.3)' }}
              transition="border-color 0.2s"
            >
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="#94a3b8"
                lineHeight="tall"
                textAlign="center"
              >
                I led a team of 5 in research and system design to compete in international innovation competitions, winning <Text as="span" fontWeight={600} color="#fbbf24">Gold Award at the World Invention Creativity Olympics 2025</Text> in South Korea and Silver at MSEC Forum Japan and International Elementz Fair Singapore. I also volunteer and take part in robotics competitions and community engagement projects.
              </Text>
            </Box>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mt={4} w="100%">
            <Box
              bg="#131b2e"
              p={{ base: 6, md: 8 }}
              borderRadius="var(--radius-lg)"
              textAlign="center"
              border="1px solid"
              borderColor="#1e3a5f"
              _hover={{ borderColor: 'rgba(251, 191, 36, 0.4)' }}
              transition="border-color 0.2s"
            >
              <Box h="3px" bg="#fbbf24" borderRadius="full" w="40px" mx="auto" mb={4} />
              <Heading as="h3" fontSize={{ base: '2xl', md: '3xl' }} fontWeight={700} color="#fbbf24" mb={2} fontFamily="var(--font-mono)">
                Gold
              </Heading>
              <Text fontSize="sm" color="#94a3b8" fontWeight={500}>
                World Invention Creativity Olympics 2025, South Korea
              </Text>
            </Box>
            <Box
              bg="#131b2e"
              p={{ base: 6, md: 8 }}
              borderRadius="var(--radius-lg)"
              textAlign="center"
              border="1px solid"
              borderColor="#1e3a5f"
              _hover={{ borderColor: 'rgba(34, 211, 238, 0.4)' }}
              transition="border-color 0.2s"
            >
              <Box h="3px" bg="#22d3ee" borderRadius="full" w="40px" mx="auto" mb={4} />
              <Heading as="h3" fontSize={{ base: '2xl', md: '3xl' }} fontWeight={700} color="#22d3ee" mb={2} fontFamily="var(--font-mono)">
                94.4%
              </Heading>
              <Text fontSize="sm" color="#94a3b8" fontWeight={500}>
                Vehicle Recognition Accuracy (YOLOv10)
              </Text>
            </Box>
            <Box
              bg="#131b2e"
              p={{ base: 6, md: 8 }}
              borderRadius="var(--radius-lg)"
              textAlign="center"
              border="1px solid"
              borderColor="#1e3a5f"
              _hover={{ borderColor: 'rgba(34, 211, 238, 0.4)' }}
              transition="border-color 0.2s"
            >
              <Box h="3px" bg="#22d3ee" borderRadius="full" w="40px" mx="auto" mb={4} />
              <Heading as="h3" fontSize={{ base: '2xl', md: '3xl' }} fontWeight={700} color="#22d3ee" mb={2} fontFamily="var(--font-mono)">
                91.8%
              </Heading>
              <Text fontSize="sm" color="#94a3b8" fontWeight={500}>
                Drowsiness Detection Accuracy (Face-based)
              </Text>
            </Box>
          </SimpleGrid>
        </VStack>
      </Box>

      <Box
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        color="#64748b"
        _hover={{ color: '#22d3ee' }}
        cursor="pointer"
        onClick={() => scrollToSection('education')}
        transition="color 0.2s"
        zIndex={2}
        display={{ base: 'none', md: 'block' }}
      >
        <HiArrowDown size={28} />
      </Box>
    </Box>
  )
}

export default About
