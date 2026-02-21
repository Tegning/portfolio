import { Box, Heading, Text, SimpleGrid, Badge, VStack, Flex } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'

function Skills() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const badgeVariants = [
    { bg: 'rgba(34, 211, 238, 0.15)', color: '#22d3ee' },
    { bg: 'rgba(251, 191, 36, 0.12)', color: '#fbbf24' },
    { bg: 'rgba(52, 211, 153, 0.12)', color: '#34d399' },
    { bg: 'rgba(248, 113, 113, 0.12)', color: '#f87171' },
    { bg: 'rgba(167, 139, 250, 0.12)', color: '#a78bfa' },
  ]
  const getBadgeStyle = (i: number) => badgeVariants[i % badgeVariants.length]

  const skillCategories = [
    {
      category: 'Academic',
      skills: ['IELTS 7.5', 'SAT 1540/1600', 'Research & Presentation', 'Scientific Writing'],
    },
    {
      category: 'Computer Vision & AI',
      skills: ['YOLOv10', 'Object Detection', 'Face Detection', 'Drowsiness Detection', 'CNN', 'CNN-LSTM', 'PyTorch', 'TensorFlow', 'Scikit-learn'],
    },
    {
      category: 'Edge Computing & Deployment',
      skills: ['NVIDIA Jetson Nano', 'Real-time Inference', 'Edge Deployment', 'Model Optimization'],
    },
    {
      category: 'Simulation & Tools',
      skills: ['Unity 3D', 'Traffic Simulation', 'Python', 'Algorithm Design', 'F-index', 'EAR', 'Temporal Aggregation'],
    },
    {
      category: 'Research & Leadership',
      skills: ['System Architecture', 'Team Leadership', 'Experimental Validation', 'Iterative Development', 'Benchmarking', 'Cross-disciplinary Research'],
    }
  ]

  return (
    <Box
      id="skills"
      minH="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#0a0e17"
      py={{ base: 16, md: 24 }}
      px={0}
      position="relative"
    >
      <Box w="100%" px={{ base: 4, md: 8, lg: 12 }} maxW="1200px" mx="auto">
        <VStack gap={2} mb={10} textAlign="center">
          <Text fontSize="xs" fontWeight={500} color="#22d3ee" letterSpacing="wider" fontFamily="var(--font-mono)">
            / skills
          </Text>
          <Heading as="h2" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} fontWeight={700} color="#f1f5f9" fontFamily="var(--font-sans)">
            Skills & Competencies
          </Heading>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {skillCategories.map((category, index) => (
            <Box
              key={index}
              bg="#131b2e"
              p={6}
              borderRadius="var(--radius-lg)"
              border="1px solid"
              borderColor="#1e3a5f"
              _hover={{ borderColor: 'rgba(34, 211, 238, 0.3)' }}
              transition="border-color 0.2s"
            >
              <Heading
                as="h3"
                fontSize="md"
                mb={5}
                color="#f1f5f9"
                fontWeight={600}
                pb={3}
                borderBottom="1px solid"
                borderColor="#1e3a5f"
                fontFamily="var(--font-mono)"
              >
                {category.category}
              </Heading>
              <Flex gap={2} flexWrap="wrap" align="flex-start">
                {category.skills.map((skill, i) => {
                  const style = getBadgeStyle(i)
                  return (
                    <Badge
                      key={i}
                      bg={style.bg}
                      color={style.color}
                      px={2.5}
                      py={1}
                      borderRadius="var(--radius)"
                      fontSize="xs"
                      fontWeight={500}
                      fontFamily="var(--font-mono)"
                      textTransform="none"
                    >
                      {skill}
                    </Badge>
                  )
                })}
              </Flex>
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
          onClick={() => scrollToSection('contact')}
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

export default Skills
