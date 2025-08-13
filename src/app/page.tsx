"use client";

import CreatePostForm from "@/components/CreatePostForm";
import ValidatePasswordForm from "@/components/ValidatePasswordForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">BBS 게시판</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md">
            <CreatePostForm />
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <ValidatePasswordForm />
          </div>
        </div>
      </div>
    </main>
  );
}
