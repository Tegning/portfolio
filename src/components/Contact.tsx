import { useState } from 'react'
import { Box, Heading, Text, VStack, HStack, Link, Button, Input, Textarea } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`
  }

  const inputStyles = {
    bg: '#131b2e',
    borderColor: '#1e3a5f',
    color: '#f1f5f9',
    _placeholder: { color: '#64748b' },
    _hover: { borderColor: 'rgba(34, 211, 238, 0.3)' },
    _focus: { borderColor: '#22d3ee', boxShadow: '0 0 0 1px rgba(34, 211, 238, 0.3)' },
  }

  return (
    <Box
      id="contact"
      minH="100vh"
      w="100%"
      position="relative"
      overflow="hidden"
      bg="#0f1629"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={{ base: 16, md: 24 }}
      px={0}
    >
      <Box w="100%" px={{ base: 4, md: 8, lg: 12 }} position="relative" zIndex={1} maxW="1200px" mx="auto">
        <VStack align="stretch" gap={8}>
          <VStack gap={2} mb={2} textAlign="center">
            <Text fontSize="xs" fontWeight={500} color="#22d3ee" letterSpacing="wider" fontFamily="var(--font-mono)">
              / contact
            </Text>
            <Heading as="h2" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} fontWeight={700} color="#f1f5f9" fontFamily="var(--font-sans)">
              Contact Me
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color="#94a3b8" maxW="560px" mx="auto" lineHeight="tall" fontWeight={500}>
              I'm open to discussing research collaborations, innovation competitions, or opportunities in AI and computer vision.
            </Text>
          </VStack>

          <Box
            bg="#131b2e"
            p={{ base: 6, md: 10 }}
            borderRadius="var(--radius-lg)"
            border="1px solid"
            borderColor="#1e3a5f"
            maxW="700px"
            mx="auto"
            w="100%"
            _hover={{ borderColor: 'rgba(34, 211, 238, 0.2)' }}
            transition="border-color 0.2s"
          >
            <form onSubmit={handleSubmit}>
              <VStack gap={5} align="stretch">
                <HStack gap={4} flexDir={{ base: 'column', md: 'row' }}>
                  <Box flex={1} w="100%">
                    <Text fontSize="xs" fontWeight={500} color="#94a3b8" mb={2} fontFamily="var(--font-mono)">
                      Name *
                    </Text>
                    <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required {...inputStyles} />
                  </Box>
                  <Box flex={1} w="100%">
                    <Text fontSize="xs" fontWeight={500} color="#94a3b8" mb={2} fontFamily="var(--font-mono)">
                      Email *
                    </Text>
                    <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required {...inputStyles} />
                  </Box>
                </HStack>
                <Box>
                  <Text fontSize="xs" fontWeight={500} color="#94a3b8" mb={2} fontFamily="var(--font-mono)">
                    Subject
                  </Text>
                  <Input name="subject" value={formData.subject} onChange={handleChange} placeholder="What's this about?" {...inputStyles} />
                </Box>
                <Box>
                  <Text fontSize="xs" fontWeight={500} color="#94a3b8" mb={2} fontFamily="var(--font-mono)">
                    Message *
                  </Text>
                  <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project or just say hello!" required rows={5} resize="vertical" {...inputStyles} />
                </Box>
                <Button
                  type="submit"
                  size="md"
                  w="100%"
                  bg="#22d3ee"
                  color="#0a0e17"
                  fontWeight={600}
                  fontFamily="var(--font-mono)"
                  _hover={{ bg: '#67e8f9' }}
                  transition="all 0.2s"
                >
                  Send Message
                </Button>
              </VStack>
            </form>

            <Box mt={8} pt={8} borderTop="1px solid" borderColor="#1e3a5f">
              <Text fontSize="sm" fontWeight={500} color="#94a3b8" mb={4} textAlign="center" fontFamily="var(--font-mono)">
                Or connect with me
              </Text>
              <HStack gap={5} justify="center" flexWrap="wrap">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: 'none' }}>
                  <Box
                    w="44px"
                    h="44px"
                    borderRadius="var(--radius)"
                    bg="#1a2540"
                    border="1px solid"
                    borderColor="#1e3a5f"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    _hover={{ borderColor: '#22d3ee', color: '#22d3ee' }}
                    transition="all 0.2s"
                    css={{ '& svg': { color: '#94a3b8', transition: 'color 0.2s' }, '&:hover svg': { color: '#22d3ee' } }}
                  >
                    <FaGithub size={20} />
                  </Box>
                </Link>
                <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: 'none' }}>
                  <Box
                    w="44px"
                    h="44px"
                    borderRadius="var(--radius)"
                    bg="#1a2540"
                    border="1px solid"
                    borderColor="#1e3a5f"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    _hover={{ borderColor: '#22d3ee', color: '#22d3ee' }}
                    transition="all 0.2s"
                    css={{ '& svg': { color: '#94a3b8', transition: 'color 0.2s' }, '&:hover svg': { color: '#22d3ee' } }}
                  >
                    <FaLinkedin size={20} />
                  </Box>
                </Link>
                <Link href="mailto:your.email@example.com" _hover={{ textDecoration: 'none' }}>
                  <Box
                    w="44px"
                    h="44px"
                    borderRadius="var(--radius)"
                    bg="#1a2540"
                    border="1px solid"
                    borderColor="#1e3a5f"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    _hover={{ borderColor: '#22d3ee', color: '#22d3ee' }}
                    transition="all 0.2s"
                    css={{ '& svg': { color: '#94a3b8', transition: 'color 0.2s' }, '&:hover svg': { color: '#22d3ee' } }}
                  >
                    <FaEnvelope size={20} />
                  </Box>
                </Link>
              </HStack>
            </Box>
          </Box>
        </VStack>
      </Box>
    </Box>
  )
}

export default Contact
