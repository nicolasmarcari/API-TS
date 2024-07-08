// definição de tipagem
declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
