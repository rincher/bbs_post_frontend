// BBS 관련 타입 정의
export interface BbsPostDto {
  title: string;
  content: string;
  password: string;
}

export interface ValidatePasswordRequest {
  postId: number;
  password: string;
}

export interface BbsPost {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
