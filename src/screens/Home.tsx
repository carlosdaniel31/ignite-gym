import { useState } from 'react'
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { FlatList, HStack, Heading, Text, VStack } from "native-base";
import { ExerciseCard } from '@components/ExerciseCard';
import { Platform } from 'react-native';

export function Home(){
  const [groupSelected, setGroupSelected] = useState('costas')
  const [groups, setGroups] = useState(['costas', 'bíceps', 'tríceps', 'ombro'])

  const [exercise, setExercise] = useState(['Remada frontal', 'Remada curvada supinada', 'Levantamento terra', 'Remada unilateral', 'ger', 'gtell', 'trolll'])

  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList 
      data={groups}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <Group 
          name={item}
          isActive={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()}
          onPress={()=> setGroupSelected(item)}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      _contentContainerStyle={{px: 8}}
      my={10}
      maxH={10}
    />
    <VStack px={8}>
      <HStack 
        justifyContent='space-between' 
        mb={5}>
        <Heading color='gray.200' fontSize='md'>
          Exercícios
        </Heading>
        <Text color='gray.200' fontSize='sm'>
          {exercise.length}
        </Text>
      </HStack>
      <FlatList 
        data={exercise}
        keyExtractor={item => item}
        renderItem={({item})=> (
          <ExerciseCard />
        )}
        showsVerticalScrollIndicator={false}
        _contentContainerStyle={{
          paddingBottom: Platform.OS === 'ios' ? 20 : 80
        }}
      />
    </VStack>
    </VStack>
  )
}