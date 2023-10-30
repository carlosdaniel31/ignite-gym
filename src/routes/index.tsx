import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { useTheme, Box } from 'native-base'
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'

export function Routes(){
  const { colors } = useTheme()

  const theme = DefaultTheme
  theme.colors.background = colors.gray[700]

  return (
    <Box bg='gray.700' flex={1}>
      <NavigationContainer theme={theme}>
        <AppRoutes />
      </NavigationContainer>
    </Box>
  )
}