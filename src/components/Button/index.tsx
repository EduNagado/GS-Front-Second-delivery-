"use client";

import { ButtonHTMLAttributes, PropsWithChildren, MouseEvent, useCallback } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  handleClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  backgroundColor?: string;
  textColor?: string;
  loading?: boolean; // Adicionando a propriedade `loading`
}

export default function Button({
  children,
  handleClick,
  disabled,
  loading = false, // Valor padrão para `loading`
  className = "",
  backgroundColor = "blue",
  textColor = "white",
  ...props
}: ButtonProps) {
  const onHandleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (handleClick instanceof Function && !disabled && !loading) {
        handleClick(e);
      }
    },
    [handleClick, disabled, loading]
  );

  return (
    <button
      {...props}
      onClick={onHandleClick}
      className={`px-4 py-2 text-${textColor} rounded ${
        disabled || loading
          ? "bg-gray-300 cursor-not-allowed"
          : `bg-${backgroundColor}-500 hover:bg-${backgroundColor}-700`
      } ${className}`}
      disabled={disabled || loading} // Desabilita o botão durante o carregamento
    >
      {loading ? "Carregando..." : children} {/* Exibe "Carregando..." enquanto `loading` for true */}
    </button>
  );
}
