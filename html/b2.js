const form = document.getElementById('ex2-form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // co dong nay khi submit k tai lai trang
    const first = form.elements['f-name'].value;
    const last = form.elements['l-name'].value;
    document.getElementById('ex2-out').textContent =
    `First name: ${first}\nLast name: ${last}`;
})