import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, Marquis
      </Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={handleAddSkill}
      >
        <Text style={styles.buttonText}>
          Add
        </Text>
      </TouchableOpacity>

      <Text style={[styles.title, {marginVertical: 50}]}>
        My Skills
      </Text>

    {
      mySkills.map(skill => (
      <TouchableOpacity key={skill} style={styles.buttonSkill}>
        <Text style={styles.skill}>
          {skill}
        </Text>
      </TouchableOpacity>
      ))
    }

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10
  },
  skill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  }
});
