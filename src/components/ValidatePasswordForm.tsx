"use client";

import { useState } from "react";
import { useValidatePassword } from "@/hooks/useBbs";

export default function ValidatePasswordForm() {
  const [postId, setPostId] = useState<number | "">("");
  const [password, setPassword] = useState("");

  const validatePasswordMutation = useValidatePassword();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (postId === "" || !password) {
      alert("게시글 ID와 비밀번호를 모두 입력해주세요.");
      return;
    }

    try {
      const result = await validatePasswordMutation.mutateAsync({
        postId: Number(postId),
        password,
      });

      alert(result);

      // 성공 시 폼 초기화
      if (result === "인증 성공") {
        setPostId("");
        setPassword("");
      }
    } catch (error) {
      alert("비밀번호 검증 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">비밀번호 검증</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="postId" className="block text-sm font-medium mb-2">
            게시글 ID
          </label>
          <input
            type="number"
            id="postId"
            value={postId}
            onChange={(e) =>
              setPostId(e.target.value === "" ? "" : Number(e.target.value))
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="게시글 ID를 입력하세요"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="비밀번호를 입력하세요"
          />
        </div>

        <button
          type="submit"
          disabled={validatePasswordMutation.isPending}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {validatePasswordMutation.isPending ? "검증 중..." : "비밀번호 검증"}
        </button>
      </form>
    </div>
  );
}
