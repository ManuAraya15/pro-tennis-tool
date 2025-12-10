"use client"

import { login } from "@/actions/auth";
import { useActionState } from "react";


const LoginPage = () => {

    const [state, formAction] = useActionState(login, null);

  return (
    <div className="flex items-center justify-center min-h-screen px-3">
      {/* Contenedor del formulario centrado */}
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-primary">
          Iniciar Sesión
        </h2>

        {state?.success == false && state?.message &&
          <div className='fixed left-0 bottom-0 w-full p-5'>
            <div className='bg-error-container border border-error text-error rounded-lg p-3 w-max mx-auto'>
              {state?.message} 
            </div>
          </div>        
        }

        <form action={formAction} className="space-y-6">
          {/* Campo de Correo Electrónico */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo Electrónico
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="tu.correo@ejemplo.com"
              />
            </div>
          </div>

          {/* Campo de Contraseña */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Boton de Enviar */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Entrar
            </button>
          </div>
        </form>

        {/* Enlace o texto adicional */}
        <div className="text-sm text-center">
          <a
            href="/register"
            className="font-medium text-primary hover:text-primary"
          >
            ¿No tienes cuenta? Registrate
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;