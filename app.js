
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('reminder-form');
    const taskInput = document.getElementById('task');
    const timeInput = document.getElementById('time');
    const remindersList = document.getElementById('reminders-list');

    
    let reminders = [];

    
    function createReminder(task, time) {
        const reminder = {
            task: task,
            time: time,
            id: Date.now() 
        };
        reminders.push(reminder);
        renderReminders();
        checkReminder(reminder); 
    }

    
    function renderReminders() {
        remindersList.innerHTML = '';
        reminders.forEach((reminder) => {
            const li = document.createElement('li');
            li.textContent = `${reminder.task} at ${reminder.time}`;
            remindersList.appendChild(li);
        });
    }

    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const task = taskInput.value;
        const time = timeInput.value;

        if (task && time) {
            createReminder(task, time);
            taskInput.value = ''; 
            timeInput.value = '';
        }
    });

    
    function checkReminder(reminder) {
        const reminderTime = reminder.time.split(':');
        const reminderHour = parseInt(reminderTime[0]);
        const reminderMinute = parseInt(reminderTime[1]);

    
        setInterval(() => {
            const now = new Date();
            const currentHour = now.getHours();
            const currentMinute = now.getMinutes();

            
            if (currentHour === reminderHour && currentMinute === reminderMinute) {
                alert(`Reminder: ${reminder.task}`);
            }
        }, 60000); 
    }
});

