'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Eye, EyeOff, Upload, User, Mail, Lock, ArrowLeft } from 'lucide-react';

interface SignupData {
  email: string;
  password: string;
  retypePassword: string;
}

interface LoginData {
  email: string;
  password: string;
}

function AuthPages() {
  const [currentPage, setCurrentPage] = useState<'signup' | 'login'>('signup');
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [profileImagePreview, setProfileImagePreview] = useState<string | null>(null);

  const [signupData, setSignupData] = useState<SignupData>({
    email: '',
    password: '',
    retypePassword: ''
  });

  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: ''
  });

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        if (event.target && typeof event.target.result === 'string') {
          setProfileImagePreview(event.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSignupChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (signupData.password !== signupData.retypePassword) {
      alert('Passwords do not match!');
      return;
    }
    // Here you would send signupData and profileImage to your backend
    alert('Sign up successful! (Check console for data)');
    console.log('Signup data:', signupData, 'Profile image:', profileImage);
  };

  const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would send loginData to your backend
    alert('Login successful! (Check console for data)');
    console.log('Login data:', loginData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-gray-100">
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${currentPage === 'signup' ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gradient-to-r from-purple-500 to-blue-600'}`}> 
              {currentPage === 'signup' ? <User className="w-8 h-8 text-white" /> : <Lock className="w-8 h-8 text-white" />}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {currentPage === 'signup' ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="text-gray-600">
              {currentPage === 'signup' ? 'Join us and start your journey' : 'Sign in to your account'}
            </p>
          </div>

          {currentPage === 'signup' ? (
            <form className="space-y-6" onSubmit={handleSignupSubmit}>
              {/* Profile Picture Upload */}
              <div className="text-center">
                <div className="relative inline-block">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors cursor-pointer overflow-hidden">
                    {profileImagePreview ? (
                      <img 
                        src={profileImagePreview} 
                        alt="Profile preview" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Upload className="w-8 h-8 text-gray-400" />
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">Upload profile picture</p>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={signupData.email}
                    onChange={handleSignupChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    value={signupData.password}
                    onChange={handleSignupChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Retype Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showRetypePassword ? "text" : "password"}
                    name="retypePassword"
                    required
                    value={signupData.retypePassword}
                    onChange={handleSignupChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowRetypePassword(!showRetypePassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showRetypePassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Create Account
              </button>
            </form>
          ) : (
            <form className="space-y-6" onSubmit={handleLoginSubmit}>
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={loginData.email}
                    onChange={handleLoginChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    value={loginData.password}
                    onChange={handleLoginChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <button type="button" className="text-sm text-purple-500 hover:text-purple-700">
                  Forgot password?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Sign In
              </button>
            </form>
          )}

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {currentPage === 'signup' ? (
                <>
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setCurrentPage('login')}
                    className="text-blue-500 hover:text-blue-700 font-medium"
                  >
                    Sign in
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setCurrentPage('signup')}
                    className="inline-flex items-center text-purple-500 hover:text-purple-700 font-medium mb-2"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1" /> Back to Sign Up
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPages;