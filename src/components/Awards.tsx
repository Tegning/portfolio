import { Box, Heading, Text, SimpleGrid, Badge, Image } from '@chakra-ui/react'
import saLogo from '../assets/sa.png'
import nusLogo from '../assets/nus.svg'

function Awards() {
  const awards = [
    {
      title: 'ASEAN Secondary Scholarship',
      organization: 'Saint Andrew\'s Junior College',
      year: '2014 - 2018',
      description: 'Full-ride scholarship for 4 years of secondary and junior college education',
      logo: saLogo,
      icon: '⭐',
    },
    {
      title: 'Jacob Ballas Awards for Outstanding Performance',
      organization: 'Saint Andrew\'s Junior College',
      year: '2018',
      description: 'Straight A\'s across 6 subjects in GCE A-Level Examination',
      logo: saLogo,
      icon: '🏅',
    },
    {
      title: 'ASEAN Undergraduate Scholarship',
      organization: 'National University of Singapore',
      year: '2018 - 2022',
      description: 'Full-ride scholarship for 4 years of undergraduate study',
      logo: nusLogo,
      icon: '🎓',
    },
    {
      title: '1st prize winning team | Healthcare track | AIxImpact Case Competition',
      organization: 'QuantumBlack, a McKinsey company',
      year: '2022',
      description: 'Best Project award within the Healthcare track of AIxImpact Case Competition',
      logo: nusLogo,
      icon: '⭐',
    }
  ]

  return (
    <Box
      id="awards"
      minH="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="white"
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
            Awards & Achievements
          </Heading>
          <Box
            w="80px"
            h="4px"
            bgGradient="linear(90deg, #667eea, #764ba2)"
            mx="auto"
            borderRadius="full"
          />
        </Box>
        <Box position="relative">
          {/* Timeline line for Awards */}
          <Box
            position="absolute"
            left="50%"
            top={0}
            bottom={0}
            w="4px"
            transform="translateX(-50%)"
            bgGradient="linear(180deg, #667eea 0%, #764ba2 100%)"
            borderRadius="full"
            boxShadow="0 0 10px rgba(102, 126, 234, 0.3)"
            display={{ base: 'none', md: 'block' }}
          />
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} position="relative">
            {awards.map((award, index) => (
              <Box
                key={index}
                bg="white"
                borderRadius="2xl"
                p={8}
                boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
                border="1px solid"
                borderColor="gray.100"
                textAlign="center"
                position="relative"
                overflow="hidden"
                _hover={{
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(102, 126, 234, 0.15)',
                  borderColor: 'purple.200',
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  h="4px"
                  bgGradient="linear(90deg, #667eea, #764ba2)"
                />
                {/* Timeline dot */}
                <Box
                  position="absolute"
                  top={{ base: '-16px', md: '-20px' }}
                  left="50%"
                  transform="translateX(-50%)"
                  w={{ base: '32px', md: '36px' }}
                  h={{ base: '32px', md: '36px' }}
                  borderRadius="full"
                  bgGradient="linear(135deg, #667eea, #764ba2)"
                  border="5px solid white"
                  boxShadow="0 0 0 5px rgba(102, 126, 234, 0.3), 0 6px 20px rgba(102, 126, 234, 0.4)"
                  zIndex={2}
                  display={{ base: 'none', md: 'block' }}
                />
                <Box
                  w="90px"
                  h="90px"
                  borderRadius="full"
                  bg="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  mb={6}
                  boxShadow="0 8px 24px rgba(102, 126, 234, 0.3)"
                  border="3px solid"
                  borderColor="purple.100"
                  p={3}
                  position="relative"
                  overflow="hidden"
                >
                  <Image
                    src={award.logo}
                    alt={`${award.organization} logo`}
                    w="100%"
                    h="100%"
                    objectFit="contain"
                  />
                </Box>
                <Heading as="h3" fontSize="lg" mb={3} color="gray.900" fontWeight={700}>
                  {award.title}
                </Heading>
                <Text fontSize="md" color="purple.600" fontWeight={600} mb={3}>
                  {award.organization}
                </Text>
                <Badge
                  bgGradient="linear(135deg, #667eea, #764ba2)"
                  color="white"
                  mb={4}
                  px={4}
                  py={1.5}
                  borderRadius="full"
                  fontSize="xs"
                  fontWeight={600}
                >
                  {award.year}
                </Badge>
                <Text color="gray.600" lineHeight="tall" fontSize="sm">
                  {award.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  )
}

export default Awards

