import { StyleSheet, Text, View } from 'react-native';

  // Uppercase function - use in view
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

export default function ExerciseListItem({ item }) {
    return (
        <View style={styles.exerciseContainer}>
          <Text style={styles.exerciseName}>{item.name}</Text>
          <Text style={styles.exerciseSubtitle}>
            {capitalizeFirstLetter(item.muscle)} | {capitalizeFirstLetter(item.equipment)} </Text>
        </View>
    )
  }

  const styles = StyleSheet.create({
    exerciseContainer: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 10,
      gap: 5,
    },
    exerciseName: {
      fontSize: 20, 
      fontWeight: '600',
    },
    exerciseSubtitle: {
      color: 'dimgray'
    },
  });