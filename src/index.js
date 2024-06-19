/** GENERAL FEEDBACK:
 *
 */

const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    const formValues = Object.fromEntries(new FormData(form))
    console.log(formValues)
    const username = document.querySelector('#results-username')
    username.textContent = formValues.username;
    const codingLevel = document.querySelector('#results-coding-level')
    codingLevel.textContent = formValues.codingLevel
    const location = document.querySelector('#results-location')
    location.textContent = formValues.location;
    const assignment = document.querySelector('#results-did-like-assignment')
    formValues.didLikeAssignment = Boolean(formValues.didLikeAssignment)
    if(formValues.didLikeAssignment) {
        assignment.textContent = 'Yes'
    } else {
        assignment.textContent = 'No'
    }
    form.reset();
};

document.querySelector('form').addEventListener('submit', handleSubmit);