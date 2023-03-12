interface Challenge1Result {
  positives: string,
  negative: string,
  zeros: string
}

export const numbersFractionCalculator  = (numbers: number[]): Challenge1Result  =>  {
  let positives = 0;
  let negatives = 0;
  let zeros = 0;

  const numbersLength = numbers.length

  for (let i = 0; i<numbersLength; i++){
    const number = numbers[i]
    if (number > 0) {positives++}
    else if(number){negatives++}
    else zeros++
  }

  return {
    positives: (positives/numbersLength).toFixed(6),
    negative: (negatives/numbersLength).toFixed(6),
    zeros: (zeros/numbersLength).toFixed(6)
  }
};
