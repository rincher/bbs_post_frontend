import { useMutation } from "@tanstack/react-query";
import { bbsApi } from "@/lib/bbsApi";
import { BbsPostDto, ValidatePasswordRequest } from "@/types/bbs";

// 게시글 작성 훅
export const useCreatePost = () => {
  return useMutation({
    mutationFn: (postDto: BbsPostDto) => bbsApi.createPost(postDto),
    onSuccess: (data) => {
      console.log("게시글 작성 성공:", data);
    },
    onError: (error) => {
      console.error("게시글 작성 실패:", error);
    },
  });
};

// 비밀번호 검증 훅
export const useValidatePassword = () => {
  return useMutation({
    mutationFn: (request: ValidatePasswordRequest) =>
      bbsApi.validatePassword(request),
    onSuccess: (data) => {
      console.log("비밀번호 검증 결과:", data);
    },
    onError: (error) => {
      console.error("비밀번호 검증 실패:", error);
    },
  });
};
