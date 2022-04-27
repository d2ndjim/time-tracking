const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');

const workH = document.getElementById('workhrs');
const workL = document.getElementById('worklst');
const playH = document.getElementById('playhrs');
const playL = document.getElementById('playlst');
const studyH = document.getElementById('studyhrs');
const studyL = document.getElementById('studylst');
const exerciseH = document.getElementById('exercisehrs');
const exerciseL = document.getElementById('exerciselst');
const socialH = document.getElementById('socialhrs');
const socialL = document.getElementById('sociallst');
const selfH = document.getElementById('selfhrs');
const selfL = document.getElementById('selflst');

daily.addEventListener('click', () => {
  daily.classList.toggle('active');
  weekly.classList.remove('active');
  monthly.classList.remove('active');
  workH.textContent = '5hrs';
  workL.textContent = 'Last Day - 7hrs';
  playH.textContent = '1hrs';
  playL.textContent = 'Last Day - 2hrs';
  studyH.textContent = '0hrs';
  studyL.textContent = 'Last Day - 1hrs';
  exerciseH.textContent = '1hrs';
  exerciseL.textContent = 'Last Day - 1hrs';
  socialH.textContent = '1hrs';
  socialL.textContent = 'Last Day - 3hrs';
  selfH.textContent = '0hrs';
  selfL.textContent = 'Last Day - 1hrs';
});

weekly.addEventListener('click', () => {
  weekly.classList.toggle('active');
  daily.classList.remove('active');
  monthly.classList.remove('active');
  workH.textContent = '32hrs';
  workL.textContent = 'Last Week - 36hrs';
  playH.textContent = '10hrs';
  playL.textContent = 'Last Week - 8hrs';
  studyH.textContent = '4hrs';
  studyL.textContent = 'Last Week - 7hrs';
  exerciseH.textContent = '4hrs';
  exerciseL.textContent = 'Last Week - 5hrs';
  socialH.textContent = '5hrs';
  socialL.textContent = 'Last Week - 10hrs';
  selfH.textContent = '2hrs';
  selfL.textContent = 'Last Week - 2hrs';
});

monthly.addEventListener('click', () => {
  monthly.classList.toggle('active');
  daily.classList.remove('active');
  weekly.classList.remove('active');
  workH.textContent = '103hrs';
  workL.textContent = 'Last Month - 128hrs';
  playH.textContent = '23hrs';
  playL.textContent = 'Last Month - 29hrs';
  studyH.textContent = '13hrs';
  studyL.textContent = 'Last Month - 19hrs';
  exerciseH.textContent = '11hrs';
  exerciseL.textContent = 'Last Month - 18hrs';
  socialH.textContent = '21hrs';
  socialL.textContent = 'Last Month - 23hrs';
  selfH.textContent = '7hrs';
  selfL.textContent = 'Last Month - 11hrs';
});