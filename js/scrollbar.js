let processScroll = () => {
   let docElem = document.documentElement,
   docBody = document.body,
   scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
   scrollBottom = (docElem['scrollHeight'] || docElem['scrollHeight']) - window.innerHeight,
   scrollPercent = (scrollTop / scrollBottom) * 100 + '%';

   document.getElementById('progressbar').style.setProperty('--scrollamount', scrollPercent)
}
document.addEventListener('scroll', processScroll)