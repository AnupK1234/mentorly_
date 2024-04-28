import React from 'react'

const Footer = () => {
  return (
    <div class="w-full bg-gray-300">
      <footer class="mt-4">
        <div class="flex justify-between">
          <div class="ml-3">
            <strong class="text-gray-800 text-xl mb-4">StudyHub</strong>
            <br></br>
            <small class="text-gray-500">All in one productivity platform for Students in once space!</small>
          </div>
          <div class="w-100 text-right mr-3">
            <strong class="text-gray-800 mb-4">Contact Information</strong>
            <br />
            <span class="text-gray-500">Address:</span> 123 Main Street, CA
            <br />
            <span class="text-gray-500">Email:</span> info@studyhub.com
            <br />
            <span class="text-gray-500">Phone:</span> (555) 555-5555
          </div>
        </div>
        <p class="text-gray-800 text-center">
          © 2024 StudyHub
        </p>
      </footer>
    </div>
  )
}

export default Footer