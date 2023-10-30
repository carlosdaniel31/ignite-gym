import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
  title: string
}

export function Button({title, variant,...rest}: Props){
  return (
    <ButtonNativeBase
      w='full'
      h={14}
      bg={variant ? 'transparent' : 'green.700'}
      rounded='sm'
      borderWidth={variant ? 1 : 0}
      borderColor='green.500'
      _pressed={{
        bg: variant ? 'gray.500' : 'green.500'
      }}
      {...rest}
    >
      <Text color={variant ? 'green.500' : 'white'}>
        {title}
      </Text>
    </ButtonNativeBase>
  )
}