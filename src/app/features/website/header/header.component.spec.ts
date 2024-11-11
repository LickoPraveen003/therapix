import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a navigation bar', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('nav')).toBeTruthy();
  });

  it('should have navigation links', () => {
    const compiled = fixture.nativeElement;
    const links = compiled.querySelectorAll('nav ul li a');
    expect(links.length).toBe(6);
    expect(links[0].textContent).toContain('Home');
    expect(links[1].textContent).toContain('About');
    expect(links[2].textContent).toContain('Contact Us');
    expect(links[3].textContent).toContain('Blogs');
    expect(links[4].textContent).toContain('Podcast');
    expect(links[5].textContent).toContain('Book a Call');
  });
});
