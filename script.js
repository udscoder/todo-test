window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.title');
    let savingsPage = document.querySelector('.savings_page'),
        enterInput = document.querySelector('.entering_input'),
        enterBtn = document.querySelector('.enter_btn'),

        theme = document.querySelector('.theme'),
        modeChangeBtn = document.querySelector('.mode_btn'),
        darkMode = localStorage.getItem('dark-mode') ,
        subtitles = document.querySelectorAll('.subtitles')


    const enableDarkMode = () => {
        theme.classList.add('dark-mode-style')
        for (let i = 0; i < subtitles.length; i++ ) {
            subtitles[i].classList.remove('light-mode-subtitle')
            subtitles[i].classList.add('dark-mode-subtitle')
        }
        modeChangeBtn.classList.remove("dark-mode-toggle");
        localStorage.setItem("dark-mode", 'enabled');
    };
    const disableDarkMode = () => {
        theme.classList.remove('dark-mode-style')
        for (let i = 0; i < subtitles.length; i++ ) {
            subtitles[i].classList.remove('dark-mode-subtitle')
            subtitles[i].classList.add('light-mode-subtitle')
        }
        modeChangeBtn.classList.add("dark-mode-toggle");
        localStorage.setItem("dark-mode", 'disabled');
    };

    if (darkMode === 'enabled') {
        enableDarkMode();
    }

    modeChangeBtn.addEventListener("click", () => {
        darkMode = localStorage.getItem("dark-mode");
        if (darkMode === 'disabled') {
            enableDarkMode();

        } else {
            disableDarkMode();
        }
    });


    const createDeleteBtn = (savingDiv) => {
        let deleteBtn = document.createElement('button');

        deleteBtn.innerHTML = 'Delete'

        deleteBtn.classList.add('delete_btn')

        savingDiv.appendChild(deleteBtn)

        deleteBtn.addEventListener('click', () => {
            savingDiv.remove();
        })
    }


    const createTodo = () => {

        if(enterInput.value.trim() === '') {
            alert("Enter task")
        }
        else {
            let savingsDiv = document.createElement('div'),
                text = document.createElement('div');

            savingsPage.appendChild(savingsDiv);
            savingsDiv.appendChild(text)

            savingsDiv.classList.add('savings_div')

            text.innerHTML = enterInput.value;

            enterInput.value = '';
            createDeleteBtn(savingsDiv)
        }
    }



    enterBtn.addEventListener('click', () => {
        createTodo()
    })

})








// const applyStyle = (domNode, styleObject) => {
//     for (const property in styleObject) {
//         domNode.style[property] = styleObject[property];
//     }
// }
//
//
// const styleTwo = (domNodes, styleObject) => {
//     Array.from(domNodes).forEach(domNode => {
//         for (const property in styleObject) {
//             domNode.style[property] = styleObject[property];
//         }
//     })
// }
























