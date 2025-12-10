"use client"

import { signup } from '@/actions/auth';
import { useActionState } from 'react';

const SignUpPage = () => {

const [state, formAction] = useActionState(signup, null);

  return (
    <div className="flex items-center justify-center min-h-screen px-3">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-primary">
          Crear una cuenta
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
              Correo Electronico
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
                autoComplete="new-password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Mínimo 8 caracteres"
              />
            </div>
          </div>


          {/* Campo de confirmar Contraseña */}
          <div>
            <label 
              htmlFor="confirm-password" 
              className="block text-sm font-medium text-gray-700"
            >
              Confirmar Contraseña
            </label>
            <div className="mt-1">
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Mínimo 8 caracteres"
              />
            </div>
          </div>

          {/* Botón de Registro */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Registrarse
            </button>
          </div>
        </form>

        {/* Enlace para volver a Iniciar Sesión */}
        <div className="text-sm text-center">
          <p className="text-gray-600">
            ¿Ya tienes una cuenta? {' '}
            <a 
              href="/login" 
              className="font-medium text-primary hover:text-primary"
            >
              Inicia Sesión
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;