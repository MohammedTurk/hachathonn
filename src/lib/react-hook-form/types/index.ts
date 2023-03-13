import type { UseFormProps, Path, GlobalError, IsAny, FieldErrorsImpl, FieldErrors, DeepRequired, Control, UseFormRegister,UseFieldArrayAppend,UseFieldArrayRemove } from "react-hook-form";
import {  } from "react-hook-form";

export type FieldValues = Record<string, any>;

export type FieldNames<TFieldValues> =
  | Path<TFieldValues>
  | Path<TFieldValues>[]
  | readonly Path<TFieldValues>[]
  | undefined;

export type { UseFormProps ,FieldErrors,UseFormRegister,UseFieldArrayAppend,UseFieldArrayRemove,Control};
 