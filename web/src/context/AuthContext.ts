import React, { createContext } from "react";

interface AuthContextData {
  name: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider:  React.FC = ({children}) => {
  
  
}

export default AuthContext;
