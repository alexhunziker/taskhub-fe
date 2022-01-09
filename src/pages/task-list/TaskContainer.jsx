import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import TaskEntry from "./TaskEntry";

const ContainerTitle = styled.h2`
  font-size: 14pt;
`

const TaskContainer = ({taskCategory, tasks}) => {

    return (
    <Card>
      <>
        <ContainerTitle>{taskCategory || 'Uncategorized'}</ContainerTitle>
        {
          tasks.length > 0 
          ? tasks.map(task => <TaskEntry task={task} key={task.key}/>)
          : 'Yay, no tasks'
        }
      </>
    </Card>)
}

export default TaskContainer;