'use client';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps
} from '@chakra-ui/react';
import {
  Bell,
  ChartLineUp,
  ChartPieSlice,
  Heart,
  House,
  Receipt
} from '@phosphor-icons/react';

export default function AppLayout({
  children // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('white', 'white')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<Heart color="#AE2983" weight="fill" size={32} />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};

interface NavItemProps extends FlexProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  routerPath: string;
}
const NavItem = ({ routerPath, icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href={`${routerPath}`}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'gray.700',
          color: 'white'
        }}
        {...rest}
        color="gray.200"
      >
        {icon && <>{icon}</>}
        {children}
      </Flex>
    </Box>
  );
};

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface LinkItemProps {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const LinkItems: Array<LinkItemProps> = [
  {
    name: 'Painel',
    icon: <House size={24} color="#ffffff" />,
    path: '/dashboard'
  },
  {
    name: 'Receita e Despesa',
    icon: <Receipt size={24} color="#ffffff" />,
    path: '/income-and-expense'
  },
  {
    name: 'Orçamento',
    icon: <ChartPieSlice size={24} color="#ffffff" />,
    path: '/budget'
  },
  {
    name: 'Investimento',
    icon: <ChartLineUp size={24} color="#ffffff" />,
    path: '/investment'
  },
  {
    name: 'Notificações',
    icon: <Bell size={24} color="#ffffff" />,
    path: '/notification'
  }
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('black', 'balck')}
      borderRight="1px"
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          color="white"
        >
          ORGANIZA
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} routerPath={link.path}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};
