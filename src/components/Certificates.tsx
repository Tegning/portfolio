import { Box, Heading, Text, SimpleGrid, Button, VStack } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'
import { FiExternalLink } from 'react-icons/fi'

// Vite: glob all PDFs in assets/certificates (relative to this file)
const certModules = import.meta.glob('../assets/certificates/*.pdf', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string | { default: string }>

function getCertificates(): { name: string; url: string }[] {
  return Object.entries(certModules).map(([path, mod]) => {
    const url = typeof mod === 'string' ? mod : (mod?.default ?? path)
    const filename = path.split('/').pop() ?? path
    const name = filename.replace(/\.pdf$/i, '').replace(/\s*-\s*[a-f0-9]+$/i, '').replace(/[-_]/g, ' ')
    return { name, url }
  })
}

const certificates = getCertificates()

function Certificates() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Box
      id="certificates"
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
            / certificates
          </Text>
          <Heading as="h2" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} fontWeight={700} color="#f1f5f9" fontFamily="var(--font-sans)">
            Certificates
          </Heading>
        </VStack>

        {certificates.length === 0 ? (
          <Box textAlign="center" py={12} color="#64748b" fontWeight={500} fontFamily="var(--font-mono)" fontSize="sm">
            No certificates added yet. Add PDF files to <code style={{ color: '#22d3ee' }}>src/assets/certificates/</code> to display them here.
          </Box>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
            {certificates.map((cert, index) => (
              <Box
                key={index}
                bg="#131b2e"
                borderRadius="var(--radius-lg)"
                overflow="hidden"
                border="1px solid"
                borderColor="#1e3a5f"
                _hover={{ borderColor: 'rgba(34, 211, 238, 0.3)' }}
                transition="border-color 0.2s"
              >
                {/* PDF preview */}
                <Box
                  w="100%"
                  h="280px"
                  bg="#1a2540"
                  borderBottom="1px solid"
                  borderColor="#1e3a5f"
                  overflow="hidden"
                >
                  <iframe
                    src={cert.url}
                    title={cert.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                    }}
                  />
                </Box>
                <Box p={4}>
                  <Text
                    fontSize="md"
                    fontWeight={600}
                    color="#f1f5f9"
                    mb={4}
                    fontFamily="var(--font-sans)"
                    lineHeight="tall"
                  >
                    {cert.name}
                  </Text>
                  <Button
                    size="sm"
                    bg="#22d3ee"
                    color="#0a0e17"
                    fontWeight={500}
                    fontFamily="var(--font-mono)"
                    _hover={{ bg: '#67e8f9' }}
                    transition="all 0.2s"
                    onClick={() => window.open(cert.url, '_blank', 'noopener,noreferrer')}
                  >
                    <Box as="span" mr={2} display="inline-flex">
                      <FiExternalLink />
                    </Box>
                    Open full PDF
                  </Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        )}

        <Box
          position="absolute"
          bottom={8}
          left="50%"
          transform="translateX(-50%)"
          color="#64748b"
          _hover={{ color: '#22d3ee' }}
          cursor="pointer"
          onClick={() => scrollToSection('skills')}
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

export default Certificates
