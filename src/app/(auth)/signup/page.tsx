'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LogoSvg = () => (
  <svg width="36" height="36" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ng-signup" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#F5A623" />
        <stop offset="100%" stopColor="#E8820C" />
      </linearGradient>
    </defs>
    <g transform="translate(100,100)">
      <path d="M0,-70 C5,-22 22,-5 0,0 C-22,-5 -5,-22 0,-70Z" fill="url(#ng-signup)" />
      <path d="M0,70 C-5,22 -22,5 0,0 C22,5 5,22 0,70Z" fill="url(#ng-signup)" />
      <path d="M-70,0 C-22,5 -5,22 0,0 C-5,-22 -22,-5 -70,0Z" fill="url(#ng-signup)" />
      <path d="M70,0 C22,-5 5,-22 0,0 C5,22 22,5 70,0Z" fill="url(#ng-signup)" />
    </g>
  </svg>
);

export default function SignupPage() {
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
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        router.push('/login');
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.message || 'Registration failed. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
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
          Create your account
        </h1>

        <p style={{
          fontSize: '0.88rem',
          color: '#4B5563',
          textAlign: 'center',
          marginBottom: '1.5rem',
        }}>
          Start for free. No credit card required.
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
              type="email"
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
            {loading ? 'Creating account...' : 'Create account'}
          </button>
        </form>

        <p style={{
          textAlign: 'center',
          marginTop: '1.25rem',
          fontSize: '0.85rem',
          color: '#4B5563',
        }}>
          Already have an account?{' '}
          <Link href="/login" style={{ color: '#4B5563', fontWeight: 500, textDecoration: 'none' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#1B2A4A'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#4B5563'; }}
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
