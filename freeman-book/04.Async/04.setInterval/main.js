let timerId = setInterval(() => document.write('tick <br>'), 1000);
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);