(app => {

    // The "scheduler" is in charge of managing tutor schedules.

    // set properties: id, name and skills
    class Tutor {
        constructor(id, name, skills) {
            this.id = id
            this.name = name
            this.skills = skills
        }
    }

    // set properties: tutorId, day, name and notes
    class Appointment {
        constructor(tutorId, day, name, notes){
            this.tutorId = tutorId
            this.day = day
            this.name = name
            this.notes = notes
        }
    }

    app.Tutor = Tutor;
    app.Appointment = Appointment;

    const tutors = [
        new Tutor(1, "John", [".NET", "Angular"]),
        new Tutor(2, "David", ["React", "Node"]),
        new Tutor(3, "Karen", ["Angular", "View"]),
        new Tutor(4, "Janet", ["REST Services", "SQL"]),
        new Tutor(5, "David", [".NET"])
    ];

    let appointments = [
        new Appointment(1, 'Monday', 'Sally', 'I need lots of Angular help!')
    ];

    // Add the following methods to app.scheduler....
    app.scheduler = {
        // ** getTutors() - returns all tutors
        getTutors: () => tutors,
        // ** getTutor(tutorId) - return tutor with given Id
        getTutor: tutorId => tutors.find(tutor => tutor.id === tutorId),
        // ** getAppointments() - return all appointments
        getAppointments: () => appointments,
        // ** getAppointment(tutorId, day) - return all appointments for given tutor and day
        getAppointment: (tutorId, day) => appointments.find(appointment => ((appointment.tutorId == tutorId) && (appointment.day == day))),
        // ** saveAppointment(appt) - add passed appointment to local variable
        saveAppointment: appt => appointments.push(new Appointment(...appt))

    };

})(app || (app = {}));