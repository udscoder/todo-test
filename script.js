window.addEventListener('DOMContentLoaded', () => {
    let savingsPage = document.querySelector('.savings_page'),
        titles = document.querySelectorAll('.title'),
        enterInput = document.querySelector('.entering_input'),
        enterBtn = document.querySelector('.enter_btn'),
        myBtn = document.getElementById('myBtn');



    let theme;



    function themes() {

        myBtn.addEventListener('click', () => {

            let setTheme = document.body;

            setTheme.classList.toggle('dark-mode');


            if(setTheme.classList.contains('dark-mode')) {
                theme = 'Dark'

            }
            else {
                theme = 'Light'
            }





            localStorage.setItem('PageTheme', JSON.stringify(theme))
        })




        let GetTheme = JSON.parse(localStorage.getItem('PageTheme'))

        if(GetTheme === 'Dark') {
            document.body.classList = 'dark-mode';

        }
    }
    themes()


    function applyStyles(savingsDivStyle, deleteBtn) {
            savingsDivStyle.style.cssText =
                `
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #fff;
            margin-bottom: 5px;
            padding: 10px;
            font-size: 20px;
            `;
            deleteBtn.style.cssText = `
        background-color: dodgerblue;
        padding: 5px;
        border-radius: 4px;
        border: none;
        `

    }



    function createTodo() {

        if(enterInput.value.trim() === '') {
            alert("Enter task")
        }
        else {


            let savingsDiv = document.createElement('div'),
                text = document.createElement('div');

            savingsPage.appendChild(savingsDiv);
            savingsDiv.appendChild(text)

            text.innerHTML = enterInput.value;

            enterInput.value = '';
            deleteBtn(savingsDiv)



            let localItem = localStorage.getItem('savingsDiv')
            if (localItem === null) {
                savingsDiv = []
            }
            else {
                savingsDiv = localItem
            }
            localStorage.setItem('savingsDiv', savingsDiv.toString());
        }
    }


    function deleteBtn(savingDiv) {
        let deleteBtn = document.createElement('button');

        deleteBtn.innerHTML = 'Delete'
        savingDiv.appendChild(deleteBtn)

        applyStyles(savingDiv, deleteBtn)

        deleteBtn.addEventListener('click', () => {
            savingDiv.remove();
        })

    }



function clicks() {
    enterBtn.addEventListener('click', () => {
        createTodo()
    })
}
  clicks()
})

