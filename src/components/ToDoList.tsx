import React from 'react';
import {StyleSheet, Pressable, View, Text} from 'react-native';

function ToDoList({tasks}: {tasks: any}): React.JSX.Element {
  const taskView = tasks.map((task: string, index: number) => {
    return (
      <Pressable key={index} style={style.task}>
        <View>
          <Text style={style.taskText}>{task}</Text>
        </View>
      </Pressable>
    );
  });

  return <View>{taskView}</View>;
}

const style = StyleSheet.create({
  task: {
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 2,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#9B7EBD',
    backgroundColor: '#9B7EBD',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  hoveredBtn: {
    backgroundColor: '#37AFE1',
  },
  taskText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});

export default ToDoList;
