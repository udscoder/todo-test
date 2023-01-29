window.addEventListener('DOMContentLoaded', () => {
    const savingsPage = document.querySelector('.savings_page'),
        enterInput = document.querySelector('.entering_input'),
        enterBtn = document.querySelector('.enter_btn')







    function createTodo() {

        if(enterInput.value.trim() === '') {
            alert("Enter task")
        }
        else {
            let savingsDiv = document.createElement('div');

            let savingsDivStyle = {
                width: 200,
                height: 10,
                backgroundColor: '#fff',
                marginTop: 10
            }


            savingsDiv.innerHTML = enterInput.value;


            savingsPage.appendChild(savingsDiv);
            savingsDiv.style = savingsDivStyle.backgroundColor;



            console.log(savingsDivStyle)
        }
    }

    enterBtn.addEventListener('click', () => {
        createTodo();
    })


})