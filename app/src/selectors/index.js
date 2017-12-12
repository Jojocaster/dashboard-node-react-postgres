import { createSelector } from 'reselect';

const getTasks = (state) => state.tasks.items;

export const getActiveTasks = createSelector(
  getTasks,
  items => items.filter(item => !item.complete)
);

//Returns active tasks sorted by due date
export const makeGetActiveSortedTasks =  () => {
  return createSelector(
    getActiveTasks,
    items => {
      return [...items].sort((a, b) => {
        const due1 = new Date(a.due);
        const due2 = new Date(b.due);
        return due1 - due2;
      })
    }
  );
}