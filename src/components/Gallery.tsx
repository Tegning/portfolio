import { useState } from 'react'
import { Box, Heading, SimpleGrid, Image, Text, Dialog } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import photo1 from '../assets/photo_1.jpg'
import photo2 from '../assets/photo_2.jpg'
import photo4 from '../assets/photo_4.jpg'
import photo3 from '../assets/photo_3.jpg'
import photo5 from '../assets/photo_5.jpg'
import photo6 from '../assets/photo_6.jpg'

function Gallery() {
  const { open, onOpen, onClose } = useDisclosure()
  const [selectedImage, setSelectedImage] = useState<any>(null)

  const images = [
    {
      id: 1,
      src: photo1,
      alt: 'Gallery Image 1',
      title: 'Zhonghua Secondary School',
      description: 'My first school in Singapore, completed the GCE O-levels with 7 A\'s',
    },
    {
      id: 2,
      src: photo2,
      alt: 'Gallery Image 2',
      title: 'Saint Andrew\'s Junior College',
      description: 'My next school in Singapore, completed my A-levels with 6 A\'s',
    },
    {
      id: 3,
      src: photo3,
      alt: 'Gallery Image 3',
      title: 'National University of Singapore',
      description: 'Started my undergraduate studies in Singapore, completed my Bachelor\'s degree in Computer Science with Honours',
    },
    {
      id: 4,
      src: photo4,
      alt: 'Gallery Image 4',
      title: 'The University of Texas at Austin',
      description: 'Graduated from NUS and started my master\'s studies in Computer Science at UT Austin',
    },
    {
      id: 5,
      src: photo5,
      alt: 'Gallery Image 5',
      title: 'Sea Limited',
      description: 'My first job in Singapore, working as a Data Engineer',
    },
    {
      id: 6,
      src: photo6,
      alt: 'Gallery Image 6',
      title: 'Rakuten Asia Pte Ltd',
      description: 'My second job in Singapore, working as a Software Engineer',
    },
  ]

  const openModal = (image: any) => {
    setSelectedImage(image)
    onOpen()
  }

  return (
    <Box
      id="gallery"
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
            Project Gallery
          </Heading>
          <Box
            w="80px"
            h="4px"
            bgGradient="linear(90deg, #667eea, #764ba2)"
            mx="auto"
            borderRadius="full"
          />
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {images.map((image) => (
            <Box
              key={image.id}
              cursor="pointer"
              onClick={() => openModal(image)}
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
              bg="white"
              border="1px solid"
              borderColor="gray.100"
              _hover={{
                transform: 'scale(1.03)',
                boxShadow: '0 12px 40px rgba(102, 126, 234, 0.15)',
                borderColor: 'purple.200',
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <Image
                src={image.src}
                alt={image.alt}
                w="100%"
                h="220px"
                objectFit="cover"
              />
              <Box p={5}>
                <Heading as="h3" fontSize="md" mb={2} fontWeight={600} color="gray.900">
                  {image.title}
                </Heading>
                <Text fontSize="sm" color="gray.600" lineHeight="tall">
                  {image.description}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Dialog.Root open={open} onOpenChange={(e) => !e.open && onClose()}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content maxW="800px">
            <Dialog.CloseTrigger />
            {selectedImage && (
              <Box p={6}>
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  w="100%"
                  mb={4}
                  borderRadius="md"
                />
                <Heading as="h3" fontSize="md" mb={2}>
                  {selectedImage.title}
                </Heading>
                <Text color="gray.600">
                  {selectedImage.description}
                </Text>
              </Box>
            )}
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </Box>
  )
}

export default Gallery

