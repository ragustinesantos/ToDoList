import React from 'react';
import {StyleSheet, Pressable, View, Text, ScrollView} from 'react-native';

function ToDoList({tasks}): React.JSX.Element {
  const taskView = tasks.map((task: string, index: number) => {
    return (
      <Pressable key={index}>
        <View>
          <Text style={style.incomplete}>
            {task}
          </Text>
        </View>
      </Pressable>
    );
  });

  return <ScrollView>{taskView}</ScrollView>;
}

const style = StyleSheet.create({
  incomplete: {},
});

export default ToDoList;
