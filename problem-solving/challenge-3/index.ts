export const findLessCostPath = (board: number[][]): number => {

  type PossiblePaths = {
    down : boolean,
    up: boolean,
    left: boolean,
    right: boolean
  }

  // i => row
  // j => column
  // go down => i + 1
  // go up => i-1
  // go right => j+1
  // go left => j-1

  // vars -------------------------------------------------------------------------------------

  const totalSum : number[] = []

  let blockingCells : number[][] = []

  const maxi = board.length-1
  const maxj = board[0].length-1

    const whereCanIGo = (rowIndex: number, columnIndex: number, forbiddenCells: number[][]): PossiblePaths => {
        const possiblePaths: PossiblePaths = {
          down: true,
          up: true,
          left: true,
          right: true
        }

        if (rowIndex + 1 > maxi) possiblePaths.down = false
        if (rowIndex - 1 < 0) possiblePaths.up = false
        if (columnIndex + 1 > maxj) possiblePaths.right = false
        if (columnIndex - 1 < 0) possiblePaths.left = false

        let i = 0
        while(i< forbiddenCells.length && (possiblePaths.down === true || possiblePaths.up === true || possiblePaths.right === true || possiblePaths.left === true)){
          if (forbiddenCells[i][0] === rowIndex + 1 && forbiddenCells[i][1] === columnIndex) possiblePaths.down = false
          if (forbiddenCells[i][0] === rowIndex - 1 && forbiddenCells[i][1] === columnIndex) possiblePaths.up = false
          if (forbiddenCells[i][0] === rowIndex && forbiddenCells[i][1] === columnIndex + 1 ) possiblePaths.right = false
          if (forbiddenCells[i][0] === rowIndex && forbiddenCells[i][1] === columnIndex - 1 ) possiblePaths.left = false
          i++
        }
        return possiblePaths
    }


  const pushPathSum = (i: number, j: number, currentForbiddenCells: number[][], currentCount: number, from : string) => {

      if (i === maxi && j === maxj) {
          totalSum.push(currentCount)
          return
      }else{
          currentCount += board[i][j]
          const actualForbiddenCells : number[][] = [...currentForbiddenCells, [i,j]]

          const possiblePaths: PossiblePaths = whereCanIGo(i,j,actualForbiddenCells)

          if (possiblePaths.down){
              const forbiddenCellsDownPath : number[][] = [...actualForbiddenCells]
              if (j>0 && from !== 'left') forbiddenCellsDownPath.push([i,j-1])
              if (i>0 && from !== 'up') forbiddenCellsDownPath.push([i-1,j])
              if (j<maxj && from !== 'right') forbiddenCellsDownPath.push([i,j+1])
              pushPathSum(i+1,j,forbiddenCellsDownPath, currentCount, 'up')
          }

          if (possiblePaths.up){
              const forbiddenCellsUpPath : number[][] = [...actualForbiddenCells]
              if (j<maxj && from !== 'right') forbiddenCellsUpPath.push([i,j+1])
              if (i<maxi && from !== 'down') forbiddenCellsUpPath.push([i+1,j])
              if (j>0 && from !== 'left') forbiddenCellsUpPath.push([i,j-1])
              pushPathSum(i-1,j,forbiddenCellsUpPath, currentCount, 'down')
          }

          if (possiblePaths.left){
              const forbiddenCellsLeftPath : number[][] = [...actualForbiddenCells]
              if (i>0 && from !== 'up') forbiddenCellsLeftPath.push([i-1,j])
              if (j<maxj && from !== 'right') forbiddenCellsLeftPath.push([i,j+1])
              if (i<maxi && from !== 'down') forbiddenCellsLeftPath.push([i+1,j])
              pushPathSum(i,j-1,forbiddenCellsLeftPath, currentCount, 'right')
          }

          if (possiblePaths.right){
              const forbiddenCellsRightPath : number[][] = [...actualForbiddenCells]
              if (i<maxi && from !== 'down') forbiddenCellsRightPath.push([i+1,j])
              if (j>0 && from !== 'left') forbiddenCellsRightPath.push([i,j-1])
              if (i>0 && from !== 'up') forbiddenCellsRightPath.push([i-1,j])
              pushPathSum(i,j+1,forbiddenCellsRightPath, currentCount, 'left')
          }
      }


  }

  pushPathSum(0,0, blockingCells, 0,'left')
  let smallestPath = totalSum[0]

  for(let i=1; i <totalSum.length-1; i++){
      if (totalSum[i]<smallestPath) smallestPath = totalSum[i]
  }

  return smallestPath
};
