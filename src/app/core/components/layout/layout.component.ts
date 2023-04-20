import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor(private studentService: StudentService) {
    this.studentList$ = this.studentService.getStudentList().pipe(
      map((student) => {
        return student.map((obj) => ({
          ...obj,
          isApproved: obj.qualification >= 7
        }))
      })
    )
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  };

}
