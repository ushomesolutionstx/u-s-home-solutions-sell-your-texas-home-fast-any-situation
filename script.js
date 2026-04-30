function handleFormSubmit(e) {
  e.preventDefault();

  const firstName = document.getElementById('first-name').value;
  const phone = document.getElementById('phone').value;
  const city = document.getElementById('city').value;
  const situation = document.getElementById('situation').value;

  const params = new URLSearchParams({
    full_name: firstName,
    phone: phone,
    agent: '92578680',
    tags: 'seller-lead,texas-foreclosure',
    Content: situation + ' — City: ' + city
  });

  window.location.href = 'https://paymegpt.com/p/ArLk43aR/thank-you?' + params.toString();
}