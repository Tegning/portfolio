import { Box, Heading, Text, SimpleGrid, Badge, HStack, VStack, Button } from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'
import { HiArrowDown } from 'react-icons/hi'

function Projects() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }
  const projects = [
    {
      title: 'AI-Based Traffic Management System',
      description: 'Cost-efficient AI system for optimizing traffic counters in Vietnam. Real-time edge deployment on NVIDIA Jetson Nano; YOLOv10 for vehicle detection and driver drowsiness monitoring. F-index algorithm for fatigue assessment; 94.4% vehicle recognition and 91.8% drowsiness detection. End-to-end prototype with Unity 3D traffic simulation.',
      technologies: ['Computer Vision', 'YOLOv10', 'NVIDIA Jetson Nano', 'Unity 3D', 'Python', 'CNN', 'CNN-LSTM'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Gd-doped Fe₃O₄@SiO₂ Nanoparticles for Drug Delivery',
      description: 'Co-researched fabrication of Gd-doped Fe₃O₄@SiO₂ nanoparticles for drug delivery. Contributed to scientific presentation at the 26th International Elementz Fair, Singapore (Silver Award).',
      technologies: ['Materials Science', 'Nanoparticles', 'Drug Delivery', 'Research'],
      github: '#',
      demo: '#',
    },
  ]

  return (
    <Box
      id="projects"
      minH="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#0f1629"
      py={{ base: 16, md: 24 }}
      px={0}
      position="relative"
    >
      <Box w="100%" px={{ base: 4, md: 8, lg: 12 }} maxW="1200px" mx="auto">
        <VStack gap={2} mb={10} textAlign="center">
          <Text fontSize="xs" fontWeight={500} color="#22d3ee" letterSpacing="wider" fontFamily="var(--font-mono)">
            / projects
          </Text>
          <Heading as="h2" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} fontWeight={700} color="#f1f5f9" fontFamily="var(--font-sans)">
            Research & Projects
          </Heading>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          {projects.map((project, index) => (
            <Box
              key={index}
              bg="#131b2e"
              borderRadius="var(--radius-lg)"
              p={6}
              border="1px solid"
              borderColor="#1e3a5f"
              _hover={{ borderColor: 'rgba(34, 211, 238, 0.3)' }}
              transition="border-color 0.2s"
            >
              <Heading as="h3" fontSize="lg" mb={3} color="#f1f5f9" fontWeight={600} fontFamily="var(--font-sans)">
                {project.title}
              </Heading>
              <Text color="#94a3b8" mb={4} lineHeight="tall" fontSize="sm" fontWeight={500}>
                {project.description}
              </Text>
              <HStack flexWrap="wrap" gap={2} mb={5}>
                {project.technologies.map((tech, i) => (
                  <Badge
                    key={i}
                    bg="rgba(34, 211, 238, 0.12)"
                    color="#67e8f9"
                    px={2.5}
                    py={1}
                    borderRadius="var(--radius)"
                    fontSize="xs"
                    fontWeight={500}
                    fontFamily="var(--font-mono)"
                  >
                    {tech}
                  </Badge>
                ))}
              </HStack>
              <HStack gap={3}>
                <Button
                  onClick={() => project.github !== '#' && window.open(project.github, '_blank')}
                  size="sm"
                  variant="outline"
                  borderColor="#1e3a5f"
                  color="#94a3b8"
                  fontWeight={500}
                  fontFamily="var(--font-mono)"
                  _hover={{ borderColor: '#22d3ee', color: '#22d3ee' }}
                  transition="all 0.2s"
                >
                  <HStack gap={2}>
                    <Text>GitHub</Text>
                    <FiExternalLink size={12} />
                  </HStack>
                </Button>
                <Button
                  onClick={() => project.demo !== '#' && window.open(project.demo, '_blank')}
                  size="sm"
                  bg="#22d3ee"
                  color="#0a0e17"
                  fontWeight={500}
                  fontFamily="var(--font-mono)"
                  _hover={{ bg: '#67e8f9' }}
                  transition="all 0.2s"
                >
                  <HStack gap={2}>
                    <Text>Demo</Text>
                    <FiExternalLink size={12} />
                  </HStack>
                </Button>
              </HStack>
            </Box>
          ))}
        </SimpleGrid>

        <Box
          position="absolute"
          bottom={8}
          left="50%"
          transform="translateX(-50%)"
          color="#64748b"
          _hover={{ color: '#22d3ee' }}
          cursor="pointer"
          onClick={() => scrollToSection('certificates')}
          transition="color 0.2s"
          zIndex={2}
          display={{ base: 'none', md: 'block' }}
        >
          <HiArrowDown size={28} />
        </Box>
      </Box>
    </Box>
  )
}

export default Projects
