
const baseUrl = 'http://localhost:3001/courses';

export const CourseServie = {

    getCourses: () => {
        const conf = {
            headers: {
                'Content-Type': 'application/json'
            },
        }
        return fetch(baseUrl, conf)
            .then((response) => response.json())
            .then((data) => data)
            .catch(error => Promise.reject('Error on get courses'));
    },


    addCourse: (course) => {

        if (Object.keys(course).length === 0 || course.name === "") return Promise.reject('The course must not be empty');

        const conf = {
            method: "post",
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json'
            },
        }

        return fetch(baseUrl, conf)
            .then((response) => response.json())
            .then((data) => data)
            .catch(error => Promise.reject('Error adding  a course'));
    },

    deleteCourse: (id) => {
        if (!id) return Promise.reject('Can not delete a course');

        const newUrl = `${baseUrl}/${id}`;

        const conf = {
            method: "delete",
            headers: {
                'Content-Type': 'application/json'
            },
        }

        return fetch(newUrl, conf)
            .then((response) => response.json())
            .then((data) => console.log({ data }))
            .catch((error) => Promise.reject('Error adding  a course'));
    }

}