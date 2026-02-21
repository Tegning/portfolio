import { Box, Heading, Text, SimpleGrid, Badge, VStack } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'

function Awards() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }
  const awards = [
    {
      title: 'Gold Medal – World Invention Creativity Olympics 2025',
      organization: 'South Korea',
      year: 'July 2025',
      description: [
        'Competed among 313 teams and 1,000+ competitors from 25 countries.',
        'Presented the finalized AI-based traffic management system with validated real-time deployment.',
        'Assessed on creativity, technical feasibility, practical impact, and clarity of presentation.',
      ],
    },
    {
      title: 'Silver Award – MSEC Forum (Global High School Forum in HINATA 2025)',
      organization: 'Miyazaki, Japan',
      year: 'July 2025',
      description: [
        'Awarded Silver among participants from 7 schools across 4 countries (Japan, Taiwan, Vietnam, Thailand).',
        'Presented an enhanced AI-based traffic system with expanded training datasets and improved recognition optimization.',
        'Open-theme forum aligned with UN SDGs.',
      ],
    },
    {
      title: 'Silver Award – 26th International Elementz Fair',
      organization: 'Singapore',
      year: 'April 2025',
      description: [
        'Awarded Silver among 210 teams from over 80 schools.',
        'Co-researched fabrication of Gd-doped Fe₃O₄@SiO₂ nanoparticles for drug delivery.',
        'Contributed to scientific presentation.',
      ],
    },
    {
      title: 'First Place – Youth Innovator Competition',
      organization: 'Nguyễn Tất Thành Secondary & High School',
      year: 'May 2025',
      description: [
        'Awarded 1 of 2 First Prizes among 16 recognised teams at the 10th Youth Innovator Competition.',
        'Recognised for creative thinking, problem-solving, and application of interdisciplinary knowledge.',
        'Developed and presented the initial prototype of an adaptive traffic management system.',
      ],
    },
  ]

  return (
    <Box
      id="awards"
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
            / awards
          </Text>
          <Heading as="h2" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} fontWeight={700} color="#f1f5f9" fontFamily="var(--font-sans)">
            Awards & Achievements
          </Heading>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          {awards.map((award, index) => (
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
              <Heading as="h3" fontSize="md" mb={2} color="#f1f5f9" fontWeight={600} fontFamily="var(--font-sans)">
                {award.title}
              </Heading>
              <Text fontSize="sm" color="#22d3ee" fontWeight={500} mb={2} fontFamily="var(--font-mono)">
                {award.organization}
              </Text>
              <Badge
                bg="rgba(34, 211, 238, 0.15)"
                color="#22d3ee"
                mb={3}
                px={3}
                py={1}
                borderRadius="var(--radius)"
                fontSize="xs"
                fontWeight={500}
                fontFamily="var(--font-mono)"
              >
                {award.year}
              </Badge>
              <Box as="ul" pl={5} pr={0} style={{ listStyleType: 'disc', listStylePosition: 'outside' }}>
                {award.description.map((point, i) => (
                  <Box as="li" key={i} color="#94a3b8" fontSize="sm" fontWeight={500} lineHeight="tall" mb={2} _last={{ mb: 0 }}>
                    {point}
                  </Box>
                ))}
              </Box>
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
          onClick={() => scrollToSection('projects')}
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

export default Awards
