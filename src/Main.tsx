import React from 'react';
import {SafeAreaView} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function Main(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default Main;
