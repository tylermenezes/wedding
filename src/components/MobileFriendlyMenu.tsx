import { ReactNode, useEffect } from 'react';
import {
  ChakraProps,
  Box,
  IconButton,
  Stack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ImMenu } from 'react-icons/im';

export interface MobileFriendlyMenuProps extends ChakraProps {
  children: ReactNode,
}

export default function MobileFriendlyMenu({ children, ...rest }: MobileFriendlyMenuProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const closeDrawer = useBreakpointValue({ base: false, md: true });

  useEffect(() => {
    if (typeof window !== 'undefined' && isOpen && closeDrawer) onClose();
  }, [isOpen, closeDrawer, onClose]);

  return (
    <Box {...rest}>
      <Box d={{ base: 'none', md: 'initial' }}>
        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={8}>
          {children}
        </Stack>
      </Box>
      <Box d={{ base: 'initial', md: 'none'}}>
        <IconButton
          aria-label="Options"
          icon={<ImMenu />}
          variant="outline"
          onClick={onOpen}
        />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton icon={<ImMenu />} />
          <DrawerBody>
            <Stack mt={16} textAlign="center" direction="column">
              {children}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
