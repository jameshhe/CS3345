(app => {

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];

    // Add the following method to app.calendarView....
    // ** load(tutorId)
    //      - load tutor from app.scheduler using tutorId 
    //      - select h2 tag and set it's text to 'Schedule for [[Tutor Name]]'
    //      - iteral through days collection (above)
    //            for each day:
    //              - get appointment (if there is one) from app.scheduler using tutor.id and day
    //              - select td from DOM (day should be the ID)
    //              - if appt exists, bind name and notes to td's innerHTML
    //                  - else add 'Book Appointment' button to td that call app.appointmentView.load() (with tutorId and day)
    //      - invoke app._changeView to show calendarView
    app.calendarView = {
        load: tutorId => {
            const tutor = app.scheduler.getTutor(tutorId)
            let section = document.querySelector('#calendarView')
            let h2 = section.querySelector('h2')
            let table = section.querySelector('table')
            let tbody = table.querySelector('tbody')
            let template = tbody.querySelector('template')
            tbody.innerHTML = template.outerHTML
            let fragment = document.createDocumentFragment()

            h2.innerText = `Schedule for ${tutor.name}`
            days.forEach(day => {
                let clone = template.content.cloneNode(true)
                let td_day = clone.querySelector('td:first-child')
                td_day.innerText = day
                let td_availability = clone.querySelector('td:last-child')

                let appointment = app.scheduler.getAppointment(tutorId, day)
                if (appointment) td_availability.innerHTML = `<h4>${appointment.name}</h4><p>${appointment.notes}</p>`
                else {
                    let bookButton = document.createElement('button')
                    bookButton.innerText = 'Book Appointment'
                    bookButton.onclick = () => app.appointmentView.load(tutorId, day)
                    td_availability.appendChild(bookButton)
                }
                fragment.appendChild(clone)
            })
            tbody.appendChild(fragment)
            app._changeView('calendarView')
        }
    };

})(app || (app = {}));