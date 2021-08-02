export const cleanUpDuplicateAsync = (data: string[]) => {
  return new Promise((resolve, reject) => {
    if (Array.isArray(data) && !data.every((value) => typeof value !== 'string')) {
      /**
       * Removes duplicates from array
       * Removes undefined values
       * Removes null values
       * Reduces spaces greater than 1 to 1-space
       */
      const cleanStage1 = Array.from(new Set(data)).map((name) => `${name}`
        .replace(/undefined/gim, '')
        .replace(/null/gim, '')
        .replace(/\s\s+/gim, ' ')
        .trim()
      );

      let previousFilteredResult = 0;
      const filteredResult = new Set();
      const finalResult: string[] = [];

      cleanStage1.forEach((name) => {
        `${name}`
          .toUpperCase()
          .split(' ')
          .forEach((value) => {
            filteredResult.add(value);
          });

        if (filteredResult.size !== previousFilteredResult) {
          finalResult.push(name);
        }
        previousFilteredResult = filteredResult.size;
      });

      resolve(finalResult);
    } else {
      reject({ message: 'The function argument must be an array of strings' });
    }
  });
};
