import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerModule } from 'primeng/spinner';
import { InputFieldComponent } from './input-field.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('InputFieldComponent', () => {
  let component: InputFieldComponent;
  let fixture: ComponentFixture<InputFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFieldComponent ],
      imports: [ SpinnerModule, HttpClientTestingModule, FormsModule ],
      providers: [ DatePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
