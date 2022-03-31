export interface IDefaultResponseDTO<T> {
  content?: T;
  status: "success" | "error";
}
