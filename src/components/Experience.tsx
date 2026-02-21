import { Box, Heading, Text, VStack, Badge, HStack } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'

function Experience() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }
  const experiences = [
    {
      title: 'Research: AI-Based Traffic Management System',
      company: 'The Application of Computer Vision technology to optimize traffic counters in Vietnam',
      period: 'Research Project',
      description: [
        'Developed a cost-efficient and highly optimized AI-based traffic management system, utilising NVIDIA Jetson Nano for real-time edge deployment, YOLOv10 for vehicle detection and driver drowsiness monitoring.',
        'Designed the F-index, a lightweight temporal aggregation algorithm for fatigue assessment; benchmarked its performance against EAR, CNN, and CNN-LSTM approaches.',
        'Refined and evaluated models iteratively, achieving 94.4% vehicle recognition accuracy and 91.8% face-based drowsiness detection accuracy.',
        'Built and validated an end-to-end prototype by developing traffic simulation environments in Unity 3D.',
      ]
    },
    {
      title: 'Leader in AI-Based Traffic Management System Research',
      company: 'Team of 5 · System architecture, model development, experimental validation',
      period: 'Leadership',
      description: [
        'Led a team of 5 members in system architecture design, model development, and experimental validation.',
        'Defined technical direction and delegated responsibilities across simulation development, model training, and algorithm refinement.',
        'Coordinated iterative testing and performance optimization to improve system stability and accuracy.',
        'Oversaw integration between traffic simulation and detection modules to ensure cohesive system functionality.',
      ],
    },
  ]

  return (
    <Box
      id="experience"
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
            / research_leadership
          </Text>
          <Heading as="h2" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} fontWeight={700} color="#f1f5f9" fontFamily="var(--font-sans)">
            Research & Leadership
          </Heading>
        </VStack>
        <Box position="relative" maxW="900px" mx="auto">
          <Box
            position="absolute"
            left="50%"
            top={0}
            bottom={0}
            w="2px"
            transform="translateX(-50%)"
            bg="#1e3a5f"
            display={{ base: 'none', md: 'block' }}
          />
          <VStack align="stretch" gap={8}>
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0
              return (
                <Box
                  key={index}
                  position="relative"
                  display="flex"
                  alignItems="center"
                  flexDirection={{ base: 'column', md: isEven ? 'row' : 'row-reverse' }}
                  gap={{ base: 4, md: 6 }}
                >
                  <Box
                    flex={1}
                    maxW={{ base: '100%', md: '48%' }}
                    bg="#131b2e"
                    p={{ base: 6, md: 7 }}
                    borderRadius="var(--radius-lg)"
                    border="1px solid"
                    borderColor="#1e3a5f"
                    _hover={{ borderColor: 'rgba(34, 211, 238, 0.3)' }}
                    transition="border-color 0.2s"
                  >
                    <HStack mb={3} flexWrap="wrap" gap={2}>
                      <Heading as="h3" fontSize={{ base: 'md', md: 'lg' }} fontWeight={600} color="#f1f5f9" fontFamily="var(--font-sans)">
                        {exp.title}
                      </Heading>
                      <Badge
                        bg="rgba(34, 211, 238, 0.15)"
                        color="#22d3ee"
                        px={3}
                        py={1}
                        borderRadius="var(--radius)"
                        fontSize="xs"
                        fontWeight={500}
                        fontFamily="var(--font-mono)"
                      >
                        {exp.period}
                      </Badge>
                    </HStack>
                    <Text fontSize="sm" color="#22d3ee" mb={4} fontWeight={500} fontFamily="var(--font-mono)">
                      {exp.company}
                    </Text>
                    <VStack align="stretch" gap={2} mt={3}>
                      {exp.description?.map((item, i) => (
                        <Box
                          key={i}
                          color="#94a3b8"
                          pl={5}
                          position="relative"
                          fontSize="sm"
                          lineHeight="tall"
                          fontWeight={500}
                        >
                          <Box as="span" position="absolute" left={0} color="#22d3ee" fontFamily="var(--font-mono)">
                            •
                          </Box>
                          {item}
                        </Box>
                      ))}
                    </VStack>
                  </Box>
                  <Box
                    position={{ base: 'relative', md: 'absolute' }}
                    left={{ base: 'auto', md: '50%' }}
                    transform={{ base: 'none', md: 'translateX(-50%)' }}
                    w="12px"
                    h="12px"
                    borderRadius="full"
                    bg="#22d3ee"
                    border="3px solid"
                    borderColor="#0f1629"
                    zIndex={2}
                    flexShrink={0}
                    display={{ base: 'none', md: 'block' }}
                  />
                  <Box flex={{ base: '0', md: '1' }} maxW={{ base: '0', md: '48%' }} display={{ base: 'none', md: 'block' }} />
                </Box>
              )
            })}
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
          onClick={() => scrollToSection('awards')}
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

export default Experience
