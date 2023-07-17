import React, { useState } from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import TaskEntry from "./TaskEntry";
import OrderDropdown from "./OrderDropdown";
import { SortOrder, SortOrderFunctions, compareClosedOn } from "./sortOrder";

const ContainerTitle = styled.h2`
  font-size: 14pt;
`

const ClosedTaskToggle = styled.div`
  margin-top: 10px;
  color: #007799;
`

const TaskContainer = ({taskCategory, tasks}) => {

  const [sortOrder, setSortOrder] = useState(SortOrder.DUE_UNKNOWN_LAST);
  const [showClosed, setShowClosed] = useState(false);
  const sortOrderFunction = SortOrderFunctions[sortOrder];

  const openTasks = tasks.filter(t => !t.done).sort((a, b) => sortOrderFunction(a, b))
  const closedTasks = tasks.filter(t => t.done).sort((a, b) => compareClosedOn(a, b))

  const toggleClosedText = showClosed ? '- Hide closed tasks' : '+ Show closed tasks'

    return (
    <Card>
      <>
        <ContainerTitle>
          <OrderDropdown setSortOrder={setSortOrder} sortOrder={sortOrder} /> {' '}
          {taskCategory || 'Uncategorized'}
        </ContainerTitle>
        {
          openTasks.length > 0 
          ? openTasks.map(task => <TaskEntry task={task} key={task.key}/>)
          : 'Yay, no tasks'
        }
        { closedTasks.length > 0 && <>
          <ClosedTaskToggle onClick={() => setShowClosed(!showClosed)}>
            {toggleClosedText}
          </ClosedTaskToggle>
          { showClosed && closedTasks.map(task => <TaskEntry task={task} key={task.key}/>)}
        </>}
      </>
    </Card>)
}

export default TaskContainer;