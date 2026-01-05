import { Box, Heading, Text, Link, HStack, SimpleGrid } from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'

function Videos() {
  const videos = [
    {
      id: 1,
      title: 'Tự học IT như nào hiệu quả nhất?',
      description: 'Với vô số các nguồn tài nguyên học IT từ miễn phí cho tới mất phí, làm sao để chúng ta có thể quyết định được cách học nào là hiệu quả cho bản thân mình nhất?',
      videoId: '1Whd4I0b1u4',
      thumbnail: 'https://youtu.be/1Whd4I0b1u4?si=NyZBJaONBFr6PlGV',
    },
    {
      id: 2,
      title: 'Tutorial Video 2',
      description: 'Building scalable data pipelines with modern tools',
      videoId: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    },
    {
      id: 3,
      title: 'Tutorial Video 3',
      description: 'Advanced analytics and visualization techniques',
      videoId: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    },
    {
      id: 4,
      title: 'Tutorial Video 4',
      description: 'Machine Learning fundamentals for data engineers',
      videoId: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    },
  ]

  const getEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`
  }

  return (
    <Box
      id="videos"
      minH="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(180deg, #FFF3E0 0%, white 100%)"
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
            Educational Videos
          </Heading>
          <Box
            w="80px"
            h="4px"
            bgGradient="linear(90deg, #667eea, #764ba2)"
            mx="auto"
            borderRadius="full"
          />
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
          {videos.map((video) => (
            <Box
              key={video.id}
              bg="white"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
              border="1px solid"
              borderColor="gray.100"
              _hover={{
                transform: 'translateY(-8px)',
                boxShadow: '0 12px 40px rgba(102, 126, 234, 0.15)',
                borderColor: 'purple.200',
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <Box
                position="relative"
                paddingBottom="56.25%"
                height="0"
                overflow="hidden"
                bg="gray.100"
              >
                <Box
                  as="iframe"
                  position="absolute"
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                  src={getEmbedUrl(video.videoId)}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Box>
              <Box p={6}>
                <Heading as="h3" fontSize="lg" mb={3} color="gray.900" fontWeight={700}>
                  {video.title}
                </Heading>
                <Text color="gray.600" mb={4} lineHeight="tall" fontSize="sm">
                  {video.description}
                </Text>
                <Link
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="purple.600"
                  fontWeight={600}
                  _hover={{
                    color: 'purple.700',
                    textDecoration: 'underline',
                  }}
                  display="flex"
                  alignItems="center"
                  gap={2}
                  fontSize="sm"
                >
                  Watch on YouTube <FiExternalLink />
                </Link>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default Videos

