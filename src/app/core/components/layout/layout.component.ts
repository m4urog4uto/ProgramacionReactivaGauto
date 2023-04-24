import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';

import { Student } from 'src/app/shared/models';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnDestroy {
  isLoading: boolean = false;
  studentList$: Observable<Student[]>;
  destroyed$ = new Subject<void>();
  startStudent: Student[] = [];

  constructor(private studentService: StudentService) {
    this.studentList$ = this.studentService.getStudentList();
    this.studentService.getStarStudent()
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe((stars) => this.startStudent = stars);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  };

}
