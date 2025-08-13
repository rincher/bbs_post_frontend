import apiClient from "@/lib/api";
import { BbsPostDto, ValidatePasswordRequest } from "@/types/bbs";

export const bbsApi = {
  // 게시글 작성
  createPost: async (postDto: BbsPostDto): Promise<string> => {
    const response = await apiClient.post<string>("/append", postDto);
    return response.data;
  },

  // 비밀번호 검증
  validatePassword: async (
    request: ValidatePasswordRequest
  ): Promise<string> => {
    const response = await apiClient.get<string>("/validate", {
      params: {
        postId: request.postId,
        password: request.password,
      },
    });
    return response.data;
  },
};
