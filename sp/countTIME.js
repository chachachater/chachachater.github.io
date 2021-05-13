// const process = require('process')
const fs = require('fs')

let dateArr = []
let timeArr = []
let eventArr = []
const askTime = `輸入花了多少時間(min)？`
const askEvent = `做了什麼事？`
let totalTime = 0

const readline = require('readline');
readFile()

function readFile() {
  fs.readFile('./list.txt', function (error, data) {
    if (error) {
      console.log('出錯拉')
      return
    }
    let inputArr = data.toString().split('\n')
    inputArr.pop()
    for (let i = 0; i < inputArr.length; i++) {
      if (i % 3 === 0) dateArr.push(inputArr[i])
      if (i % 3 === 1) timeArr.push(Number(inputArr[i]))
      if (i % 3 === 2) eventArr.push(inputArr[i])
    }

    showTimeLine()
    askUser()

  })
}

function showTimeLine() {
  for (const each of timeArr) {
    totalTime += each
  }
  console.log(`累計總時數：${totalTime} min`)
  console.log(`每日進度：`)
  for (let i = 0; i < dateArr.length; i++) {
    console.log(`日期﹕${dateArr[i]}\n花費時間：${timeArr[i]}\n做了什麼事：${eventArr[i]}\n`)
  }
}

function askUser() {
  if (process.argv[2] === undefined) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    rl.question('輸入日期(month-date)', (answer) => {
      console.log(answer)
      appendFile(answer)

      rl.question(askTime, (answer) => {
        console.log(answer)
        appendFile(Number(answer))

        rl.question(askEvent, (answer) => {
          console.log(answer)
          appendFile(answer)
          rl.close()
          console.log('更新完畢')
        })
      })
    })

  }
}


// if (process.argv[2] === 'delete') {
//   dateArr.pop()
//   timeArr.pop()
//   eventArr.pop()
//   console.log('???', timeArr, eventArr)
// }

function appendFile(content) {
  fs.appendFile('./list.txt', `${content}\n`, function (error) {
    if (error) {
      console.log('appendFile error', error)
      return
    }
    return
  })
}
