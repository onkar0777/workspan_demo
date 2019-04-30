import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerDialogComponent } from './answer-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

describe('AnswerDialogComponent', () => {
  let component: AnswerDialogComponent;
  let fixture: ComponentFixture<AnswerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnswerDialogComponent],
      imports: [FormsModule, MatInputModule, MatFormFieldModule, MatDialogModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
