import { Box, Container, Flex, Link, IconButton, useDisclosure, Drawer, VStack, Text, Image } from '@chakra-ui/react'
import { HiMenu, HiX } from 'react-icons/hi'
import profileImage from '../assets/profile.jpg'

interface NavbarProps {
  activeSection?: string
}

function Navbar({ activeSection = 'home' }: NavbarProps) {
  const { open, onOpen, onClose } = useDisclosure()

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Research & Leadership' },
    { id: 'awards', label: 'Awards' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      onClose()
    }
  }

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="rgba(10, 14, 23, 0.85)"
      backdropFilter="blur(12px)"
      borderBottom="1px solid"
      borderColor="#1e3a5f"
      zIndex={1000}
      w="100%"
    >
      <Container maxW="1280px" px={{ base: 4, md: 8 }} w="100%">
        <Flex as="nav" justify="space-between" align="center" h={{ base: '60px', md: '68px' }}>
          <Link
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('home') }}
            display="flex"
            alignItems="center"
            gap={3}
            _hover={{ opacity: 0.9 }}
            transition="opacity 0.2s"
          >
            <Box
              w={{ base: '36px', md: '40px' }}
              h={{ base: '36px', md: '40px' }}
              borderRadius="var(--radius)"
              overflow="hidden"
              border="1px solid"
              borderColor="#1e3a5f"
              flexShrink={0}
            >
              <Image src={profileImage} alt="Profile" w="100%" h="100%" objectFit="cover" />
            </Box>
            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight={600}
              color="#f1f5f9"
              display={{ base: 'none', sm: 'block' }}
              fontFamily="var(--font-mono)"
            >
              Trong Duy
            </Text>
          </Link>

          <Flex as="ul" listStyleType="none" gap={1} align="center" display={{ base: 'none', md: 'flex' }}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <Box as="li" key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.id) }}
                    px={3}
                    py={2}
                    borderRadius="var(--radius)"
                    fontSize="xs"
                    fontWeight={500}
                    color={isActive ? '#22d3ee' : '#94a3b8'}
                    bg={isActive ? 'rgba(34, 211, 238, 0.1)' : 'transparent'}
                    fontFamily="var(--font-mono)"
                    _hover={{
                      color: '#22d3ee',
                      bg: 'rgba(34, 211, 238, 0.08)',
                    }}
                    transition="all 0.2s"
                  >
                    {item.label}
                  </Link>
                </Box>
              )
            })}
          </Flex>

          <IconButton
            aria-label="Toggle menu"
            display={{ base: 'flex', md: 'none' }}
            variant="ghost"
            onClick={open ? onClose : onOpen}
            color="#94a3b8"
            size="md"
            borderRadius="var(--radius)"
            _hover={{ bg: 'rgba(34, 211, 238, 0.1)', color: '#22d3ee' }}
          >
            {open ? <HiX size={22} /> : <HiMenu size={22} />}
          </IconButton>
        </Flex>
      </Container>

      <Drawer.Root open={open} onOpenChange={(e) => !e.open && onClose()} placement="end">
        <Drawer.Backdrop bg="rgba(0, 0, 0, 0.7)" />
        <Drawer.Positioner>
          <Drawer.Content maxW="300px" bg="#0f1629" borderLeft="1px solid" borderColor="#1e3a5f">
            <Drawer.Header borderBottom="1px solid" borderColor="#1e3a5f" py={4} px={4}>
              <Flex justify="space-between" align="center">
                <Text fontSize="sm" fontWeight={600} color="#22d3ee" fontFamily="var(--font-mono)">
                  menu
                </Text>
                <IconButton
                  aria-label="Close menu"
                  variant="ghost"
                  onClick={onClose}
                  size="sm"
                  color="#94a3b8"
                  _hover={{ color: '#22d3ee' }}
                >
                  <HiX />
                </IconButton>
              </Flex>
            </Drawer.Header>
            <Drawer.Body py={4} px={2}>
              <VStack align="stretch" gap={0}>
                {navItems.map((item) => {
                  const isActive = activeSection === item.id
                  return (
                    <Link
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => { e.preventDefault(); scrollToSection(item.id) }}
                      px={4}
                      py={3}
                      borderRadius="var(--radius)"
                      color={isActive ? '#22d3ee' : '#94a3b8'}
                      fontWeight={500}
                      fontSize="sm"
                      fontFamily="var(--font-mono)"
                      bg={isActive ? 'rgba(34, 211, 238, 0.1)' : 'transparent'}
                      _hover={{ color: '#22d3ee', bg: 'rgba(34, 211, 238, 0.06)' }}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </Box>
  )
}

export default Navbar
