$(document).ready(function () {
  let dayVar = moment().format('dddd, MMMM Do');
  console.log(dayVar);
  $('#currentDay').text(dayVar)
})

// function getHourDisplay(hour) {
//     if (hour > 12)
//         return (hour - 12) + ' pm';
//         if (hour === 12)
//         return '12 pm'
//         return hour + 'am';
// }

const timeBlock = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
for (let i = 0; i < timeBlock.length; i++) {
}

let currentHour = Date.now().getHours();
  $('.timeBlock').each(function(){
  var val = parseInt($(timeBlock), prop('id'));
  if (val > currentHour && val < currentHour) {
    $(timeBlock).css('background-color', 'Light Gray');
  } else if (val < currentHour && val > currentHour) {
    return $(timeBlock).css('background-color', 'Red');
  } else if (val === currentHour) {
    return $(timeBlock).css('background-color', 'Green');
  }
});

function saveInput(hour) {
  const task = document.querySelector('#textarea-${hour}').value;
  localStorage.setItem(hour, task);
}

function getRow(hour) {
  let rowDiv = document.createElement('div');
  rowDiv.setAttribute('class', 'row time-block');
  rowDiv.setAttribute('id', `hour-${hour}`);

  let labelDiv = document.createElement('div');
  labelDiv.setAttribute('class', 'col-md-1 hour');
  labelDiv.setAttribute("id", `hour-${hour}-label`);
  labelDiv.textContent = hour;

  let textAreaEL = document.createElement("textare");
  textAreaEL.setAttribute("class", "col-md-10 description past");
  textAreaEL.setAttribute("id", `textarea-${hour}`);
  if (localStorage.getItem(hour)) {
    textAreaEL.textContent = localStorage.getItem(hour);
  }

  let saveBtn = document.createElement("button");
  saveBtnEl.setAttribute("class", "btn saveBtn col-md-1 hour");
  saveBtnEl.setAttribute("id", `btn-hour-${hour}`);
  saveBtnEl.addEventListener("click", function () {
    const textEntry = document.querySelector(`#textarea-${hour}`).value;
    localStorage.setItem(hour, textEntry);

  })

  let iconEl = document.createElement("i");
  iconEl.setAttribute("class", "fas fa-save");


  body.appendChild(rowDiv);

  rowDiv.appendChild(labelDiv);
  rowDiv.appendChild(textAreaEL);
  rowDiv.appendChild(saveBtnEl);
  saveBtnEl.appendChild(iconEl);
}


