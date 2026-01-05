import { Box, Heading, SimpleGrid, Badge, VStack } from '@chakra-ui/react'

function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Vue.js', 'TypeScript', 'HTML/CSS', 'JavaScript', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Python', 'Express.js', 'REST APIs', 'GraphQL', 'MongoDB'],
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack'],
    },
  ]

  return (
    <Box
      id="skills"
      minH="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(180deg, white 0%, gray.50 100%)"
      py={{ base: 16, md: 24 }}
      px={0}
      position="relative"
    >
      <Box w="100%" px={{ base: 4, md: 8, lg: 12 }} maxW="1200px" mx="auto">
        <Box textAlign="center" mb={12}>
          <Heading
            as="h2"
            fontSize={{ base: '4xl', md: '5xl' }}
            fontWeight={800}
            color="gray.900"
            mb={3}
            letterSpacing="tight"
          >
            Technical Skills
          </Heading>
          <Box
            w="80px"
            h="4px"
            bgGradient="linear(90deg, #667eea, #764ba2)"
            mx="auto"
            borderRadius="full"
          />
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
          {skillCategories.map((category, index) => (
            <Box
              key={index}
              bg="white"
              p={8}
              borderRadius="2xl"
              boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
              border="1px solid"
              borderColor="gray.100"
              _hover={{
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 30px rgba(102, 126, 234, 0.15)',
                borderColor: 'purple.200',
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <Heading
                as="h3"
                fontSize="lg"
                mb={6}
                color="gray.900"
                fontWeight={700}
                pb={3}
                borderBottom="2px solid"
                borderColor="purple.100"
              >
                {category.category}
              </Heading>
              <VStack align="stretch" gap={3}>
                {category.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    bg="purple.50"
                    color="purple.700"
                    px={4}
                    py={2.5}
                    borderRadius="lg"
                    fontSize="sm"
                    textAlign="center"
                    fontWeight={600}
                    _hover={{
                      bg: 'purple.100',
                      transform: 'scale(1.02)',
                    }}
                    transition="all 0.2s"
                  >
                    {skill}
                  </Badge>
                ))}
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default Skills

