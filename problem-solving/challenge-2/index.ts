
export const diceFacesCalculator = (
  dice1: number,
  dice2: number,
  dice3: number
): number => {
  const diceArr = [dice1,dice2,dice3]
  if(dice1<1 || dice1>6 || dice2<1 || dice2>6 || dice3<1 || dice3>6) throw(new Error('Dice out of number range'))
  if (dice1===dice2 && dice2===dice3) return dice1*3
  if (dice1===dice2 || dice1===dice3 ) return dice1*2
  if (dice2===dice3) return dice2*2
  let maxNumber = 0
  diceArr.forEach(dice => {if (dice>maxNumber) maxNumber = dice})
  return maxNumber;
};
