export type PaymentItem = {
  id: number;
  name: string;
  amount: number;
  quantity: number;
  description: string;
};

export interface PaymobIntentionResponse {
  id: number | string;
  client_secret: string;
  amount: number;
  currency: string;
  order: {
    id: number | string;
    amount_cents: number;
    delivery_needed: boolean;
    items: Array<PaymentItem>;
  };
  intention_detail: {
    amount: number;
    items: PaymentItem[];
    currency: string;
  };
  payment_methods: {
    integration_id: number;
    alias: string;
    name: string;
    method_type: string;
    currency: string;
    live: boolean;
  }[];
  payment_keys: {
    integration: number;
    key: string;
    gateway_type: string;
    order_id: number;
    iframe_id: string;
  }[];
  billing_data: BillingDataType;
  extras?: {
    creation_extras: {
      ee: number;
    };
    confirmation_extras: string;
  };
  confirmed: boolean;
  status: string;
  created: string;
  card_detail: string;
  object: string;
  special_reference?: string;
}

export type LocalPaymobResponse = {
  amount: number;
  checkoutUrl: string;
  confirmed: boolean;
  currency: string;
  date: string;
  paymentId: string;
  orderId: number;
  status: string;
};
export type PaymobForm = {
  amount: number;
  currency: string;
  payment_methods: number[] | string[];
  items: PaymentItem[];
  billing_data: BillingDataType;
  extras?: object;
  spacial_reference?: string;
  expiration?: number;
  notification_url?: string;
  redirection_url?: string;
};

export type BillingDataType = {
  apartment: string;
  first_name: string;
  last_name: string;
  street: string;
  building: string;
  phone_number: string;
  city: string;
  country: string;
  email: string;
  floor: string;
  state: string;
};

export interface PaymobQueryParams {
  id: number;
  pending: boolean;
  amount_cents: number;
  success: boolean;
  is_auth: boolean;
  is_capture: boolean;
  is_standalone_payment: boolean;
  is_voided: boolean;
  is_refunded: boolean;
  is_3d_secure: boolean;
  integration_id: number;
  profile_id: number;
  has_parent_transaction: boolean;
  order: number;
  created_at: string; // ISO string timestamp
  currency: string;
  merchant_commission: number;
  discount_details: string; // technically a string like "[]", unless you parse it
  is_void: boolean;
  is_refund: boolean;
  error_occured: boolean;
  refunded_amount_cents: number;
  captured_amount: number;
  updated_at: string; // ISO string timestamp
  is_settled: boolean;
  bill_balanced: boolean;
  is_bill: boolean;
  owner: number;
  "data.message": string;
  "source_data.type": string;
  "source_data.pan": number;
  "source_data.sub_type": string;
  acq_response_code: string;
  txn_response_code: string;
  hmac: string;
}

export type PaymobTransactionResponse = {
  type: "TRANSACTION";
  obj: {
    id: number;
    pending: boolean;
    amount_cents: number;
    success: boolean;
    is_auth: boolean;
    is_capture: boolean;
    is_standalone_payment: boolean;
    is_voided: boolean;
    is_refunded: boolean;
    is_3d_secure: boolean;
    integration_id: number;
    profile_id: number;
    has_parent_transaction: boolean;
    order: {
      id: number;
      created_at: string;
      delivery_needed: boolean;
      merchant: {
        id: number;
        created_at: string;
        phones: string[];
        company_emails: string[];
        company_name: string;
        state: string;
        country: string;
        city: string;
        postal_code: string;
        street: string;
      };
      collector: null;
      amount_cents: number;
      shipping_data: {
        id: number;
        first_name: string;
        last_name: string;
        street: string;
        building: string;
        floor: string;
        apartment: string;
        city: string;
        state: string;
        country: string;
        email: string;
        phone_number: string;
        postal_code: string;
        extra_description: string;
        shipping_method: string;
        order_id: number;
        order: number;
      };
      currency: string;
      is_payment_locked: boolean;
      is_return: boolean;
      is_cancel: boolean;
      is_returned: boolean;
      is_canceled: boolean;
      merchant_order_id: null;
      wallet_notification: null;
      paid_amount_cents: number;
      notify_user_with_email: boolean;
      items: Array<{
        name: string;
        description: string;
        amount_cents: number;
        quantity: number;
      }>;
      order_url: string;
      commission_fees: number;
      delivery_fees_cents: number;
      delivery_vat_cents: number;
      payment_method: string;
      merchant_staff_tag: null;
      api_source: string;
      data: {
        notification_url: string;
      };
      payment_status: string;
    };
    created_at: string;
    transaction_processed_callback_responses: any[];
    currency: string;
    source_data: {
      pan: string;
      type: string;
      tenure: null;
      sub_type: string;
    };
    api_source: string;
    terminal_id: null;
    merchant_commission: number;
    installment: null;
    discount_details: any[];
    is_void: boolean;
    is_refund: boolean;
    data: {
      gateway_integration_pk: number;
      klass: string;
      created_at: string;
      amount: number;
      currency: string;
      migs_order: {
        acceptPartialAmount: boolean;
        amount: number;
        authenticationStatus: string;
        chargeback: {
          amount: number;
          currency: string;
        };
        creationTime: string;
        currency: string;
        description: string;
        id: string;
        lastUpdatedTime: string;
        merchantAmount: number;
        merchantCategoryCode: string;
        merchantCurrency: string;
        status: string;
        totalAuthorizedAmount: number;
        totalCapturedAmount: number;
        totalRefundedAmount: number;
      };
      merchant: string;
      migs_result: string;
      migs_transaction: {
        acquirer: {
          batch: number;
          date: string;
          id: string;
          merchantId: string;
          settlementDate: string;
          timeZone: string;
          transactionId: string;
        };
        amount: number;
        authenticationStatus: string;
        authorizationCode: string;
        currency: string;
        id: string;
        receipt: string;
        source: string;
        stan: string;
        terminal: string;
        type: string;
      };
      txn_response_code: string;
      acq_response_code: string;
      message: string;
      merchant_txn_ref: string;
      order_info: string;
      receipt_no: string;
      transaction_no: string;
      batch_no: number;
      authorize_id: string;
      card_type: string;
      card_num: string;
      secure_hash: string;
      avs_result_code: string;
      avs_acq_response_code: string;
      captured_amount: number;
      authorised_amount: number;
      refunded_amount: number;
      acs_eci: string;
    };
    is_hidden: boolean;
    payment_key_claims: {
      extra: {
        ee: number;
        merchant_order_id: null;
        [key: string]: any;
      };
      user_id: number;
      currency: string;
      order_id: number;
      amount_cents: number;
      billing_data: {
        city: string;
        email: string;
        floor: string;
        state: string;
        street: string;
        country: string;
        building: string;
        apartment: string;
        last_name: string;
        first_name: string;
        postal_code: string;
        phone_number: string;
        extra_description: string;
      };
      redirect_url: string;
      integration_id: number;
      redirection_url: string;
      notification_url: string;
      lock_order_when_paid: boolean;
      next_payment_intention: string;
      single_payment_attempt: boolean;
    };
    error_occured: boolean;
    is_live: boolean;
    other_endpoint_reference: null;
    refunded_amount_cents: number;
    source_id: number;
    is_captured: boolean;
    captured_amount: number;
    merchant_staff_tag: null;
    updated_at: string;
    is_settled: boolean;
    bill_balanced: boolean;
    is_bill: boolean;
    owner: number;
    parent_transaction: null;
  };
  accept_fees: number;
  issuer_bank: null;
  transaction_processed_callback_responses: string;
};
