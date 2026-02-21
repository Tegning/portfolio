import { Box, Heading, Text, Flex, VStack, HStack, Image } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'

function Education() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }
  const education = [
    {
      degree: 'Lower and Upper Secondary School',
      institution: 'Nguyen Tat Thanh Lower and Upper Secondary School',
      period: 'Present',
      specialization: null,
      logo: undefined as string | undefined,
      description: [
        'GPA: Grade 10 — 9.0 | Grade 11 — 9.4 | Semester 1 Grade 12 — 9.4',
        'IELTS: 7.5 Overall',
        'SAT: 1540/1600',
      ],
    },
  ]

  return (
    <Box
      id="education"
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
            / education
          </Text>
          <Heading as="h2" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} fontWeight={700} color="#f1f5f9" fontFamily="var(--font-sans)">
            Education
          </Heading>
        </VStack>
        <VStack align="stretch" gap={6}>
          {education.map((edu, index) => (
            <Box
              key={index}
              bg="#131b2e"
              borderRadius="var(--radius-lg)"
              p={{ base: 6, md: 8 }}
              border="1px solid"
              borderColor="#1e3a5f"
              _hover={{ borderColor: 'rgba(34, 211, 238, 0.3)' }}
              transition="border-color 0.2s"
            >
              <Flex gap={6} align="flex-start">
                {edu.logo && (
                  <Box
                    w="64px"
                    h="64px"
                    borderRadius="var(--radius)"
                    bg="#1a2540"
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    border="1px solid"
                    borderColor="#1e3a5f"
                    p={2}
                    overflow="hidden"
                  >
                    <Image src={edu.logo} alt={`${edu.institution} logo`} w="100%" h="100%" objectFit="contain" />
                  </Box>
                )}
                <VStack align="stretch" flex={1} gap={4}>
                  <Box>
                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={1} color="#f1f5f9" fontWeight={600} fontFamily="var(--font-sans)">
                      {edu.degree}
                    </Heading>
                    <Text fontSize={{ base: 'sm', md: 'md' }} color="#22d3ee" fontWeight={500} fontFamily="var(--font-mono)">
                      {edu.institution}
                    </Text>
                  </Box>
                  <Box bg="#0f1629" p={4} borderRadius="var(--radius)" border="1px solid" borderColor="#1e3a5f">
                    <VStack align="stretch" gap={2}>
                      {edu.specialization && (
                        <HStack>
                          <Text fontWeight={500} color="#64748b" minW="100px" flexShrink={0} fontSize="sm" fontFamily="var(--font-mono)">
                            Specialization:
                          </Text>
                          <Text color="#94a3b8" fontWeight={500} fontSize="sm">{edu.specialization}</Text>
                        </HStack>
                      )}
                      <HStack>
                        <Text fontWeight={500} color="#64748b" minW="100px" flexShrink={0} fontSize="sm" fontFamily="var(--font-mono)">
                          Period:
                        </Text>
                        <Text color="#94a3b8" fontWeight={500} fontSize="sm">{edu.period}</Text>
                      </HStack>
                    </VStack>
                  </Box>
                  {edu.description && edu.description.length > 0 && (
                    <Box pt={4} borderTop="1px solid" borderColor="#1e3a5f">
                      <VStack align="stretch" gap={2}>
                        {edu.description.map((item, i) => (
                          <Box key={i} color="#94a3b8" pl={5} position="relative" fontSize="sm" fontWeight={500}>
                            <Box as="span" position="absolute" left={0} color="#22d3ee" fontFamily="var(--font-mono)">
                              $
                            </Box>
                            {item}
                          </Box>
                        ))}
                      </VStack>
                    </Box>
                  )}
                </VStack>
              </Flex>
            </Box>
          ))}
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
        onClick={() => scrollToSection('experience')}
        transition="color 0.2s"
        zIndex={2}
        display={{ base: 'none', md: 'block' }}
      >
        <HiArrowDown size={28} />
      </Box>
    </Box>
  )
}

export default Education
