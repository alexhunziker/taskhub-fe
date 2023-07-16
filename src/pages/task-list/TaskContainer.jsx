import React, { useState } from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import TaskEntry from "./TaskEntry";
import OrderDropdown from "./OrderDropdown";
import { SortOrder, SortOrderFunctions } from "./sortOrder";

const ContainerTitle = styled.h2`
  font-size: 14pt;
`

const TaskContainer = ({taskCategory, tasks}) => {

  const [sortOrder, setSortOrder] = useState(SortOrder.DUE_UNKNOWN_LAST);
  const sortOrderFunction = SortOrderFunctions[sortOrder];

  tasks.sort((a,b) => {
    if (a.done && !b.done) {
      return 1;
    } if (b.done && !a.done) {
      return -1;
    }

    return sortOrderFunction(a, b);  
  });

    return (
    <Card>
      <>
        <ContainerTitle>
          <OrderDropdown setSortOrder={setSortOrder} sortOrder={sortOrder} /> {' '}
          {taskCategory || 'Uncategorized'}
        </ContainerTitle>
        {
          tasks.length > 0 
          ? tasks.map(task => <TaskEntry task={task} key={task.key}/>)
          : 'Yay, no tasks'
        }
      </>
    </Card>)
}

export default TaskContainer;