const filterFunc = {
  'normal': item => !item.completed,
  'completed': item => item.completed,
  'overdue': item => {
    
  },
  'today': item => {

  },
  'tomorrow': item => {

  }
}

export const applyFilter = (items, filter) => {
  const f = filter ? filter : 'normal';
  return items.filter(filterFunc[f]);
}
