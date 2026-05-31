'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LogoSvg = () => (
  <svg width="36" height="36" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ng-login" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#F5A623" />
        <stop offset="100%" stopColor="#E8820C" />
      </linearGradient>
    </defs>
    <g transform="translate(100,100)">
      <path d="M0,-70 C5,-22 22,-5 0,0 C-22,-5 -5,-22 0,-70Z" fill="url(#ng-login)" />
      <path d="M0,70 C-5,22 -22,5 0,0 C22,5 5,22 0,70Z" fill="url(#ng-login)" />
      <path d="M-70,0 C-22,5 -5,22 0,0 C-5,-22 -22,-5 -70,0Z" fill="url(#ng-login)" />
      <path d="M70,0 C22,-5 5,-22 0,0 C5,22 22,5 70,0Z" fill="url(#ng-login)" />
    </g>
  </svg>
);

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: email, password }),
      });

      if (res.ok) {
        const data = await res.json();
        const token = data.token || data.access_token;
        if (token) localStorage.setItem('umami.auth', JSON.stringify(token));
        router.push('/dashboard');
      } else {
        setError('Invalid email or password.');
      }
    } catch {
      setError('Invalid email or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#E8EAF2',
      fontFamily: "'DM Sans', sans-serif",
      padding: '2rem 1rem',
    }}>
      <div style={{
        background: '#FFFFFF',
        borderRadius: '12px',
        padding: '2.5rem',
        width: '100%',
        maxWidth: '420px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        border: '1px solid #E8ECF4',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <LogoSvg />
        </div>

        <h1 style={{
          fontSize: '1.4rem',
          fontWeight: 700,
          color: '#1B2A4A',
          textAlign: 'center',
          marginBottom: '0.25rem',
          fontFamily: "'DM Sans', sans-serif",
        }}>
          Welcome back
        </h1>

        <p style={{
          fontSize: '0.88rem',
          color: '#4B5563',
          textAlign: 'center',
          marginBottom: '1.5rem',
        }}>
          Sign in to your Nova Analytics dashboard.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{
              display: 'block',
              fontSize: '0.85rem',
              fontWeight: 500,
              color: '#1B2A4A',
              marginBottom: '0.35rem',
            }}>
              Email
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              style={{
                width: '100%',
                padding: '0.65rem 1rem',
                border: '1.5px solid #E8ECF4',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontFamily: "'DM Sans', sans-serif",
                color: '#111827',
                background: '#FFFFFF',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.15s',
              }}
              onFocus={(e) => { e.target.style.borderColor = '#F5A623'; }}
              onBlur={(e) => { e.target.style.borderColor = '#E8ECF4'; }}
            />
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{
              display: 'block',
              fontSize: '0.85rem',
              fontWeight: 500,
              color: '#1B2A4A',
              marginBottom: '0.35rem',
            }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '0.65rem 1rem',
                border: '1.5px solid #E8ECF4',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontFamily: "'DM Sans', sans-serif",
                color: '#111827',
                background: '#FFFFFF',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.15s',
              }}
              onFocus={(e) => { e.target.style.borderColor = '#F5A623'; }}
              onBlur={(e) => { e.target.style.borderColor = '#E8ECF4'; }}
            />
          </div>

          {error && (
            <div style={{
              color: '#EF4444',
              fontSize: '0.82rem',
              marginBottom: '1rem',
              textAlign: 'center',
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '0.75rem',
              background: '#F5A623',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '0.95rem',
              border: 'none',
              borderRadius: '8px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontFamily: "'DM Sans', sans-serif",
              opacity: loading ? 0.7 : 1,
              transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = '#E8820C'; }}
            onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = '#F5A623'; }}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <p style={{
          textAlign: 'center',
          marginTop: '1.25rem',
          fontSize: '0.85rem',
          color: '#4B5563',
        }}>
          Don&apos;t have an account?{' '}
          <Link href="/signup" style={{ color: '#4B5563', fontWeight: 500, textDecoration: 'none' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#1B2A4A'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#4B5563'; }}
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
