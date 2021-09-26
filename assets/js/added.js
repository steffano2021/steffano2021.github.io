// added by me

const copyEmail = document.querySelector('#copy-email');
const copyNumber = document.querySelector('#copy-number');

copyEmail.addEventListener('click', async () => {
    const promise = await navigator.clipboard.writeText('steffano.espinoza10@gmail.com')
});

copyNumber.addEventListener('click', async () => {
    const promise = await navigator.clipboard.writeText('(209) 487-4586')
});
