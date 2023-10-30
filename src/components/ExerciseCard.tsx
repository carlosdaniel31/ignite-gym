import { HStack, Heading, Icon, Image, Text, VStack } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {

}

export function ExerciseCard(){
  return (
    <TouchableOpacity>
      <HStack bg='gray.500' alignItems='center' p={2} pr={4} rounded='md' mb={3}>
        <Image 
          source={{uri: 'https://i.ytimg.com/vi/5h_ednskVe4/maxresdefault.jpg'}}
          alt='Imagem do exercício'
          w={16}
          h={16}
          rounded='md'
          mr={4}
        />
        <VStack flex={1}>
          <Heading 
            fontSize='lg' 
            color='white'
            numberOfLines={1}>
            Remada curvada supinada
          </Heading>
          <Text 
            fontSize='sm' 
            color='gray.200'
            mt={1}
            numberOfLines={2}>
            3 séries x 10 repetições
          </Text>
        </VStack>
        <Icon 
          as={Entypo}
          name='chevron-thin-right'
          color='gray.300'
        />
      </HStack>
    </TouchableOpacity>
  )
}