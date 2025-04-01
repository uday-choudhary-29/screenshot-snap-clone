
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '../components/Navbar';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8">Welcome back</h1>
          <div className="bg-white p-8 rounded-xl shadow-sm border">
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input type="email" id="email" placeholder="Your email" className="w-full" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <Input type="password" id="password" placeholder="Your password" className="w-full" />
              </div>
              <Link to="/forgot-password" className="text-primary text-sm block text-right">
                Forgot password?
              </Link>
              <Button className="w-full bg-primary hover:bg-primary-light">
                Login
              </Button>
            </form>
            <div className="mt-6 text-center text-sm">
              <span className="text-gray-600">Don't have an account?</span>{' '}
              <Link to="/signup" className="text-primary font-medium">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
