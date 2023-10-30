import { HStack, Heading, Icon, Text, VStack } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'
import { UserPhoto } from "./UserPhoto";
import { TouchableOpacity } from "react-native";

export function HomeHeader(){
  return (
    <HStack 
      bg='gray.600' 
      pt={16} 
      px={8} 
      pb={5} 
      alignItems='center'>
      <UserPhoto 
        source={{uri: 'https://github.com/carlosdaniel31.png'}}
        size={16}
        alt='Imagem do usuário'
        mr={4}
      />
      <VStack flex={1}>
        <Text color='gray.100' fontSize='md'>Olá</Text>
        <Heading 
          color='gray.100' 
          fontSize='md'>
            Carlos Daniel
        </Heading>
      </VStack>
      <TouchableOpacity>
        <Icon 
          as={MaterialIcons}
          name='logout'
          color='gray.200'
          size={7}
        />
      </TouchableOpacity>
    </HStack>
  )
}