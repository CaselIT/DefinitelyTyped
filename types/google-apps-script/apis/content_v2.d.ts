// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Content {
    namespace Collection {
      export interface AccountsCollection {
        // Returns information about the authenticated user.
        authinfo(): Content.Schema.AccountsAuthInfoResponse;
        // Claims the website of a Merchant Center sub-account.
        claimwebsite(merchantId: string, accountId: string): Content.Schema.AccountsClaimWebsiteResponse;
        // Claims the website of a Merchant Center sub-account.
        claimwebsite(merchantId: string, accountId: string, optionalArgs: object): Content.Schema.AccountsClaimWebsiteResponse;
        // Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
        custombatch(resource: Schema.AccountsCustomBatchRequest): Content.Schema.AccountsCustomBatchResponse;
        // Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
        custombatch(resource: Schema.AccountsCustomBatchRequest, optionalArgs: object): Content.Schema.AccountsCustomBatchResponse;
        // Retrieves a Merchant Center account.
        get(merchantId: string, accountId: string): Content.Schema.Account;
        // Creates a Merchant Center sub-account.
        insert(resource: Schema.Account, merchantId: string): Content.Schema.Account;
        // Creates a Merchant Center sub-account.
        insert(resource: Schema.Account, merchantId: string, optionalArgs: object): Content.Schema.Account;
        // Performs an action on a link between a Merchant Center account and another account.
        link(resource: Schema.AccountsLinkRequest, merchantId: string, accountId: string): Content.Schema.AccountsLinkResponse;
        // Lists the sub-accounts in your Merchant Center account.
        list(merchantId: string): Content.Schema.AccountsListResponse;
        // Lists the sub-accounts in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content.Schema.AccountsListResponse;
        // Updates a Merchant Center account. This method supports patch semantics.
        patch(resource: Schema.Account, merchantId: string, accountId: string): Content.Schema.Account;
        // Updates a Merchant Center account. This method supports patch semantics.
        patch(resource: Schema.Account, merchantId: string, accountId: string, optionalArgs: object): Content.Schema.Account;
        // Deletes a Merchant Center sub-account.
        remove(merchantId: string, accountId: string): void;
        // Deletes a Merchant Center sub-account.
        remove(merchantId: string, accountId: string, optionalArgs: object): void;
        // Updates a Merchant Center account.
        update(resource: Schema.Account, merchantId: string, accountId: string): Content.Schema.Account;
        // Updates a Merchant Center account.
        update(resource: Schema.Account, merchantId: string, accountId: string, optionalArgs: object): Content.Schema.Account;
      }
      export interface AccountstatusesCollection {
        // Retrieves multiple Merchant Center account statuses in a single request.
        custombatch(resource: Schema.AccountstatusesCustomBatchRequest): Content.Schema.AccountstatusesCustomBatchResponse;
        // Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
        get(merchantId: string, accountId: string): Content.Schema.AccountStatus;
        // Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
        get(merchantId: string, accountId: string, optionalArgs: object): Content.Schema.AccountStatus;
        // Lists the statuses of the sub-accounts in your Merchant Center account.
        list(merchantId: string): Content.Schema.AccountstatusesListResponse;
        // Lists the statuses of the sub-accounts in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content.Schema.AccountstatusesListResponse;
      }
      export interface AccounttaxCollection {
        // Retrieves and updates tax settings of multiple accounts in a single request.
        custombatch(resource: Schema.AccounttaxCustomBatchRequest): Content.Schema.AccounttaxCustomBatchResponse;
        // Retrieves and updates tax settings of multiple accounts in a single request.
        custombatch(resource: Schema.AccounttaxCustomBatchRequest, optionalArgs: object): Content.Schema.AccounttaxCustomBatchResponse;
        // Retrieves the tax settings of the account.
        get(merchantId: string, accountId: string): Content.Schema.AccountTax;
        // Lists the tax settings of the sub-accounts in your Merchant Center account.
        list(merchantId: string): Content.Schema.AccounttaxListResponse;
        // Lists the tax settings of the sub-accounts in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content.Schema.AccounttaxListResponse;
        // Updates the tax settings of the account. This method supports patch semantics.
        patch(resource: Schema.AccountTax, merchantId: string, accountId: string): Content.Schema.AccountTax;
        // Updates the tax settings of the account. This method supports patch semantics.
        patch(resource: Schema.AccountTax, merchantId: string, accountId: string, optionalArgs: object): Content.Schema.AccountTax;
        // Updates the tax settings of the account.
        update(resource: Schema.AccountTax, merchantId: string, accountId: string): Content.Schema.AccountTax;
        // Updates the tax settings of the account.
        update(resource: Schema.AccountTax, merchantId: string, accountId: string, optionalArgs: object): Content.Schema.AccountTax;
      }
      export interface DatafeedsCollection {
        // Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
        custombatch(resource: Schema.DatafeedsCustomBatchRequest): Content.Schema.DatafeedsCustomBatchResponse;
        // Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
        custombatch(resource: Schema.DatafeedsCustomBatchRequest, optionalArgs: object): Content.Schema.DatafeedsCustomBatchResponse;
        // Invokes a fetch for the datafeed in your Merchant Center account.
        fetchnow(merchantId: string, datafeedId: string): Content.Schema.DatafeedsFetchNowResponse;
        // Invokes a fetch for the datafeed in your Merchant Center account.
        fetchnow(merchantId: string, datafeedId: string, optionalArgs: object): Content.Schema.DatafeedsFetchNowResponse;
        // Retrieves a datafeed configuration from your Merchant Center account.
        get(merchantId: string, datafeedId: string): Content.Schema.Datafeed;
        // Registers a datafeed configuration with your Merchant Center account.
        insert(resource: Schema.Datafeed, merchantId: string): Content.Schema.Datafeed;
        // Registers a datafeed configuration with your Merchant Center account.
        insert(resource: Schema.Datafeed, merchantId: string, optionalArgs: object): Content.Schema.Datafeed;
        // Lists the configurations for datafeeds in your Merchant Center account.
        list(merchantId: string): Content.Schema.DatafeedsListResponse;
        // Lists the configurations for datafeeds in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content.Schema.DatafeedsListResponse;
        // Updates a datafeed configuration of your Merchant Center account. This method supports patch semantics.
        patch(resource: Schema.Datafeed, merchantId: string, datafeedId: string): Content.Schema.Datafeed;
        // Updates a datafeed configuration of your Merchant Center account. This method supports patch semantics.
        patch(resource: Schema.Datafeed, merchantId: string, datafeedId: string, optionalArgs: object): Content.Schema.Datafeed;
        // Deletes a datafeed configuration from your Merchant Center account.
        remove(merchantId: string, datafeedId: string): void;
        // Deletes a datafeed configuration from your Merchant Center account.
        remove(merchantId: string, datafeedId: string, optionalArgs: object): void;
        // Updates a datafeed configuration of your Merchant Center account.
        update(resource: Schema.Datafeed, merchantId: string, datafeedId: string): Content.Schema.Datafeed;
        // Updates a datafeed configuration of your Merchant Center account.
        update(resource: Schema.Datafeed, merchantId: string, datafeedId: string, optionalArgs: object): Content.Schema.Datafeed;
      }
      export interface DatafeedstatusesCollection {
        // Gets multiple Merchant Center datafeed statuses in a single request.
        custombatch(resource: Schema.DatafeedstatusesCustomBatchRequest): Content.Schema.DatafeedstatusesCustomBatchResponse;
        // Retrieves the status of a datafeed from your Merchant Center account.
        get(merchantId: string, datafeedId: string): Content.Schema.DatafeedStatus;
        // Retrieves the status of a datafeed from your Merchant Center account.
        get(merchantId: string, datafeedId: string, optionalArgs: object): Content.Schema.DatafeedStatus;
        // Lists the statuses of the datafeeds in your Merchant Center account.
        list(merchantId: string): Content.Schema.DatafeedstatusesListResponse;
        // Lists the statuses of the datafeeds in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content.Schema.DatafeedstatusesListResponse;
      }
      export interface InventoryCollection {
        // Updates price and availability for multiple products or stores in a single request. This operation does not update the expiration date of the products.
        custombatch(resource: Schema.InventoryCustomBatchRequest): Content.Schema.InventoryCustomBatchResponse;
        // Updates price and availability for multiple products or stores in a single request. This operation does not update the expiration date of the products.
        custombatch(resource: Schema.InventoryCustomBatchRequest, optionalArgs: object): Content.Schema.InventoryCustomBatchResponse;
        // Updates price and availability of a product in your Merchant Center account.
        set(resource: Schema.InventorySetRequest, merchantId: string, storeCode: string, productId: string): Content.Schema.InventorySetResponse;
        // Updates price and availability of a product in your Merchant Center account.
        set(resource: Schema.InventorySetRequest, merchantId: string, storeCode: string, productId: string, optionalArgs: object): Content.Schema.InventorySetResponse;
      }
      export interface LiasettingsCollection {
        // Retrieves and/or updates the LIA settings of multiple accounts in a single request.
        custombatch(resource: Schema.LiasettingsCustomBatchRequest): Content.Schema.LiasettingsCustomBatchResponse;
        // Retrieves and/or updates the LIA settings of multiple accounts in a single request.
        custombatch(resource: Schema.LiasettingsCustomBatchRequest, optionalArgs: object): Content.Schema.LiasettingsCustomBatchResponse;
        // Retrieves the LIA settings of the account.
        get(merchantId: string, accountId: string): Content.Schema.LiaSettings;
        // Retrieves the list of accessible Google My Business accounts.
        getaccessiblegmbaccounts(merchantId: string, accountId: string): Content.Schema.LiasettingsGetAccessibleGmbAccountsResponse;
        // Lists the LIA settings of the sub-accounts in your Merchant Center account.
        list(merchantId: string): Content.Schema.LiasettingsListResponse;
        // Lists the LIA settings of the sub-accounts in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content.Schema.LiasettingsListResponse;
        // Retrieves the list of POS data providers that have active settings for the all eiligible countries.
        listposdataproviders(): Content.Schema.LiasettingsListPosDataProvidersResponse;
        // Updates the LIA settings of the account. This method supports patch semantics.
        patch(resource: Schema.LiaSettings, merchantId: string, accountId: string): Content.Schema.LiaSettings;
        // Updates the LIA settings of the account. This method supports patch semantics.
        patch(resource: Schema.LiaSettings, merchantId: string, accountId: string, optionalArgs: object): Content.Schema.LiaSettings;
        // Requests access to a specified Google My Business account.
        requestgmbaccess(merchantId: string, accountId: string, gmbEmail: string): Content.Schema.LiasettingsRequestGmbAccessResponse;
        // Requests inventory validation for the specified country.
        requestinventoryverification(merchantId: string, accountId: string, country: string): Content.Schema.LiasettingsRequestInventoryVerificationResponse;
        // Sets the inventory verification contract for the specified country.
        setinventoryverificationcontact(merchantId: string, accountId: string, contactEmail: string, contactName: string, country: string, language: string): Content.Schema.LiasettingsSetInventoryVerificationContactResponse;
        // Sets the POS data provider for the specified country.
        setposdataprovider(merchantId: string, accountId: string, country: string): Content.Schema.LiasettingsSetPosDataProviderResponse;
        // Sets the POS data provider for the specified country.
        setposdataprovider(merchantId: string, accountId: string, country: string, optionalArgs: object): Content.Schema.LiasettingsSetPosDataProviderResponse;
        // Updates the LIA settings of the account.
        update(resource: Schema.LiaSettings, merchantId: string, accountId: string): Content.Schema.LiaSettings;
        // Updates the LIA settings of the account.
        update(resource: Schema.LiaSettings, merchantId: string, accountId: string, optionalArgs: object): Content.Schema.LiaSettings;
      }
      export interface OrderinvoicesCollection {
        // Creates a charge invoice for a shipment group, and triggers a charge capture for non-facilitated payment orders.
        createchargeinvoice(resource: Schema.OrderinvoicesCreateChargeInvoiceRequest, merchantId: string, orderId: string): Content.Schema.OrderinvoicesCreateChargeInvoiceResponse;
        // Creates a refund invoice for one or more shipment groups, and triggers a refund for non-facilitated payment orders. This can only be used for line items that have previously been charged using createChargeInvoice. All amounts (except for the summary) are incremental with respect to the previous invoice.
        createrefundinvoice(resource: Schema.OrderinvoicesCreateRefundInvoiceRequest, merchantId: string, orderId: string): Content.Schema.OrderinvoicesCreateRefundInvoiceResponse;
      }
      export interface OrderpaymentsCollection {
        // Notify about successfully authorizing user's payment method for a given amount.
        notifyauthapproved(resource: Schema.OrderpaymentsNotifyAuthApprovedRequest, merchantId: string, orderId: string): Content.Schema.OrderpaymentsNotifyAuthApprovedResponse;
        // Notify about failure to authorize user's payment method.
        notifyauthdeclined(resource: Schema.OrderpaymentsNotifyAuthDeclinedRequest, merchantId: string, orderId: string): Content.Schema.OrderpaymentsNotifyAuthDeclinedResponse;
        // Notify about charge on user's selected payments method.
        notifycharge(resource: Schema.OrderpaymentsNotifyChargeRequest, merchantId: string, orderId: string): Content.Schema.OrderpaymentsNotifyChargeResponse;
        // Notify about refund on user's selected payments method.
        notifyrefund(resource: Schema.OrderpaymentsNotifyRefundRequest, merchantId: string, orderId: string): Content.Schema.OrderpaymentsNotifyRefundResponse;
      }
      export interface OrderreportsCollection {
        // Retrieves a report for disbursements from your Merchant Center account.
        listdisbursements(merchantId: string, disbursementStartDate: string): Content.Schema.OrderreportsListDisbursementsResponse;
        // Retrieves a report for disbursements from your Merchant Center account.
        listdisbursements(merchantId: string, disbursementStartDate: string, optionalArgs: object): Content.Schema.OrderreportsListDisbursementsResponse;
        // Retrieves a list of transactions for a disbursement from your Merchant Center account.
        listtransactions(merchantId: string, disbursementId: string, transactionStartDate: string): Content.Schema.OrderreportsListTransactionsResponse;
        // Retrieves a list of transactions for a disbursement from your Merchant Center account.
        listtransactions(merchantId: string, disbursementId: string, transactionStartDate: string, optionalArgs: object): Content.Schema.OrderreportsListTransactionsResponse;
      }
      export interface OrderreturnsCollection {
        // Retrieves an order return from your Merchant Center account.
        get(merchantId: string, returnId: string): Content.Schema.MerchantOrderReturn;
        // Lists order returns in your Merchant Center account.
        list(merchantId: string): Content.Schema.OrderreturnsListResponse;
        // Lists order returns in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content.Schema.OrderreturnsListResponse;
      }
      export interface OrdersCollection {
        // Marks an order as acknowledged.
        acknowledge(resource: Schema.OrdersAcknowledgeRequest, merchantId: string, orderId: string): Content.Schema.OrdersAcknowledgeResponse;
        // Sandbox only. Moves a test order from state "inProgress" to state "pendingShipment".
        advancetestorder(merchantId: string, orderId: string): Content.Schema.OrdersAdvanceTestOrderResponse;
        // Cancels all line items in an order, making a full refund.
        cancel(resource: Schema.OrdersCancelRequest, merchantId: string, orderId: string): Content.Schema.OrdersCancelResponse;
        // Cancels a line item, making a full refund.
        cancellineitem(resource: Schema.OrdersCancelLineItemRequest, merchantId: string, orderId: string): Content.Schema.OrdersCancelLineItemResponse;
        // Sandbox only. Cancels a test order for customer-initiated cancellation.
        canceltestorderbycustomer(resource: Schema.OrdersCancelTestOrderByCustomerRequest, merchantId: string, orderId: string): Content.Schema.OrdersCancelTestOrderByCustomerResponse;
        // Sandbox only. Creates a test order.
        createtestorder(resource: Schema.OrdersCreateTestOrderRequest, merchantId: string): Content.Schema.OrdersCreateTestOrderResponse;
        // Sandbox only. Creates a test return.
        createtestreturn(resource: Schema.OrdersCreateTestReturnRequest, merchantId: string, orderId: string): Content.Schema.OrdersCreateTestReturnResponse;
        // Retrieves or modifies multiple orders in a single request.
        custombatch(resource: Schema.OrdersCustomBatchRequest): Content.Schema.OrdersCustomBatchResponse;
        // Retrieves an order from your Merchant Center account.
        get(merchantId: string, orderId: string): Content.Schema.Order;
        // Retrieves an order using merchant order ID.
        getbymerchantorderid(merchantId: string, merchantOrderId: string): Content.Schema.OrdersGetByMerchantOrderIdResponse;
        // Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
        gettestordertemplate(merchantId: string, templateName: string): Content.Schema.OrdersGetTestOrderTemplateResponse;
        // Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
        gettestordertemplate(merchantId: string, templateName: string, optionalArgs: object): Content.Schema.OrdersGetTestOrderTemplateResponse;
        // Notifies that item return and refund was handled directly by merchant outside of Google payments processing (e.g. cash refund done in store).
        // Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding via Google then via an in-store return.
        instorerefundlineitem(resource: Schema.OrdersInStoreRefundLineItemRequest, merchantId: string, orderId: string): Content.Schema.OrdersInStoreRefundLineItemResponse;
        // Lists the orders in your Merchant Center account.
        list(merchantId: string): Content.Schema.OrdersListResponse;
        // Lists the orders in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content.Schema.OrdersListResponse;
        // Deprecated, please use returnRefundLineItem instead.
        refund(resource: Schema.OrdersRefundRequest, merchantId: string, orderId: string): Content.Schema.OrdersRefundResponse;
        // Rejects return on an line item.
        rejectreturnlineitem(resource: Schema.OrdersRejectReturnLineItemRequest, merchantId: string, orderId: string): Content.Schema.OrdersRejectReturnLineItemResponse;
        // Returns a line item.
        returnlineitem(resource: Schema.OrdersReturnLineItemRequest, merchantId: string, orderId: string): Content.Schema.OrdersReturnLineItemResponse;
        // Returns and refunds a line item. Note that this method can only be called on fully shipped orders.
        returnrefundlineitem(resource: Schema.OrdersReturnRefundLineItemRequest, merchantId: string, orderId: string): Content.Schema.OrdersReturnRefundLineItemResponse;
        // Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided via other methods. Submitted key-value pairs can be retrieved as part of the orders resource.
        setlineitemmetadata(resource: Schema.OrdersSetLineItemMetadataRequest, merchantId: string, orderId: string): Content.Schema.OrdersSetLineItemMetadataResponse;
        // Marks line item(s) as shipped.
        shiplineitems(resource: Schema.OrdersShipLineItemsRequest, merchantId: string, orderId: string): Content.Schema.OrdersShipLineItemsResponse;
        // Updates ship by and delivery by dates for a line item.
        updatelineitemshippingdetails(resource: Schema.OrdersUpdateLineItemShippingDetailsRequest, merchantId: string, orderId: string): Content.Schema.OrdersUpdateLineItemShippingDetailsResponse;
        // Updates the merchant order ID for a given order.
        updatemerchantorderid(resource: Schema.OrdersUpdateMerchantOrderIdRequest, merchantId: string, orderId: string): Content.Schema.OrdersUpdateMerchantOrderIdResponse;
        // Updates a shipment's status, carrier, and/or tracking ID.
        updateshipment(resource: Schema.OrdersUpdateShipmentRequest, merchantId: string, orderId: string): Content.Schema.OrdersUpdateShipmentResponse;
      }
      export interface PosCollection {
        // Batches multiple POS-related calls in a single request.
        custombatch(resource: Schema.PosCustomBatchRequest): Content.Schema.PosCustomBatchResponse;
        // Batches multiple POS-related calls in a single request.
        custombatch(resource: Schema.PosCustomBatchRequest, optionalArgs: object): Content.Schema.PosCustomBatchResponse;
        // Retrieves information about the given store.
        get(merchantId: string, targetMerchantId: string, storeCode: string): Content.Schema.PosStore;
        // Creates a store for the given merchant.
        insert(resource: Schema.PosStore, merchantId: string, targetMerchantId: string): Content.Schema.PosStore;
        // Creates a store for the given merchant.
        insert(resource: Schema.PosStore, merchantId: string, targetMerchantId: string, optionalArgs: object): Content.Schema.PosStore;
        // Submit inventory for the given merchant.
        inventory(resource: Schema.PosInventoryRequest, merchantId: string, targetMerchantId: string): Content.Schema.PosInventoryResponse;
        // Submit inventory for the given merchant.
        inventory(resource: Schema.PosInventoryRequest, merchantId: string, targetMerchantId: string, optionalArgs: object): Content.Schema.PosInventoryResponse;
        // Lists the stores of the target merchant.
        list(merchantId: string, targetMerchantId: string): Content.Schema.PosListResponse;
        // Deletes a store for the given merchant.
        remove(merchantId: string, targetMerchantId: string, storeCode: string): void;
        // Deletes a store for the given merchant.
        remove(merchantId: string, targetMerchantId: string, storeCode: string, optionalArgs: object): void;
        // Submit a sale event for the given merchant.
        sale(resource: Schema.PosSaleRequest, merchantId: string, targetMerchantId: string): Content.Schema.PosSaleResponse;
        // Submit a sale event for the given merchant.
        sale(resource: Schema.PosSaleRequest, merchantId: string, targetMerchantId: string, optionalArgs: object): Content.Schema.PosSaleResponse;
      }
      export interface ProductsCollection {
        // Retrieves, inserts, and deletes multiple products in a single request.
        custombatch(resource: Schema.ProductsCustomBatchRequest): Content.Schema.ProductsCustomBatchResponse;
        // Retrieves, inserts, and deletes multiple products in a single request.
        custombatch(resource: Schema.ProductsCustomBatchRequest, optionalArgs: object): Content.Schema.ProductsCustomBatchResponse;
        // Retrieves a product from your Merchant Center account.
        get(merchantId: string, productId: string): Content.Schema.Product;
        // Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
        insert(resource: Schema.Product, merchantId: string): Content.Schema.Product;
        // Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
        insert(resource: Schema.Product, merchantId: string, optionalArgs: object): Content.Schema.Product;
        // Lists the products in your Merchant Center account.
        list(merchantId: string): Content.Schema.ProductsListResponse;
        // Lists the products in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content.Schema.ProductsListResponse;
        // Deletes a product from your Merchant Center account.
        remove(merchantId: string, productId: string): void;
        // Deletes a product from your Merchant Center account.
        remove(merchantId: string, productId: string, optionalArgs: object): void;
      }
      export interface ProductstatusesCollection {
        // Gets the statuses of multiple products in a single request.
        custombatch(resource: Schema.ProductstatusesCustomBatchRequest): Content.Schema.ProductstatusesCustomBatchResponse;
        // Gets the statuses of multiple products in a single request.
        custombatch(resource: Schema.ProductstatusesCustomBatchRequest, optionalArgs: object): Content.Schema.ProductstatusesCustomBatchResponse;
        // Gets the status of a product from your Merchant Center account.
        get(merchantId: string, productId: string): Content.Schema.ProductStatus;
        // Gets the status of a product from your Merchant Center account.
        get(merchantId: string, productId: string, optionalArgs: object): Content.Schema.ProductStatus;
        // Lists the statuses of the products in your Merchant Center account.
        list(merchantId: string): Content.Schema.ProductstatusesListResponse;
        // Lists the statuses of the products in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content.Schema.ProductstatusesListResponse;
      }
      export interface ShippingsettingsCollection {
        // Retrieves and updates the shipping settings of multiple accounts in a single request.
        custombatch(resource: Schema.ShippingsettingsCustomBatchRequest): Content.Schema.ShippingsettingsCustomBatchResponse;
        // Retrieves and updates the shipping settings of multiple accounts in a single request.
        custombatch(resource: Schema.ShippingsettingsCustomBatchRequest, optionalArgs: object): Content.Schema.ShippingsettingsCustomBatchResponse;
        // Retrieves the shipping settings of the account.
        get(merchantId: string, accountId: string): Content.Schema.ShippingSettings;
        // Retrieves supported carriers and carrier services for an account.
        getsupportedcarriers(merchantId: string): Content.Schema.ShippingsettingsGetSupportedCarriersResponse;
        // Retrieves supported holidays for an account.
        getsupportedholidays(merchantId: string): Content.Schema.ShippingsettingsGetSupportedHolidaysResponse;
        // Lists the shipping settings of the sub-accounts in your Merchant Center account.
        list(merchantId: string): Content.Schema.ShippingsettingsListResponse;
        // Lists the shipping settings of the sub-accounts in your Merchant Center account.
        list(merchantId: string, optionalArgs: object): Content.Schema.ShippingsettingsListResponse;
        // Updates the shipping settings of the account. This method supports patch semantics.
        patch(resource: Schema.ShippingSettings, merchantId: string, accountId: string): Content.Schema.ShippingSettings;
        // Updates the shipping settings of the account. This method supports patch semantics.
        patch(resource: Schema.ShippingSettings, merchantId: string, accountId: string, optionalArgs: object): Content.Schema.ShippingSettings;
        // Updates the shipping settings of the account.
        update(resource: Schema.ShippingSettings, merchantId: string, accountId: string): Content.Schema.ShippingSettings;
        // Updates the shipping settings of the account.
        update(resource: Schema.ShippingSettings, merchantId: string, accountId: string, optionalArgs: object): Content.Schema.ShippingSettings;
      }
    }
    namespace Schema {
      export interface Account {
        adultContent?: boolean;
        adwordsLinks?: Content.Schema.AccountAdwordsLink[];
        businessInformation?: Content.Schema.AccountBusinessInformation;
        googleMyBusinessLink?: Content.Schema.AccountGoogleMyBusinessLink;
        id?: string;
        kind?: string;
        name?: string;
        reviewsUrl?: string;
        sellerId?: string;
        users?: Content.Schema.AccountUser[];
        websiteUrl?: string;
        youtubeChannelLinks?: Content.Schema.AccountYouTubeChannelLink[];
      }
      export interface AccountAddress {
        country?: string;
        locality?: string;
        postalCode?: string;
        region?: string;
        streetAddress?: string;
      }
      export interface AccountAdwordsLink {
        adwordsId?: string;
        status?: string;
      }
      export interface AccountBusinessInformation {
        address?: Content.Schema.AccountAddress;
        customerService?: Content.Schema.AccountCustomerService;
        phoneNumber?: string;
      }
      export interface AccountCustomerService {
        email?: string;
        phoneNumber?: string;
        url?: string;
      }
      export interface AccountGoogleMyBusinessLink {
        gmbEmail?: string;
        status?: string;
      }
      export interface AccountIdentifier {
        aggregatorId?: string;
        merchantId?: string;
      }
      export interface AccountStatus {
        accountId?: string;
        accountLevelIssues?: Content.Schema.AccountStatusAccountLevelIssue[];
        dataQualityIssues?: Content.Schema.AccountStatusDataQualityIssue[];
        kind?: string;
        products?: Content.Schema.AccountStatusProducts[];
        websiteClaimed?: boolean;
      }
      export interface AccountStatusAccountLevelIssue {
        country?: string;
        destination?: string;
        detail?: string;
        documentation?: string;
        id?: string;
        severity?: string;
        title?: string;
      }
      export interface AccountStatusDataQualityIssue {
        country?: string;
        destination?: string;
        detail?: string;
        displayedValue?: string;
        exampleItems?: Content.Schema.AccountStatusExampleItem[];
        id?: string;
        lastChecked?: string;
        location?: string;
        numItems?: number;
        severity?: string;
        submittedValue?: string;
      }
      export interface AccountStatusExampleItem {
        itemId?: string;
        link?: string;
        submittedValue?: string;
        title?: string;
        valueOnLandingPage?: string;
      }
      export interface AccountStatusItemLevelIssue {
        attributeName?: string;
        code?: string;
        description?: string;
        detail?: string;
        documentation?: string;
        numItems?: string;
        resolution?: string;
        servability?: string;
      }
      export interface AccountStatusProducts {
        channel?: string;
        country?: string;
        destination?: string;
        itemLevelIssues?: Content.Schema.AccountStatusItemLevelIssue[];
        statistics?: Content.Schema.AccountStatusStatistics;
      }
      export interface AccountStatusStatistics {
        active?: string;
        disapproved?: string;
        expiring?: string;
        pending?: string;
      }
      export interface AccountTax {
        accountId?: string;
        kind?: string;
        rules?: Content.Schema.AccountTaxTaxRule[];
      }
      export interface AccountTaxTaxRule {
        country?: string;
        locationId?: string;
        ratePercent?: string;
        shippingTaxed?: boolean;
        useGlobalRate?: boolean;
      }
      export interface AccountUser {
        admin?: boolean;
        emailAddress?: string;
        orderManager?: boolean;
        paymentsAnalyst?: boolean;
        paymentsManager?: boolean;
      }
      export interface AccountYouTubeChannelLink {
        channelId?: string;
        status?: string;
      }
      export interface AccountsAuthInfoResponse {
        accountIdentifiers?: Content.Schema.AccountIdentifier[];
        kind?: string;
      }
      export interface AccountsClaimWebsiteResponse {
        kind?: string;
      }
      export interface AccountsCustomBatchRequest {
        entries?: Content.Schema.AccountsCustomBatchRequestEntry[];
      }
      export interface AccountsCustomBatchRequestEntry {
        account?: Content.Schema.Account;
        accountId?: string;
        batchId?: number;
        force?: boolean;
        linkRequest?: Content.Schema.AccountsCustomBatchRequestEntryLinkRequest;
        merchantId?: string;
        method?: string;
        overwrite?: boolean;
      }
      export interface AccountsCustomBatchRequestEntryLinkRequest {
        action?: string;
        linkType?: string;
        linkedAccountId?: string;
      }
      export interface AccountsCustomBatchResponse {
        entries?: Content.Schema.AccountsCustomBatchResponseEntry[];
        kind?: string;
      }
      export interface AccountsCustomBatchResponseEntry {
        account?: Content.Schema.Account;
        batchId?: number;
        errors?: Content.Schema.Errors;
        kind?: string;
        linkStatus?: string;
      }
      export interface AccountsLinkRequest {
        action?: string;
        linkType?: string;
        linkedAccountId?: string;
      }
      export interface AccountsLinkResponse {
        kind?: string;
      }
      export interface AccountsListResponse {
        kind?: string;
        nextPageToken?: string;
        resources?: Content.Schema.Account[];
      }
      export interface AccountstatusesCustomBatchRequest {
        entries?: Content.Schema.AccountstatusesCustomBatchRequestEntry[];
      }
      export interface AccountstatusesCustomBatchRequestEntry {
        accountId?: string;
        batchId?: number;
        destinations?: string[];
        merchantId?: string;
        method?: string;
      }
      export interface AccountstatusesCustomBatchResponse {
        entries?: Content.Schema.AccountstatusesCustomBatchResponseEntry[];
        kind?: string;
      }
      export interface AccountstatusesCustomBatchResponseEntry {
        accountStatus?: Content.Schema.AccountStatus;
        batchId?: number;
        errors?: Content.Schema.Errors;
      }
      export interface AccountstatusesListResponse {
        kind?: string;
        nextPageToken?: string;
        resources?: Content.Schema.AccountStatus[];
      }
      export interface AccounttaxCustomBatchRequest {
        entries?: Content.Schema.AccounttaxCustomBatchRequestEntry[];
      }
      export interface AccounttaxCustomBatchRequestEntry {
        accountId?: string;
        accountTax?: Content.Schema.AccountTax;
        batchId?: number;
        merchantId?: string;
        method?: string;
      }
      export interface AccounttaxCustomBatchResponse {
        entries?: Content.Schema.AccounttaxCustomBatchResponseEntry[];
        kind?: string;
      }
      export interface AccounttaxCustomBatchResponseEntry {
        accountTax?: Content.Schema.AccountTax;
        batchId?: number;
        errors?: Content.Schema.Errors;
        kind?: string;
      }
      export interface AccounttaxListResponse {
        kind?: string;
        nextPageToken?: string;
        resources?: Content.Schema.AccountTax[];
      }
      export interface Amount {
        pretax?: Content.Schema.Price;
        tax?: Content.Schema.Price;
      }
      export interface CarrierRate {
        carrierName?: string;
        carrierService?: string;
        flatAdjustment?: Content.Schema.Price;
        name?: string;
        originPostalCode?: string;
        percentageAdjustment?: string;
      }
      export interface CarriersCarrier {
        country?: string;
        name?: string;
        services?: string[];
      }
      export interface CustomAttribute {
        name?: string;
        type?: string;
        unit?: string;
        value?: string;
      }
      export interface CustomGroup {
        attributes?: Content.Schema.CustomAttribute[];
        name?: string;
      }
      export interface CustomerReturnReason {
        description?: string;
        reasonCode?: string;
      }
      export interface CutoffTime {
        hour?: number;
        minute?: number;
        timezone?: string;
      }
      export interface Datafeed {
        attributeLanguage?: string;
        contentLanguage?: string;
        contentType?: string;
        fetchSchedule?: Content.Schema.DatafeedFetchSchedule;
        fileName?: string;
        format?: Content.Schema.DatafeedFormat;
        id?: string;
        intendedDestinations?: string[];
        kind?: string;
        name?: string;
        targetCountry?: string;
        targets?: Content.Schema.DatafeedTarget[];
      }
      export interface DatafeedFetchSchedule {
        dayOfMonth?: number;
        fetchUrl?: string;
        hour?: number;
        minuteOfHour?: number;
        password?: string;
        paused?: boolean;
        timeZone?: string;
        username?: string;
        weekday?: string;
      }
      export interface DatafeedFormat {
        columnDelimiter?: string;
        fileEncoding?: string;
        quotingMode?: string;
      }
      export interface DatafeedStatus {
        country?: string;
        datafeedId?: string;
        errors?: Content.Schema.DatafeedStatusError[];
        itemsTotal?: string;
        itemsValid?: string;
        kind?: string;
        language?: string;
        lastUploadDate?: string;
        processingStatus?: string;
        warnings?: Content.Schema.DatafeedStatusError[];
      }
      export interface DatafeedStatusError {
        code?: string;
        count?: string;
        examples?: Content.Schema.DatafeedStatusExample[];
        message?: string;
      }
      export interface DatafeedStatusExample {
        itemId?: string;
        lineNumber?: string;
        value?: string;
      }
      export interface DatafeedTarget {
        country?: string;
        excludedDestinations?: string[];
        includedDestinations?: string[];
        language?: string;
      }
      export interface DatafeedsCustomBatchRequest {
        entries?: Content.Schema.DatafeedsCustomBatchRequestEntry[];
      }
      export interface DatafeedsCustomBatchRequestEntry {
        batchId?: number;
        datafeed?: Content.Schema.Datafeed;
        datafeedId?: string;
        merchantId?: string;
        method?: string;
      }
      export interface DatafeedsCustomBatchResponse {
        entries?: Content.Schema.DatafeedsCustomBatchResponseEntry[];
        kind?: string;
      }
      export interface DatafeedsCustomBatchResponseEntry {
        batchId?: number;
        datafeed?: Content.Schema.Datafeed;
        errors?: Content.Schema.Errors;
      }
      export interface DatafeedsFetchNowResponse {
        kind?: string;
      }
      export interface DatafeedsListResponse {
        kind?: string;
        nextPageToken?: string;
        resources?: Content.Schema.Datafeed[];
      }
      export interface DatafeedstatusesCustomBatchRequest {
        entries?: Content.Schema.DatafeedstatusesCustomBatchRequestEntry[];
      }
      export interface DatafeedstatusesCustomBatchRequestEntry {
        batchId?: number;
        country?: string;
        datafeedId?: string;
        language?: string;
        merchantId?: string;
        method?: string;
      }
      export interface DatafeedstatusesCustomBatchResponse {
        entries?: Content.Schema.DatafeedstatusesCustomBatchResponseEntry[];
        kind?: string;
      }
      export interface DatafeedstatusesCustomBatchResponseEntry {
        batchId?: number;
        datafeedStatus?: Content.Schema.DatafeedStatus;
        errors?: Content.Schema.Errors;
      }
      export interface DatafeedstatusesListResponse {
        kind?: string;
        nextPageToken?: string;
        resources?: Content.Schema.DatafeedStatus[];
      }
      export interface DeliveryTime {
        cutoffTime?: Content.Schema.CutoffTime;
        holidayCutoffs?: Content.Schema.HolidayCutoff[];
        maxHandlingTimeInDays?: number;
        maxTransitTimeInDays?: number;
        minHandlingTimeInDays?: number;
        minTransitTimeInDays?: number;
        transitTimeTable?: Content.Schema.TransitTable;
      }
      export interface Error {
        domain?: string;
        message?: string;
        reason?: string;
      }
      export interface Errors {
        code?: number;
        errors?: Content.Schema.Error[];
        message?: string;
      }
      export interface GmbAccounts {
        accountId?: string;
        gmbAccounts?: Content.Schema.GmbAccountsGmbAccount[];
      }
      export interface GmbAccountsGmbAccount {
        email?: string;
        listingCount?: string;
        name?: string;
        type?: string;
      }
      export interface Headers {
        locations?: Content.Schema.LocationIdSet[];
        numberOfItems?: string[];
        postalCodeGroupNames?: string[];
        prices?: Content.Schema.Price[];
        weights?: Content.Schema.Weight[];
      }
      export interface HolidayCutoff {
        deadlineDate?: string;
        deadlineHour?: number;
        deadlineTimezone?: string;
        holidayId?: string;
        visibleFromDate?: string;
      }
      export interface HolidaysHoliday {
        countryCode?: string;
        date?: string;
        deliveryGuaranteeDate?: string;
        deliveryGuaranteeHour?: string;
        id?: string;
        type?: string;
      }
      export interface Installment {
        amount?: Content.Schema.Price;
        months?: string;
      }
      export interface Inventory {
        availability?: string;
        customLabel0?: string;
        customLabel1?: string;
        customLabel2?: string;
        customLabel3?: string;
        customLabel4?: string;
        installment?: Content.Schema.Installment;
        instoreProductLocation?: string;
        kind?: string;
        loyaltyPoints?: Content.Schema.LoyaltyPoints;
        pickup?: Content.Schema.InventoryPickup;
        price?: Content.Schema.Price;
        quantity?: number;
        salePrice?: Content.Schema.Price;
        salePriceEffectiveDate?: string;
        sellOnGoogleQuantity?: number;
      }
      export interface InventoryCustomBatchRequest {
        entries?: Content.Schema.InventoryCustomBatchRequestEntry[];
      }
      export interface InventoryCustomBatchRequestEntry {
        batchId?: number;
        inventory?: Content.Schema.Inventory;
        merchantId?: string;
        productId?: string;
        storeCode?: string;
      }
      export interface InventoryCustomBatchResponse {
        entries?: Content.Schema.InventoryCustomBatchResponseEntry[];
        kind?: string;
      }
      export interface InventoryCustomBatchResponseEntry {
        batchId?: number;
        errors?: Content.Schema.Errors;
        kind?: string;
      }
      export interface InventoryPickup {
        pickupMethod?: string;
        pickupSla?: string;
      }
      export interface InventorySetRequest {
        availability?: string;
        customLabel0?: string;
        customLabel1?: string;
        customLabel2?: string;
        customLabel3?: string;
        customLabel4?: string;
        installment?: Content.Schema.Installment;
        instoreProductLocation?: string;
        loyaltyPoints?: Content.Schema.LoyaltyPoints;
        pickup?: Content.Schema.InventoryPickup;
        price?: Content.Schema.Price;
        quantity?: number;
        salePrice?: Content.Schema.Price;
        salePriceEffectiveDate?: string;
        sellOnGoogleQuantity?: number;
      }
      export interface InventorySetResponse {
        kind?: string;
      }
      export interface InvoiceSummary {
        additionalChargeSummaries?: Content.Schema.InvoiceSummaryAdditionalChargeSummary[];
        customerBalance?: Content.Schema.Amount;
        googleBalance?: Content.Schema.Amount;
        merchantBalance?: Content.Schema.Amount;
        productTotal?: Content.Schema.Amount;
        promotionSummaries?: Content.Schema.Promotion[];
      }
      export interface InvoiceSummaryAdditionalChargeSummary {
        totalAmount?: Content.Schema.Amount;
        type?: string;
      }
      export interface LiaAboutPageSettings {
        status?: string;
        url?: string;
      }
      export interface LiaCountrySettings {
        about?: Content.Schema.LiaAboutPageSettings;
        country?: string;
        hostedLocalStorefrontActive?: boolean;
        inventory?: Content.Schema.LiaInventorySettings;
        onDisplayToOrder?: Content.Schema.LiaOnDisplayToOrderSettings;
        posDataProvider?: Content.Schema.LiaPosDataProvider;
        storePickupActive?: boolean;
      }
      export interface LiaInventorySettings {
        inventoryVerificationContactEmail?: string;
        inventoryVerificationContactName?: string;
        inventoryVerificationContactStatus?: string;
        status?: string;
      }
      export interface LiaOnDisplayToOrderSettings {
        shippingCostPolicyUrl?: string;
        status?: string;
      }
      export interface LiaPosDataProvider {
        posDataProviderId?: string;
        posExternalAccountId?: string;
      }
      export interface LiaSettings {
        accountId?: string;
        countrySettings?: Content.Schema.LiaCountrySettings[];
        kind?: string;
      }
      export interface LiasettingsCustomBatchRequest {
        entries?: Content.Schema.LiasettingsCustomBatchRequestEntry[];
      }
      export interface LiasettingsCustomBatchRequestEntry {
        accountId?: string;
        batchId?: number;
        contactEmail?: string;
        contactName?: string;
        country?: string;
        gmbEmail?: string;
        liaSettings?: Content.Schema.LiaSettings;
        merchantId?: string;
        method?: string;
        posDataProviderId?: string;
        posExternalAccountId?: string;
      }
      export interface LiasettingsCustomBatchResponse {
        entries?: Content.Schema.LiasettingsCustomBatchResponseEntry[];
        kind?: string;
      }
      export interface LiasettingsCustomBatchResponseEntry {
        batchId?: number;
        errors?: Content.Schema.Errors;
        gmbAccounts?: Content.Schema.GmbAccounts;
        kind?: string;
        liaSettings?: Content.Schema.LiaSettings;
        posDataProviders?: Content.Schema.PosDataProviders[];
      }
      export interface LiasettingsGetAccessibleGmbAccountsResponse {
        accountId?: string;
        gmbAccounts?: Content.Schema.GmbAccountsGmbAccount[];
        kind?: string;
      }
      export interface LiasettingsListPosDataProvidersResponse {
        kind?: string;
        posDataProviders?: Content.Schema.PosDataProviders[];
      }
      export interface LiasettingsListResponse {
        kind?: string;
        nextPageToken?: string;
        resources?: Content.Schema.LiaSettings[];
      }
      export interface LiasettingsRequestGmbAccessResponse {
        kind?: string;
      }
      export interface LiasettingsRequestInventoryVerificationResponse {
        kind?: string;
      }
      export interface LiasettingsSetInventoryVerificationContactResponse {
        kind?: string;
      }
      export interface LiasettingsSetPosDataProviderResponse {
        kind?: string;
      }
      export interface LocationIdSet {
        locationIds?: string[];
      }
      export interface LoyaltyPoints {
        name?: string;
        pointsValue?: string;
        ratio?: number;
      }
      export interface MerchantOrderReturn {
        creationDate?: string;
        merchantOrderId?: string;
        orderId?: string;
        orderReturnId?: string;
        returnItems?: Content.Schema.MerchantOrderReturnItem[];
        returnShipments?: Content.Schema.ReturnShipment[];
      }
      export interface MerchantOrderReturnItem {
        customerReturnReason?: Content.Schema.CustomerReturnReason;
        itemId?: string;
        merchantReturnReason?: Content.Schema.RefundReason;
        product?: Content.Schema.OrderLineItemProduct;
        returnShipmentIds?: string[];
        state?: string;
      }
      export interface Order {
        acknowledged?: boolean;
        channelType?: string;
        customer?: Content.Schema.OrderCustomer;
        deliveryDetails?: Content.Schema.OrderDeliveryDetails;
        id?: string;
        kind?: string;
        lineItems?: Content.Schema.OrderLineItem[];
        merchantId?: string;
        merchantOrderId?: string;
        netAmount?: Content.Schema.Price;
        paymentMethod?: Content.Schema.OrderPaymentMethod;
        paymentStatus?: string;
        placedDate?: string;
        promotions?: Content.Schema.OrderLegacyPromotion[];
        refunds?: Content.Schema.OrderRefund[];
        shipments?: Content.Schema.OrderShipment[];
        shippingCost?: Content.Schema.Price;
        shippingCostTax?: Content.Schema.Price;
        shippingOption?: string;
        status?: string;
        taxCollector?: string;
      }
      export interface OrderAddress {
        country?: string;
        fullAddress?: string[];
        isPostOfficeBox?: boolean;
        locality?: string;
        postalCode?: string;
        recipientName?: string;
        region?: string;
        streetAddress?: string[];
      }
      export interface OrderCancellation {
        actor?: string;
        creationDate?: string;
        quantity?: number;
        reason?: string;
        reasonText?: string;
      }
      export interface OrderCustomer {
        email?: string;
        explicitMarketingPreference?: boolean;
        fullName?: string;
        marketingRightsInfo?: Content.Schema.OrderCustomerMarketingRightsInfo;
      }
      export interface OrderCustomerMarketingRightsInfo {
        explicitMarketingPreference?: string;
        lastUpdatedTimestamp?: string;
        marketingEmailAddress?: string;
      }
      export interface OrderDeliveryDetails {
        address?: Content.Schema.OrderAddress;
        phoneNumber?: string;
      }
      export interface OrderLegacyPromotion {
        benefits?: Content.Schema.OrderLegacyPromotionBenefit[];
        effectiveDates?: string;
        genericRedemptionCode?: string;
        id?: string;
        longTitle?: string;
        productApplicability?: string;
        redemptionChannel?: string;
      }
      export interface OrderLegacyPromotionBenefit {
        discount?: Content.Schema.Price;
        offerIds?: string[];
        subType?: string;
        taxImpact?: Content.Schema.Price;
        type?: string;
      }
      export interface OrderLineItem {
        annotations?: Content.Schema.OrderMerchantProvidedAnnotation[];
        cancellations?: Content.Schema.OrderCancellation[];
        id?: string;
        price?: Content.Schema.Price;
        product?: Content.Schema.OrderLineItemProduct;
        quantityCanceled?: number;
        quantityDelivered?: number;
        quantityOrdered?: number;
        quantityPending?: number;
        quantityReturned?: number;
        quantityShipped?: number;
        returnInfo?: Content.Schema.OrderLineItemReturnInfo;
        returns?: Content.Schema.OrderReturn[];
        shippingDetails?: Content.Schema.OrderLineItemShippingDetails;
        tax?: Content.Schema.Price;
      }
      export interface OrderLineItemProduct {
        brand?: string;
        channel?: string;
        condition?: string;
        contentLanguage?: string;
        fees?: Content.Schema.OrderLineItemProductFee[];
        gtin?: string;
        id?: string;
        imageLink?: string;
        itemGroupId?: string;
        mpn?: string;
        offerId?: string;
        price?: Content.Schema.Price;
        shownImage?: string;
        targetCountry?: string;
        title?: string;
        variantAttributes?: Content.Schema.OrderLineItemProductVariantAttribute[];
      }
      export interface OrderLineItemProductFee {
        amount?: Content.Schema.Price;
        name?: string;
      }
      export interface OrderLineItemProductVariantAttribute {
        dimension?: string;
        value?: string;
      }
      export interface OrderLineItemReturnInfo {
        daysToReturn?: number;
        isReturnable?: boolean;
        policyUrl?: string;
      }
      export interface OrderLineItemShippingDetails {
        deliverByDate?: string;
        method?: Content.Schema.OrderLineItemShippingDetailsMethod;
        shipByDate?: string;
      }
      export interface OrderLineItemShippingDetailsMethod {
        carrier?: string;
        maxDaysInTransit?: number;
        methodName?: string;
        minDaysInTransit?: number;
      }
      export interface OrderMerchantProvidedAnnotation {
        key?: string;
        value?: string;
      }
      export interface OrderPaymentMethod {
        billingAddress?: Content.Schema.OrderAddress;
        expirationMonth?: number;
        expirationYear?: number;
        lastFourDigits?: string;
        phoneNumber?: string;
        type?: string;
      }
      export interface OrderRefund {
        actor?: string;
        amount?: Content.Schema.Price;
        creationDate?: string;
        reason?: string;
        reasonText?: string;
      }
      export interface OrderReportDisbursement {
        disbursementAmount?: Content.Schema.Price;
        disbursementCreationDate?: string;
        disbursementDate?: string;
        disbursementId?: string;
        merchantId?: string;
      }
      export interface OrderReportTransaction {
        disbursementAmount?: Content.Schema.Price;
        disbursementCreationDate?: string;
        disbursementDate?: string;
        disbursementId?: string;
        merchantId?: string;
        merchantOrderId?: string;
        orderId?: string;
        productAmount?: Content.Schema.Amount;
        productAmountWithRemittedTax?: Content.Schema.ProductAmount;
        transactionDate?: string;
      }
      export interface OrderReturn {
        actor?: string;
        creationDate?: string;
        quantity?: number;
        reason?: string;
        reasonText?: string;
      }
      export interface OrderShipment {
        carrier?: string;
        creationDate?: string;
        deliveryDate?: string;
        id?: string;
        lineItems?: Content.Schema.OrderShipmentLineItemShipment[];
        status?: string;
        trackingId?: string;
      }
      export interface OrderShipmentLineItemShipment {
        lineItemId?: string;
        productId?: string;
        quantity?: number;
      }
      export interface OrderinvoicesCreateChargeInvoiceRequest {
        invoiceId?: string;
        invoiceSummary?: Content.Schema.InvoiceSummary;
        lineItemInvoices?: Content.Schema.ShipmentInvoiceLineItemInvoice[];
        operationId?: string;
        shipmentGroupId?: string;
      }
      export interface OrderinvoicesCreateChargeInvoiceResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrderinvoicesCreateRefundInvoiceRequest {
        invoiceId?: string;
        operationId?: string;
        refundOnlyOption?: Content.Schema.OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption;
        returnOption?: Content.Schema.OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption;
        shipmentInvoices?: Content.Schema.ShipmentInvoice[];
      }
      export interface OrderinvoicesCreateRefundInvoiceResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption {
        description?: string;
        reason?: string;
      }
      export interface OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption {
        description?: string;
        reason?: string;
      }
      export interface OrderpaymentsNotifyAuthApprovedRequest {
        authAmountPretax?: Content.Schema.Price;
        authAmountTax?: Content.Schema.Price;
      }
      export interface OrderpaymentsNotifyAuthApprovedResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrderpaymentsNotifyAuthDeclinedRequest {
        declineReason?: string;
      }
      export interface OrderpaymentsNotifyAuthDeclinedResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrderpaymentsNotifyChargeRequest {
        chargeState?: string;
        invoiceId?: string;
        invoiceIds?: string[];
      }
      export interface OrderpaymentsNotifyChargeResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrderpaymentsNotifyRefundRequest {
        invoiceId?: string;
        invoiceIds?: string[];
        refundState?: string;
      }
      export interface OrderpaymentsNotifyRefundResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrderreportsListDisbursementsResponse {
        disbursements?: Content.Schema.OrderReportDisbursement[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface OrderreportsListTransactionsResponse {
        kind?: string;
        nextPageToken?: string;
        transactions?: Content.Schema.OrderReportTransaction[];
      }
      export interface OrderreturnsListResponse {
        kind?: string;
        nextPageToken?: string;
        resources?: Content.Schema.MerchantOrderReturn[];
      }
      export interface OrdersAcknowledgeRequest {
        operationId?: string;
      }
      export interface OrdersAcknowledgeResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrdersAdvanceTestOrderResponse {
        kind?: string;
      }
      export interface OrdersCancelLineItemRequest {
        amount?: Content.Schema.Price;
        amountPretax?: Content.Schema.Price;
        amountTax?: Content.Schema.Price;
        lineItemId?: string;
        operationId?: string;
        productId?: string;
        quantity?: number;
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersCancelLineItemResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrdersCancelRequest {
        operationId?: string;
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersCancelResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrdersCancelTestOrderByCustomerRequest {
        reason?: string;
      }
      export interface OrdersCancelTestOrderByCustomerResponse {
        kind?: string;
      }
      export interface OrdersCreateTestOrderRequest {
        country?: string;
        templateName?: string;
        testOrder?: Content.Schema.TestOrder;
      }
      export interface OrdersCreateTestOrderResponse {
        kind?: string;
        orderId?: string;
      }
      export interface OrdersCreateTestReturnRequest {
        items?: Content.Schema.OrdersCustomBatchRequestEntryCreateTestReturnReturnItem[];
      }
      export interface OrdersCreateTestReturnResponse {
        kind?: string;
        returnId?: string;
      }
      export interface OrdersCustomBatchRequest {
        entries?: Content.Schema.OrdersCustomBatchRequestEntry[];
      }
      export interface OrdersCustomBatchRequestEntry {
        batchId?: number;
        cancel?: Content.Schema.OrdersCustomBatchRequestEntryCancel;
        cancelLineItem?: Content.Schema.OrdersCustomBatchRequestEntryCancelLineItem;
        inStoreRefundLineItem?: Content.Schema.OrdersCustomBatchRequestEntryInStoreRefundLineItem;
        merchantId?: string;
        merchantOrderId?: string;
        method?: string;
        operationId?: string;
        orderId?: string;
        refund?: Content.Schema.OrdersCustomBatchRequestEntryRefund;
        rejectReturnLineItem?: Content.Schema.OrdersCustomBatchRequestEntryRejectReturnLineItem;
        returnLineItem?: Content.Schema.OrdersCustomBatchRequestEntryReturnLineItem;
        returnRefundLineItem?: Content.Schema.OrdersCustomBatchRequestEntryReturnRefundLineItem;
        setLineItemMetadata?: Content.Schema.OrdersCustomBatchRequestEntrySetLineItemMetadata;
        shipLineItems?: Content.Schema.OrdersCustomBatchRequestEntryShipLineItems;
        updateLineItemShippingDetails?: Content.Schema.OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails;
        updateShipment?: Content.Schema.OrdersCustomBatchRequestEntryUpdateShipment;
      }
      export interface OrdersCustomBatchRequestEntryCancel {
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersCustomBatchRequestEntryCancelLineItem {
        amount?: Content.Schema.Price;
        amountPretax?: Content.Schema.Price;
        amountTax?: Content.Schema.Price;
        lineItemId?: string;
        productId?: string;
        quantity?: number;
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersCustomBatchRequestEntryCreateTestReturnReturnItem {
        lineItemId?: string;
        quantity?: number;
      }
      export interface OrdersCustomBatchRequestEntryInStoreRefundLineItem {
        amountPretax?: Content.Schema.Price;
        amountTax?: Content.Schema.Price;
        lineItemId?: string;
        productId?: string;
        quantity?: number;
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersCustomBatchRequestEntryRefund {
        amount?: Content.Schema.Price;
        amountPretax?: Content.Schema.Price;
        amountTax?: Content.Schema.Price;
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersCustomBatchRequestEntryRejectReturnLineItem {
        lineItemId?: string;
        productId?: string;
        quantity?: number;
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersCustomBatchRequestEntryReturnLineItem {
        lineItemId?: string;
        productId?: string;
        quantity?: number;
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersCustomBatchRequestEntryReturnRefundLineItem {
        amountPretax?: Content.Schema.Price;
        amountTax?: Content.Schema.Price;
        lineItemId?: string;
        productId?: string;
        quantity?: number;
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersCustomBatchRequestEntrySetLineItemMetadata {
        annotations?: Content.Schema.OrderMerchantProvidedAnnotation[];
        lineItemId?: string;
        productId?: string;
      }
      export interface OrdersCustomBatchRequestEntryShipLineItems {
        carrier?: string;
        lineItems?: Content.Schema.OrderShipmentLineItemShipment[];
        shipmentGroupId?: string;
        shipmentId?: string;
        shipmentInfos?: Content.Schema.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[];
        trackingId?: string;
      }
      export interface OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo {
        carrier?: string;
        shipmentId?: string;
        trackingId?: string;
      }
      export interface OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails {
        deliverByDate?: string;
        lineItemId?: string;
        productId?: string;
        shipByDate?: string;
      }
      export interface OrdersCustomBatchRequestEntryUpdateShipment {
        carrier?: string;
        deliveryDate?: string;
        shipmentId?: string;
        status?: string;
        trackingId?: string;
      }
      export interface OrdersCustomBatchResponse {
        entries?: Content.Schema.OrdersCustomBatchResponseEntry[];
        kind?: string;
      }
      export interface OrdersCustomBatchResponseEntry {
        batchId?: number;
        errors?: Content.Schema.Errors;
        executionStatus?: string;
        kind?: string;
        order?: Content.Schema.Order;
      }
      export interface OrdersGetByMerchantOrderIdResponse {
        kind?: string;
        order?: Content.Schema.Order;
      }
      export interface OrdersGetTestOrderTemplateResponse {
        kind?: string;
        template?: Content.Schema.TestOrder;
      }
      export interface OrdersInStoreRefundLineItemRequest {
        amountPretax?: Content.Schema.Price;
        amountTax?: Content.Schema.Price;
        lineItemId?: string;
        operationId?: string;
        productId?: string;
        quantity?: number;
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersInStoreRefundLineItemResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrdersListResponse {
        kind?: string;
        nextPageToken?: string;
        resources?: Content.Schema.Order[];
      }
      export interface OrdersRefundRequest {
        amount?: Content.Schema.Price;
        amountPretax?: Content.Schema.Price;
        amountTax?: Content.Schema.Price;
        operationId?: string;
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersRefundResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrdersRejectReturnLineItemRequest {
        lineItemId?: string;
        operationId?: string;
        productId?: string;
        quantity?: number;
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersRejectReturnLineItemResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrdersReturnLineItemRequest {
        lineItemId?: string;
        operationId?: string;
        productId?: string;
        quantity?: number;
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersReturnLineItemResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrdersReturnRefundLineItemRequest {
        amountPretax?: Content.Schema.Price;
        amountTax?: Content.Schema.Price;
        lineItemId?: string;
        operationId?: string;
        productId?: string;
        quantity?: number;
        reason?: string;
        reasonText?: string;
      }
      export interface OrdersReturnRefundLineItemResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrdersSetLineItemMetadataRequest {
        annotations?: Content.Schema.OrderMerchantProvidedAnnotation[];
        lineItemId?: string;
        operationId?: string;
        productId?: string;
      }
      export interface OrdersSetLineItemMetadataResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrdersShipLineItemsRequest {
        carrier?: string;
        lineItems?: Content.Schema.OrderShipmentLineItemShipment[];
        operationId?: string;
        shipmentGroupId?: string;
        shipmentId?: string;
        shipmentInfos?: Content.Schema.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[];
        trackingId?: string;
      }
      export interface OrdersShipLineItemsResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrdersUpdateLineItemShippingDetailsRequest {
        deliverByDate?: string;
        lineItemId?: string;
        operationId?: string;
        productId?: string;
        shipByDate?: string;
      }
      export interface OrdersUpdateLineItemShippingDetailsResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrdersUpdateMerchantOrderIdRequest {
        merchantOrderId?: string;
        operationId?: string;
      }
      export interface OrdersUpdateMerchantOrderIdResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface OrdersUpdateShipmentRequest {
        carrier?: string;
        deliveryDate?: string;
        operationId?: string;
        shipmentId?: string;
        status?: string;
        trackingId?: string;
      }
      export interface OrdersUpdateShipmentResponse {
        executionStatus?: string;
        kind?: string;
      }
      export interface PosCustomBatchRequest {
        entries?: Content.Schema.PosCustomBatchRequestEntry[];
      }
      export interface PosCustomBatchRequestEntry {
        batchId?: number;
        inventory?: Content.Schema.PosInventory;
        merchantId?: string;
        method?: string;
        sale?: Content.Schema.PosSale;
        store?: Content.Schema.PosStore;
        storeCode?: string;
        targetMerchantId?: string;
      }
      export interface PosCustomBatchResponse {
        entries?: Content.Schema.PosCustomBatchResponseEntry[];
        kind?: string;
      }
      export interface PosCustomBatchResponseEntry {
        batchId?: number;
        errors?: Content.Schema.Errors;
        inventory?: Content.Schema.PosInventory;
        kind?: string;
        sale?: Content.Schema.PosSale;
        store?: Content.Schema.PosStore;
      }
      export interface PosDataProviders {
        country?: string;
        posDataProviders?: Content.Schema.PosDataProvidersPosDataProvider[];
      }
      export interface PosDataProvidersPosDataProvider {
        displayName?: string;
        fullName?: string;
        providerId?: string;
      }
      export interface PosInventory {
        contentLanguage?: string;
        gtin?: string;
        itemId?: string;
        kind?: string;
        price?: Content.Schema.Price;
        quantity?: string;
        storeCode?: string;
        targetCountry?: string;
        timestamp?: string;
      }
      export interface PosInventoryRequest {
        contentLanguage?: string;
        gtin?: string;
        itemId?: string;
        price?: Content.Schema.Price;
        quantity?: string;
        storeCode?: string;
        targetCountry?: string;
        timestamp?: string;
      }
      export interface PosInventoryResponse {
        contentLanguage?: string;
        gtin?: string;
        itemId?: string;
        kind?: string;
        price?: Content.Schema.Price;
        quantity?: string;
        storeCode?: string;
        targetCountry?: string;
        timestamp?: string;
      }
      export interface PosListResponse {
        kind?: string;
        resources?: Content.Schema.PosStore[];
      }
      export interface PosSale {
        contentLanguage?: string;
        gtin?: string;
        itemId?: string;
        kind?: string;
        price?: Content.Schema.Price;
        quantity?: string;
        saleId?: string;
        storeCode?: string;
        targetCountry?: string;
        timestamp?: string;
      }
      export interface PosSaleRequest {
        contentLanguage?: string;
        gtin?: string;
        itemId?: string;
        price?: Content.Schema.Price;
        quantity?: string;
        saleId?: string;
        storeCode?: string;
        targetCountry?: string;
        timestamp?: string;
      }
      export interface PosSaleResponse {
        contentLanguage?: string;
        gtin?: string;
        itemId?: string;
        kind?: string;
        price?: Content.Schema.Price;
        quantity?: string;
        saleId?: string;
        storeCode?: string;
        targetCountry?: string;
        timestamp?: string;
      }
      export interface PosStore {
        kind?: string;
        storeAddress?: string;
        storeCode?: string;
      }
      export interface PostalCodeGroup {
        country?: string;
        name?: string;
        postalCodeRanges?: Content.Schema.PostalCodeRange[];
      }
      export interface PostalCodeRange {
        postalCodeRangeBegin?: string;
        postalCodeRangeEnd?: string;
      }
      export interface Price {
        currency?: string;
        value?: string;
      }
      export interface Product {
        additionalImageLinks?: string[];
        additionalProductTypes?: string[];
        adult?: boolean;
        adwordsGrouping?: string;
        adwordsLabels?: string[];
        adwordsRedirect?: string;
        ageGroup?: string;
        aspects?: Content.Schema.ProductAspect[];
        availability?: string;
        availabilityDate?: string;
        brand?: string;
        channel?: string;
        color?: string;
        condition?: string;
        contentLanguage?: string;
        costOfGoodsSold?: Content.Schema.Price;
        customAttributes?: Content.Schema.CustomAttribute[];
        customGroups?: Content.Schema.CustomGroup[];
        customLabel0?: string;
        customLabel1?: string;
        customLabel2?: string;
        customLabel3?: string;
        customLabel4?: string;
        description?: string;
        destinations?: Content.Schema.ProductDestination[];
        displayAdsId?: string;
        displayAdsLink?: string;
        displayAdsSimilarIds?: string[];
        displayAdsTitle?: string;
        displayAdsValue?: number;
        energyEfficiencyClass?: string;
        expirationDate?: string;
        gender?: string;
        googleProductCategory?: string;
        gtin?: string;
        id?: string;
        identifierExists?: boolean;
        imageLink?: string;
        installment?: Content.Schema.Installment;
        isBundle?: boolean;
        itemGroupId?: string;
        kind?: string;
        link?: string;
        loyaltyPoints?: Content.Schema.LoyaltyPoints;
        material?: string;
        maxEnergyEfficiencyClass?: string;
        maxHandlingTime?: string;
        minEnergyEfficiencyClass?: string;
        minHandlingTime?: string;
        mobileLink?: string;
        mpn?: string;
        multipack?: string;
        offerId?: string;
        onlineOnly?: boolean;
        pattern?: string;
        price?: Content.Schema.Price;
        productType?: string;
        promotionIds?: string[];
        salePrice?: Content.Schema.Price;
        salePriceEffectiveDate?: string;
        sellOnGoogleQuantity?: string;
        shipping?: Content.Schema.ProductShipping[];
        shippingHeight?: Content.Schema.ProductShippingDimension;
        shippingLabel?: string;
        shippingLength?: Content.Schema.ProductShippingDimension;
        shippingWeight?: Content.Schema.ProductShippingWeight;
        shippingWidth?: Content.Schema.ProductShippingDimension;
        sizeSystem?: string;
        sizeType?: string;
        sizes?: string[];
        source?: string;
        targetCountry?: string;
        taxes?: Content.Schema.ProductTax[];
        title?: string;
        unitPricingBaseMeasure?: Content.Schema.ProductUnitPricingBaseMeasure;
        unitPricingMeasure?: Content.Schema.ProductUnitPricingMeasure;
        validatedDestinations?: string[];
        warnings?: Content.Schema.Error[];
      }
      export interface ProductAmount {
        priceAmount?: Content.Schema.Price;
        remittedTaxAmount?: Content.Schema.Price;
        taxAmount?: Content.Schema.Price;
      }
      export interface ProductAspect {
        aspectName?: string;
        destinationName?: string;
        intention?: string;
      }
      export interface ProductDestination {
        destinationName?: string;
        intention?: string;
      }
      export interface ProductShipping {
        country?: string;
        locationGroupName?: string;
        locationId?: string;
        postalCode?: string;
        price?: Content.Schema.Price;
        region?: string;
        service?: string;
      }
      export interface ProductShippingDimension {
        unit?: string;
        value?: number;
      }
      export interface ProductShippingWeight {
        unit?: string;
        value?: number;
      }
      export interface ProductStatus {
        creationDate?: string;
        dataQualityIssues?: Content.Schema.ProductStatusDataQualityIssue[];
        destinationStatuses?: Content.Schema.ProductStatusDestinationStatus[];
        googleExpirationDate?: string;
        itemLevelIssues?: Content.Schema.ProductStatusItemLevelIssue[];
        kind?: string;
        lastUpdateDate?: string;
        link?: string;
        product?: Content.Schema.Product;
        productId?: string;
        title?: string;
      }
      export interface ProductStatusDataQualityIssue {
        destination?: string;
        detail?: string;
        fetchStatus?: string;
        id?: string;
        location?: string;
        severity?: string;
        timestamp?: string;
        valueOnLandingPage?: string;
        valueProvided?: string;
      }
      export interface ProductStatusDestinationStatus {
        approvalPending?: boolean;
        approvalStatus?: string;
        destination?: string;
        intention?: string;
      }
      export interface ProductStatusItemLevelIssue {
        attributeName?: string;
        code?: string;
        description?: string;
        destination?: string;
        detail?: string;
        documentation?: string;
        resolution?: string;
        servability?: string;
      }
      export interface ProductTax {
        country?: string;
        locationId?: string;
        postalCode?: string;
        rate?: number;
        region?: string;
        taxShip?: boolean;
      }
      export interface ProductUnitPricingBaseMeasure {
        unit?: string;
        value?: string;
      }
      export interface ProductUnitPricingMeasure {
        unit?: string;
        value?: number;
      }
      export interface ProductsCustomBatchRequest {
        entries?: Content.Schema.ProductsCustomBatchRequestEntry[];
      }
      export interface ProductsCustomBatchRequestEntry {
        batchId?: number;
        merchantId?: string;
        method?: string;
        product?: Content.Schema.Product;
        productId?: string;
      }
      export interface ProductsCustomBatchResponse {
        entries?: Content.Schema.ProductsCustomBatchResponseEntry[];
        kind?: string;
      }
      export interface ProductsCustomBatchResponseEntry {
        batchId?: number;
        errors?: Content.Schema.Errors;
        kind?: string;
        product?: Content.Schema.Product;
      }
      export interface ProductsListResponse {
        kind?: string;
        nextPageToken?: string;
        resources?: Content.Schema.Product[];
      }
      export interface ProductstatusesCustomBatchRequest {
        entries?: Content.Schema.ProductstatusesCustomBatchRequestEntry[];
      }
      export interface ProductstatusesCustomBatchRequestEntry {
        batchId?: number;
        destinations?: string[];
        includeAttributes?: boolean;
        merchantId?: string;
        method?: string;
        productId?: string;
      }
      export interface ProductstatusesCustomBatchResponse {
        entries?: Content.Schema.ProductstatusesCustomBatchResponseEntry[];
        kind?: string;
      }
      export interface ProductstatusesCustomBatchResponseEntry {
        batchId?: number;
        errors?: Content.Schema.Errors;
        kind?: string;
        productStatus?: Content.Schema.ProductStatus;
      }
      export interface ProductstatusesListResponse {
        kind?: string;
        nextPageToken?: string;
        resources?: Content.Schema.ProductStatus[];
      }
      export interface Promotion {
        promotionAmount?: Content.Schema.Amount;
        promotionId?: string;
      }
      export interface RateGroup {
        applicableShippingLabels?: string[];
        carrierRates?: Content.Schema.CarrierRate[];
        mainTable?: Content.Schema.Table;
        name?: string;
        singleValue?: Content.Schema.Value;
        subtables?: Content.Schema.Table[];
      }
      export interface RefundReason {
        description?: string;
        reasonCode?: string;
      }
      export interface ReturnShipment {
        creationDate?: string;
        deliveryDate?: string;
        returnMethodType?: string;
        shipmentId?: string;
        shipmentTrackingInfos?: Content.Schema.ShipmentTrackingInfo[];
        shippingDate?: string;
        state?: string;
      }
      export interface Row {
        cells?: Content.Schema.Value[];
      }
      export interface Service {
        active?: boolean;
        currency?: string;
        deliveryCountry?: string;
        deliveryTime?: Content.Schema.DeliveryTime;
        eligibility?: string;
        minimumOrderValue?: Content.Schema.Price;
        name?: string;
        rateGroups?: Content.Schema.RateGroup[];
      }
      export interface ShipmentInvoice {
        invoiceSummary?: Content.Schema.InvoiceSummary;
        lineItemInvoices?: Content.Schema.ShipmentInvoiceLineItemInvoice[];
        shipmentGroupId?: string;
      }
      export interface ShipmentInvoiceLineItemInvoice {
        lineItemId?: string;
        productId?: string;
        shipmentUnitIds?: string[];
        unitInvoice?: Content.Schema.UnitInvoice;
      }
      export interface ShipmentTrackingInfo {
        carrier?: string;
        trackingNumber?: string;
      }
      export interface ShippingSettings {
        accountId?: string;
        postalCodeGroups?: Content.Schema.PostalCodeGroup[];
        services?: Content.Schema.Service[];
      }
      export interface ShippingsettingsCustomBatchRequest {
        entries?: Content.Schema.ShippingsettingsCustomBatchRequestEntry[];
      }
      export interface ShippingsettingsCustomBatchRequestEntry {
        accountId?: string;
        batchId?: number;
        merchantId?: string;
        method?: string;
        shippingSettings?: Content.Schema.ShippingSettings;
      }
      export interface ShippingsettingsCustomBatchResponse {
        entries?: Content.Schema.ShippingsettingsCustomBatchResponseEntry[];
        kind?: string;
      }
      export interface ShippingsettingsCustomBatchResponseEntry {
        batchId?: number;
        errors?: Content.Schema.Errors;
        kind?: string;
        shippingSettings?: Content.Schema.ShippingSettings;
      }
      export interface ShippingsettingsGetSupportedCarriersResponse {
        carriers?: Content.Schema.CarriersCarrier[];
        kind?: string;
      }
      export interface ShippingsettingsGetSupportedHolidaysResponse {
        holidays?: Content.Schema.HolidaysHoliday[];
        kind?: string;
      }
      export interface ShippingsettingsListResponse {
        kind?: string;
        nextPageToken?: string;
        resources?: Content.Schema.ShippingSettings[];
      }
      export interface Table {
        columnHeaders?: Content.Schema.Headers;
        name?: string;
        rowHeaders?: Content.Schema.Headers;
        rows?: Content.Schema.Row[];
      }
      export interface TestOrder {
        customer?: Content.Schema.TestOrderCustomer;
        enableOrderinvoices?: boolean;
        kind?: string;
        lineItems?: Content.Schema.TestOrderLineItem[];
        notificationMode?: string;
        paymentMethod?: Content.Schema.TestOrderPaymentMethod;
        predefinedDeliveryAddress?: string;
        promotions?: Content.Schema.OrderLegacyPromotion[];
        shippingCost?: Content.Schema.Price;
        shippingCostTax?: Content.Schema.Price;
        shippingOption?: string;
      }
      export interface TestOrderCustomer {
        email?: string;
        explicitMarketingPreference?: boolean;
        fullName?: string;
        marketingRightsInfo?: Content.Schema.TestOrderCustomerMarketingRightsInfo;
      }
      export interface TestOrderCustomerMarketingRightsInfo {
        explicitMarketingPreference?: string;
        lastUpdatedTimestamp?: string;
      }
      export interface TestOrderLineItem {
        product?: Content.Schema.TestOrderLineItemProduct;
        quantityOrdered?: number;
        returnInfo?: Content.Schema.OrderLineItemReturnInfo;
        shippingDetails?: Content.Schema.OrderLineItemShippingDetails;
        unitTax?: Content.Schema.Price;
      }
      export interface TestOrderLineItemProduct {
        brand?: string;
        channel?: string;
        condition?: string;
        contentLanguage?: string;
        gtin?: string;
        imageLink?: string;
        itemGroupId?: string;
        mpn?: string;
        offerId?: string;
        price?: Content.Schema.Price;
        targetCountry?: string;
        title?: string;
        variantAttributes?: Content.Schema.OrderLineItemProductVariantAttribute[];
      }
      export interface TestOrderPaymentMethod {
        expirationMonth?: number;
        expirationYear?: number;
        lastFourDigits?: string;
        predefinedBillingAddress?: string;
        type?: string;
      }
      export interface TransitTable {
        postalCodeGroupNames?: string[];
        rows?: Content.Schema.TransitTableTransitTimeRow[];
        transitTimeLabels?: string[];
      }
      export interface TransitTableTransitTimeRow {
        values?: Content.Schema.TransitTableTransitTimeRowTransitTimeValue[];
      }
      export interface TransitTableTransitTimeRowTransitTimeValue {
        maxTransitTimeInDays?: number;
        minTransitTimeInDays?: number;
      }
      export interface UnitInvoice {
        additionalCharges?: Content.Schema.UnitInvoiceAdditionalCharge[];
        promotions?: Content.Schema.Promotion[];
        unitPricePretax?: Content.Schema.Price;
        unitPriceTaxes?: Content.Schema.UnitInvoiceTaxLine[];
      }
      export interface UnitInvoiceAdditionalCharge {
        additionalChargeAmount?: Content.Schema.Amount;
        additionalChargePromotions?: Content.Schema.Promotion[];
        type?: string;
      }
      export interface UnitInvoiceTaxLine {
        taxAmount?: Content.Schema.Price;
        taxName?: string;
        taxType?: string;
      }
      export interface Value {
        carrierRateName?: string;
        flatRate?: Content.Schema.Price;
        noShipping?: boolean;
        pricePercentage?: string;
        subtableName?: string;
      }
      export interface Weight {
        unit?: string;
        value?: string;
      }
    }
  }
  export interface Content {
    Accounts?: Content.Collection.AccountsCollection;
    Accountstatuses?: Content.Collection.AccountstatusesCollection;
    Accounttax?: Content.Collection.AccounttaxCollection;
    Datafeeds?: Content.Collection.DatafeedsCollection;
    Datafeedstatuses?: Content.Collection.DatafeedstatusesCollection;
    Inventory?: Content.Collection.InventoryCollection;
    Liasettings?: Content.Collection.LiasettingsCollection;
    Orderinvoices?: Content.Collection.OrderinvoicesCollection;
    Orderpayments?: Content.Collection.OrderpaymentsCollection;
    Orderreports?: Content.Collection.OrderreportsCollection;
    Orderreturns?: Content.Collection.OrderreturnsCollection;
    Orders?: Content.Collection.OrdersCollection;
    Pos?: Content.Collection.PosCollection;
    Products?: Content.Collection.ProductsCollection;
    Productstatuses?: Content.Collection.ProductstatusesCollection;
    Shippingsettings?: Content.Collection.ShippingsettingsCollection;
    // Create a new instance of Account
    newAccount(): Content.Schema.Account;
    // Create a new instance of AccountAddress
    newAccountAddress(): Content.Schema.AccountAddress;
    // Create a new instance of AccountAdwordsLink
    newAccountAdwordsLink(): Content.Schema.AccountAdwordsLink;
    // Create a new instance of AccountBusinessInformation
    newAccountBusinessInformation(): Content.Schema.AccountBusinessInformation;
    // Create a new instance of AccountCustomerService
    newAccountCustomerService(): Content.Schema.AccountCustomerService;
    // Create a new instance of AccountGoogleMyBusinessLink
    newAccountGoogleMyBusinessLink(): Content.Schema.AccountGoogleMyBusinessLink;
    // Create a new instance of AccountTax
    newAccountTax(): Content.Schema.AccountTax;
    // Create a new instance of AccountTaxTaxRule
    newAccountTaxTaxRule(): Content.Schema.AccountTaxTaxRule;
    // Create a new instance of AccountUser
    newAccountUser(): Content.Schema.AccountUser;
    // Create a new instance of AccountYouTubeChannelLink
    newAccountYouTubeChannelLink(): Content.Schema.AccountYouTubeChannelLink;
    // Create a new instance of AccountsCustomBatchRequest
    newAccountsCustomBatchRequest(): Content.Schema.AccountsCustomBatchRequest;
    // Create a new instance of AccountsCustomBatchRequestEntry
    newAccountsCustomBatchRequestEntry(): Content.Schema.AccountsCustomBatchRequestEntry;
    // Create a new instance of AccountsCustomBatchRequestEntryLinkRequest
    newAccountsCustomBatchRequestEntryLinkRequest(): Content.Schema.AccountsCustomBatchRequestEntryLinkRequest;
    // Create a new instance of AccountsLinkRequest
    newAccountsLinkRequest(): Content.Schema.AccountsLinkRequest;
    // Create a new instance of AccountstatusesCustomBatchRequest
    newAccountstatusesCustomBatchRequest(): Content.Schema.AccountstatusesCustomBatchRequest;
    // Create a new instance of AccountstatusesCustomBatchRequestEntry
    newAccountstatusesCustomBatchRequestEntry(): Content.Schema.AccountstatusesCustomBatchRequestEntry;
    // Create a new instance of AccounttaxCustomBatchRequest
    newAccounttaxCustomBatchRequest(): Content.Schema.AccounttaxCustomBatchRequest;
    // Create a new instance of AccounttaxCustomBatchRequestEntry
    newAccounttaxCustomBatchRequestEntry(): Content.Schema.AccounttaxCustomBatchRequestEntry;
    // Create a new instance of Amount
    newAmount(): Content.Schema.Amount;
    // Create a new instance of CarrierRate
    newCarrierRate(): Content.Schema.CarrierRate;
    // Create a new instance of CustomAttribute
    newCustomAttribute(): Content.Schema.CustomAttribute;
    // Create a new instance of CustomGroup
    newCustomGroup(): Content.Schema.CustomGroup;
    // Create a new instance of CutoffTime
    newCutoffTime(): Content.Schema.CutoffTime;
    // Create a new instance of Datafeed
    newDatafeed(): Content.Schema.Datafeed;
    // Create a new instance of DatafeedFetchSchedule
    newDatafeedFetchSchedule(): Content.Schema.DatafeedFetchSchedule;
    // Create a new instance of DatafeedFormat
    newDatafeedFormat(): Content.Schema.DatafeedFormat;
    // Create a new instance of DatafeedTarget
    newDatafeedTarget(): Content.Schema.DatafeedTarget;
    // Create a new instance of DatafeedsCustomBatchRequest
    newDatafeedsCustomBatchRequest(): Content.Schema.DatafeedsCustomBatchRequest;
    // Create a new instance of DatafeedsCustomBatchRequestEntry
    newDatafeedsCustomBatchRequestEntry(): Content.Schema.DatafeedsCustomBatchRequestEntry;
    // Create a new instance of DatafeedstatusesCustomBatchRequest
    newDatafeedstatusesCustomBatchRequest(): Content.Schema.DatafeedstatusesCustomBatchRequest;
    // Create a new instance of DatafeedstatusesCustomBatchRequestEntry
    newDatafeedstatusesCustomBatchRequestEntry(): Content.Schema.DatafeedstatusesCustomBatchRequestEntry;
    // Create a new instance of DeliveryTime
    newDeliveryTime(): Content.Schema.DeliveryTime;
    // Create a new instance of Error
    newError(): Content.Schema.Error;
    // Create a new instance of Headers
    newHeaders(): Content.Schema.Headers;
    // Create a new instance of HolidayCutoff
    newHolidayCutoff(): Content.Schema.HolidayCutoff;
    // Create a new instance of Installment
    newInstallment(): Content.Schema.Installment;
    // Create a new instance of Inventory
    newInventory(): Content.Schema.Inventory;
    // Create a new instance of InventoryCustomBatchRequest
    newInventoryCustomBatchRequest(): Content.Schema.InventoryCustomBatchRequest;
    // Create a new instance of InventoryCustomBatchRequestEntry
    newInventoryCustomBatchRequestEntry(): Content.Schema.InventoryCustomBatchRequestEntry;
    // Create a new instance of InventoryPickup
    newInventoryPickup(): Content.Schema.InventoryPickup;
    // Create a new instance of InventorySetRequest
    newInventorySetRequest(): Content.Schema.InventorySetRequest;
    // Create a new instance of InvoiceSummary
    newInvoiceSummary(): Content.Schema.InvoiceSummary;
    // Create a new instance of InvoiceSummaryAdditionalChargeSummary
    newInvoiceSummaryAdditionalChargeSummary(): Content.Schema.InvoiceSummaryAdditionalChargeSummary;
    // Create a new instance of LiaAboutPageSettings
    newLiaAboutPageSettings(): Content.Schema.LiaAboutPageSettings;
    // Create a new instance of LiaCountrySettings
    newLiaCountrySettings(): Content.Schema.LiaCountrySettings;
    // Create a new instance of LiaInventorySettings
    newLiaInventorySettings(): Content.Schema.LiaInventorySettings;
    // Create a new instance of LiaOnDisplayToOrderSettings
    newLiaOnDisplayToOrderSettings(): Content.Schema.LiaOnDisplayToOrderSettings;
    // Create a new instance of LiaPosDataProvider
    newLiaPosDataProvider(): Content.Schema.LiaPosDataProvider;
    // Create a new instance of LiaSettings
    newLiaSettings(): Content.Schema.LiaSettings;
    // Create a new instance of LiasettingsCustomBatchRequest
    newLiasettingsCustomBatchRequest(): Content.Schema.LiasettingsCustomBatchRequest;
    // Create a new instance of LiasettingsCustomBatchRequestEntry
    newLiasettingsCustomBatchRequestEntry(): Content.Schema.LiasettingsCustomBatchRequestEntry;
    // Create a new instance of LocationIdSet
    newLocationIdSet(): Content.Schema.LocationIdSet;
    // Create a new instance of LoyaltyPoints
    newLoyaltyPoints(): Content.Schema.LoyaltyPoints;
    // Create a new instance of OrderLegacyPromotion
    newOrderLegacyPromotion(): Content.Schema.OrderLegacyPromotion;
    // Create a new instance of OrderLegacyPromotionBenefit
    newOrderLegacyPromotionBenefit(): Content.Schema.OrderLegacyPromotionBenefit;
    // Create a new instance of OrderLineItemProductVariantAttribute
    newOrderLineItemProductVariantAttribute(): Content.Schema.OrderLineItemProductVariantAttribute;
    // Create a new instance of OrderLineItemReturnInfo
    newOrderLineItemReturnInfo(): Content.Schema.OrderLineItemReturnInfo;
    // Create a new instance of OrderLineItemShippingDetails
    newOrderLineItemShippingDetails(): Content.Schema.OrderLineItemShippingDetails;
    // Create a new instance of OrderLineItemShippingDetailsMethod
    newOrderLineItemShippingDetailsMethod(): Content.Schema.OrderLineItemShippingDetailsMethod;
    // Create a new instance of OrderMerchantProvidedAnnotation
    newOrderMerchantProvidedAnnotation(): Content.Schema.OrderMerchantProvidedAnnotation;
    // Create a new instance of OrderShipmentLineItemShipment
    newOrderShipmentLineItemShipment(): Content.Schema.OrderShipmentLineItemShipment;
    // Create a new instance of OrderinvoicesCreateChargeInvoiceRequest
    newOrderinvoicesCreateChargeInvoiceRequest(): Content.Schema.OrderinvoicesCreateChargeInvoiceRequest;
    // Create a new instance of OrderinvoicesCreateRefundInvoiceRequest
    newOrderinvoicesCreateRefundInvoiceRequest(): Content.Schema.OrderinvoicesCreateRefundInvoiceRequest;
    // Create a new instance of OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption
    newOrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption(): Content.Schema.OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption;
    // Create a new instance of OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption
    newOrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption(): Content.Schema.OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption;
    // Create a new instance of OrderpaymentsNotifyAuthApprovedRequest
    newOrderpaymentsNotifyAuthApprovedRequest(): Content.Schema.OrderpaymentsNotifyAuthApprovedRequest;
    // Create a new instance of OrderpaymentsNotifyAuthDeclinedRequest
    newOrderpaymentsNotifyAuthDeclinedRequest(): Content.Schema.OrderpaymentsNotifyAuthDeclinedRequest;
    // Create a new instance of OrderpaymentsNotifyChargeRequest
    newOrderpaymentsNotifyChargeRequest(): Content.Schema.OrderpaymentsNotifyChargeRequest;
    // Create a new instance of OrderpaymentsNotifyRefundRequest
    newOrderpaymentsNotifyRefundRequest(): Content.Schema.OrderpaymentsNotifyRefundRequest;
    // Create a new instance of OrdersAcknowledgeRequest
    newOrdersAcknowledgeRequest(): Content.Schema.OrdersAcknowledgeRequest;
    // Create a new instance of OrdersCancelLineItemRequest
    newOrdersCancelLineItemRequest(): Content.Schema.OrdersCancelLineItemRequest;
    // Create a new instance of OrdersCancelRequest
    newOrdersCancelRequest(): Content.Schema.OrdersCancelRequest;
    // Create a new instance of OrdersCancelTestOrderByCustomerRequest
    newOrdersCancelTestOrderByCustomerRequest(): Content.Schema.OrdersCancelTestOrderByCustomerRequest;
    // Create a new instance of OrdersCreateTestOrderRequest
    newOrdersCreateTestOrderRequest(): Content.Schema.OrdersCreateTestOrderRequest;
    // Create a new instance of OrdersCreateTestReturnRequest
    newOrdersCreateTestReturnRequest(): Content.Schema.OrdersCreateTestReturnRequest;
    // Create a new instance of OrdersCustomBatchRequest
    newOrdersCustomBatchRequest(): Content.Schema.OrdersCustomBatchRequest;
    // Create a new instance of OrdersCustomBatchRequestEntry
    newOrdersCustomBatchRequestEntry(): Content.Schema.OrdersCustomBatchRequestEntry;
    // Create a new instance of OrdersCustomBatchRequestEntryCancel
    newOrdersCustomBatchRequestEntryCancel(): Content.Schema.OrdersCustomBatchRequestEntryCancel;
    // Create a new instance of OrdersCustomBatchRequestEntryCancelLineItem
    newOrdersCustomBatchRequestEntryCancelLineItem(): Content.Schema.OrdersCustomBatchRequestEntryCancelLineItem;
    // Create a new instance of OrdersCustomBatchRequestEntryCreateTestReturnReturnItem
    newOrdersCustomBatchRequestEntryCreateTestReturnReturnItem(): Content.Schema.OrdersCustomBatchRequestEntryCreateTestReturnReturnItem;
    // Create a new instance of OrdersCustomBatchRequestEntryInStoreRefundLineItem
    newOrdersCustomBatchRequestEntryInStoreRefundLineItem(): Content.Schema.OrdersCustomBatchRequestEntryInStoreRefundLineItem;
    // Create a new instance of OrdersCustomBatchRequestEntryRefund
    newOrdersCustomBatchRequestEntryRefund(): Content.Schema.OrdersCustomBatchRequestEntryRefund;
    // Create a new instance of OrdersCustomBatchRequestEntryRejectReturnLineItem
    newOrdersCustomBatchRequestEntryRejectReturnLineItem(): Content.Schema.OrdersCustomBatchRequestEntryRejectReturnLineItem;
    // Create a new instance of OrdersCustomBatchRequestEntryReturnLineItem
    newOrdersCustomBatchRequestEntryReturnLineItem(): Content.Schema.OrdersCustomBatchRequestEntryReturnLineItem;
    // Create a new instance of OrdersCustomBatchRequestEntryReturnRefundLineItem
    newOrdersCustomBatchRequestEntryReturnRefundLineItem(): Content.Schema.OrdersCustomBatchRequestEntryReturnRefundLineItem;
    // Create a new instance of OrdersCustomBatchRequestEntrySetLineItemMetadata
    newOrdersCustomBatchRequestEntrySetLineItemMetadata(): Content.Schema.OrdersCustomBatchRequestEntrySetLineItemMetadata;
    // Create a new instance of OrdersCustomBatchRequestEntryShipLineItems
    newOrdersCustomBatchRequestEntryShipLineItems(): Content.Schema.OrdersCustomBatchRequestEntryShipLineItems;
    // Create a new instance of OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo
    newOrdersCustomBatchRequestEntryShipLineItemsShipmentInfo(): Content.Schema.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo;
    // Create a new instance of OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails
    newOrdersCustomBatchRequestEntryUpdateLineItemShippingDetails(): Content.Schema.OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails;
    // Create a new instance of OrdersCustomBatchRequestEntryUpdateShipment
    newOrdersCustomBatchRequestEntryUpdateShipment(): Content.Schema.OrdersCustomBatchRequestEntryUpdateShipment;
    // Create a new instance of OrdersInStoreRefundLineItemRequest
    newOrdersInStoreRefundLineItemRequest(): Content.Schema.OrdersInStoreRefundLineItemRequest;
    // Create a new instance of OrdersRefundRequest
    newOrdersRefundRequest(): Content.Schema.OrdersRefundRequest;
    // Create a new instance of OrdersRejectReturnLineItemRequest
    newOrdersRejectReturnLineItemRequest(): Content.Schema.OrdersRejectReturnLineItemRequest;
    // Create a new instance of OrdersReturnLineItemRequest
    newOrdersReturnLineItemRequest(): Content.Schema.OrdersReturnLineItemRequest;
    // Create a new instance of OrdersReturnRefundLineItemRequest
    newOrdersReturnRefundLineItemRequest(): Content.Schema.OrdersReturnRefundLineItemRequest;
    // Create a new instance of OrdersSetLineItemMetadataRequest
    newOrdersSetLineItemMetadataRequest(): Content.Schema.OrdersSetLineItemMetadataRequest;
    // Create a new instance of OrdersShipLineItemsRequest
    newOrdersShipLineItemsRequest(): Content.Schema.OrdersShipLineItemsRequest;
    // Create a new instance of OrdersUpdateLineItemShippingDetailsRequest
    newOrdersUpdateLineItemShippingDetailsRequest(): Content.Schema.OrdersUpdateLineItemShippingDetailsRequest;
    // Create a new instance of OrdersUpdateMerchantOrderIdRequest
    newOrdersUpdateMerchantOrderIdRequest(): Content.Schema.OrdersUpdateMerchantOrderIdRequest;
    // Create a new instance of OrdersUpdateShipmentRequest
    newOrdersUpdateShipmentRequest(): Content.Schema.OrdersUpdateShipmentRequest;
    // Create a new instance of PosCustomBatchRequest
    newPosCustomBatchRequest(): Content.Schema.PosCustomBatchRequest;
    // Create a new instance of PosCustomBatchRequestEntry
    newPosCustomBatchRequestEntry(): Content.Schema.PosCustomBatchRequestEntry;
    // Create a new instance of PosInventory
    newPosInventory(): Content.Schema.PosInventory;
    // Create a new instance of PosInventoryRequest
    newPosInventoryRequest(): Content.Schema.PosInventoryRequest;
    // Create a new instance of PosSale
    newPosSale(): Content.Schema.PosSale;
    // Create a new instance of PosSaleRequest
    newPosSaleRequest(): Content.Schema.PosSaleRequest;
    // Create a new instance of PosStore
    newPosStore(): Content.Schema.PosStore;
    // Create a new instance of PostalCodeGroup
    newPostalCodeGroup(): Content.Schema.PostalCodeGroup;
    // Create a new instance of PostalCodeRange
    newPostalCodeRange(): Content.Schema.PostalCodeRange;
    // Create a new instance of Price
    newPrice(): Content.Schema.Price;
    // Create a new instance of Product
    newProduct(): Content.Schema.Product;
    // Create a new instance of ProductAspect
    newProductAspect(): Content.Schema.ProductAspect;
    // Create a new instance of ProductDestination
    newProductDestination(): Content.Schema.ProductDestination;
    // Create a new instance of ProductShipping
    newProductShipping(): Content.Schema.ProductShipping;
    // Create a new instance of ProductShippingDimension
    newProductShippingDimension(): Content.Schema.ProductShippingDimension;
    // Create a new instance of ProductShippingWeight
    newProductShippingWeight(): Content.Schema.ProductShippingWeight;
    // Create a new instance of ProductTax
    newProductTax(): Content.Schema.ProductTax;
    // Create a new instance of ProductUnitPricingBaseMeasure
    newProductUnitPricingBaseMeasure(): Content.Schema.ProductUnitPricingBaseMeasure;
    // Create a new instance of ProductUnitPricingMeasure
    newProductUnitPricingMeasure(): Content.Schema.ProductUnitPricingMeasure;
    // Create a new instance of ProductsCustomBatchRequest
    newProductsCustomBatchRequest(): Content.Schema.ProductsCustomBatchRequest;
    // Create a new instance of ProductsCustomBatchRequestEntry
    newProductsCustomBatchRequestEntry(): Content.Schema.ProductsCustomBatchRequestEntry;
    // Create a new instance of ProductstatusesCustomBatchRequest
    newProductstatusesCustomBatchRequest(): Content.Schema.ProductstatusesCustomBatchRequest;
    // Create a new instance of ProductstatusesCustomBatchRequestEntry
    newProductstatusesCustomBatchRequestEntry(): Content.Schema.ProductstatusesCustomBatchRequestEntry;
    // Create a new instance of Promotion
    newPromotion(): Content.Schema.Promotion;
    // Create a new instance of RateGroup
    newRateGroup(): Content.Schema.RateGroup;
    // Create a new instance of Row
    newRow(): Content.Schema.Row;
    // Create a new instance of Service
    newService(): Content.Schema.Service;
    // Create a new instance of ShipmentInvoice
    newShipmentInvoice(): Content.Schema.ShipmentInvoice;
    // Create a new instance of ShipmentInvoiceLineItemInvoice
    newShipmentInvoiceLineItemInvoice(): Content.Schema.ShipmentInvoiceLineItemInvoice;
    // Create a new instance of ShippingSettings
    newShippingSettings(): Content.Schema.ShippingSettings;
    // Create a new instance of ShippingsettingsCustomBatchRequest
    newShippingsettingsCustomBatchRequest(): Content.Schema.ShippingsettingsCustomBatchRequest;
    // Create a new instance of ShippingsettingsCustomBatchRequestEntry
    newShippingsettingsCustomBatchRequestEntry(): Content.Schema.ShippingsettingsCustomBatchRequestEntry;
    // Create a new instance of Table
    newTable(): Content.Schema.Table;
    // Create a new instance of TestOrder
    newTestOrder(): Content.Schema.TestOrder;
    // Create a new instance of TestOrderCustomer
    newTestOrderCustomer(): Content.Schema.TestOrderCustomer;
    // Create a new instance of TestOrderCustomerMarketingRightsInfo
    newTestOrderCustomerMarketingRightsInfo(): Content.Schema.TestOrderCustomerMarketingRightsInfo;
    // Create a new instance of TestOrderLineItem
    newTestOrderLineItem(): Content.Schema.TestOrderLineItem;
    // Create a new instance of TestOrderLineItemProduct
    newTestOrderLineItemProduct(): Content.Schema.TestOrderLineItemProduct;
    // Create a new instance of TestOrderPaymentMethod
    newTestOrderPaymentMethod(): Content.Schema.TestOrderPaymentMethod;
    // Create a new instance of TransitTable
    newTransitTable(): Content.Schema.TransitTable;
    // Create a new instance of TransitTableTransitTimeRow
    newTransitTableTransitTimeRow(): Content.Schema.TransitTableTransitTimeRow;
    // Create a new instance of TransitTableTransitTimeRowTransitTimeValue
    newTransitTableTransitTimeRowTransitTimeValue(): Content.Schema.TransitTableTransitTimeRowTransitTimeValue;
    // Create a new instance of UnitInvoice
    newUnitInvoice(): Content.Schema.UnitInvoice;
    // Create a new instance of UnitInvoiceAdditionalCharge
    newUnitInvoiceAdditionalCharge(): Content.Schema.UnitInvoiceAdditionalCharge;
    // Create a new instance of UnitInvoiceTaxLine
    newUnitInvoiceTaxLine(): Content.Schema.UnitInvoiceTaxLine;
    // Create a new instance of Value
    newValue(): Content.Schema.Value;
    // Create a new instance of Weight
    newWeight(): Content.Schema.Weight;
  }
}

declare var Content: GoogleAppsScript.Content;
