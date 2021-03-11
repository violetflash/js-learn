let pic = document.createElement('img');
pic.src = 'https://images.unsplash.com/photo-1497899236524-c79659901d7c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
pic.style.width = '200px';
pic.classList.add('pic');
document.querySelector('body').append(pic);
pic.addEventListener('mouseenter', () => {
  const rotation = Math.floor(Math.random() * 360);
  const x = Math.floor(document.body.clientWidth * Math.random());
  const y = Math.floor(document.body.clientHeight * Math.random());
  pic.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
  pic.style.cursor = 'pointer';
});
// const movePic = setInterval(() => {
//   const x = Math.floor(document.body.clientWidth * Math.random());
//   const y = Math.floor(document.body.clientHeight * Math.random());
//   pic.style.transform = `translate(${x}px, ${y}px)`;
// }, 500);



