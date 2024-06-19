/** GENERAL FEEDBACK:
 *
 */

const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    const formValues = Object.fromEntries(new FormData(form))
    console.log(formValues)
    form.reset();
};

document.querySelector('form').addEventListener('submit', handleSubmit);