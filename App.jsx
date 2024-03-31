import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ToDoList from './todoList';
import ToDoForm from './ToDoForm';

function App() 

{
  
    const [tasks, setTasks] = useState([
        { id: 1, text:  'Do laundry', },
        { id: 2, text: 'Go to gym'},
        { id: 3, text: 'Walk dog' }
      ]);
  const addTask = (text) => {
    const newTask = {
      id: Math.random(),
      text: text
    };
    setTasks([...tasks, newTask]);
  };
  

  return (
    <View>
      <Text>ToDoList</Text>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </View>
  );
}

export default App;