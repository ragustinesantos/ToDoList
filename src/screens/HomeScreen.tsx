import React from 'react';
import {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Alert} from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import {CommonStyles} from '../utils/CommonStyles';
import MainLayout from '../layouts/MainLayout';

export default function HomeScreen({
  navigation,
}: {
  navigation: any;
}): React.JSX.Element {
  const [tasks, setTasks] = useState(['Do Laundry', 'Go to gym', 'Walk dog']);

  const addTask = (taskText: string) => {
    if (!tasks.includes(taskText)) {
      setTasks([...tasks, taskText]);
      return;
    }

    Alert.alert('Error', 'Duplicate Task Found');
  };
  return (
    <MainLayout>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
      <View style={CommonStyles.navBtn}>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </MainLayout>
  );
}
