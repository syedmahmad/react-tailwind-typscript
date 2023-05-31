export const getSize = (size: 'small' | 'medium' | 'large' | 'full') => {
    switch (size) {
      case 'small': {
        return 'w-1/4';
      }
      case 'large': {
        return 'w-3/4';
      }
      case 'full': {
        return 'w-full';
      }
      default: {
        return 'w-2/4';
      }
    }
};
