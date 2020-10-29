(app => {

    let isLoaded;

    app.homeView = {
        load: () => {
            // ** load()
            //      - if !isLoaded
            if (!isLoaded) {
                //            - get list of tutors from app.scheduler
                let tutors = app.scheduler.getTutors()
                //            - select profiles container from html
                let section = document.querySelector('#homeView')
                let profiles = section.querySelector('ul')
                //            - select profiles template from html
                let template = profiles.querySelector('template')
                //            - iterate through tutors
                tutors.forEach(tutor => {
                    //                  for each tutor:
                    //                  - create clone of profile template's content
                    //                      - hint: let newNode = profileTemplate.content.cloneNode(true);
                    let clone = template.content.cloneNode(true)
                    //                  - select and populate clone's h2 element with tutor's name
                    let h2 = clone.querySelector('h2')
                    h2.innerText = tutor.name
                    //                  - select and populate clone's p element with tutor's skills array
                    //                      - hint: tutor.skills.map(x => `<span>${x}</span>`).join('')
                    //                          - (individual spans allow for styling)
                    let p = clone.querySelector('p')
                    p.innerHTML = tutor.skills.map(x => `<span>${x}</span>`).join(' ')
                    //                  - select clone's button element and bind click event to app.calendarView.load() (passing tutorId)
                    let button = clone.querySelector('button')
                    button.onclick = () => app.calendarView.load(tutor.id)
                    //                  - append clone to profiles container
                    profiles.appendChild(clone)
                    //            - set isLoaded to true so the const list does not have to be loaded again
                    //      - invoke app._changeView to show homeView (regardless of isLoaded status)
                })
                isLoaded = true

            }
            app._changeView('homeView')
        }

    }

})(app || (app = {}));