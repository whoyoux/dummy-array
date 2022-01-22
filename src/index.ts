export type createArrayProps = {
  from?: number;
  to: number;
  step?: number;
  random?: boolean;
};

export const createArray = ({ from = 0, random = false, step = 1, to }: createArrayProps): number[] => {
  if (!!!to) {
    new Error('Please provide how many elements shoud be in array!');
    return [];
  }

  return Array.from(
    {
      length: Math.ceil((to - from) / step),
    },
    (_, i) => i * step + from,
  );
};
