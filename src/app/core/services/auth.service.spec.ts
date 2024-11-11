import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login and store the token', () => {
    const mockResponse = { token: '12345' };
    service.login('testuser', 'testpassword').subscribe(response => {
      expect(response.token).toEqual('12345');
      expect(localStorage.getItem('token')).toEqual('12345');
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/login`);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });

  it('should remove the token on logout', () => {
    localStorage.setItem('token', '12345');
    service.logout();
    expect(localStorage.getItem('token')).toBeNull();
  });

  it('should return the token', () => {
    localStorage.setItem('token', '12345');
    expect(service.getToken()).toEqual('12345');
  });

  it('should return true if authenticated', () => {
    localStorage.setItem('token', '12345');
    expect(service.isAuthenticated()).toBeTrue();
  });

  it('should return false if not authenticated', () => {
    localStorage.removeItem('token');
    expect(service.isAuthenticated()).toBeFalse();
  });
});
