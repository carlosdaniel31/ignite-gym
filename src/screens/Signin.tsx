import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useAuth } from "@hooks/useAuth";
import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

type FormData = {
  email: string;
  password: string;
};

export function Signin() {
  const { signin } = useAuth();

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount() {
    navigation.navigate("signup");
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  async function handleSignin({ email, password }: FormData) {
    await signin(email, password);
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={10}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />
        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100">Treine seu corpo e sua mente</Text>
        </Center>
        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Acesse sua conta
          </Heading>
          <Controller
            control={control}
            name="email"
            render={({ field: {onChange}})=> (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                errorMessage={errors.email?.message}
              />
            )}
          />
          <Controller 
            control={control}
            name='password'
            render={({field: {onChange}})=> (
              <Input 
                placeholder="Senha" 
                secureTextEntry 
                onChangeText={onChange}
                errorMessage={errors.password?.message}
              />
            )}
          />
          <Button 
            title="Acessar" 
            mb={24} 
            onPress={handleSubmit(handleSignin)}
          />
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            Ainda não tem acesso?
          </Text>
          <Button
            title="Criar conta"
            variant="outline"
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
