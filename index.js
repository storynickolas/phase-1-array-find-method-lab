// code your solution here
function superbowlWin(franchiseHistory) {
  let win = []
  franchiseHistory.find(function(game) {
    if(game.result === 'W'){
      win.push(game.year)
    }
  })
  return win[0]
}





