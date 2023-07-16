import { Priority } from "../../state/constants";

export const SortOrder = {
  ALPHABETICAL: "Alphabetical",
  DUE_UNKNOWN_FIRST: "Due (unknown first)",
  DUE_UNKNOWN_LAST: "Due (unknown last)",
  PRIORITY: "Priority",
}

const alphabetical = (a, b) => {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
}

const unknownFirst = (a, b) => {
    if (!a.due && !b.due) return a.title > b.title;
    if (!a.due) return -1;
    if (!b.due) return 1;
    return a.due - b.due;
}

const unknownLast = (a, b) => {
    if (!a.due && !b.due) return a.title > b.title;
    if (!a.due) return 1;
    if (!b.due) return -1;
    return a.due - b.due;
}

const priority = (a, b) => {
    if (a.priority === b.priority) return unknownLast(a, b);
    if (a.priority === Priority.HIGH) return -1;
    if (a.priority === Priority.LOW) return 1;
    if (b.priority === Priority.HIGH) return 1;
    if (b.priority === Priority.LOW) return -1;
}

export const SortOrderFunctions = {
    [SortOrder.ALPHABETICAL]: alphabetical,
    [SortOrder.DUE_UNKNOWN_FIRST]: unknownFirst,
    [SortOrder.DUE_UNKNOWN_LAST]: unknownLast,
    [SortOrder.PRIORITY]: priority,
}