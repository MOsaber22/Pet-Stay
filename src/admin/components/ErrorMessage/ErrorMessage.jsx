import React from "react";
import { HiOutlineExclamationCircle, HiOutlineArrowLeft } from "react-icons/hi";

const ErrorMessage = ({ 
  error, 
  onRetry = null, 
  onGoBack = null, 
  showBackButton = false,
  fullScreen = true 
}) => {
  const containerClasses = fullScreen
    ? "flex items-center justify-center min-h-screen"
    : "";

  return (
    <div className={containerClasses}>
      <div className="w-full max-w-md mx-auto p-6 sm:p-8">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-red-100 dark:bg-red-900/30 rounded-full blur-2xl"></div>
            <div className="relative bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-full p-4 flex items-center justify-center">
              <HiOutlineExclamationCircle className="text-4xl text-red-600 dark:text-red-500" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-gray-900 dark:to-gray-800 border-2 border-red-300 dark:border-red-700/50 rounded-2xl p-6 sm:p-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800 dark:text-red-400">
            Oops! Something went wrong
          </h2>
          
          <p className="text-red-700 dark:text-red-300 text-base leading-relaxed break-words">
            {error}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-4 border-t border-red-200 dark:border-red-700">
            {onRetry && (
              <button
                onClick={onRetry}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-300"
              >
                 Try Again
              </button>
            )}
            
            {showBackButton && onGoBack && (
              <button
                onClick={onGoBack}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-300"
              >
                <HiOutlineArrowLeft /> Go Back
              </button>
            )}
          </div>
        </div>

        <p className="text-xs text-gray-600 dark:text-gray-400 text-center mt-6">
          If this problem persists, please contact support or try refreshing the page.
        </p>
      </div>
    </div>
  );
};

export default ErrorMessage;
