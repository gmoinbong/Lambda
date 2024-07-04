const inquirer = require('inquirer');

const questions = [{
    type: "input",
    name: "name",
    message: "Enter your name or press Enter to finish",
    validate(value) {
        if (value === "") {
            return true;
        }
        const pass = value.match(
            /^[A-Za-z]+$/
        );
        if (pass) {
            return true;
        }
        return "Please enter a valid name";
    }

},
{
    type: "list",
    name: "gender",
    message: "Choose your gender",
    choices: ["male", "female"],
    when(answers) {
        return answers.name !== "";
    }
},
{
    type: "input",
    name: "age",
    message: "Enter your age",
    validate(value) {
        const pass = value.match(
            /^(?:1[01][0-9]|120|[1-9][0-9]?)$/);
        if (pass) {
            return true;
        }
        return "Please enter a valid age";
    },
    when(answers) {
        return answers.name !== "";
    }
}]

const confirmExitQuestion = {
    type: "confirm",
    name: "confirmExit",
    message: "Do you want to exit?",
    default: true
}

const searchUserQuestion = {
    type: "confirm",
    name: "confirmSearch",
    message: "Do you want to search user?",
    default: true
}

const searchNameQuestion = {
    type: "input",
    name: "searchName",
    message: "Enter the name to search for:"
}

const searchUser = (name, users) => {
    const user = users.find(user => user.name.toLowerCase() === name.toLowerCase());
    return user;
}

const questionsPrompt = async () => {
    let answers = [];
    while (true) {
        console.log("answers", answers);
        const nameAnswer = await inquirer.prompt([questions[0]]);
        if (nameAnswer.name === "") {
            const confirmExit = await inquirer.prompt(confirmExitQuestion);
            if (confirmExit.confirmExit) {
                const searchUserConfirm = await inquirer.prompt(searchUserQuestion);
                if (searchUserConfirm.confirmSearch) {
                    const searchNameAnswer = await inquirer.prompt(searchNameQuestion);
                    const user = searchUser(searchNameAnswer.searchName, answers);
                    if (user) {
                        console.log(`User found ${JSON.stringify(user, null, 2)}`);
                    } else {
                        console.log("User not found");
                    }
                } else {
                    console.log("App exiting");
                    break;
                }
            } else {
                continue;
            }
        } else {
            const otherAnswers = await inquirer.prompt(questions.slice(1));
            const currentAnswers = { ...nameAnswer, ...otherAnswers };
            answers.push(currentAnswers);
            console.log(JSON.stringify(answers, null, "  "));
        }
    }
}

questionsPrompt();
