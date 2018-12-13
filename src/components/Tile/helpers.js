export const shapeSwitch = (index) => {
  switch (index) {
    case 0:
      return 'empty';
    case 1:
      return 'northeast';
    case 2:
      return 'southeast';
    case 3:
      return 'southwest';
    case 4:
      return 'northwest';
    case 5:
      return 'full';
    default:
      return 'empty';
  }
};
