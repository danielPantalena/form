// initialize the select element
$(document).ready(function () {
  $('select').formSelect();
});
// initialize side nav
$(document).ready(function () {
  $('.sidenav').sidenav();
});
// initialize date picker
$(document).ready(function () {
  $('.datepicker').datepicker();
});
// validation
$('form').validate({
  errorClass: 'invalid',
  rules: {
    first_name: {
      required: true,
      minlength: 5,
      maxlength: 20,
    },
    last_name: {
      required: true,
      minlength: 5,
    },
    email: {
      required: true,
      email: true,
      maxlength: 50,
    },
    CPF: {
      required: true,
      minlength: 11,
      maxlength: 11,
    },
    adress: {
      required: true,
      maxlength: 200,
    },
    city: {
      required: true,
      maxlength: 28,
    },
    state: {
      required: true,
    },
    home: {
      required: true,
    },
    cv: {
      required: true,
      maxlength: 1000,
    },
    jobTitle: {
      required: true,
    },
    date: {
      date: true,
      required: true,
    },
  },
  errorElement: 'div',
  errorPlacement: function (error, element) {
    if (element[0].type !== 'radio') {
      let placement = $(element).data('error');
      if (placement) {
        $(placement).append(error);
      } else {
        error.insertAfter(element);
      }
    }
  },
});
// submit form
function submitForm(event) {
  event.preventDefault();
  if ($('form').valid()) {
    const resultsDiv = document.createElement('div');
    const infos = event.target.elements;
    resultsDiv.className = 'container z-depth-3';
    resultsDiv.style.padding = '2% 2%';
    for (let i = 0; i < infos.length; i += 1) {
      if (infos[i].name !== '' && infos[i].type !== 'submit') {
        if (infos[i].type === 'radio') {
          if (infos[i].checked) {
            let resultChild = document.createElement('P');
            resultChild.innerHTML = `${infos[i].name}: ${infos[i].value} <br>`;
            resultsDiv.appendChild(resultChild);
          }
        } else {
          let resultChild = document.createElement('P');
          resultChild.innerHTML = `${infos[i].name}: ${infos[i].value} <br>`;
          resultsDiv.appendChild(resultChild);
        }
      }
    }
    document.body.appendChild(resultsDiv);
    document.getElementById('form-container').style.display = 'none';
  } else {
    return alert('Please, complete the form before submit')
  }
}

window.onload = () => {
  document.getElementById('form').addEventListener('submit', submitForm);
};
