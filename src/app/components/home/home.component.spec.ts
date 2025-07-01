import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title "Social Humour"', () => {
    expect(component.title).toEqual('Social Humour');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toContain('Social Humour');
  });

  it('should have Sign Up and Login links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('a');

    expect(links.length).toBe(2);
    expect(links[0].textContent).toContain('Sign Up');
    expect(links[0].getAttribute('routerLink')).toBe('/signup');

    expect(links[1].textContent).toContain('Login');
    expect(links[1].getAttribute('routerLink')).toBe('/login');
  });
});
