const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

/**
 * 获取今天到指定日期的天间隔
 */
const getDayBetween = n => {
  var now = new Date()
  var time = new Date(n.replace(/-/g, "/"))
  return parseInt((now.getTime() - time.getTime()) / (1000 * 60 * 60 *24))
}

module.exports = {
  formatTime,
  getDayBetween
}
