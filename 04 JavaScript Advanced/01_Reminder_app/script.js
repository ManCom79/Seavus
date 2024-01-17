// Create a reminder app
// There should be:
// - An input for entering the title
// - An input for entering priority
// - An input for color
// - A textarea for adding a description
// - A button for adding the reminder
// - A button for showing all reminders
// When the button for adding is clicked an object needs to be created with the properties from the inputs ( title, priority, color, and description )
// The object should then be added to an array of reminders
// When the button for showing all reminders is clicked it should show a table with title, priority, and description columns
// The title should be the color of the "color" property

let reminders = []
let tableHolder = document.getElementById("tableHolder")
let reminderTitle = document.getElementById("title")
let reminderColor = document.getElementById("color")
let reminderPriority = document.getElementById("priority")
let reminderDescription = document.getElementById("textArea")
let btnAddReminder = document.getElementById("btnAddReminder")
let btnShowReminders = document.getElementById("btnShowReminders")



function createReminderObject (title, color, priority, description) {
    this.title = title;
    this.color = color;
    this.priority = priority;
    this.description = description;
    return this
}

function createTable() {
    tableHolder.innerHTML = 
    `<table border="1">
        <thead>
            <th>Title</th>
            <th>Priority</th>
            <th>Description</th>
        </thead>
        <tbody id="tableBody">
        </tbody>
        </table>`
    let tableBody = document.getElementById("tableBody")
    for (let i = 0; i < reminders.length; i++) {
        tableBody.innerHTML += `
        <tr>
            <td style="color: ${reminders[i].color};">${reminders[i].title}</td>
            <td>${reminders[i].priority}</td>
            <td>${reminders[i].description}</td>
        </tr>
        `
    }
}

btnAddReminder.addEventListener("click", function() {
    if(reminderTitle.value !== "") {
        let newReminder = new createReminderObject(reminderTitle.value, reminderColor.value, reminderPriority.value, reminderDescription.value)
        reminders.unshift(newReminder)
    }
    console.log(reminders);
    reminderTitle.value = ""
    reminderDescription.value = ""
})


btnShowReminders.addEventListener("click", function() {
    createTable()
})

        // console.log(reminders[i].color);
        // console.log(reminders[i].title);
        // console.log(reminders[i].priority);
        // console.log(reminders[i].description);