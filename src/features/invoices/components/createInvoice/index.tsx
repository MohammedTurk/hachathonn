import React, { useState } from "react";
import useForm, { useFieldArray } from "lib/react-hook-form";
import {
  CreateInvoiceFormInputsForPreviewType,
  CreateInvoiceFormInputsType,
} from "features/invoices/types";
import Preview from "./components/preview";

export const CreateWrapper = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [previewValues, setPreviewValues] =
    useState<CreateInvoiceFormInputsForPreviewType>({
      firstName: "",
      lastName: "",
      email: "",

      fixed: [
        {
          itemName: "",
          description: "",
          price: 0,
        },
      ],
    });
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrorOnChange,
    watch,
    control,
  } = useForm<CreateInvoiceFormInputsType>({
    defaultValues: {
      fixed: [
        {
          itemName: "",
          price: undefined,
          description: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "fixed",
    control,
  });
  const onSubmit = handleSubmit((data) => {
    console.log("submitted");
  });

  const handlePreviewValues = (
    dataName: keyof typeof previewValues.fixed[0],
    dataValue: string | number,
    isJobDetails?: boolean,
    index?: number
  ) => {
    if (isJobDetails !== undefined && index !== undefined) {
      const values = {
        ...previewValues,
      };
      if (!values.fixed[index]) {
        values.fixed[index] = {
          itemName: "",
          description: "",
          price: 0,
        };
      }
      let targetVal = { ...values.fixed[index] };
      targetVal = {
        ...targetVal,
        [dataName]: dataValue,
      };
      values.fixed[index] = targetVal;

      setPreviewValues({ ...values });
      console.log(previewValues);
    } else {
      setPreviewValues({
        ...previewValues,
        [dataName]: dataValue,
      });
      console.log(previewValues);

    }
  };

  const removeFromPreviewValues = (indexToDelete: number) => {
    const values = {
      ...previewValues,
    };
    const filteredValues = values.fixed.filter(
      (_, index) => index !== indexToDelete
    );
    values.fixed =filteredValues
    setPreviewValues({...values});
    console.log(previewValues);
  };

  return (
    <div className="flex gap-12">
      <div className="w-[45%]">
        {React.cloneElement(children, {
          ...{
            register,
            onSubmit,
            errors,
            clearErrorOnChange,
            fields,
            append,
            remove,
            control,
            watch,
            handlePreviewValues,
            removeFromPreviewValues,
          },
        })}
      </div>
      <div>
        <span className="text-md mb-2 block text-gray-dark font-medium">
          Preview
        </span>
        <Preview watch={watch} />
      </div>
    </div>
  );
};
export default CreateWrapper;
