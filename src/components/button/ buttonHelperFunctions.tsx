export const getSize = (size: 'x-small' | 'small' | 'medium' | 'large' | 'x-large') => {
    switch (size) {
      case 'x-small': {
        return 'px-3 py-2';
      }
      case 'small': {
        return 'px-4 py-2';
      }
      case 'large': {
        return 'px-6 py-3';
      }
      case 'x-large':{
        return 'px-7 py-3.5';
      }
      default: {
        return 'px-5 py-2.5';
      }
    }
};

export const getPrimary = (isPrimary: boolean) =>
  isPrimary
    ? 'text-white bg-text-blue border-text-blue hover:bg-violet-600'
    : 'text-slate-700 bg-pink-600 border-pink-600 hover:bg-violet-600';

