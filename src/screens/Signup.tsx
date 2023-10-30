import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

export function Signup(){
  const navigation = useNavigation()

  function handleGoBack(){
    navigation.goBack()
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10} pb={10}>
      <Image 
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        alt='pessoas treinando'
        resizeMode='contain'
        position='absolute'
      />
      <Center my={24}>
        <LogoSvg />
        <Text color='gray.100'>
          Treine seu corpo e sua mente
        </Text>
      </Center>
      <Center>
        <Heading color='gray.100' fontSize='xl' mb={6}  fontFamily='heading'>
          Crie sua conta
        </Heading>
        <Input 
          placeholder='Nome'
        />
        <Input 
          placeholder='E-mail' keyboardType='email-address'
          autoCapitalize='none'
        />
        <Input 
          placeholder='Senha'
          secureTextEntry
        />
        <Input 
          placeholder='Confirme a senha'
          secureTextEntry
        />
        <Button title='Criar e acessar' mb={24}/>
        <Button 
          title='Voltar para o login' variant='outline'
          onPress={handleGoBack}
        />
      </Center>
      </VStack>
    </ScrollView>   
  )
}