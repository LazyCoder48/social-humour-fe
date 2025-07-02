import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { User } from '../models/user.model';

export interface SocialUser {
  id: string;
  name: string;
  email: string;
  photoUrl: string;
  provider: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private apiUrl = 'api/auth'; // Replace with your actual API URL

  constructor(private http: HttpClient) {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }

  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(credentials: { identifier: string; password: string }): Observable<any> {
    return this.http.post<{ user: User; token: string }>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(response => {
          // Store user details and token in local storage
          localStorage.setItem('currentUser', JSON.stringify(response.user));
          localStorage.setItem('token', response.token);
          this.currentUserSubject.next(response.user);
        })
      );
  }

  logout(): void {
    // Remove user from local storage
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  // Social login methods
  loginWithGoogle(): Observable<any> {
    // In a real implementation, this would use the Google OAuth API
    // For now, we'll simulate a successful login with mock data
    const mockGoogleUser: SocialUser = {
      id: 'google123',
      name: 'Google User',
      email: 'google.user@example.com',
      photoUrl: 'https://example.com/photo.jpg',
      provider: 'GOOGLE'
    };

    return this.handleSocialLogin(mockGoogleUser);
  }

  loginWithFacebook(): Observable<any> {
    // In a real implementation, this would use the Facebook OAuth API
    // For now, we'll simulate a successful login with mock data
    const mockFacebookUser: SocialUser = {
      id: 'facebook123',
      name: 'Facebook User',
      email: 'facebook.user@example.com',
      photoUrl: 'https://example.com/photo.jpg',
      provider: 'FACEBOOK'
    };

    return this.handleSocialLogin(mockFacebookUser);
  }

  loginWithTwitter(): Observable<any> {
    // In a real implementation, this would use the Twitter OAuth API
    // For now, we'll simulate a successful login with mock data
    const mockTwitterUser: SocialUser = {
      id: 'twitter123',
      name: 'Twitter User',
      email: 'twitter.user@example.com',
      photoUrl: 'https://example.com/photo.jpg',
      provider: 'TWITTER'
    };

    return this.handleSocialLogin(mockTwitterUser);
  }

  private handleSocialLogin(socialUser: SocialUser): Observable<any> {
    // In a real implementation, this would send the social user data to your backend
    // to verify and create/retrieve the user account
    // For now, we'll simulate a successful login

    // Convert social user to app user
    const user: User = {
      id: socialUser.id,
      username: socialUser.name.replace(' ', '.').toLowerCase(),
      email: socialUser.email,
      firstName: socialUser.name.split(' ')[0],
      lastName: socialUser.name.split(' ').length > 1 ? socialUser.name.split(' ')[1] : '',
      // Add other required fields as needed
    };

    // Simulate token
    const token = `mock_token_${socialUser.provider.toLowerCase()}_${Date.now()}`;

    // Store user details and token in local storage
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('token', token);
    this.currentUserSubject.next(user);

    return of({ user, token });
  }
}
