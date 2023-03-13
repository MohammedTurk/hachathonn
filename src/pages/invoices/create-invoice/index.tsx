import { CreateInvoiceLayout, CreateWrapper } from "features/invoices";
import { CreateInvoiceForm } from "features/invoices/components/createInvoice/components";

import React from "react";

export const CreateInvoice = () => {
  return (
    <CreateInvoiceLayout>
      <CreateWrapper>
        <CreateInvoiceForm  />
      </CreateWrapper>
    </CreateInvoiceLayout>
  );
};
export default CreateInvoice;

CreateInvoice.mainLayoutProps = {
  title: "Create Invoice",
  pageDescription: "Create Invoice page description",
  contentClassName: "!block !p-0",
};
