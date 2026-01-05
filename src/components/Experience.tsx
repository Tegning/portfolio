import { Box, Heading, Text, VStack, Badge, HStack } from '@chakra-ui/react'

function Experience() {
  const experiences = [
    {
      title: 'Data Engineer',
      company: 'Torilab Inc.',
      period: '2025 - Present',
      description: [
        'Supported BI team in building over 20 data models across 5 different applications and present actionable insights to company executives and business leaders on a biweekly basis',
        'Designed and maintained data pipelines and warehouses within Google Cloud Platform to collect data from various sources that power the company\'s analytics ecosystem and enable decision-making dashboard creation in Looker',
        'Collaborated closely with cross-functional teams including Mobile, Frontend, Backend, Marketing, Sales, Product and Finance to ensure data quality, support self-service analytics, and drive data-driven business growth',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Rakuten Asia Pte Ltd',
      period: '2023 - 2025',
      description: [
        'Worked under Global Ad Technology Supervisory Department to manage Ad Item Master, a key service which stores, delivers, tracks and reports highly critical, revenue-generating ads for hundreds of millions of Rakuten Group\'s Ichiba app users as well as merchants, one of Japan\'s largest online retail marketplaces',
        'Administered highly available Couchbase Enterprise clusters and Hive data warehouses acting as key sources of 500 million ad items, shops and campaigns across different data centers to enable real-time ad delivery as well as analytical and reporting capabilities for all downstream ad users',
        'Developed and maintained highly scalable, millisecond-latency, cached, containerised and load-balanced backend systems and APIs on top of Couchbase and Redis clusters using Spring Framework, Kubernetes, Kafka and Hive to serve super targeted ads and accurately track user clicks and impressions for merchant charging',
      ],
    },
    {
      title: 'Data Engineer',
      company: 'Sea Limited',
      period: '2021 - 2023',
      description: [
        'Worked under Data Platform team to develop batch and real-time data ingestion pipelines to support downstream Finance users in data modelling and financial reporting for Garena, Sea Group\'s gaming arm',
        'Assisted Finance team in building efficient data models to report key financial metrics for Shopee, Sea Group\'s e-commerce arm, by researching into Spark SQL internals to optimise heavy Spark applications',
        'Built a fully automated, user-centric and web-based data ingestion portal for non-technical Finance users to ingest data from various sources of their needs such as relational databases, Google Sheets, CSV and Kafka into HDFS, hence removed the need for manual ticket requests and significantly boosted productivity',
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
            Professional Experience
          </Heading>
          <Box
            w="80px"
            h="4px"
            bgGradient="linear(90deg, #667eea, #764ba2)"
            mx="auto"
            borderRadius="full"
          />
        </Box>
        <Box position="relative" pl={{ base: 6, md: 10 }}>
          <Box
            position="absolute"
            left={0}
            top={0}
            bottom={0}
            w="4px"
            bgGradient="linear(180deg, #667eea 0%, #764ba2 100%)"
            borderRadius="full"
            boxShadow="0 0 10px rgba(102, 126, 234, 0.3)"
          />
          <VStack align="stretch" gap={10}>
            {experiences.map((exp, index) => (
              <Box key={index} position="relative" pl={{ base: 10, md: 14 }}>
                <Box
                  position="absolute"
                  left={{ base: '-1rem', md: '-1.75rem' }}
                  top="1rem"
                  w={{ base: '28px', md: '32px' }}
                  h={{ base: '28px', md: '32px' }}
                  borderRadius="full"
                  bgGradient="linear(135deg, #667eea, #764ba2)"
                  border="5px solid white"
                  boxShadow="0 0 0 5px rgba(102, 126, 234, 0.3), 0 6px 20px rgba(102, 126, 234, 0.4)"
                  zIndex={2}
                />
                <Box
                  bg="white"
                  p={{ base: 6, md: 8 }}
                  borderRadius="xl"
                  boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
                  border="1px solid"
                  borderColor="gray.100"
                  _hover={{
                    transform: 'translateX(8px)',
                    boxShadow: '0 8px 30px rgba(102, 126, 234, 0.15)',
                    borderColor: 'purple.200',
                  }}
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                >
                  <HStack mb={3} flexWrap="wrap" gap={2}>
                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} fontWeight={700} color="gray.900">
                      {exp.title}
                    </Heading>
                    <Badge
                      bgGradient="linear(135deg, #667eea, #764ba2)"
                      color="white"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="xs"
                      fontWeight={600}
                    >
                      {exp.period}
                    </Badge>
                  </HStack>
                  <Text fontSize={{ base: 'md', md: 'lg' }} color="purple.600" mb={4} fontWeight={600}>
                    {exp.company}
                  </Text>
                  <VStack align="stretch" gap={3} mt={4}>
                    {exp.description.map((item, i) => (
                      <Box
                        key={i}
                        color="gray.700"
                        pl={6}
                        position="relative"
                        fontSize={{ base: 'sm', md: 'md' }}
                        lineHeight="tall"
                      >
                        <Box
                          as="span"
                          position="absolute"
                          left={0}
                          color="purple.500"
                          fontWeight="bold"
                          fontSize="lg"
                        >
                          •
                        </Box>
                        {item}
                      </Box>
                    ))}
                  </VStack>
                </Box>
              </Box>
            ))}
          </VStack>
        </Box>
      </Box>
    </Box>
  )
}

export default Experience

