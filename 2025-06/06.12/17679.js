function solution(m, n, board) {
  var answer = 0;
  const copyBoard = board.map((v) => [...v]);

  // 현재 기준 2x2 같은지 확인
  function isSame(y, x) {
    let std = copyBoard[y][x];
    for (let i = y; i < y + 2; i++) {
      for (let j = x; j < x + 2; j++) {
        // 하나라도 다르면 0 반환
        if (copyBoard[i][j] !== std) return 0;
      }
    }

    // 현재 위치에서 2x2 배열이 모두 같으면 1 반환
    return 1;
  }

  // 블록 제거
  function removeBlock(pos) {
    for (let i = 0; i < pos.length; i++) {
      [y, x] = pos[i];

      for (let j = y; j < y + 2; j++) {
        for (let k = x; k < x + 2; k++) {
          copyBoard[j][k] = 0;
        }
      }
    }
  }

  // 블록 재이동
  function moveBoard() {
    let isContinue = true;
    while (isContinue) {
      isContinue = false;
      for (let i = 0; i < m - 1; i++) {
        for (let j = 0; j < n; j++) {
          if (!copyBoard[i + 1][j] && copyBoard[i][j] !== 0) {
            isContinue = true;
            copyBoard[i + 1][j] = copyBoard[i][j];
            copyBoard[i][j] = 0;
          }
        }
      }
    }
  }

  // 제거된 블록 개수 세기
  function calcRemovedBlock() {
    let cnt = 0;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (copyBoard[i][j] === 0) cnt++;
      }
    }
    return cnt;
  }

  while (1) {
    let isContinue = false;

    let samePos = [];
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (!copyBoard[i][j]) continue;

        let result = isSame(i, j);
        if (result) {
          if (
            copyBoard[i][j].charCodeAt(0) >= 65 &&
            copyBoard[i][j].charCodeAt(0) <= 90
          ) {
            samePos.push([i, j]);
            isContinue = true;
          }
        }
      }
    }

    if (isContinue) {
      removeBlock(samePos);
      moveBoard();
    } else break;
  }

  answer = calcRemovedBlock();
  return answer;
}
