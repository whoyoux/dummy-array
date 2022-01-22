export type createArrayProps = {
  from?: number;
  to: number;
  step?: number;
};

export const createArray = ({ from = 0, step = 1, to }: createArrayProps): number[] => {
  if (!!!to) {
    throw new Error('Please provide how many elements shoud be in the array!');
  }

  return Array.from(
    {
      length: Math.ceil((to - from) / step),
    },
    (_, i) => i * step + from,
  );
};
