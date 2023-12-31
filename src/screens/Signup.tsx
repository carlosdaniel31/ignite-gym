import { VStack, Image, Text, Center, Heading, ScrollView, useToast } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { api } from '@services/api'
import { AppError } from '@utils/AppError'

// type FormDataProps = {
//   name: string
//   email: string
//   password: string
//   confirmPassword: string
// }

const signUpSchema = yup.object({
  name: yup.string().required('Informe um nome'),
  email: yup.string().required('Informe um e-mail').email('E-mail inválido'),
  password: yup.string().required('Informe a senha').min(6, 'A senha deve ter pelo menos 6 dígitos'),
  password_confirm: yup.string().required('Confirme a senha').oneOf([yup.ref('password')], 'As senhas não conferem')
})

type FormDataProps = yup.InferType<typeof signUpSchema>

export function Signup(){
  const toast = useToast()

  const { control, handleSubmit, formState:{errors}} = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  })

  const navigation = useNavigation()

  function handleGoBack(){
    navigation.goBack()
  }

  async function handleSignUp({name, email, password}: FormDataProps){
    try {
      const response = await api.post('/users', {name, email, password})
      console.log(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError ? error.message : 'Não foi possível criar conta. Tente mais tarde'

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500'
      })
    }
    

    // const response = await fetch('http://10.0.0.110:3333/users', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({name, email, password})
    // })  
    // const data = await response.json()
    // console.log(data); 
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
        <Controller 
          control={control}
          name='name'
          render={({field: {onChange, value}})=> (
            <Input 
              placeholder='Nome'
              onChangeText={onChange}
              value={value}
              errorMessage={errors.name?.message}
            />
          )}
        />
        <Controller 
          control={control}
          name='email'
          render={({field: {onChange, value}})=> (
            <Input 
              placeholder='E-mail' 
              keyboardType='email-address'
              autoCapitalize='none'
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />     
          )}
        />
        <Controller 
          control={control}
          name='password'
          render={({field: {onChange, value}})=> (
            <Input 
              placeholder='Senha'
              onChangeText={onChange}
              value={value}
              secureTextEntry
              autoCapitalize='none'
              errorMessage={errors.password?.message}
            />
          )}
        />
        <Controller 
          control={control}
          name='password_confirm'
          render={({field: {onChange, value}})=> (
            <Input 
              placeholder='Confirme a senha'
              onChangeText={onChange}
              value={value}
              secureTextEntry
              autoCapitalize='none'
              onSubmitEditing={handleSubmit(handleSignUp)}
              returnKeyType='send'
              errorMessage={errors.password_confirm?.message}
            />
          )}
        />
        <Button 
          title='Criar e acessar' 
          mb={16} 
          onPress={handleSubmit(handleSignUp)}
        />
        <Button 
          title='Voltar para o login' variant='outline'
          onPress={handleGoBack}
        />
      </Center>
      </VStack>
    </ScrollView>   
  )
}