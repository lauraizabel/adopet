import HomePage from "pages/home/HomePage";
import LoginPage from "pages/home/LoginPage";
import ShowProfilePage from "pages/user/ShowProfilePage";
import SignUpPage from "pages/user/sign-up-page/sign-up-page";

export interface IRoutes {
  name: string;
  path: string;
  isAuthenticated: boolean;
  component: React.FC;
}

const Routes: IRoutes[] = [
  {
    component: LoginPage,
    path: "/entrar",
    name: "login",
    isAuthenticated: false,
  },
  {
    component: HomePage,
    path: "/",
    name: "homepage",
    isAuthenticated: false,
  },
  {
    component: SignUpPage,
    path: "/cadastrar",
    name: "cadastrar",
    isAuthenticated: false,
  },
  {
    component: ShowProfilePage,
    path: "/perfil/:id",
    name: "perfil usuario",
    isAuthenticated: true,
  },
];

export default Routes;

// TODO - procurar maneiras de implementar essas páginas
// <Route
//   path="/perfil/:id/cadastrar-pet"
//   exact={true}
//   component={RegisterPetPage}
// />
// <Route
//   path="/animais-cadastrados"
//   exact={true}
//   component={ShowPetsPage}
// />
