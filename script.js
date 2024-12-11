$(document).ready(function () {
    $('#registrationForm').on('submit', function (e) {
      e.preventDefault();
  
      const formData = $(this).serialize();
  
      $.post('submit.php', formData, function (response) {
        $('#successMessage').html(response).fadeIn();
        $('#registrationForm')[0].reset();
      });
    });
  });
  