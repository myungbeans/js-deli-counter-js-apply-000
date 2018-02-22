let ticket = 1

function takeANumber(line) {
  line.push(ticket)
  ticket += 1
  return `Welcome. You are number ${line[line.length - 1]}.`
}

function nowServing (line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
}

function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`
  }

  let numAndName = []

  for (let i = 0; i < line.length; i++) {
    numAndName.push(` ${i + 1}. ${line[i]}`)
  }

  numAndName.join(",")

  return `The line is currently:${numAndName}`

}
