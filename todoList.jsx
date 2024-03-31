import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const TaskList = ({ tasks }) => {
  return (
    <ScrollView>
      {tasks.map(task => (
        <View key={task.id} style={[styles.task, task.completed && styles.completed]}>
          <Text style={styles.taskText}>{task.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Do laundry', completed: false },
    { id: 2, text: 'Go to gym', completed: true },
    { id: 3, text: 'Walk dog', completed: false },
  ]);

  return (
    <View style={styles.container}>
      <ToDoList tasks={tasks} />
    </View>
  );
};

export default TaskList;