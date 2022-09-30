import React, { useCallback, useMemo } from "react";

export default function useGenerateRandomIndexes(password: string) {
  const passwordChars = useMemo(() => password.split(""), [password]);

  const getRandomInt = useCallback((min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }, []);

  const generateRandomIndexes = useCallback((password: string) => {
    const maxPassIndex = Math.floor(password.length / 2 - 1);
    const maxNumberOfHighlights = password.length / 2;
    const minPassLength = 2;

    const numberOfIndexes = getRandomInt(minPassLength, maxNumberOfHighlights);

    let randomIndexes: any = [];

    while (randomIndexes.length < numberOfIndexes) {
      const randomItem = getRandomInt(0, maxPassIndex);

      if (!randomIndexes.includes(randomItem)) {
        randomIndexes.push(randomItem);
      }
    }

    return randomIndexes;
  }, []);

  const indexesToCompare = useMemo(() => {
    return generateRandomIndexes(password);
  }, [password, generateRandomIndexes]);

  const specifiedPasswordChars = useMemo(() => {
    return indexesToCompare.map((index: number) => passwordChars[index]);
  }, [indexesToCompare, passwordChars]);

  return [indexesToCompare, specifiedPasswordChars, passwordChars];
}
