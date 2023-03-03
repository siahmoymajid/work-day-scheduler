let time = new Date();
const main = document.querySelector('main');
const currentDay = document.getElementById('currentDay');
let store = localStorage.tasks ? JSON.parse(localStorage.tasks) : [];
const handleStorage = () => {
  if(!store.length) return;
  
  store.forEach((task,i) => {
    textAreas[i].value = task;
  });
};

currentDay.innerHTML = `${time.toDateString()} ${time.toLocaleTimeString()}`;

const hours = ["9:00am","10:00am","11:00am","12:00pm","1:00pm","2:00pm","3:00pm","4:00pm","5:00pm"];

hours.forEach((hour,i) => {
  
  let rH = i+9;
  let cH = time.getHours();
  
  main.innerHTML += `
    <div id="hour-9" class="row time-block ${rH<cH ? 'past' : rH>cH ? 'future' : 'present'}">
    <div class="col-2 col-md-1 hour text-center py-3">${hour}</div>
    <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
          </button>
          </div>
  `;
});

const textAreas = document.querySelectorAll('textarea');
const saveBtns = document.querySelectorAll('.saveBtn');

const handleSave = () => {
  store = [];
  textAreas.forEach(({value}) => {
    store.push(value)

    
  });

  console.log(store);

  localStorage.tasks = JSON.stringify(store);
};

$('.saveBtn').on('click',handleSave)
handleStorage();