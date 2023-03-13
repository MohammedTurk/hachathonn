import {
  Button,
  Card,
  HelperText,
  IconButton,
  Input,
  Select,
  TextArea,
} from "components";

import { countriesList, FORM_VALIDATION, currencyList } from "data";

import { CreateInvoiceFormType } from "features/invoices/types";
import {
  ErrorIconMini,
  PlusIconMini,
  XCircleIconOutline,
} from "lib/@heroicons";

import { getFieldHelperText } from "utils";

export const CreateInvoiceForm = ({
  register,
  onSubmit,
  errors,
  clearErrorOnChange,
  fields,
  append,
  remove, 
  handlePreviewValues,
  removeFromPreviewValues
}: CreateInvoiceFormType) => {
 
 
 
  return (
    <>
      <span className=" text-base mb-2 block text-gray-dark  font-medium">
        Create New Invoice
      </span>
      <Card>
        <form onSubmit={onSubmit}>
          <div className="my-3">
            <span className="text-md mb-2 block text-gray-dark  font-medium">
              Client Information
            </span>
            <div className="flex flex-wrap sm:flex-nowrap sm:gap-3">
              <Input
                id="first-name-input"
                placeholder="First name"
                className="flex-1 basis-full"
                inputSize="small"
                
                {...register("client.firstName", {
                  ...FORM_VALIDATION.fullName,
                  onChange: () => clearErrorOnChange("client.firstName"),
                  onBlur : (e)=>handlePreviewValues("firstName" , e.target.value)
           
                  
                })}
                error={!!errors.client?.firstName}
                withoutHelperText
              />
              <Input
                id="last-name-input"
                placeholder="Last name"
                className="flex-1 basis-full"
                inputSize="small"
                {...register("client.lastName", {
                  ...FORM_VALIDATION.fullName,
                  onChange: () => clearErrorOnChange("client.lastName"),
                  onBlur : (e)=>handlePreviewValues("lastName" , e.target.value)

                })}
                error={!!errors.client?.lastName}
                withoutHelperText
              />
            </div>
            <HelperText
              showContent={
                !!errors.client?.firstName || !!errors.client?.lastName
              }
              className="text-red w-full text-xs justify-center min-h-[20px]"
              startIcon={<ErrorIconMini className="w-5 h5" />}
              text={
                errors.client?.firstName?.message ||
                errors.client?.lastName?.message
              }
            />
            <Input
              id="email-input"
              placeholder="Enter Email"
              inputSize="small"
              {...register("client.email", {
                ...FORM_VALIDATION.email,
                onChange: () => clearErrorOnChange("client.email"),
                onBlur : (e)=>handlePreviewValues("email" , e.target.value)

              })}
              error={!!errors.client?.email}
              helperText={getFieldHelperText(
                "error",
                errors.client?.email?.message
              )}
            />
            <div className="flex flex-wrap sm:flex-nowrap sm:gap-3">
              <Select
                className="w-full lg:w-[70%]"
                options={countriesList}
                id="country-select"
                placeholder="Enter Country"
                selectSize="small"
                {...register("client.address.country", {
                  ...FORM_VALIDATION.country,
                  onChange: () => clearErrorOnChange("client.address.country"),
                

                })}
                error={!!errors.client?.address?.country}
                helperText={getFieldHelperText(
                  "error",
                  errors.client?.address?.country?.message
                )}
              />
              <Select
                className="w-full lg:w-[30%]"
                options={currencyList}
                id="currency-select"
                placeholder="USD"
                selectSize="small"
                {...register("currency", {
                  ...FORM_VALIDATION.currency,
                  onChange: () => clearErrorOnChange("currency"),
                })}
                error={!!errors.currency}
                helperText={getFieldHelperText(
                  "error",
                  errors.currency?.message
                )}
              />
            </div>

            <ul>
              {fields.map((item, index) => {
                return (
                  <li className="mb-8" key={item.id}>
                    <div className="flex justify-between">
                      <span className="text-md mb-2 block text-gray-dark  font-medium">
                        Job Details
                      </span>
                      {index > 0 && (
                        <IconButton onClick={() => {remove(index) ; removeFromPreviewValues(index)}}>
                          <XCircleIconOutline />
                        </IconButton>
                      )}
                    </div>
                    <div className="flex flex-wrap sm:flex-nowrap sm:gap-3">
                      <Input
                        id="job-details"
                        placeholder="Job title"
                        className="w-full lg:w-[70%]"
                        inputSize="small"
                        {...register(`fixed.${index}.itemName`, {
                          ...FORM_VALIDATION.itemName,
                          onChange: () =>
                            clearErrorOnChange(`fixed.${index}.itemName`),
                            onBlur : (e)=>handlePreviewValues("itemName" , e.target.value,true , index)
                        })}
                        error={!!errors.fixed?.[index]?.itemName}
                        withoutHelperText
                      />

                      <Input
                        id="price"
                        placeholder="0.00"
                        className="w-full lg:w-[30%] "
                        inputSize="small"
                        type="number"
                        {...register(`fixed.${index}.price`, {
                          ...FORM_VALIDATION.price,
                          onChange: () =>
                            clearErrorOnChange(`fixed.${index}.price`),
                            onBlur : (e)=>handlePreviewValues("price" , e.target.value,true , index)

                        })}
                        error={!!errors.fixed?.[index]?.price}
                        withoutHelperText
                      />
                    </div>
                    <TextArea
                      id={index}
                      placeholder="Description"
                      {...register(`fixed.${index}.description`, {
                        ...FORM_VALIDATION.description,
                        onChange: () =>
                          clearErrorOnChange(`fixed.${index}.description`),
                          onBlur : (e)=>handlePreviewValues("description" , e.target.value,true , index)

                      })}
                      error={!!errors.fixed?.[index]?.description}
                      withoutHelperText
                    />
                  </li>
                );
              })}
            </ul>

            <Button
              className="!bg-transparent !text-[#4375FF] hover:!bg-[#F3F6FF] flex items-center gap-1 !p-1 "
              onClick={() =>
                append({ itemName: "", price: "", description: "" })
              }
            >
              <PlusIconMini className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm">Add item or service</span>
            </Button>
          </div>

          <Button
            className="font-medium"
            type="submit"
            buttonSize="small"
            fullWidth
          >
            {/* {loading ? "Loading..." : "Send Invoice"} */}
            Send Invoice
          </Button>
        </form>
      </Card>
    </>
  );
};
export default CreateInvoiceForm;
