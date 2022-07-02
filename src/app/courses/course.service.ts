import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course";

@Injectable({
    providedIn: 'root' //provideIn let it load this service class when the root archive starts.
})
export class CourseService {

    private coursesUrl: string = 'http://localhost:3100/api/courses';

    constructor(private httpClient: HttpClient) {}

    retrieveAll(): Observable<Course[]> {
        return this.httpClient.get<Course[]>(this.coursesUrl);
    }

    retrieveById(id: number): Observable<Course> {
        return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`);
    }

    save(course: Course): Observable<Course> { // used for updates in courses.
            if (course.id) {
                return this.httpClient.put<Course>(`${this.coursesUrl}/${course.id}`, course);
            } else {
                return this.httpClient.post<Course>(`${this.coursesUrl}`, course);
            }
    }

    deleteById(id: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.coursesUrl}/${id}`);
    }

}

let COURSES: Course[] = [
    {
        id: 1,
        name: 'Angular: CLI',
        releaseDate: 'July 27, 2022',
        description: 'In this course, the students will achieve knowledge in the main resources of CLI.',
        duration: 120,
        code: 'XLF 1212',
        rating: 3,
        price: 12.99,
        imageUrl: '/assets/images/cli.png',
    },
    {
        id: 2,
        name: 'Angular: Forms',
        releaseDate: 'July 1, 2022',
        description: 'In this course, the students will achieve knowledge in the main available resources of the Forms module.',
        duration: 80,
        code: 'DWQ 3412',
        rating: 3.5,
        price: 24.99,
        imageUrl: '/assets/images/forms.png',
    },
    {
        id: 3,
        name: 'Angular: HTTP',
        releaseDate: 'July 8, 2022',
        description: 'In this course, the students will achieve knowledge in the main available resources of the HTTP module.',
        duration: 80,
        code: 'QPL 0913',
        rating: 4.0,
        price: 36.99,
        imageUrl: '/assets/images/http.png',
    },
    {
        id: 4,
        name: 'Angular: Router',
        releaseDate: 'July 16, 2022',
        description: 'In this course, the students will achieve knowledge in the main available resources of the Router module.',
        duration: 80,
        code: 'OHP 1095',
        rating: 4.5,
        price: 46.99,
        imageUrl: '/assets/images/router.png',
    },
    {
        id: 5,
        name: 'Angular: Animations',
        releaseDate: 'July 30, 2022',
        description: 'In this course, the students will achieve knowledge in the main resources of Animation.',
        duration: 80,
        code: 'PWY 9381',
        rating: 5,
        price: 56.99,
        imageUrl: '/assets/images/animations.png',
    },
];