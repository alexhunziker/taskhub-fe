import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import CategoryListEntry from "./CategoryListEntry";
import { useContext } from "react";
import CategoryContext from "../../state/CategoryContext";

const CategoryList = ({ categories, handleEdit, editedCategory }) => {
  const { updateOrder } = useContext(CategoryContext);

  const sortedCategories = categories?.sort(
    (cat1, cat2) => (cat1.order > cat2.order) ? 1 : -1
  );

  const handleDragEnd = (result) => {
    if (!result.destination) return; // Item was dropped outside of a list

    const reorderedCategories = Array.from(categories);
    const [reorderedItem] = reorderedCategories.splice(result.source.index, 1);
    reorderedCategories.splice(result.destination.index, 0, reorderedItem);

    updateOrder(reorderedCategories);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {sortedCategories.map(({ name, key, rules, hidden }, index) => (
              <CategoryListEntry
                name={name}
                id={key}
                key={key}
                rules={rules}
                hidden={hidden}
                order={index}
                handleEdit={handleEdit}
                isEdited={editedCategory.key === key}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default CategoryList;
