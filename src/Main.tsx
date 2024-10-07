/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {useState} from 'react';
import {SafeAreaView} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function Main(): React.JSX.Element {
  const [tasks, setTasks] = useState(['Do Laundry', 'Go to gym', 'Walk dog']);

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default Main;
