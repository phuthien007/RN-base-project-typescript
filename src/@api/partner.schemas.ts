/* eslint-disable */
/**
 *
 */
export type GetAllUsersParams = {
  pageable: Pageable;
};

export type ActivateAccountParams = {
  key: string;
};

export type CountBookingCostTypesParams = {
  'id.greaterThan'?: number;
  'id.lessThan'?: number;
  'id.greaterThanOrEqual'?: number;
  'id.lessThanOrEqual'?: number;
  'id.equals'?: number;
  'id.notEquals'?: number;
  'id.specified'?: boolean;
  'id.in'?: number[];
  'id.notIn'?: number[];
  'name.contains'?: string;
  'name.doesNotContain'?: string;
  'name.equals'?: string;
  'name.notEquals'?: string;
  'name.specified'?: boolean;
  'name.in'?: string[];
  'name.notIn'?: string[];
  'note.contains'?: string;
  'note.doesNotContain'?: string;
  'note.equals'?: string;
  'note.notEquals'?: string;
  'note.specified'?: boolean;
  'note.in'?: string[];
  'note.notIn'?: string[];
  'status.greaterThan'?: number;
  'status.lessThan'?: number;
  'status.greaterThanOrEqual'?: number;
  'status.lessThanOrEqual'?: number;
  'status.equals'?: number;
  'status.notEquals'?: number;
  'status.specified'?: boolean;
  'status.in'?: number[];
  'status.notIn'?: number[];
  'createDate.greaterThan'?: string;
  'createDate.lessThan'?: string;
  'createDate.greaterThanOrEqual'?: string;
  'createDate.lessThanOrEqual'?: string;
  'createDate.equals'?: string;
  'createDate.notEquals'?: string;
  'createDate.specified'?: boolean;
  'createDate.in'?: string[];
  'createDate.notIn'?: string[];
  'createBy.contains'?: string;
  'createBy.doesNotContain'?: string;
  'createBy.equals'?: string;
  'createBy.notEquals'?: string;
  'createBy.specified'?: boolean;
  'createBy.in'?: string[];
  'createBy.notIn'?: string[];
  'editDate.greaterThan'?: string;
  'editDate.lessThan'?: string;
  'editDate.greaterThanOrEqual'?: string;
  'editDate.lessThanOrEqual'?: string;
  'editDate.equals'?: string;
  'editDate.notEquals'?: string;
  'editDate.specified'?: boolean;
  'editDate.in'?: string[];
  'editDate.notIn'?: string[];
  'editBy.contains'?: string;
  'editBy.doesNotContain'?: string;
  'editBy.equals'?: string;
  'editBy.notEquals'?: string;
  'editBy.specified'?: boolean;
  'editBy.in'?: string[];
  'editBy.notIn'?: string[];
  distinct?: boolean;
};

export type CountBookingCostsParams = {
  'id.greaterThan'?: number;
  'id.lessThan'?: number;
  'id.greaterThanOrEqual'?: number;
  'id.lessThanOrEqual'?: number;
  'id.equals'?: number;
  'id.notEquals'?: number;
  'id.specified'?: boolean;
  'id.in'?: number[];
  'id.notIn'?: number[];
  'name.contains'?: string;
  'name.doesNotContain'?: string;
  'name.equals'?: string;
  'name.notEquals'?: string;
  'name.specified'?: boolean;
  'name.in'?: string[];
  'name.notIn'?: string[];
  'amount.greaterThan'?: number;
  'amount.lessThan'?: number;
  'amount.greaterThanOrEqual'?: number;
  'amount.lessThanOrEqual'?: number;
  'amount.equals'?: number;
  'amount.notEquals'?: number;
  'amount.specified'?: boolean;
  'amount.in'?: number[];
  'amount.notIn'?: number[];
  'note.contains'?: string;
  'note.doesNotContain'?: string;
  'note.equals'?: string;
  'note.notEquals'?: string;
  'note.specified'?: boolean;
  'note.in'?: string[];
  'note.notIn'?: string[];
  'status.greaterThan'?: number;
  'status.lessThan'?: number;
  'status.greaterThanOrEqual'?: number;
  'status.lessThanOrEqual'?: number;
  'status.equals'?: number;
  'status.notEquals'?: number;
  'status.specified'?: boolean;
  'status.in'?: number[];
  'status.notIn'?: number[];
  'createDate.greaterThan'?: string;
  'createDate.lessThan'?: string;
  'createDate.greaterThanOrEqual'?: string;
  'createDate.lessThanOrEqual'?: string;
  'createDate.equals'?: string;
  'createDate.notEquals'?: string;
  'createDate.specified'?: boolean;
  'createDate.in'?: string[];
  'createDate.notIn'?: string[];
  'createBy.contains'?: string;
  'createBy.doesNotContain'?: string;
  'createBy.equals'?: string;
  'createBy.notEquals'?: string;
  'createBy.specified'?: boolean;
  'createBy.in'?: string[];
  'createBy.notIn'?: string[];
  'editDate.greaterThan'?: string;
  'editDate.lessThan'?: string;
  'editDate.greaterThanOrEqual'?: string;
  'editDate.lessThanOrEqual'?: string;
  'editDate.equals'?: string;
  'editDate.notEquals'?: string;
  'editDate.specified'?: boolean;
  'editDate.in'?: string[];
  'editDate.notIn'?: string[];
  'editBy.contains'?: string;
  'editBy.doesNotContain'?: string;
  'editBy.equals'?: string;
  'editBy.notEquals'?: string;
  'editBy.specified'?: boolean;
  'editBy.in'?: string[];
  'editBy.notIn'?: string[];
  'bookingId.greaterThan'?: number;
  'bookingId.lessThan'?: number;
  'bookingId.greaterThanOrEqual'?: number;
  'bookingId.lessThanOrEqual'?: number;
  'bookingId.equals'?: number;
  'bookingId.notEquals'?: number;
  'bookingId.specified'?: boolean;
  'bookingId.in'?: number[];
  'bookingId.notIn'?: number[];
  'agentUserId.greaterThan'?: number;
  'agentUserId.lessThan'?: number;
  'agentUserId.greaterThanOrEqual'?: number;
  'agentUserId.lessThanOrEqual'?: number;
  'agentUserId.equals'?: number;
  'agentUserId.notEquals'?: number;
  'agentUserId.specified'?: boolean;
  'agentUserId.in'?: number[];
  'agentUserId.notIn'?: number[];
  'partnerUserId.greaterThan'?: number;
  'partnerUserId.lessThan'?: number;
  'partnerUserId.greaterThanOrEqual'?: number;
  'partnerUserId.lessThanOrEqual'?: number;
  'partnerUserId.equals'?: number;
  'partnerUserId.notEquals'?: number;
  'partnerUserId.specified'?: boolean;
  'partnerUserId.in'?: number[];
  'partnerUserId.notIn'?: number[];
  'bookingCostTypeId.greaterThan'?: number;
  'bookingCostTypeId.lessThan'?: number;
  'bookingCostTypeId.greaterThanOrEqual'?: number;
  'bookingCostTypeId.lessThanOrEqual'?: number;
  'bookingCostTypeId.equals'?: number;
  'bookingCostTypeId.notEquals'?: number;
  'bookingCostTypeId.specified'?: boolean;
  'bookingCostTypeId.in'?: number[];
  'bookingCostTypeId.notIn'?: number[];
  'bookingVehicleToPartnerId.greaterThan'?: number;
  'bookingVehicleToPartnerId.lessThan'?: number;
  'bookingVehicleToPartnerId.greaterThanOrEqual'?: number;
  'bookingVehicleToPartnerId.lessThanOrEqual'?: number;
  'bookingVehicleToPartnerId.equals'?: number;
  'bookingVehicleToPartnerId.notEquals'?: number;
  'bookingVehicleToPartnerId.specified'?: boolean;
  'bookingVehicleToPartnerId.in'?: number[];
  'bookingVehicleToPartnerId.notIn'?: number[];
  distinct?: boolean;
};

export type CountBookingNotesParams = {
  'id.greaterThan'?: number;
  'id.lessThan'?: number;
  'id.greaterThanOrEqual'?: number;
  'id.lessThanOrEqual'?: number;
  'id.equals'?: number;
  'id.notEquals'?: number;
  'id.specified'?: boolean;
  'id.in'?: number[];
  'id.notIn'?: number[];
  'note.contains'?: string;
  'note.doesNotContain'?: string;
  'note.equals'?: string;
  'note.notEquals'?: string;
  'note.specified'?: boolean;
  'note.in'?: string[];
  'note.notIn'?: string[];
  'createDate.greaterThan'?: string;
  'createDate.lessThan'?: string;
  'createDate.greaterThanOrEqual'?: string;
  'createDate.lessThanOrEqual'?: string;
  'createDate.equals'?: string;
  'createDate.notEquals'?: string;
  'createDate.specified'?: boolean;
  'createDate.in'?: string[];
  'createDate.notIn'?: string[];
  'createBy.contains'?: string;
  'createBy.doesNotContain'?: string;
  'createBy.equals'?: string;
  'createBy.notEquals'?: string;
  'createBy.specified'?: boolean;
  'createBy.in'?: string[];
  'createBy.notIn'?: string[];
  'editDate.greaterThan'?: string;
  'editDate.lessThan'?: string;
  'editDate.greaterThanOrEqual'?: string;
  'editDate.lessThanOrEqual'?: string;
  'editDate.equals'?: string;
  'editDate.notEquals'?: string;
  'editDate.specified'?: boolean;
  'editDate.in'?: string[];
  'editDate.notIn'?: string[];
  'editBy.contains'?: string;
  'editBy.doesNotContain'?: string;
  'editBy.equals'?: string;
  'editBy.notEquals'?: string;
  'editBy.specified'?: boolean;
  'editBy.in'?: string[];
  'editBy.notIn'?: string[];
  'bookingId.greaterThan'?: number;
  'bookingId.lessThan'?: number;
  'bookingId.greaterThanOrEqual'?: number;
  'bookingId.lessThanOrEqual'?: number;
  'bookingId.equals'?: number;
  'bookingId.notEquals'?: number;
  'bookingId.specified'?: boolean;
  'bookingId.in'?: number[];
  'bookingId.notIn'?: number[];
  'bookingVehicleToPartnerId.greaterThan'?: number;
  'bookingVehicleToPartnerId.lessThan'?: number;
  'bookingVehicleToPartnerId.greaterThanOrEqual'?: number;
  'bookingVehicleToPartnerId.lessThanOrEqual'?: number;
  'bookingVehicleToPartnerId.equals'?: number;
  'bookingVehicleToPartnerId.notEquals'?: number;
  'bookingVehicleToPartnerId.specified'?: boolean;
  'bookingVehicleToPartnerId.in'?: number[];
  'bookingVehicleToPartnerId.notIn'?: number[];
  distinct?: boolean;
};

export type GetBookingPartnerCreateJourneyTypeNotInItem =
  (typeof GetBookingPartnerCreateJourneyTypeNotInItem)[keyof typeof GetBookingPartnerCreateJourneyTypeNotInItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetBookingPartnerCreateJourneyTypeNotInItem = {
  ONEWAY: 'ONEWAY',
  TWOWAY: 'TWOWAY',
  TAKEBACK: 'TAKEBACK',
  JOURNEY: 'JOURNEY',
} as const;

export type GetBookingPartnerCreateJourneyTypeInItem =
  (typeof GetBookingPartnerCreateJourneyTypeInItem)[keyof typeof GetBookingPartnerCreateJourneyTypeInItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetBookingPartnerCreateJourneyTypeInItem = {
  ONEWAY: 'ONEWAY',
  TWOWAY: 'TWOWAY',
  TAKEBACK: 'TAKEBACK',
  JOURNEY: 'JOURNEY',
} as const;

export type GetBookingPartnerCreateJourneyTypeNotEquals =
  (typeof GetBookingPartnerCreateJourneyTypeNotEquals)[keyof typeof GetBookingPartnerCreateJourneyTypeNotEquals];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetBookingPartnerCreateJourneyTypeNotEquals = {
  ONEWAY: 'ONEWAY',
  TWOWAY: 'TWOWAY',
  TAKEBACK: 'TAKEBACK',
  JOURNEY: 'JOURNEY',
} as const;

export type GetBookingPartnerCreateJourneyTypeEquals =
  (typeof GetBookingPartnerCreateJourneyTypeEquals)[keyof typeof GetBookingPartnerCreateJourneyTypeEquals];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetBookingPartnerCreateJourneyTypeEquals = {
  ONEWAY: 'ONEWAY',
  TWOWAY: 'TWOWAY',
  TAKEBACK: 'TAKEBACK',
  JOURNEY: 'JOURNEY',
} as const;

export type GetBookingPartnerCreateBookingTypeNotInItem =
  (typeof GetBookingPartnerCreateBookingTypeNotInItem)[keyof typeof GetBookingPartnerCreateBookingTypeNotInItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetBookingPartnerCreateBookingTypeNotInItem = {
  TOUR: 'TOUR',
  AIRPORT: 'AIRPORT',
} as const;

export type GetBookingPartnerCreateBookingTypeInItem =
  (typeof GetBookingPartnerCreateBookingTypeInItem)[keyof typeof GetBookingPartnerCreateBookingTypeInItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetBookingPartnerCreateBookingTypeInItem = {
  TOUR: 'TOUR',
  AIRPORT: 'AIRPORT',
} as const;

export type GetBookingPartnerCreateBookingTypeNotEquals =
  (typeof GetBookingPartnerCreateBookingTypeNotEquals)[keyof typeof GetBookingPartnerCreateBookingTypeNotEquals];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetBookingPartnerCreateBookingTypeNotEquals = {
  TOUR: 'TOUR',
  AIRPORT: 'AIRPORT',
} as const;

export type GetBookingPartnerCreateBookingTypeEquals =
  (typeof GetBookingPartnerCreateBookingTypeEquals)[keyof typeof GetBookingPartnerCreateBookingTypeEquals];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetBookingPartnerCreateBookingTypeEquals = {
  TOUR: 'TOUR',
  AIRPORT: 'AIRPORT',
} as const;

export type GetBookingPartnerCreateParams = {
  'status.greaterThan'?: number;
  'status.lessThan'?: number;
  'status.greaterThanOrEqual'?: number;
  'status.lessThanOrEqual'?: number;
  'status.equals'?: number;
  'status.notEquals'?: number;
  'status.specified'?: boolean;
  'status.in'?: number[];
  'status.notIn'?: number[];
  'partnerId.greaterThan'?: number;
  'partnerId.lessThan'?: number;
  'partnerId.greaterThanOrEqual'?: number;
  'partnerId.lessThanOrEqual'?: number;
  'partnerId.equals'?: number;
  'partnerId.notEquals'?: number;
  'partnerId.specified'?: boolean;
  'partnerId.in'?: number[];
  'partnerId.notIn'?: number[];
  'cusName.contains'?: string;
  'cusName.doesNotContain'?: string;
  'cusName.equals'?: string;
  'cusName.notEquals'?: string;
  'cusName.specified'?: boolean;
  'cusName.in'?: string[];
  'cusName.notIn'?: string[];
  'driverName.contains'?: string;
  'driverName.doesNotContain'?: string;
  'driverName.equals'?: string;
  'driverName.notEquals'?: string;
  'driverName.specified'?: boolean;
  'driverName.in'?: string[];
  'driverName.notIn'?: string[];
  'driverPhone.contains'?: string;
  'driverPhone.doesNotContain'?: string;
  'driverPhone.equals'?: string;
  'driverPhone.notEquals'?: string;
  'driverPhone.specified'?: boolean;
  'driverPhone.in'?: string[];
  'driverPhone.notIn'?: string[];
  'bookingCode.contains'?: string;
  'bookingCode.doesNotContain'?: string;
  'bookingCode.equals'?: string;
  'bookingCode.notEquals'?: string;
  'bookingCode.specified'?: boolean;
  'bookingCode.in'?: string[];
  'bookingCode.notIn'?: string[];
  'driverPlate.contains'?: string;
  'driverPlate.doesNotContain'?: string;
  'driverPlate.equals'?: string;
  'driverPlate.notEquals'?: string;
  'driverPlate.specified'?: boolean;
  'driverPlate.in'?: string[];
  'driverPlate.notIn'?: string[];
  'existCost.greaterThan'?: number;
  'existCost.lessThan'?: number;
  'existCost.greaterThanOrEqual'?: number;
  'existCost.lessThanOrEqual'?: number;
  'existCost.equals'?: number;
  'existCost.notEquals'?: number;
  'existCost.specified'?: boolean;
  'existCost.in'?: number[];
  'existCost.notIn'?: number[];
  'driverCollect.greaterThan'?: number;
  'driverCollect.lessThan'?: number;
  'driverCollect.greaterThanOrEqual'?: number;
  'driverCollect.lessThanOrEqual'?: number;
  'driverCollect.equals'?: number;
  'driverCollect.notEquals'?: number;
  'driverCollect.specified'?: boolean;
  'driverCollect.in'?: number[];
  'driverCollect.notIn'?: number[];
  'bookingType.equals'?: GetBookingPartnerCreateBookingTypeEquals;
  'bookingType.notEquals'?: GetBookingPartnerCreateBookingTypeNotEquals;
  'bookingType.specified'?: boolean;
  'bookingType.in'?: GetBookingPartnerCreateBookingTypeInItem[];
  'bookingType.notIn'?: GetBookingPartnerCreateBookingTypeNotInItem[];
  'journeyType.equals'?: GetBookingPartnerCreateJourneyTypeEquals;
  'journeyType.notEquals'?: GetBookingPartnerCreateJourneyTypeNotEquals;
  'journeyType.specified'?: boolean;
  'journeyType.in'?: GetBookingPartnerCreateJourneyTypeInItem[];
  'journeyType.notIn'?: GetBookingPartnerCreateJourneyTypeNotInItem[];
  'departureDate.greaterThan'?: string;
  'departureDate.lessThan'?: string;
  'departureDate.greaterThanOrEqual'?: string;
  'departureDate.lessThanOrEqual'?: string;
  'departureDate.equals'?: string;
  'departureDate.notEquals'?: string;
  'departureDate.specified'?: boolean;
  'departureDate.in'?: string[];
  'departureDate.notIn'?: string[];
  'returnDate.greaterThan'?: string;
  'returnDate.lessThan'?: string;
  'returnDate.greaterThanOrEqual'?: string;
  'returnDate.lessThanOrEqual'?: string;
  'returnDate.equals'?: string;
  'returnDate.notEquals'?: string;
  'returnDate.specified'?: boolean;
  'returnDate.in'?: string[];
  'returnDate.notIn'?: string[];
  'fromLocation.contains'?: string;
  'fromLocation.doesNotContain'?: string;
  'fromLocation.equals'?: string;
  'fromLocation.notEquals'?: string;
  'fromLocation.specified'?: boolean;
  'fromLocation.in'?: string[];
  'fromLocation.notIn'?: string[];
  'toLocation.contains'?: string;
  'toLocation.doesNotContain'?: string;
  'toLocation.equals'?: string;
  'toLocation.notEquals'?: string;
  'toLocation.specified'?: boolean;
  'toLocation.in'?: string[];
  'toLocation.notIn'?: string[];
  'onlyPartnerData.equals'?: boolean;
  'onlyPartnerData.notEquals'?: boolean;
  'onlyPartnerData.specified'?: boolean;
  'onlyPartnerData.in'?: boolean[];
  'onlyPartnerData.notIn'?: boolean[];
  'onlyBookingData.equals'?: boolean;
  'onlyBookingData.notEquals'?: boolean;
  'onlyBookingData.specified'?: boolean;
  'onlyBookingData.in'?: boolean[];
  'onlyBookingData.notIn'?: boolean[];
  'vehicleSeats.greaterThan'?: number;
  'vehicleSeats.lessThan'?: number;
  'vehicleSeats.greaterThanOrEqual'?: number;
  'vehicleSeats.lessThanOrEqual'?: number;
  'vehicleSeats.equals'?: number;
  'vehicleSeats.notEquals'?: number;
  'vehicleSeats.specified'?: boolean;
  'vehicleSeats.in'?: number[];
  'vehicleSeats.notIn'?: number[];
  /**
   * Zero-based page index (0..N)
   */
  page?: number;
  /**
   * The size of the page to be returned
   */
  size?: number;
  /**
   * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   */
  sort?: string[];
};

export type GetAllBookingPartnerViewJourneyTypeNotInItem =
  (typeof GetAllBookingPartnerViewJourneyTypeNotInItem)[keyof typeof GetAllBookingPartnerViewJourneyTypeNotInItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAllBookingPartnerViewJourneyTypeNotInItem = {
  ONEWAY: 'ONEWAY',
  TWOWAY: 'TWOWAY',
  TAKEBACK: 'TAKEBACK',
  JOURNEY: 'JOURNEY',
} as const;

export type GetAllBookingPartnerViewJourneyTypeInItem =
  (typeof GetAllBookingPartnerViewJourneyTypeInItem)[keyof typeof GetAllBookingPartnerViewJourneyTypeInItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAllBookingPartnerViewJourneyTypeInItem = {
  ONEWAY: 'ONEWAY',
  TWOWAY: 'TWOWAY',
  TAKEBACK: 'TAKEBACK',
  JOURNEY: 'JOURNEY',
} as const;

export type GetAllBookingPartnerViewJourneyTypeNotEquals =
  (typeof GetAllBookingPartnerViewJourneyTypeNotEquals)[keyof typeof GetAllBookingPartnerViewJourneyTypeNotEquals];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAllBookingPartnerViewJourneyTypeNotEquals = {
  ONEWAY: 'ONEWAY',
  TWOWAY: 'TWOWAY',
  TAKEBACK: 'TAKEBACK',
  JOURNEY: 'JOURNEY',
} as const;

export type GetAllBookingPartnerViewJourneyTypeEquals =
  (typeof GetAllBookingPartnerViewJourneyTypeEquals)[keyof typeof GetAllBookingPartnerViewJourneyTypeEquals];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAllBookingPartnerViewJourneyTypeEquals = {
  ONEWAY: 'ONEWAY',
  TWOWAY: 'TWOWAY',
  TAKEBACK: 'TAKEBACK',
  JOURNEY: 'JOURNEY',
} as const;

export type GetAllBookingPartnerViewBookingTypeNotInItem =
  (typeof GetAllBookingPartnerViewBookingTypeNotInItem)[keyof typeof GetAllBookingPartnerViewBookingTypeNotInItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAllBookingPartnerViewBookingTypeNotInItem = {
  TOUR: 'TOUR',
  AIRPORT: 'AIRPORT',
} as const;

export type GetAllBookingPartnerViewBookingTypeInItem =
  (typeof GetAllBookingPartnerViewBookingTypeInItem)[keyof typeof GetAllBookingPartnerViewBookingTypeInItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAllBookingPartnerViewBookingTypeInItem = {
  TOUR: 'TOUR',
  AIRPORT: 'AIRPORT',
} as const;

export type GetAllBookingPartnerViewBookingTypeNotEquals =
  (typeof GetAllBookingPartnerViewBookingTypeNotEquals)[keyof typeof GetAllBookingPartnerViewBookingTypeNotEquals];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAllBookingPartnerViewBookingTypeNotEquals = {
  TOUR: 'TOUR',
  AIRPORT: 'AIRPORT',
} as const;

export type GetAllBookingPartnerViewBookingTypeEquals =
  (typeof GetAllBookingPartnerViewBookingTypeEquals)[keyof typeof GetAllBookingPartnerViewBookingTypeEquals];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAllBookingPartnerViewBookingTypeEquals = {
  TOUR: 'TOUR',
  AIRPORT: 'AIRPORT',
} as const;

export type GetAllBookingPartnerViewParams = {
  'status.greaterThan'?: number;
  'status.lessThan'?: number;
  'status.greaterThanOrEqual'?: number;
  'status.lessThanOrEqual'?: number;
  'status.equals'?: number;
  'status.notEquals'?: number;
  'status.specified'?: boolean;
  'status.in'?: number[];
  'status.notIn'?: number[];
  'partnerId.greaterThan'?: number;
  'partnerId.lessThan'?: number;
  'partnerId.greaterThanOrEqual'?: number;
  'partnerId.lessThanOrEqual'?: number;
  'partnerId.equals'?: number;
  'partnerId.notEquals'?: number;
  'partnerId.specified'?: boolean;
  'partnerId.in'?: number[];
  'partnerId.notIn'?: number[];
  'cusName.contains'?: string;
  'cusName.doesNotContain'?: string;
  'cusName.equals'?: string;
  'cusName.notEquals'?: string;
  'cusName.specified'?: boolean;
  'cusName.in'?: string[];
  'cusName.notIn'?: string[];
  'driverName.contains'?: string;
  'driverName.doesNotContain'?: string;
  'driverName.equals'?: string;
  'driverName.notEquals'?: string;
  'driverName.specified'?: boolean;
  'driverName.in'?: string[];
  'driverName.notIn'?: string[];
  'driverPhone.contains'?: string;
  'driverPhone.doesNotContain'?: string;
  'driverPhone.equals'?: string;
  'driverPhone.notEquals'?: string;
  'driverPhone.specified'?: boolean;
  'driverPhone.in'?: string[];
  'driverPhone.notIn'?: string[];
  'bookingCode.contains'?: string;
  'bookingCode.doesNotContain'?: string;
  'bookingCode.equals'?: string;
  'bookingCode.notEquals'?: string;
  'bookingCode.specified'?: boolean;
  'bookingCode.in'?: string[];
  'bookingCode.notIn'?: string[];
  'driverPlate.contains'?: string;
  'driverPlate.doesNotContain'?: string;
  'driverPlate.equals'?: string;
  'driverPlate.notEquals'?: string;
  'driverPlate.specified'?: boolean;
  'driverPlate.in'?: string[];
  'driverPlate.notIn'?: string[];
  'existCost.greaterThan'?: number;
  'existCost.lessThan'?: number;
  'existCost.greaterThanOrEqual'?: number;
  'existCost.lessThanOrEqual'?: number;
  'existCost.equals'?: number;
  'existCost.notEquals'?: number;
  'existCost.specified'?: boolean;
  'existCost.in'?: number[];
  'existCost.notIn'?: number[];
  'driverCollect.greaterThan'?: number;
  'driverCollect.lessThan'?: number;
  'driverCollect.greaterThanOrEqual'?: number;
  'driverCollect.lessThanOrEqual'?: number;
  'driverCollect.equals'?: number;
  'driverCollect.notEquals'?: number;
  'driverCollect.specified'?: boolean;
  'driverCollect.in'?: number[];
  'driverCollect.notIn'?: number[];
  'bookingType.equals'?: GetAllBookingPartnerViewBookingTypeEquals;
  'bookingType.notEquals'?: GetAllBookingPartnerViewBookingTypeNotEquals;
  'bookingType.specified'?: boolean;
  'bookingType.in'?: GetAllBookingPartnerViewBookingTypeInItem[];
  'bookingType.notIn'?: GetAllBookingPartnerViewBookingTypeNotInItem[];
  'journeyType.equals'?: GetAllBookingPartnerViewJourneyTypeEquals;
  'journeyType.notEquals'?: GetAllBookingPartnerViewJourneyTypeNotEquals;
  'journeyType.specified'?: boolean;
  'journeyType.in'?: GetAllBookingPartnerViewJourneyTypeInItem[];
  'journeyType.notIn'?: GetAllBookingPartnerViewJourneyTypeNotInItem[];
  'departureDate.greaterThan'?: string;
  'departureDate.lessThan'?: string;
  'departureDate.greaterThanOrEqual'?: string;
  'departureDate.lessThanOrEqual'?: string;
  'departureDate.equals'?: string;
  'departureDate.notEquals'?: string;
  'departureDate.specified'?: boolean;
  'departureDate.in'?: string[];
  'departureDate.notIn'?: string[];
  'returnDate.greaterThan'?: string;
  'returnDate.lessThan'?: string;
  'returnDate.greaterThanOrEqual'?: string;
  'returnDate.lessThanOrEqual'?: string;
  'returnDate.equals'?: string;
  'returnDate.notEquals'?: string;
  'returnDate.specified'?: boolean;
  'returnDate.in'?: string[];
  'returnDate.notIn'?: string[];
  'fromLocation.contains'?: string;
  'fromLocation.doesNotContain'?: string;
  'fromLocation.equals'?: string;
  'fromLocation.notEquals'?: string;
  'fromLocation.specified'?: boolean;
  'fromLocation.in'?: string[];
  'fromLocation.notIn'?: string[];
  'toLocation.contains'?: string;
  'toLocation.doesNotContain'?: string;
  'toLocation.equals'?: string;
  'toLocation.notEquals'?: string;
  'toLocation.specified'?: boolean;
  'toLocation.in'?: string[];
  'toLocation.notIn'?: string[];
  'onlyPartnerData.equals'?: boolean;
  'onlyPartnerData.notEquals'?: boolean;
  'onlyPartnerData.specified'?: boolean;
  'onlyPartnerData.in'?: boolean[];
  'onlyPartnerData.notIn'?: boolean[];
  'onlyBookingData.equals'?: boolean;
  'onlyBookingData.notEquals'?: boolean;
  'onlyBookingData.specified'?: boolean;
  'onlyBookingData.in'?: boolean[];
  'onlyBookingData.notIn'?: boolean[];
  'vehicleSeats.greaterThan'?: number;
  'vehicleSeats.lessThan'?: number;
  'vehicleSeats.greaterThanOrEqual'?: number;
  'vehicleSeats.lessThanOrEqual'?: number;
  'vehicleSeats.equals'?: number;
  'vehicleSeats.notEquals'?: number;
  'vehicleSeats.specified'?: boolean;
  'vehicleSeats.in'?: number[];
  'vehicleSeats.notIn'?: number[];
  /**
   * Zero-based page index (0..N)
   */
  page?: number;
  /**
   * The size of the page to be returned
   */
  size?: number;
  /**
   * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   */
  sort?: string[];
};

export type CountBookingVehicleToPartnerCostsParams = {
  'id.greaterThan'?: number;
  'id.lessThan'?: number;
  'id.greaterThanOrEqual'?: number;
  'id.lessThanOrEqual'?: number;
  'id.equals'?: number;
  'id.notEquals'?: number;
  'id.specified'?: boolean;
  'id.in'?: number[];
  'id.notIn'?: number[];
  'vehicleId.greaterThan'?: number;
  'vehicleId.lessThan'?: number;
  'vehicleId.greaterThanOrEqual'?: number;
  'vehicleId.lessThanOrEqual'?: number;
  'vehicleId.equals'?: number;
  'vehicleId.notEquals'?: number;
  'vehicleId.specified'?: boolean;
  'vehicleId.in'?: number[];
  'vehicleId.notIn'?: number[];
  'detail.contains'?: string;
  'detail.doesNotContain'?: string;
  'detail.equals'?: string;
  'detail.notEquals'?: string;
  'detail.specified'?: boolean;
  'detail.in'?: string[];
  'detail.notIn'?: string[];
  'typeOfFee.contains'?: string;
  'typeOfFee.doesNotContain'?: string;
  'typeOfFee.equals'?: string;
  'typeOfFee.notEquals'?: string;
  'typeOfFee.specified'?: boolean;
  'typeOfFee.in'?: string[];
  'typeOfFee.notIn'?: string[];
  'note.contains'?: string;
  'note.doesNotContain'?: string;
  'note.equals'?: string;
  'note.notEquals'?: string;
  'note.specified'?: boolean;
  'note.in'?: string[];
  'note.notIn'?: string[];
  'price.greaterThan'?: number;
  'price.lessThan'?: number;
  'price.greaterThanOrEqual'?: number;
  'price.lessThanOrEqual'?: number;
  'price.equals'?: number;
  'price.notEquals'?: number;
  'price.specified'?: boolean;
  'price.in'?: number[];
  'price.notIn'?: number[];
  'editBy.contains'?: string;
  'editBy.doesNotContain'?: string;
  'editBy.equals'?: string;
  'editBy.notEquals'?: string;
  'editBy.specified'?: boolean;
  'editBy.in'?: string[];
  'editBy.notIn'?: string[];
  'editDate.greaterThan'?: string;
  'editDate.lessThan'?: string;
  'editDate.greaterThanOrEqual'?: string;
  'editDate.lessThanOrEqual'?: string;
  'editDate.equals'?: string;
  'editDate.notEquals'?: string;
  'editDate.specified'?: boolean;
  'editDate.in'?: string[];
  'editDate.notIn'?: string[];
  'createBy.contains'?: string;
  'createBy.doesNotContain'?: string;
  'createBy.equals'?: string;
  'createBy.notEquals'?: string;
  'createBy.specified'?: boolean;
  'createBy.in'?: string[];
  'createBy.notIn'?: string[];
  'createDate.greaterThan'?: string;
  'createDate.lessThan'?: string;
  'createDate.greaterThanOrEqual'?: string;
  'createDate.lessThanOrEqual'?: string;
  'createDate.equals'?: string;
  'createDate.notEquals'?: string;
  'createDate.specified'?: boolean;
  'createDate.in'?: string[];
  'createDate.notIn'?: string[];
  'paidDate.greaterThan'?: string;
  'paidDate.lessThan'?: string;
  'paidDate.greaterThanOrEqual'?: string;
  'paidDate.lessThanOrEqual'?: string;
  'paidDate.equals'?: string;
  'paidDate.notEquals'?: string;
  'paidDate.specified'?: boolean;
  'paidDate.in'?: string[];
  'paidDate.notIn'?: string[];
  'bookingVehicleId.greaterThan'?: number;
  'bookingVehicleId.lessThan'?: number;
  'bookingVehicleId.greaterThanOrEqual'?: number;
  'bookingVehicleId.lessThanOrEqual'?: number;
  'bookingVehicleId.equals'?: number;
  'bookingVehicleId.notEquals'?: number;
  'bookingVehicleId.specified'?: boolean;
  'bookingVehicleId.in'?: number[];
  'bookingVehicleId.notIn'?: number[];
  'partnerId.greaterThan'?: number;
  'partnerId.lessThan'?: number;
  'partnerId.greaterThanOrEqual'?: number;
  'partnerId.lessThanOrEqual'?: number;
  'partnerId.equals'?: number;
  'partnerId.notEquals'?: number;
  'partnerId.specified'?: boolean;
  'partnerId.in'?: number[];
  'partnerId.notIn'?: number[];
  distinct?: boolean;
};

export type CountBookingVehicleToPartnersParams = {
  'id.greaterThan'?: number;
  'id.lessThan'?: number;
  'id.greaterThanOrEqual'?: number;
  'id.lessThanOrEqual'?: number;
  'id.equals'?: number;
  'id.notEquals'?: number;
  'id.specified'?: boolean;
  'id.in'?: number[];
  'id.notIn'?: number[];
  'note.contains'?: string;
  'note.doesNotContain'?: string;
  'note.equals'?: string;
  'note.notEquals'?: string;
  'note.specified'?: boolean;
  'note.in'?: string[];
  'note.notIn'?: string[];
  'driverName.contains'?: string;
  'driverName.doesNotContain'?: string;
  'driverName.equals'?: string;
  'driverName.notEquals'?: string;
  'driverName.specified'?: boolean;
  'driverName.in'?: string[];
  'driverName.notIn'?: string[];
  'driverPhone.contains'?: string;
  'driverPhone.doesNotContain'?: string;
  'driverPhone.equals'?: string;
  'driverPhone.notEquals'?: string;
  'driverPhone.specified'?: boolean;
  'driverPhone.in'?: string[];
  'driverPhone.notIn'?: string[];
  'driverPlate.contains'?: string;
  'driverPlate.doesNotContain'?: string;
  'driverPlate.equals'?: string;
  'driverPlate.notEquals'?: string;
  'driverPlate.specified'?: boolean;
  'driverPlate.in'?: string[];
  'driverPlate.notIn'?: string[];
  'createDate.greaterThan'?: string;
  'createDate.lessThan'?: string;
  'createDate.greaterThanOrEqual'?: string;
  'createDate.lessThanOrEqual'?: string;
  'createDate.equals'?: string;
  'createDate.notEquals'?: string;
  'createDate.specified'?: boolean;
  'createDate.in'?: string[];
  'createDate.notIn'?: string[];
  'createBy.contains'?: string;
  'createBy.doesNotContain'?: string;
  'createBy.equals'?: string;
  'createBy.notEquals'?: string;
  'createBy.specified'?: boolean;
  'createBy.in'?: string[];
  'createBy.notIn'?: string[];
  'editDate.greaterThan'?: string;
  'editDate.lessThan'?: string;
  'editDate.greaterThanOrEqual'?: string;
  'editDate.lessThanOrEqual'?: string;
  'editDate.equals'?: string;
  'editDate.notEquals'?: string;
  'editDate.specified'?: boolean;
  'editDate.in'?: string[];
  'editDate.notIn'?: string[];
  'editBy.contains'?: string;
  'editBy.doesNotContain'?: string;
  'editBy.equals'?: string;
  'editBy.notEquals'?: string;
  'editBy.specified'?: boolean;
  'editBy.in'?: string[];
  'editBy.notIn'?: string[];
  'bookingVehicleId.greaterThan'?: number;
  'bookingVehicleId.lessThan'?: number;
  'bookingVehicleId.greaterThanOrEqual'?: number;
  'bookingVehicleId.lessThanOrEqual'?: number;
  'bookingVehicleId.equals'?: number;
  'bookingVehicleId.notEquals'?: number;
  'bookingVehicleId.specified'?: boolean;
  'bookingVehicleId.in'?: number[];
  'bookingVehicleId.notIn'?: number[];
  'vehicleId.greaterThan'?: number;
  'vehicleId.lessThan'?: number;
  'vehicleId.greaterThanOrEqual'?: number;
  'vehicleId.lessThanOrEqual'?: number;
  'vehicleId.equals'?: number;
  'vehicleId.notEquals'?: number;
  'vehicleId.specified'?: boolean;
  'vehicleId.in'?: number[];
  'vehicleId.notIn'?: number[];
  distinct?: boolean;
};

export type CountBookingVehiclesParams = {
  'id.greaterThan'?: number;
  'id.lessThan'?: number;
  'id.greaterThanOrEqual'?: number;
  'id.lessThanOrEqual'?: number;
  'id.equals'?: number;
  'id.notEquals'?: number;
  'id.specified'?: boolean;
  'id.in'?: number[];
  'id.notIn'?: number[];
  'unitPrice.greaterThan'?: number;
  'unitPrice.lessThan'?: number;
  'unitPrice.greaterThanOrEqual'?: number;
  'unitPrice.lessThanOrEqual'?: number;
  'unitPrice.equals'?: number;
  'unitPrice.notEquals'?: number;
  'unitPrice.specified'?: boolean;
  'unitPrice.in'?: number[];
  'unitPrice.notIn'?: number[];
  'quantity.greaterThan'?: number;
  'quantity.lessThan'?: number;
  'quantity.greaterThanOrEqual'?: number;
  'quantity.lessThanOrEqual'?: number;
  'quantity.equals'?: number;
  'quantity.notEquals'?: number;
  'quantity.specified'?: boolean;
  'quantity.in'?: number[];
  'quantity.notIn'?: number[];
  'totalPrice.greaterThan'?: number;
  'totalPrice.lessThan'?: number;
  'totalPrice.greaterThanOrEqual'?: number;
  'totalPrice.lessThanOrEqual'?: number;
  'totalPrice.equals'?: number;
  'totalPrice.notEquals'?: number;
  'totalPrice.specified'?: boolean;
  'totalPrice.in'?: number[];
  'totalPrice.notIn'?: number[];
  'note.contains'?: string;
  'note.doesNotContain'?: string;
  'note.equals'?: string;
  'note.notEquals'?: string;
  'note.specified'?: boolean;
  'note.in'?: string[];
  'note.notIn'?: string[];
  'createDate.greaterThan'?: string;
  'createDate.lessThan'?: string;
  'createDate.greaterThanOrEqual'?: string;
  'createDate.lessThanOrEqual'?: string;
  'createDate.equals'?: string;
  'createDate.notEquals'?: string;
  'createDate.specified'?: boolean;
  'createDate.in'?: string[];
  'createDate.notIn'?: string[];
  'createBy.contains'?: string;
  'createBy.doesNotContain'?: string;
  'createBy.equals'?: string;
  'createBy.notEquals'?: string;
  'createBy.specified'?: boolean;
  'createBy.in'?: string[];
  'createBy.notIn'?: string[];
  'editDate.greaterThan'?: string;
  'editDate.lessThan'?: string;
  'editDate.greaterThanOrEqual'?: string;
  'editDate.lessThanOrEqual'?: string;
  'editDate.equals'?: string;
  'editDate.notEquals'?: string;
  'editDate.specified'?: boolean;
  'editDate.in'?: string[];
  'editDate.notIn'?: string[];
  'editBy.contains'?: string;
  'editBy.doesNotContain'?: string;
  'editBy.equals'?: string;
  'editBy.notEquals'?: string;
  'editBy.specified'?: boolean;
  'editBy.in'?: string[];
  'editBy.notIn'?: string[];
  'vehicleTypeId.greaterThan'?: number;
  'vehicleTypeId.lessThan'?: number;
  'vehicleTypeId.greaterThanOrEqual'?: number;
  'vehicleTypeId.lessThanOrEqual'?: number;
  'vehicleTypeId.equals'?: number;
  'vehicleTypeId.notEquals'?: number;
  'vehicleTypeId.specified'?: boolean;
  'vehicleTypeId.in'?: number[];
  'vehicleTypeId.notIn'?: number[];
  'bookingId.greaterThan'?: number;
  'bookingId.lessThan'?: number;
  'bookingId.greaterThanOrEqual'?: number;
  'bookingId.lessThanOrEqual'?: number;
  'bookingId.equals'?: number;
  'bookingId.notEquals'?: number;
  'bookingId.specified'?: boolean;
  'bookingId.in'?: number[];
  'bookingId.notIn'?: number[];
  'partnerUserId.greaterThan'?: number;
  'partnerUserId.lessThan'?: number;
  'partnerUserId.greaterThanOrEqual'?: number;
  'partnerUserId.lessThanOrEqual'?: number;
  'partnerUserId.equals'?: number;
  'partnerUserId.notEquals'?: number;
  'partnerUserId.specified'?: boolean;
  'partnerUserId.in'?: number[];
  'partnerUserId.notIn'?: number[];
  distinct?: boolean;
};

export type GetAllExpensePartnersDetailParams = {
  startDate: string;
  endDate: string;
  vehicleId: number;
  /**
   * Zero-based page index (0..N)
   */
  page?: number;
  /**
   * The size of the page to be returned
   */
  size?: number;
  /**
   * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   */
  sort?: string[];
};

export type GetAllExpensePartnersParams = {
  startDate: string;
  endDate: string;
  /**
   * Zero-based page index (0..N)
   */
  page?: number;
  /**
   * The size of the page to be returned
   */
  size?: number;
  /**
   * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   */
  sort?: string[];
};

export type GetAllRevenuePartnersDetailParams = {
  startDate: string;
  endDate: string;
  vehicleId: number;
  /**
   * Zero-based page index (0..N)
   */
  page?: number;
  /**
   * The size of the page to be returned
   */
  size?: number;
  /**
   * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   */
  sort?: string[];
};

export type GetAllRevenueVehicleTypePartnersParams = {
  vehicleTypeId?: number;
  startDate: string;
  endDate: string;
  /**
   * Zero-based page index (0..N)
   */
  page?: number;
  /**
   * The size of the page to be returned
   */
  size?: number;
  /**
   * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   */
  sort?: string[];
};

export type GetAllRevenuePartnersParams = {
  startDate: string;
  endDate: string;
  /**
   * Zero-based page index (0..N)
   */
  page?: number;
  /**
   * The size of the page to be returned
   */
  size?: number;
  /**
   * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   */
  sort?: string[];
};

export type GetAllPartnerUsersParams = {
  'id.greaterThan'?: number;
  'id.lessThan'?: number;
  'id.greaterThanOrEqual'?: number;
  'id.lessThanOrEqual'?: number;
  'id.equals'?: number;
  'id.notEquals'?: number;
  'id.specified'?: boolean;
  'id.in'?: number[];
  'id.notIn'?: number[];
  'fullName.contains'?: string;
  'fullName.doesNotContain'?: string;
  'fullName.equals'?: string;
  'fullName.notEquals'?: string;
  'fullName.specified'?: boolean;
  'fullName.in'?: string[];
  'fullName.notIn'?: string[];
  'email.contains'?: string;
  'email.doesNotContain'?: string;
  'email.equals'?: string;
  'email.notEquals'?: string;
  'email.specified'?: boolean;
  'email.in'?: string[];
  'email.notIn'?: string[];
  'imageUrl.contains'?: string;
  'imageUrl.doesNotContain'?: string;
  'imageUrl.equals'?: string;
  'imageUrl.notEquals'?: string;
  'imageUrl.specified'?: boolean;
  'imageUrl.in'?: string[];
  'imageUrl.notIn'?: string[];
  'activated.equals'?: boolean;
  'activated.notEquals'?: boolean;
  'activated.specified'?: boolean;
  'activated.in'?: boolean[];
  'activated.notIn'?: boolean[];
  'activationDate.greaterThan'?: string;
  'activationDate.lessThan'?: string;
  'activationDate.greaterThanOrEqual'?: string;
  'activationDate.lessThanOrEqual'?: string;
  'activationDate.equals'?: string;
  'activationDate.notEquals'?: string;
  'activationDate.specified'?: boolean;
  'activationDate.in'?: string[];
  'activationDate.notIn'?: string[];
  'resetDate.greaterThan'?: string;
  'resetDate.lessThan'?: string;
  'resetDate.greaterThanOrEqual'?: string;
  'resetDate.lessThanOrEqual'?: string;
  'resetDate.equals'?: string;
  'resetDate.notEquals'?: string;
  'resetDate.specified'?: boolean;
  'resetDate.in'?: string[];
  'resetDate.notIn'?: string[];
  'note.contains'?: string;
  'note.doesNotContain'?: string;
  'note.equals'?: string;
  'note.notEquals'?: string;
  'note.specified'?: boolean;
  'note.in'?: string[];
  'note.notIn'?: string[];
  'createDate.greaterThan'?: string;
  'createDate.lessThan'?: string;
  'createDate.greaterThanOrEqual'?: string;
  'createDate.lessThanOrEqual'?: string;
  'createDate.equals'?: string;
  'createDate.notEquals'?: string;
  'createDate.specified'?: boolean;
  'createDate.in'?: string[];
  'createDate.notIn'?: string[];
  'createBy.contains'?: string;
  'createBy.doesNotContain'?: string;
  'createBy.equals'?: string;
  'createBy.notEquals'?: string;
  'createBy.specified'?: boolean;
  'createBy.in'?: string[];
  'createBy.notIn'?: string[];
  'editDate.greaterThan'?: string;
  'editDate.lessThan'?: string;
  'editDate.greaterThanOrEqual'?: string;
  'editDate.lessThanOrEqual'?: string;
  'editDate.equals'?: string;
  'editDate.notEquals'?: string;
  'editDate.specified'?: boolean;
  'editDate.in'?: string[];
  'editDate.notIn'?: string[];
  'editBy.contains'?: string;
  'editBy.doesNotContain'?: string;
  'editBy.equals'?: string;
  'editBy.notEquals'?: string;
  'editBy.specified'?: boolean;
  'editBy.in'?: string[];
  'editBy.notIn'?: string[];
  'partnerId.greaterThan'?: number;
  'partnerId.lessThan'?: number;
  'partnerId.greaterThanOrEqual'?: number;
  'partnerId.lessThanOrEqual'?: number;
  'partnerId.equals'?: number;
  'partnerId.notEquals'?: number;
  'partnerId.specified'?: boolean;
  'partnerId.in'?: number[];
  'partnerId.notIn'?: number[];
  distinct?: boolean;
  /**
   * Zero-based page index (0..N)
   */
  page?: number;
  /**
   * The size of the page to be returned
   */
  size?: number;
  /**
   * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   */
  sort?: string[];
};

export type CountSingleBookingsJourneyTypeNotInItem =
  (typeof CountSingleBookingsJourneyTypeNotInItem)[keyof typeof CountSingleBookingsJourneyTypeNotInItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CountSingleBookingsJourneyTypeNotInItem = {
  ONEWAY: 'ONEWAY',
  TWOWAY: 'TWOWAY',
  TAKEBACK: 'TAKEBACK',
  JOURNEY: 'JOURNEY',
} as const;

export type CountSingleBookingsJourneyTypeInItem =
  (typeof CountSingleBookingsJourneyTypeInItem)[keyof typeof CountSingleBookingsJourneyTypeInItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CountSingleBookingsJourneyTypeInItem = {
  ONEWAY: 'ONEWAY',
  TWOWAY: 'TWOWAY',
  TAKEBACK: 'TAKEBACK',
  JOURNEY: 'JOURNEY',
} as const;

export type CountSingleBookingsJourneyTypeNotEquals =
  (typeof CountSingleBookingsJourneyTypeNotEquals)[keyof typeof CountSingleBookingsJourneyTypeNotEquals];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CountSingleBookingsJourneyTypeNotEquals = {
  ONEWAY: 'ONEWAY',
  TWOWAY: 'TWOWAY',
  TAKEBACK: 'TAKEBACK',
  JOURNEY: 'JOURNEY',
} as const;

export type CountSingleBookingsJourneyTypeEquals =
  (typeof CountSingleBookingsJourneyTypeEquals)[keyof typeof CountSingleBookingsJourneyTypeEquals];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CountSingleBookingsJourneyTypeEquals = {
  ONEWAY: 'ONEWAY',
  TWOWAY: 'TWOWAY',
  TAKEBACK: 'TAKEBACK',
  JOURNEY: 'JOURNEY',
} as const;

export type CountSingleBookingsBookingTypeNotInItem =
  (typeof CountSingleBookingsBookingTypeNotInItem)[keyof typeof CountSingleBookingsBookingTypeNotInItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CountSingleBookingsBookingTypeNotInItem = {
  TOUR: 'TOUR',
  AIRPORT: 'AIRPORT',
} as const;

export type CountSingleBookingsBookingTypeInItem =
  (typeof CountSingleBookingsBookingTypeInItem)[keyof typeof CountSingleBookingsBookingTypeInItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CountSingleBookingsBookingTypeInItem = {
  TOUR: 'TOUR',
  AIRPORT: 'AIRPORT',
} as const;

export type CountSingleBookingsBookingTypeNotEquals =
  (typeof CountSingleBookingsBookingTypeNotEquals)[keyof typeof CountSingleBookingsBookingTypeNotEquals];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CountSingleBookingsBookingTypeNotEquals = {
  TOUR: 'TOUR',
  AIRPORT: 'AIRPORT',
} as const;

export type CountSingleBookingsBookingTypeEquals =
  (typeof CountSingleBookingsBookingTypeEquals)[keyof typeof CountSingleBookingsBookingTypeEquals];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CountSingleBookingsBookingTypeEquals = {
  TOUR: 'TOUR',
  AIRPORT: 'AIRPORT',
} as const;

export type CountSingleBookingsParams = {
  'status.greaterThan'?: number;
  'status.lessThan'?: number;
  'status.greaterThanOrEqual'?: number;
  'status.lessThanOrEqual'?: number;
  'status.equals'?: number;
  'status.notEquals'?: number;
  'status.specified'?: boolean;
  'status.in'?: number[];
  'status.notIn'?: number[];
  'partnerId.greaterThan'?: number;
  'partnerId.lessThan'?: number;
  'partnerId.greaterThanOrEqual'?: number;
  'partnerId.lessThanOrEqual'?: number;
  'partnerId.equals'?: number;
  'partnerId.notEquals'?: number;
  'partnerId.specified'?: boolean;
  'partnerId.in'?: number[];
  'partnerId.notIn'?: number[];
  'cusName.contains'?: string;
  'cusName.doesNotContain'?: string;
  'cusName.equals'?: string;
  'cusName.notEquals'?: string;
  'cusName.specified'?: boolean;
  'cusName.in'?: string[];
  'cusName.notIn'?: string[];
  'driverName.contains'?: string;
  'driverName.doesNotContain'?: string;
  'driverName.equals'?: string;
  'driverName.notEquals'?: string;
  'driverName.specified'?: boolean;
  'driverName.in'?: string[];
  'driverName.notIn'?: string[];
  'driverPhone.contains'?: string;
  'driverPhone.doesNotContain'?: string;
  'driverPhone.equals'?: string;
  'driverPhone.notEquals'?: string;
  'driverPhone.specified'?: boolean;
  'driverPhone.in'?: string[];
  'driverPhone.notIn'?: string[];
  'driverPlate.contains'?: string;
  'driverPlate.doesNotContain'?: string;
  'driverPlate.equals'?: string;
  'driverPlate.notEquals'?: string;
  'driverPlate.specified'?: boolean;
  'driverPlate.in'?: string[];
  'driverPlate.notIn'?: string[];
  'existCost.greaterThan'?: number;
  'existCost.lessThan'?: number;
  'existCost.greaterThanOrEqual'?: number;
  'existCost.lessThanOrEqual'?: number;
  'existCost.equals'?: number;
  'existCost.notEquals'?: number;
  'existCost.specified'?: boolean;
  'existCost.in'?: number[];
  'existCost.notIn'?: number[];
  'driverCollect.greaterThan'?: number;
  'driverCollect.lessThan'?: number;
  'driverCollect.greaterThanOrEqual'?: number;
  'driverCollect.lessThanOrEqual'?: number;
  'driverCollect.equals'?: number;
  'driverCollect.notEquals'?: number;
  'driverCollect.specified'?: boolean;
  'driverCollect.in'?: number[];
  'driverCollect.notIn'?: number[];
  'bookingType.equals'?: CountSingleBookingsBookingTypeEquals;
  'bookingType.notEquals'?: CountSingleBookingsBookingTypeNotEquals;
  'bookingType.specified'?: boolean;
  'bookingType.in'?: CountSingleBookingsBookingTypeInItem[];
  'bookingType.notIn'?: CountSingleBookingsBookingTypeNotInItem[];
  'journeyType.equals'?: CountSingleBookingsJourneyTypeEquals;
  'journeyType.notEquals'?: CountSingleBookingsJourneyTypeNotEquals;
  'journeyType.specified'?: boolean;
  'journeyType.in'?: CountSingleBookingsJourneyTypeInItem[];
  'journeyType.notIn'?: CountSingleBookingsJourneyTypeNotInItem[];
  'departureDate.greaterThan'?: string;
  'departureDate.lessThan'?: string;
  'departureDate.greaterThanOrEqual'?: string;
  'departureDate.lessThanOrEqual'?: string;
  'departureDate.equals'?: string;
  'departureDate.notEquals'?: string;
  'departureDate.specified'?: boolean;
  'departureDate.in'?: string[];
  'departureDate.notIn'?: string[];
  'returnDate.greaterThan'?: string;
  'returnDate.lessThan'?: string;
  'returnDate.greaterThanOrEqual'?: string;
  'returnDate.lessThanOrEqual'?: string;
  'returnDate.equals'?: string;
  'returnDate.notEquals'?: string;
  'returnDate.specified'?: boolean;
  'returnDate.in'?: string[];
  'returnDate.notIn'?: string[];
  'fromLocation.contains'?: string;
  'fromLocation.doesNotContain'?: string;
  'fromLocation.equals'?: string;
  'fromLocation.notEquals'?: string;
  'fromLocation.specified'?: boolean;
  'fromLocation.in'?: string[];
  'fromLocation.notIn'?: string[];
  'toLocation.contains'?: string;
  'toLocation.doesNotContain'?: string;
  'toLocation.equals'?: string;
  'toLocation.notEquals'?: string;
  'toLocation.specified'?: boolean;
  'toLocation.in'?: string[];
  'toLocation.notIn'?: string[];
  'vehicleSeats.greaterThan'?: number;
  'vehicleSeats.lessThan'?: number;
  'vehicleSeats.greaterThanOrEqual'?: number;
  'vehicleSeats.lessThanOrEqual'?: number;
  'vehicleSeats.equals'?: number;
  'vehicleSeats.notEquals'?: number;
  'vehicleSeats.specified'?: boolean;
  'vehicleSeats.in'?: number[];
  'vehicleSeats.notIn'?: number[];
};

export type GetOwnBookingWithDriverParams = {
  bookingCode: string;
};

export type GetAllSingleBookingsJourneyTypeNotInItem =
  (typeof GetAllSingleBookingsJourneyTypeNotInItem)[keyof typeof GetAllSingleBookingsJourneyTypeNotInItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAllSingleBookingsJourneyTypeNotInItem = {
  ONEWAY: 'ONEWAY',
  TWOWAY: 'TWOWAY',
  TAKEBACK: 'TAKEBACK',
  JOURNEY: 'JOURNEY',
} as const;

export type GetAllSingleBookingsJourneyTypeInItem =
  (typeof GetAllSingleBookingsJourneyTypeInItem)[keyof typeof GetAllSingleBookingsJourneyTypeInItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAllSingleBookingsJourneyTypeInItem = {
  ONEWAY: 'ONEWAY',
  TWOWAY: 'TWOWAY',
  TAKEBACK: 'TAKEBACK',
  JOURNEY: 'JOURNEY',
} as const;

export type GetAllSingleBookingsJourneyTypeNotEquals =
  (typeof GetAllSingleBookingsJourneyTypeNotEquals)[keyof typeof GetAllSingleBookingsJourneyTypeNotEquals];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAllSingleBookingsJourneyTypeNotEquals = {
  ONEWAY: 'ONEWAY',
  TWOWAY: 'TWOWAY',
  TAKEBACK: 'TAKEBACK',
  JOURNEY: 'JOURNEY',
} as const;

export type GetAllSingleBookingsJourneyTypeEquals =
  (typeof GetAllSingleBookingsJourneyTypeEquals)[keyof typeof GetAllSingleBookingsJourneyTypeEquals];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAllSingleBookingsJourneyTypeEquals = {
  ONEWAY: 'ONEWAY',
  TWOWAY: 'TWOWAY',
  TAKEBACK: 'TAKEBACK',
  JOURNEY: 'JOURNEY',
} as const;

export type GetAllSingleBookingsBookingTypeNotInItem =
  (typeof GetAllSingleBookingsBookingTypeNotInItem)[keyof typeof GetAllSingleBookingsBookingTypeNotInItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAllSingleBookingsBookingTypeNotInItem = {
  TOUR: 'TOUR',
  AIRPORT: 'AIRPORT',
} as const;

export type GetAllSingleBookingsBookingTypeInItem =
  (typeof GetAllSingleBookingsBookingTypeInItem)[keyof typeof GetAllSingleBookingsBookingTypeInItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAllSingleBookingsBookingTypeInItem = {
  TOUR: 'TOUR',
  AIRPORT: 'AIRPORT',
} as const;

export type GetAllSingleBookingsBookingTypeNotEquals =
  (typeof GetAllSingleBookingsBookingTypeNotEquals)[keyof typeof GetAllSingleBookingsBookingTypeNotEquals];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAllSingleBookingsBookingTypeNotEquals = {
  TOUR: 'TOUR',
  AIRPORT: 'AIRPORT',
} as const;

export type GetAllSingleBookingsBookingTypeEquals =
  (typeof GetAllSingleBookingsBookingTypeEquals)[keyof typeof GetAllSingleBookingsBookingTypeEquals];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAllSingleBookingsBookingTypeEquals = {
  TOUR: 'TOUR',
  AIRPORT: 'AIRPORT',
} as const;

export type GetAllSingleBookingsParams = {
  'status.greaterThan'?: number;
  'status.lessThan'?: number;
  'status.greaterThanOrEqual'?: number;
  'status.lessThanOrEqual'?: number;
  'status.equals'?: number;
  'status.notEquals'?: number;
  'status.specified'?: boolean;
  'status.in'?: number[];
  'status.notIn'?: number[];
  'partnerId.greaterThan'?: number;
  'partnerId.lessThan'?: number;
  'partnerId.greaterThanOrEqual'?: number;
  'partnerId.lessThanOrEqual'?: number;
  'partnerId.equals'?: number;
  'partnerId.notEquals'?: number;
  'partnerId.specified'?: boolean;
  'partnerId.in'?: number[];
  'partnerId.notIn'?: number[];
  'cusName.contains'?: string;
  'cusName.doesNotContain'?: string;
  'cusName.equals'?: string;
  'cusName.notEquals'?: string;
  'cusName.specified'?: boolean;
  'cusName.in'?: string[];
  'cusName.notIn'?: string[];
  'driverName.contains'?: string;
  'driverName.doesNotContain'?: string;
  'driverName.equals'?: string;
  'driverName.notEquals'?: string;
  'driverName.specified'?: boolean;
  'driverName.in'?: string[];
  'driverName.notIn'?: string[];
  'driverPhone.contains'?: string;
  'driverPhone.doesNotContain'?: string;
  'driverPhone.equals'?: string;
  'driverPhone.notEquals'?: string;
  'driverPhone.specified'?: boolean;
  'driverPhone.in'?: string[];
  'driverPhone.notIn'?: string[];
  'driverPlate.contains'?: string;
  'driverPlate.doesNotContain'?: string;
  'driverPlate.equals'?: string;
  'driverPlate.notEquals'?: string;
  'driverPlate.specified'?: boolean;
  'driverPlate.in'?: string[];
  'driverPlate.notIn'?: string[];
  'existCost.greaterThan'?: number;
  'existCost.lessThan'?: number;
  'existCost.greaterThanOrEqual'?: number;
  'existCost.lessThanOrEqual'?: number;
  'existCost.equals'?: number;
  'existCost.notEquals'?: number;
  'existCost.specified'?: boolean;
  'existCost.in'?: number[];
  'existCost.notIn'?: number[];
  'driverCollect.greaterThan'?: number;
  'driverCollect.lessThan'?: number;
  'driverCollect.greaterThanOrEqual'?: number;
  'driverCollect.lessThanOrEqual'?: number;
  'driverCollect.equals'?: number;
  'driverCollect.notEquals'?: number;
  'driverCollect.specified'?: boolean;
  'driverCollect.in'?: number[];
  'driverCollect.notIn'?: number[];
  'bookingType.equals'?: GetAllSingleBookingsBookingTypeEquals;
  'bookingType.notEquals'?: GetAllSingleBookingsBookingTypeNotEquals;
  'bookingType.specified'?: boolean;
  'bookingType.in'?: GetAllSingleBookingsBookingTypeInItem[];
  'bookingType.notIn'?: GetAllSingleBookingsBookingTypeNotInItem[];
  'journeyType.equals'?: GetAllSingleBookingsJourneyTypeEquals;
  'journeyType.notEquals'?: GetAllSingleBookingsJourneyTypeNotEquals;
  'journeyType.specified'?: boolean;
  'journeyType.in'?: GetAllSingleBookingsJourneyTypeInItem[];
  'journeyType.notIn'?: GetAllSingleBookingsJourneyTypeNotInItem[];
  'departureDate.greaterThan'?: string;
  'departureDate.lessThan'?: string;
  'departureDate.greaterThanOrEqual'?: string;
  'departureDate.lessThanOrEqual'?: string;
  'departureDate.equals'?: string;
  'departureDate.notEquals'?: string;
  'departureDate.specified'?: boolean;
  'departureDate.in'?: string[];
  'departureDate.notIn'?: string[];
  'returnDate.greaterThan'?: string;
  'returnDate.lessThan'?: string;
  'returnDate.greaterThanOrEqual'?: string;
  'returnDate.lessThanOrEqual'?: string;
  'returnDate.equals'?: string;
  'returnDate.notEquals'?: string;
  'returnDate.specified'?: boolean;
  'returnDate.in'?: string[];
  'returnDate.notIn'?: string[];
  'fromLocation.contains'?: string;
  'fromLocation.doesNotContain'?: string;
  'fromLocation.equals'?: string;
  'fromLocation.notEquals'?: string;
  'fromLocation.specified'?: boolean;
  'fromLocation.in'?: string[];
  'fromLocation.notIn'?: string[];
  'toLocation.contains'?: string;
  'toLocation.doesNotContain'?: string;
  'toLocation.equals'?: string;
  'toLocation.notEquals'?: string;
  'toLocation.specified'?: boolean;
  'toLocation.in'?: string[];
  'toLocation.notIn'?: string[];
  'vehicleSeats.greaterThan'?: number;
  'vehicleSeats.lessThan'?: number;
  'vehicleSeats.greaterThanOrEqual'?: number;
  'vehicleSeats.lessThanOrEqual'?: number;
  'vehicleSeats.equals'?: number;
  'vehicleSeats.notEquals'?: number;
  'vehicleSeats.specified'?: boolean;
  'vehicleSeats.in'?: number[];
  'vehicleSeats.notIn'?: number[];
  /**
   * Zero-based page index (0..N)
   */
  page?: number;
  /**
   * The size of the page to be returned
   */
  size?: number;
  /**
   * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   */
  sort?: string[];
};

export type GetAbilitiesRevenue200 = {[key: string]: {[key: string]: string}};

export type GetAbilitiesRevenueParams = {
  fromDate: string;
  toDate: string;
};

export type GetRevenueVehicleTypeBy200 = {
  [key: string]: {[key: string]: string};
};

export type GetRevenueVehicleTypeByParams = {
  fromDate: string;
  toDate: string;
};

export type GetRevenueVehicleType200 = {
  [key: string]: {[key: string]: {[key: string]: string}};
};

export type GetRevenueVehicleTypeParams = {
  fromDate: string;
  toDate: string;
};

export type GetSaleBooks200 = {[key: string]: number};

export type GetSaleBooksParams = {
  type?: string;
};

export type GetVehicleExpenseChart200 = {
  [key: string]: {[key: string]: string};
};

export type GetVehicleExpenseChartParams = {
  fromDate: string;
  toDate: string;
};

export type GetAirportList200Item = {[key: string]: any};

export type GetCarList200 = {[key: string]: any};

export type GetCarListParams = {
  start: string[];
  end: string[];
  bookingType: string;
  journeyType: string;
  startDate: string;
  endDate?: string;
  toAirport?: boolean;
};

export type ReceiveAuthorizationCodeParams = {
  code: string;
  oa_id: string;
};

export type UpdateImageRegistrationBody = {
  files?: Blob[];
};

export type UpdateImageRegistryBody = {
  files?: Blob[];
};

export type GetAllPublicUsersParams = {
  pageable: Pageable;
};

export type GetAllBookingCostTypesParams = {
  'id.greaterThan'?: number;
  'id.lessThan'?: number;
  'id.greaterThanOrEqual'?: number;
  'id.lessThanOrEqual'?: number;
  'id.equals'?: number;
  'id.notEquals'?: number;
  'id.specified'?: boolean;
  'id.in'?: number[];
  'id.notIn'?: number[];
  'name.contains'?: string;
  'name.doesNotContain'?: string;
  'name.equals'?: string;
  'name.notEquals'?: string;
  'name.specified'?: boolean;
  'name.in'?: string[];
  'name.notIn'?: string[];
  'note.contains'?: string;
  'note.doesNotContain'?: string;
  'note.equals'?: string;
  'note.notEquals'?: string;
  'note.specified'?: boolean;
  'note.in'?: string[];
  'note.notIn'?: string[];
  'status.greaterThan'?: number;
  'status.lessThan'?: number;
  'status.greaterThanOrEqual'?: number;
  'status.lessThanOrEqual'?: number;
  'status.equals'?: number;
  'status.notEquals'?: number;
  'status.specified'?: boolean;
  'status.in'?: number[];
  'status.notIn'?: number[];
  'createDate.greaterThan'?: string;
  'createDate.lessThan'?: string;
  'createDate.greaterThanOrEqual'?: string;
  'createDate.lessThanOrEqual'?: string;
  'createDate.equals'?: string;
  'createDate.notEquals'?: string;
  'createDate.specified'?: boolean;
  'createDate.in'?: string[];
  'createDate.notIn'?: string[];
  'createBy.contains'?: string;
  'createBy.doesNotContain'?: string;
  'createBy.equals'?: string;
  'createBy.notEquals'?: string;
  'createBy.specified'?: boolean;
  'createBy.in'?: string[];
  'createBy.notIn'?: string[];
  'editDate.greaterThan'?: string;
  'editDate.lessThan'?: string;
  'editDate.greaterThanOrEqual'?: string;
  'editDate.lessThanOrEqual'?: string;
  'editDate.equals'?: string;
  'editDate.notEquals'?: string;
  'editDate.specified'?: boolean;
  'editDate.in'?: string[];
  'editDate.notIn'?: string[];
  'editBy.contains'?: string;
  'editBy.doesNotContain'?: string;
  'editBy.equals'?: string;
  'editBy.notEquals'?: string;
  'editBy.specified'?: boolean;
  'editBy.in'?: string[];
  'editBy.notIn'?: string[];
  distinct?: boolean;
  /**
   * Zero-based page index (0..N)
   */
  page?: number;
  /**
   * The size of the page to be returned
   */
  size?: number;
  /**
   * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   */
  sort?: string[];
};

export type GetAllBookingCostsParams = {
  'id.greaterThan'?: number;
  'id.lessThan'?: number;
  'id.greaterThanOrEqual'?: number;
  'id.lessThanOrEqual'?: number;
  'id.equals'?: number;
  'id.notEquals'?: number;
  'id.specified'?: boolean;
  'id.in'?: number[];
  'id.notIn'?: number[];
  'name.contains'?: string;
  'name.doesNotContain'?: string;
  'name.equals'?: string;
  'name.notEquals'?: string;
  'name.specified'?: boolean;
  'name.in'?: string[];
  'name.notIn'?: string[];
  'amount.greaterThan'?: number;
  'amount.lessThan'?: number;
  'amount.greaterThanOrEqual'?: number;
  'amount.lessThanOrEqual'?: number;
  'amount.equals'?: number;
  'amount.notEquals'?: number;
  'amount.specified'?: boolean;
  'amount.in'?: number[];
  'amount.notIn'?: number[];
  'note.contains'?: string;
  'note.doesNotContain'?: string;
  'note.equals'?: string;
  'note.notEquals'?: string;
  'note.specified'?: boolean;
  'note.in'?: string[];
  'note.notIn'?: string[];
  'status.greaterThan'?: number;
  'status.lessThan'?: number;
  'status.greaterThanOrEqual'?: number;
  'status.lessThanOrEqual'?: number;
  'status.equals'?: number;
  'status.notEquals'?: number;
  'status.specified'?: boolean;
  'status.in'?: number[];
  'status.notIn'?: number[];
  'createDate.greaterThan'?: string;
  'createDate.lessThan'?: string;
  'createDate.greaterThanOrEqual'?: string;
  'createDate.lessThanOrEqual'?: string;
  'createDate.equals'?: string;
  'createDate.notEquals'?: string;
  'createDate.specified'?: boolean;
  'createDate.in'?: string[];
  'createDate.notIn'?: string[];
  'createBy.contains'?: string;
  'createBy.doesNotContain'?: string;
  'createBy.equals'?: string;
  'createBy.notEquals'?: string;
  'createBy.specified'?: boolean;
  'createBy.in'?: string[];
  'createBy.notIn'?: string[];
  'editDate.greaterThan'?: string;
  'editDate.lessThan'?: string;
  'editDate.greaterThanOrEqual'?: string;
  'editDate.lessThanOrEqual'?: string;
  'editDate.equals'?: string;
  'editDate.notEquals'?: string;
  'editDate.specified'?: boolean;
  'editDate.in'?: string[];
  'editDate.notIn'?: string[];
  'editBy.contains'?: string;
  'editBy.doesNotContain'?: string;
  'editBy.equals'?: string;
  'editBy.notEquals'?: string;
  'editBy.specified'?: boolean;
  'editBy.in'?: string[];
  'editBy.notIn'?: string[];
  'bookingId.greaterThan'?: number;
  'bookingId.lessThan'?: number;
  'bookingId.greaterThanOrEqual'?: number;
  'bookingId.lessThanOrEqual'?: number;
  'bookingId.equals'?: number;
  'bookingId.notEquals'?: number;
  'bookingId.specified'?: boolean;
  'bookingId.in'?: number[];
  'bookingId.notIn'?: number[];
  'agentUserId.greaterThan'?: number;
  'agentUserId.lessThan'?: number;
  'agentUserId.greaterThanOrEqual'?: number;
  'agentUserId.lessThanOrEqual'?: number;
  'agentUserId.equals'?: number;
  'agentUserId.notEquals'?: number;
  'agentUserId.specified'?: boolean;
  'agentUserId.in'?: number[];
  'agentUserId.notIn'?: number[];
  'partnerUserId.greaterThan'?: number;
  'partnerUserId.lessThan'?: number;
  'partnerUserId.greaterThanOrEqual'?: number;
  'partnerUserId.lessThanOrEqual'?: number;
  'partnerUserId.equals'?: number;
  'partnerUserId.notEquals'?: number;
  'partnerUserId.specified'?: boolean;
  'partnerUserId.in'?: number[];
  'partnerUserId.notIn'?: number[];
  'bookingCostTypeId.greaterThan'?: number;
  'bookingCostTypeId.lessThan'?: number;
  'bookingCostTypeId.greaterThanOrEqual'?: number;
  'bookingCostTypeId.lessThanOrEqual'?: number;
  'bookingCostTypeId.equals'?: number;
  'bookingCostTypeId.notEquals'?: number;
  'bookingCostTypeId.specified'?: boolean;
  'bookingCostTypeId.in'?: number[];
  'bookingCostTypeId.notIn'?: number[];
  'bookingVehicleToPartnerId.greaterThan'?: number;
  'bookingVehicleToPartnerId.lessThan'?: number;
  'bookingVehicleToPartnerId.greaterThanOrEqual'?: number;
  'bookingVehicleToPartnerId.lessThanOrEqual'?: number;
  'bookingVehicleToPartnerId.equals'?: number;
  'bookingVehicleToPartnerId.notEquals'?: number;
  'bookingVehicleToPartnerId.specified'?: boolean;
  'bookingVehicleToPartnerId.in'?: number[];
  'bookingVehicleToPartnerId.notIn'?: number[];
  distinct?: boolean;
  /**
   * Zero-based page index (0..N)
   */
  page?: number;
  /**
   * The size of the page to be returned
   */
  size?: number;
  /**
   * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   */
  sort?: string[];
};

export type GetAllBookingNotesParams = {
  'id.greaterThan'?: number;
  'id.lessThan'?: number;
  'id.greaterThanOrEqual'?: number;
  'id.lessThanOrEqual'?: number;
  'id.equals'?: number;
  'id.notEquals'?: number;
  'id.specified'?: boolean;
  'id.in'?: number[];
  'id.notIn'?: number[];
  'note.contains'?: string;
  'note.doesNotContain'?: string;
  'note.equals'?: string;
  'note.notEquals'?: string;
  'note.specified'?: boolean;
  'note.in'?: string[];
  'note.notIn'?: string[];
  'createDate.greaterThan'?: string;
  'createDate.lessThan'?: string;
  'createDate.greaterThanOrEqual'?: string;
  'createDate.lessThanOrEqual'?: string;
  'createDate.equals'?: string;
  'createDate.notEquals'?: string;
  'createDate.specified'?: boolean;
  'createDate.in'?: string[];
  'createDate.notIn'?: string[];
  'createBy.contains'?: string;
  'createBy.doesNotContain'?: string;
  'createBy.equals'?: string;
  'createBy.notEquals'?: string;
  'createBy.specified'?: boolean;
  'createBy.in'?: string[];
  'createBy.notIn'?: string[];
  'editDate.greaterThan'?: string;
  'editDate.lessThan'?: string;
  'editDate.greaterThanOrEqual'?: string;
  'editDate.lessThanOrEqual'?: string;
  'editDate.equals'?: string;
  'editDate.notEquals'?: string;
  'editDate.specified'?: boolean;
  'editDate.in'?: string[];
  'editDate.notIn'?: string[];
  'editBy.contains'?: string;
  'editBy.doesNotContain'?: string;
  'editBy.equals'?: string;
  'editBy.notEquals'?: string;
  'editBy.specified'?: boolean;
  'editBy.in'?: string[];
  'editBy.notIn'?: string[];
  'bookingId.greaterThan'?: number;
  'bookingId.lessThan'?: number;
  'bookingId.greaterThanOrEqual'?: number;
  'bookingId.lessThanOrEqual'?: number;
  'bookingId.equals'?: number;
  'bookingId.notEquals'?: number;
  'bookingId.specified'?: boolean;
  'bookingId.in'?: number[];
  'bookingId.notIn'?: number[];
  'bookingVehicleToPartnerId.greaterThan'?: number;
  'bookingVehicleToPartnerId.lessThan'?: number;
  'bookingVehicleToPartnerId.greaterThanOrEqual'?: number;
  'bookingVehicleToPartnerId.lessThanOrEqual'?: number;
  'bookingVehicleToPartnerId.equals'?: number;
  'bookingVehicleToPartnerId.notEquals'?: number;
  'bookingVehicleToPartnerId.specified'?: boolean;
  'bookingVehicleToPartnerId.in'?: number[];
  'bookingVehicleToPartnerId.notIn'?: number[];
  distinct?: boolean;
  /**
   * Zero-based page index (0..N)
   */
  page?: number;
  /**
   * The size of the page to be returned
   */
  size?: number;
  /**
   * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   */
  sort?: string[];
};

export type GetAllBookingVehicleToPartnerCostsParams = {
  'id.greaterThan'?: number;
  'id.lessThan'?: number;
  'id.greaterThanOrEqual'?: number;
  'id.lessThanOrEqual'?: number;
  'id.equals'?: number;
  'id.notEquals'?: number;
  'id.specified'?: boolean;
  'id.in'?: number[];
  'id.notIn'?: number[];
  'vehicleId.greaterThan'?: number;
  'vehicleId.lessThan'?: number;
  'vehicleId.greaterThanOrEqual'?: number;
  'vehicleId.lessThanOrEqual'?: number;
  'vehicleId.equals'?: number;
  'vehicleId.notEquals'?: number;
  'vehicleId.specified'?: boolean;
  'vehicleId.in'?: number[];
  'vehicleId.notIn'?: number[];
  'detail.contains'?: string;
  'detail.doesNotContain'?: string;
  'detail.equals'?: string;
  'detail.notEquals'?: string;
  'detail.specified'?: boolean;
  'detail.in'?: string[];
  'detail.notIn'?: string[];
  'typeOfFee.contains'?: string;
  'typeOfFee.doesNotContain'?: string;
  'typeOfFee.equals'?: string;
  'typeOfFee.notEquals'?: string;
  'typeOfFee.specified'?: boolean;
  'typeOfFee.in'?: string[];
  'typeOfFee.notIn'?: string[];
  'note.contains'?: string;
  'note.doesNotContain'?: string;
  'note.equals'?: string;
  'note.notEquals'?: string;
  'note.specified'?: boolean;
  'note.in'?: string[];
  'note.notIn'?: string[];
  'price.greaterThan'?: number;
  'price.lessThan'?: number;
  'price.greaterThanOrEqual'?: number;
  'price.lessThanOrEqual'?: number;
  'price.equals'?: number;
  'price.notEquals'?: number;
  'price.specified'?: boolean;
  'price.in'?: number[];
  'price.notIn'?: number[];
  'editBy.contains'?: string;
  'editBy.doesNotContain'?: string;
  'editBy.equals'?: string;
  'editBy.notEquals'?: string;
  'editBy.specified'?: boolean;
  'editBy.in'?: string[];
  'editBy.notIn'?: string[];
  'editDate.greaterThan'?: string;
  'editDate.lessThan'?: string;
  'editDate.greaterThanOrEqual'?: string;
  'editDate.lessThanOrEqual'?: string;
  'editDate.equals'?: string;
  'editDate.notEquals'?: string;
  'editDate.specified'?: boolean;
  'editDate.in'?: string[];
  'editDate.notIn'?: string[];
  'createBy.contains'?: string;
  'createBy.doesNotContain'?: string;
  'createBy.equals'?: string;
  'createBy.notEquals'?: string;
  'createBy.specified'?: boolean;
  'createBy.in'?: string[];
  'createBy.notIn'?: string[];
  'createDate.greaterThan'?: string;
  'createDate.lessThan'?: string;
  'createDate.greaterThanOrEqual'?: string;
  'createDate.lessThanOrEqual'?: string;
  'createDate.equals'?: string;
  'createDate.notEquals'?: string;
  'createDate.specified'?: boolean;
  'createDate.in'?: string[];
  'createDate.notIn'?: string[];
  'paidDate.greaterThan'?: string;
  'paidDate.lessThan'?: string;
  'paidDate.greaterThanOrEqual'?: string;
  'paidDate.lessThanOrEqual'?: string;
  'paidDate.equals'?: string;
  'paidDate.notEquals'?: string;
  'paidDate.specified'?: boolean;
  'paidDate.in'?: string[];
  'paidDate.notIn'?: string[];
  'bookingVehicleId.greaterThan'?: number;
  'bookingVehicleId.lessThan'?: number;
  'bookingVehicleId.greaterThanOrEqual'?: number;
  'bookingVehicleId.lessThanOrEqual'?: number;
  'bookingVehicleId.equals'?: number;
  'bookingVehicleId.notEquals'?: number;
  'bookingVehicleId.specified'?: boolean;
  'bookingVehicleId.in'?: number[];
  'bookingVehicleId.notIn'?: number[];
  'partnerId.greaterThan'?: number;
  'partnerId.lessThan'?: number;
  'partnerId.greaterThanOrEqual'?: number;
  'partnerId.lessThanOrEqual'?: number;
  'partnerId.equals'?: number;
  'partnerId.notEquals'?: number;
  'partnerId.specified'?: boolean;
  'partnerId.in'?: number[];
  'partnerId.notIn'?: number[];
  distinct?: boolean;
  /**
   * Zero-based page index (0..N)
   */
  page?: number;
  /**
   * The size of the page to be returned
   */
  size?: number;
  /**
   * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   */
  sort?: string[];
};

export type GetAllBookingVehicleToPartnersParams = {
  'id.greaterThan'?: number;
  'id.lessThan'?: number;
  'id.greaterThanOrEqual'?: number;
  'id.lessThanOrEqual'?: number;
  'id.equals'?: number;
  'id.notEquals'?: number;
  'id.specified'?: boolean;
  'id.in'?: number[];
  'id.notIn'?: number[];
  'note.contains'?: string;
  'note.doesNotContain'?: string;
  'note.equals'?: string;
  'note.notEquals'?: string;
  'note.specified'?: boolean;
  'note.in'?: string[];
  'note.notIn'?: string[];
  'driverName.contains'?: string;
  'driverName.doesNotContain'?: string;
  'driverName.equals'?: string;
  'driverName.notEquals'?: string;
  'driverName.specified'?: boolean;
  'driverName.in'?: string[];
  'driverName.notIn'?: string[];
  'driverPhone.contains'?: string;
  'driverPhone.doesNotContain'?: string;
  'driverPhone.equals'?: string;
  'driverPhone.notEquals'?: string;
  'driverPhone.specified'?: boolean;
  'driverPhone.in'?: string[];
  'driverPhone.notIn'?: string[];
  'driverPlate.contains'?: string;
  'driverPlate.doesNotContain'?: string;
  'driverPlate.equals'?: string;
  'driverPlate.notEquals'?: string;
  'driverPlate.specified'?: boolean;
  'driverPlate.in'?: string[];
  'driverPlate.notIn'?: string[];
  'createDate.greaterThan'?: string;
  'createDate.lessThan'?: string;
  'createDate.greaterThanOrEqual'?: string;
  'createDate.lessThanOrEqual'?: string;
  'createDate.equals'?: string;
  'createDate.notEquals'?: string;
  'createDate.specified'?: boolean;
  'createDate.in'?: string[];
  'createDate.notIn'?: string[];
  'createBy.contains'?: string;
  'createBy.doesNotContain'?: string;
  'createBy.equals'?: string;
  'createBy.notEquals'?: string;
  'createBy.specified'?: boolean;
  'createBy.in'?: string[];
  'createBy.notIn'?: string[];
  'editDate.greaterThan'?: string;
  'editDate.lessThan'?: string;
  'editDate.greaterThanOrEqual'?: string;
  'editDate.lessThanOrEqual'?: string;
  'editDate.equals'?: string;
  'editDate.notEquals'?: string;
  'editDate.specified'?: boolean;
  'editDate.in'?: string[];
  'editDate.notIn'?: string[];
  'editBy.contains'?: string;
  'editBy.doesNotContain'?: string;
  'editBy.equals'?: string;
  'editBy.notEquals'?: string;
  'editBy.specified'?: boolean;
  'editBy.in'?: string[];
  'editBy.notIn'?: string[];
  'bookingVehicleId.greaterThan'?: number;
  'bookingVehicleId.lessThan'?: number;
  'bookingVehicleId.greaterThanOrEqual'?: number;
  'bookingVehicleId.lessThanOrEqual'?: number;
  'bookingVehicleId.equals'?: number;
  'bookingVehicleId.notEquals'?: number;
  'bookingVehicleId.specified'?: boolean;
  'bookingVehicleId.in'?: number[];
  'bookingVehicleId.notIn'?: number[];
  'vehicleId.greaterThan'?: number;
  'vehicleId.lessThan'?: number;
  'vehicleId.greaterThanOrEqual'?: number;
  'vehicleId.lessThanOrEqual'?: number;
  'vehicleId.equals'?: number;
  'vehicleId.notEquals'?: number;
  'vehicleId.specified'?: boolean;
  'vehicleId.in'?: number[];
  'vehicleId.notIn'?: number[];
  distinct?: boolean;
  /**
   * Zero-based page index (0..N)
   */
  page?: number;
  /**
   * The size of the page to be returned
   */
  size?: number;
  /**
   * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   */
  sort?: string[];
};

export type GetAllBookingVehiclesParams = {
  'id.greaterThan'?: number;
  'id.lessThan'?: number;
  'id.greaterThanOrEqual'?: number;
  'id.lessThanOrEqual'?: number;
  'id.equals'?: number;
  'id.notEquals'?: number;
  'id.specified'?: boolean;
  'id.in'?: number[];
  'id.notIn'?: number[];
  'unitPrice.greaterThan'?: number;
  'unitPrice.lessThan'?: number;
  'unitPrice.greaterThanOrEqual'?: number;
  'unitPrice.lessThanOrEqual'?: number;
  'unitPrice.equals'?: number;
  'unitPrice.notEquals'?: number;
  'unitPrice.specified'?: boolean;
  'unitPrice.in'?: number[];
  'unitPrice.notIn'?: number[];
  'quantity.greaterThan'?: number;
  'quantity.lessThan'?: number;
  'quantity.greaterThanOrEqual'?: number;
  'quantity.lessThanOrEqual'?: number;
  'quantity.equals'?: number;
  'quantity.notEquals'?: number;
  'quantity.specified'?: boolean;
  'quantity.in'?: number[];
  'quantity.notIn'?: number[];
  'totalPrice.greaterThan'?: number;
  'totalPrice.lessThan'?: number;
  'totalPrice.greaterThanOrEqual'?: number;
  'totalPrice.lessThanOrEqual'?: number;
  'totalPrice.equals'?: number;
  'totalPrice.notEquals'?: number;
  'totalPrice.specified'?: boolean;
  'totalPrice.in'?: number[];
  'totalPrice.notIn'?: number[];
  'note.contains'?: string;
  'note.doesNotContain'?: string;
  'note.equals'?: string;
  'note.notEquals'?: string;
  'note.specified'?: boolean;
  'note.in'?: string[];
  'note.notIn'?: string[];
  'createDate.greaterThan'?: string;
  'createDate.lessThan'?: string;
  'createDate.greaterThanOrEqual'?: string;
  'createDate.lessThanOrEqual'?: string;
  'createDate.equals'?: string;
  'createDate.notEquals'?: string;
  'createDate.specified'?: boolean;
  'createDate.in'?: string[];
  'createDate.notIn'?: string[];
  'createBy.contains'?: string;
  'createBy.doesNotContain'?: string;
  'createBy.equals'?: string;
  'createBy.notEquals'?: string;
  'createBy.specified'?: boolean;
  'createBy.in'?: string[];
  'createBy.notIn'?: string[];
  'editDate.greaterThan'?: string;
  'editDate.lessThan'?: string;
  'editDate.greaterThanOrEqual'?: string;
  'editDate.lessThanOrEqual'?: string;
  'editDate.equals'?: string;
  'editDate.notEquals'?: string;
  'editDate.specified'?: boolean;
  'editDate.in'?: string[];
  'editDate.notIn'?: string[];
  'editBy.contains'?: string;
  'editBy.doesNotContain'?: string;
  'editBy.equals'?: string;
  'editBy.notEquals'?: string;
  'editBy.specified'?: boolean;
  'editBy.in'?: string[];
  'editBy.notIn'?: string[];
  'vehicleTypeId.greaterThan'?: number;
  'vehicleTypeId.lessThan'?: number;
  'vehicleTypeId.greaterThanOrEqual'?: number;
  'vehicleTypeId.lessThanOrEqual'?: number;
  'vehicleTypeId.equals'?: number;
  'vehicleTypeId.notEquals'?: number;
  'vehicleTypeId.specified'?: boolean;
  'vehicleTypeId.in'?: number[];
  'vehicleTypeId.notIn'?: number[];
  'bookingId.greaterThan'?: number;
  'bookingId.lessThan'?: number;
  'bookingId.greaterThanOrEqual'?: number;
  'bookingId.lessThanOrEqual'?: number;
  'bookingId.equals'?: number;
  'bookingId.notEquals'?: number;
  'bookingId.specified'?: boolean;
  'bookingId.in'?: number[];
  'bookingId.notIn'?: number[];
  'partnerUserId.greaterThan'?: number;
  'partnerUserId.lessThan'?: number;
  'partnerUserId.greaterThanOrEqual'?: number;
  'partnerUserId.lessThanOrEqual'?: number;
  'partnerUserId.equals'?: number;
  'partnerUserId.notEquals'?: number;
  'partnerUserId.specified'?: boolean;
  'partnerUserId.in'?: number[];
  'partnerUserId.notIn'?: number[];
  distinct?: boolean;
  /**
   * Zero-based page index (0..N)
   */
  page?: number;
  /**
   * The size of the page to be returned
   */
  size?: number;
  /**
   * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   */
  sort?: string[];
};

export type GetAllBookingsJourneyTypeNotInItem =
  (typeof GetAllBookingsJourneyTypeNotInItem)[keyof typeof GetAllBookingsJourneyTypeNotInItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAllBookingsJourneyTypeNotInItem = {
  ONEWAY: 'ONEWAY',
  TWOWAY: 'TWOWAY',
  TAKEBACK: 'TAKEBACK',
  JOURNEY: 'JOURNEY',
} as const;

export type GetAllBookingsJourneyTypeInItem =
  (typeof GetAllBookingsJourneyTypeInItem)[keyof typeof GetAllBookingsJourneyTypeInItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAllBookingsJourneyTypeInItem = {
  ONEWAY: 'ONEWAY',
  TWOWAY: 'TWOWAY',
  TAKEBACK: 'TAKEBACK',
  JOURNEY: 'JOURNEY',
} as const;

export type GetAllBookingsJourneyTypeNotEquals =
  (typeof GetAllBookingsJourneyTypeNotEquals)[keyof typeof GetAllBookingsJourneyTypeNotEquals];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAllBookingsJourneyTypeNotEquals = {
  ONEWAY: 'ONEWAY',
  TWOWAY: 'TWOWAY',
  TAKEBACK: 'TAKEBACK',
  JOURNEY: 'JOURNEY',
} as const;

export type GetAllBookingsJourneyTypeEquals =
  (typeof GetAllBookingsJourneyTypeEquals)[keyof typeof GetAllBookingsJourneyTypeEquals];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAllBookingsJourneyTypeEquals = {
  ONEWAY: 'ONEWAY',
  TWOWAY: 'TWOWAY',
  TAKEBACK: 'TAKEBACK',
  JOURNEY: 'JOURNEY',
} as const;

export type GetAllBookingsBookingTypeNotInItem =
  (typeof GetAllBookingsBookingTypeNotInItem)[keyof typeof GetAllBookingsBookingTypeNotInItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAllBookingsBookingTypeNotInItem = {
  TOUR: 'TOUR',
  AIRPORT: 'AIRPORT',
} as const;

export type GetAllBookingsBookingTypeInItem =
  (typeof GetAllBookingsBookingTypeInItem)[keyof typeof GetAllBookingsBookingTypeInItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAllBookingsBookingTypeInItem = {
  TOUR: 'TOUR',
  AIRPORT: 'AIRPORT',
} as const;

export type GetAllBookingsBookingTypeNotEquals =
  (typeof GetAllBookingsBookingTypeNotEquals)[keyof typeof GetAllBookingsBookingTypeNotEquals];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAllBookingsBookingTypeNotEquals = {
  TOUR: 'TOUR',
  AIRPORT: 'AIRPORT',
} as const;

export type GetAllBookingsBookingTypeEquals =
  (typeof GetAllBookingsBookingTypeEquals)[keyof typeof GetAllBookingsBookingTypeEquals];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAllBookingsBookingTypeEquals = {
  TOUR: 'TOUR',
  AIRPORT: 'AIRPORT',
} as const;

export type GetAllBookingsParams = {
  'id.greaterThan'?: number;
  'id.lessThan'?: number;
  'id.greaterThanOrEqual'?: number;
  'id.lessThanOrEqual'?: number;
  'id.equals'?: number;
  'id.notEquals'?: number;
  'id.specified'?: boolean;
  'id.in'?: number[];
  'id.notIn'?: number[];
  'code.contains'?: string;
  'code.doesNotContain'?: string;
  'code.equals'?: string;
  'code.notEquals'?: string;
  'code.specified'?: boolean;
  'code.in'?: string[];
  'code.notIn'?: string[];
  'bookingType.equals'?: GetAllBookingsBookingTypeEquals;
  'bookingType.notEquals'?: GetAllBookingsBookingTypeNotEquals;
  'bookingType.specified'?: boolean;
  'bookingType.in'?: GetAllBookingsBookingTypeInItem[];
  'bookingType.notIn'?: GetAllBookingsBookingTypeNotInItem[];
  'fromLocation.contains'?: string;
  'fromLocation.doesNotContain'?: string;
  'fromLocation.equals'?: string;
  'fromLocation.notEquals'?: string;
  'fromLocation.specified'?: boolean;
  'fromLocation.in'?: string[];
  'fromLocation.notIn'?: string[];
  'toLocation.contains'?: string;
  'toLocation.doesNotContain'?: string;
  'toLocation.equals'?: string;
  'toLocation.notEquals'?: string;
  'toLocation.specified'?: boolean;
  'toLocation.in'?: string[];
  'toLocation.notIn'?: string[];
  'additionLocations.contains'?: string;
  'additionLocations.doesNotContain'?: string;
  'additionLocations.equals'?: string;
  'additionLocations.notEquals'?: string;
  'additionLocations.specified'?: boolean;
  'additionLocations.in'?: string[];
  'additionLocations.notIn'?: string[];
  'departureDate.greaterThan'?: string;
  'departureDate.lessThan'?: string;
  'departureDate.greaterThanOrEqual'?: string;
  'departureDate.lessThanOrEqual'?: string;
  'departureDate.equals'?: string;
  'departureDate.notEquals'?: string;
  'departureDate.specified'?: boolean;
  'departureDate.in'?: string[];
  'departureDate.notIn'?: string[];
  'returnDate.greaterThan'?: string;
  'returnDate.lessThan'?: string;
  'returnDate.greaterThanOrEqual'?: string;
  'returnDate.lessThanOrEqual'?: string;
  'returnDate.equals'?: string;
  'returnDate.notEquals'?: string;
  'returnDate.specified'?: boolean;
  'returnDate.in'?: string[];
  'returnDate.notIn'?: string[];
  'distance.greaterThan'?: number;
  'distance.lessThan'?: number;
  'distance.greaterThanOrEqual'?: number;
  'distance.lessThanOrEqual'?: number;
  'distance.equals'?: number;
  'distance.notEquals'?: number;
  'distance.specified'?: boolean;
  'distance.in'?: number[];
  'distance.notIn'?: number[];
  'journeyType.equals'?: GetAllBookingsJourneyTypeEquals;
  'journeyType.notEquals'?: GetAllBookingsJourneyTypeNotEquals;
  'journeyType.specified'?: boolean;
  'journeyType.in'?: GetAllBookingsJourneyTypeInItem[];
  'journeyType.notIn'?: GetAllBookingsJourneyTypeNotInItem[];
  'deposit.greaterThan'?: number;
  'deposit.lessThan'?: number;
  'deposit.greaterThanOrEqual'?: number;
  'deposit.lessThanOrEqual'?: number;
  'deposit.equals'?: number;
  'deposit.notEquals'?: number;
  'deposit.specified'?: boolean;
  'deposit.in'?: number[];
  'deposit.notIn'?: number[];
  'cusName.contains'?: string;
  'cusName.doesNotContain'?: string;
  'cusName.equals'?: string;
  'cusName.notEquals'?: string;
  'cusName.specified'?: boolean;
  'cusName.in'?: string[];
  'cusName.notIn'?: string[];
  'cusPhone.contains'?: string;
  'cusPhone.doesNotContain'?: string;
  'cusPhone.equals'?: string;
  'cusPhone.notEquals'?: string;
  'cusPhone.specified'?: boolean;
  'cusPhone.in'?: string[];
  'cusPhone.notIn'?: string[];
  'cusEmail.contains'?: string;
  'cusEmail.doesNotContain'?: string;
  'cusEmail.equals'?: string;
  'cusEmail.notEquals'?: string;
  'cusEmail.specified'?: boolean;
  'cusEmail.in'?: string[];
  'cusEmail.notIn'?: string[];
  'comName.contains'?: string;
  'comName.doesNotContain'?: string;
  'comName.equals'?: string;
  'comName.notEquals'?: string;
  'comName.specified'?: boolean;
  'comName.in'?: string[];
  'comName.notIn'?: string[];
  'comAddress.contains'?: string;
  'comAddress.doesNotContain'?: string;
  'comAddress.equals'?: string;
  'comAddress.notEquals'?: string;
  'comAddress.specified'?: boolean;
  'comAddress.in'?: string[];
  'comAddress.notIn'?: string[];
  'comTaxCode.contains'?: string;
  'comTaxCode.doesNotContain'?: string;
  'comTaxCode.equals'?: string;
  'comTaxCode.notEquals'?: string;
  'comTaxCode.specified'?: boolean;
  'comTaxCode.in'?: string[];
  'comTaxCode.notIn'?: string[];
  'note.contains'?: string;
  'note.doesNotContain'?: string;
  'note.equals'?: string;
  'note.notEquals'?: string;
  'note.specified'?: boolean;
  'note.in'?: string[];
  'note.notIn'?: string[];
  'status.greaterThan'?: number;
  'status.lessThan'?: number;
  'status.greaterThanOrEqual'?: number;
  'status.lessThanOrEqual'?: number;
  'status.equals'?: number;
  'status.notEquals'?: number;
  'status.specified'?: boolean;
  'status.in'?: number[];
  'status.notIn'?: number[];
  'createDate.greaterThan'?: string;
  'createDate.lessThan'?: string;
  'createDate.greaterThanOrEqual'?: string;
  'createDate.lessThanOrEqual'?: string;
  'createDate.equals'?: string;
  'createDate.notEquals'?: string;
  'createDate.specified'?: boolean;
  'createDate.in'?: string[];
  'createDate.notIn'?: string[];
  'createBy.contains'?: string;
  'createBy.doesNotContain'?: string;
  'createBy.equals'?: string;
  'createBy.notEquals'?: string;
  'createBy.specified'?: boolean;
  'createBy.in'?: string[];
  'createBy.notIn'?: string[];
  'editDate.greaterThan'?: string;
  'editDate.lessThan'?: string;
  'editDate.greaterThanOrEqual'?: string;
  'editDate.lessThanOrEqual'?: string;
  'editDate.equals'?: string;
  'editDate.notEquals'?: string;
  'editDate.specified'?: boolean;
  'editDate.in'?: string[];
  'editDate.notIn'?: string[];
  'editBy.contains'?: string;
  'editBy.doesNotContain'?: string;
  'editBy.equals'?: string;
  'editBy.notEquals'?: string;
  'editBy.specified'?: boolean;
  'editBy.in'?: string[];
  'editBy.notIn'?: string[];
  'partnerUserId.greaterThan'?: number;
  'partnerUserId.lessThan'?: number;
  'partnerUserId.greaterThanOrEqual'?: number;
  'partnerUserId.lessThanOrEqual'?: number;
  'partnerUserId.equals'?: number;
  'partnerUserId.notEquals'?: number;
  'partnerUserId.specified'?: boolean;
  'partnerUserId.in'?: number[];
  'partnerUserId.notIn'?: number[];
  'partnerId.greaterThan'?: number;
  'partnerId.lessThan'?: number;
  'partnerId.greaterThanOrEqual'?: number;
  'partnerId.lessThanOrEqual'?: number;
  'partnerId.equals'?: number;
  'partnerId.notEquals'?: number;
  'partnerId.specified'?: boolean;
  'partnerId.in'?: number[];
  'partnerId.notIn'?: number[];
  distinct?: boolean;
  /**
   * Zero-based page index (0..N)
   */
  page?: number;
  /**
   * The size of the page to be returned
   */
  size?: number;
  /**
   * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   */
  sort?: string[];
};

export type GetAllPartnersParams = {
  'id.greaterThan'?: number;
  'id.lessThan'?: number;
  'id.greaterThanOrEqual'?: number;
  'id.lessThanOrEqual'?: number;
  'id.equals'?: number;
  'id.notEquals'?: number;
  'id.specified'?: boolean;
  'id.in'?: number[];
  'id.notIn'?: number[];
  'name.contains'?: string;
  'name.doesNotContain'?: string;
  'name.equals'?: string;
  'name.notEquals'?: string;
  'name.specified'?: boolean;
  'name.in'?: string[];
  'name.notIn'?: string[];
  'shortName.contains'?: string;
  'shortName.doesNotContain'?: string;
  'shortName.equals'?: string;
  'shortName.notEquals'?: string;
  'shortName.specified'?: boolean;
  'shortName.in'?: string[];
  'shortName.notIn'?: string[];
  'address.contains'?: string;
  'address.doesNotContain'?: string;
  'address.equals'?: string;
  'address.notEquals'?: string;
  'address.specified'?: boolean;
  'address.in'?: string[];
  'address.notIn'?: string[];
  'phone.contains'?: string;
  'phone.doesNotContain'?: string;
  'phone.equals'?: string;
  'phone.notEquals'?: string;
  'phone.specified'?: boolean;
  'phone.in'?: string[];
  'phone.notIn'?: string[];
  'email.contains'?: string;
  'email.doesNotContain'?: string;
  'email.equals'?: string;
  'email.notEquals'?: string;
  'email.specified'?: boolean;
  'email.in'?: string[];
  'email.notIn'?: string[];
  'taxCode.contains'?: string;
  'taxCode.doesNotContain'?: string;
  'taxCode.equals'?: string;
  'taxCode.notEquals'?: string;
  'taxCode.specified'?: boolean;
  'taxCode.in'?: string[];
  'taxCode.notIn'?: string[];
  'representive.contains'?: string;
  'representive.doesNotContain'?: string;
  'representive.equals'?: string;
  'representive.notEquals'?: string;
  'representive.specified'?: boolean;
  'representive.in'?: string[];
  'representive.notIn'?: string[];
  'note.contains'?: string;
  'note.doesNotContain'?: string;
  'note.equals'?: string;
  'note.notEquals'?: string;
  'note.specified'?: boolean;
  'note.in'?: string[];
  'note.notIn'?: string[];
  'createDate.greaterThan'?: string;
  'createDate.lessThan'?: string;
  'createDate.greaterThanOrEqual'?: string;
  'createDate.lessThanOrEqual'?: string;
  'createDate.equals'?: string;
  'createDate.notEquals'?: string;
  'createDate.specified'?: boolean;
  'createDate.in'?: string[];
  'createDate.notIn'?: string[];
  'createBy.contains'?: string;
  'createBy.doesNotContain'?: string;
  'createBy.equals'?: string;
  'createBy.notEquals'?: string;
  'createBy.specified'?: boolean;
  'createBy.in'?: string[];
  'createBy.notIn'?: string[];
  'editDate.greaterThan'?: string;
  'editDate.lessThan'?: string;
  'editDate.greaterThanOrEqual'?: string;
  'editDate.lessThanOrEqual'?: string;
  'editDate.equals'?: string;
  'editDate.notEquals'?: string;
  'editDate.specified'?: boolean;
  'editDate.in'?: string[];
  'editDate.notIn'?: string[];
  'editBy.contains'?: string;
  'editBy.doesNotContain'?: string;
  'editBy.equals'?: string;
  'editBy.notEquals'?: string;
  'editBy.specified'?: boolean;
  'editBy.in'?: string[];
  'editBy.notIn'?: string[];
  distinct?: boolean;
  /**
   * Zero-based page index (0..N)
   */
  page?: number;
  /**
   * The size of the page to be returned
   */
  size?: number;
  /**
   * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   */
  sort?: string[];
};

export type GetAllPaymentsParams = {
  'id.greaterThan'?: number;
  'id.lessThan'?: number;
  'id.greaterThanOrEqual'?: number;
  'id.lessThanOrEqual'?: number;
  'id.equals'?: number;
  'id.notEquals'?: number;
  'id.specified'?: boolean;
  'id.in'?: number[];
  'id.notIn'?: number[];
  'note.contains'?: string;
  'note.doesNotContain'?: string;
  'note.equals'?: string;
  'note.notEquals'?: string;
  'note.specified'?: boolean;
  'note.in'?: string[];
  'note.notIn'?: string[];
  'amount.greaterThan'?: number;
  'amount.lessThan'?: number;
  'amount.greaterThanOrEqual'?: number;
  'amount.lessThanOrEqual'?: number;
  'amount.equals'?: number;
  'amount.notEquals'?: number;
  'amount.specified'?: boolean;
  'amount.in'?: number[];
  'amount.notIn'?: number[];
  'status.greaterThan'?: number;
  'status.lessThan'?: number;
  'status.greaterThanOrEqual'?: number;
  'status.lessThanOrEqual'?: number;
  'status.equals'?: number;
  'status.notEquals'?: number;
  'status.specified'?: boolean;
  'status.in'?: number[];
  'status.notIn'?: number[];
  'createDate.greaterThan'?: string;
  'createDate.lessThan'?: string;
  'createDate.greaterThanOrEqual'?: string;
  'createDate.lessThanOrEqual'?: string;
  'createDate.equals'?: string;
  'createDate.notEquals'?: string;
  'createDate.specified'?: boolean;
  'createDate.in'?: string[];
  'createDate.notIn'?: string[];
  'createBy.contains'?: string;
  'createBy.doesNotContain'?: string;
  'createBy.equals'?: string;
  'createBy.notEquals'?: string;
  'createBy.specified'?: boolean;
  'createBy.in'?: string[];
  'createBy.notIn'?: string[];
  'editDate.greaterThan'?: string;
  'editDate.lessThan'?: string;
  'editDate.greaterThanOrEqual'?: string;
  'editDate.lessThanOrEqual'?: string;
  'editDate.equals'?: string;
  'editDate.notEquals'?: string;
  'editDate.specified'?: boolean;
  'editDate.in'?: string[];
  'editDate.notIn'?: string[];
  'editBy.contains'?: string;
  'editBy.doesNotContain'?: string;
  'editBy.equals'?: string;
  'editBy.notEquals'?: string;
  'editBy.specified'?: boolean;
  'editBy.in'?: string[];
  'editBy.notIn'?: string[];
  'agentId.greaterThan'?: number;
  'agentId.lessThan'?: number;
  'agentId.greaterThanOrEqual'?: number;
  'agentId.lessThanOrEqual'?: number;
  'agentId.equals'?: number;
  'agentId.notEquals'?: number;
  'agentId.specified'?: boolean;
  'agentId.in'?: number[];
  'agentId.notIn'?: number[];
  'partnerId.greaterThan'?: number;
  'partnerId.lessThan'?: number;
  'partnerId.greaterThanOrEqual'?: number;
  'partnerId.lessThanOrEqual'?: number;
  'partnerId.equals'?: number;
  'partnerId.notEquals'?: number;
  'partnerId.specified'?: boolean;
  'partnerId.in'?: number[];
  'partnerId.notIn'?: number[];
  distinct?: boolean;
  /**
   * Zero-based page index (0..N)
   */
  page?: number;
  /**
   * The size of the page to be returned
   */
  size?: number;
  /**
   * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   */
  sort?: string[];
};

export type GetAllVehiclePricesParams = {
  'id.greaterThan'?: number;
  'id.lessThan'?: number;
  'id.greaterThanOrEqual'?: number;
  'id.lessThanOrEqual'?: number;
  'id.equals'?: number;
  'id.notEquals'?: number;
  'id.specified'?: boolean;
  'id.in'?: number[];
  'id.notIn'?: number[];
  'name.contains'?: string;
  'name.doesNotContain'?: string;
  'name.equals'?: string;
  'name.notEquals'?: string;
  'name.specified'?: boolean;
  'name.in'?: string[];
  'name.notIn'?: string[];
  'note.contains'?: string;
  'note.doesNotContain'?: string;
  'note.equals'?: string;
  'note.notEquals'?: string;
  'note.specified'?: boolean;
  'note.in'?: string[];
  'note.notIn'?: string[];
  'settings.contains'?: string;
  'settings.doesNotContain'?: string;
  'settings.equals'?: string;
  'settings.notEquals'?: string;
  'settings.specified'?: boolean;
  'settings.in'?: string[];
  'settings.notIn'?: string[];
  'createDate.greaterThan'?: string;
  'createDate.lessThan'?: string;
  'createDate.greaterThanOrEqual'?: string;
  'createDate.lessThanOrEqual'?: string;
  'createDate.equals'?: string;
  'createDate.notEquals'?: string;
  'createDate.specified'?: boolean;
  'createDate.in'?: string[];
  'createDate.notIn'?: string[];
  'createBy.contains'?: string;
  'createBy.doesNotContain'?: string;
  'createBy.equals'?: string;
  'createBy.notEquals'?: string;
  'createBy.specified'?: boolean;
  'createBy.in'?: string[];
  'createBy.notIn'?: string[];
  'editDate.greaterThan'?: string;
  'editDate.lessThan'?: string;
  'editDate.greaterThanOrEqual'?: string;
  'editDate.lessThanOrEqual'?: string;
  'editDate.equals'?: string;
  'editDate.notEquals'?: string;
  'editDate.specified'?: boolean;
  'editDate.in'?: string[];
  'editDate.notIn'?: string[];
  'editBy.contains'?: string;
  'editBy.doesNotContain'?: string;
  'editBy.equals'?: string;
  'editBy.notEquals'?: string;
  'editBy.specified'?: boolean;
  'editBy.in'?: string[];
  'editBy.notIn'?: string[];
  distinct?: boolean;
  /**
   * Zero-based page index (0..N)
   */
  page?: number;
  /**
   * The size of the page to be returned
   */
  size?: number;
  /**
   * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   */
  sort?: string[];
};

export type GetAllVehicleTypesParams = {
  'id.greaterThan'?: number;
  'id.lessThan'?: number;
  'id.greaterThanOrEqual'?: number;
  'id.lessThanOrEqual'?: number;
  'id.equals'?: number;
  'id.notEquals'?: number;
  'id.specified'?: boolean;
  'id.in'?: number[];
  'id.notIn'?: number[];
  'name.contains'?: string;
  'name.doesNotContain'?: string;
  'name.equals'?: string;
  'name.notEquals'?: string;
  'name.specified'?: boolean;
  'name.in'?: string[];
  'name.notIn'?: string[];
  'note.contains'?: string;
  'note.doesNotContain'?: string;
  'note.equals'?: string;
  'note.notEquals'?: string;
  'note.specified'?: boolean;
  'note.in'?: string[];
  'note.notIn'?: string[];
  'status.greaterThan'?: number;
  'status.lessThan'?: number;
  'status.greaterThanOrEqual'?: number;
  'status.lessThanOrEqual'?: number;
  'status.equals'?: number;
  'status.notEquals'?: number;
  'status.specified'?: boolean;
  'status.in'?: number[];
  'status.notIn'?: number[];
  'seats.greaterThan'?: number;
  'seats.lessThan'?: number;
  'seats.greaterThanOrEqual'?: number;
  'seats.lessThanOrEqual'?: number;
  'seats.equals'?: number;
  'seats.notEquals'?: number;
  'seats.specified'?: boolean;
  'seats.in'?: number[];
  'seats.notIn'?: number[];
  'createDate.greaterThan'?: string;
  'createDate.lessThan'?: string;
  'createDate.greaterThanOrEqual'?: string;
  'createDate.lessThanOrEqual'?: string;
  'createDate.equals'?: string;
  'createDate.notEquals'?: string;
  'createDate.specified'?: boolean;
  'createDate.in'?: string[];
  'createDate.notIn'?: string[];
  'createBy.contains'?: string;
  'createBy.doesNotContain'?: string;
  'createBy.equals'?: string;
  'createBy.notEquals'?: string;
  'createBy.specified'?: boolean;
  'createBy.in'?: string[];
  'createBy.notIn'?: string[];
  'editDate.greaterThan'?: string;
  'editDate.lessThan'?: string;
  'editDate.greaterThanOrEqual'?: string;
  'editDate.lessThanOrEqual'?: string;
  'editDate.equals'?: string;
  'editDate.notEquals'?: string;
  'editDate.specified'?: boolean;
  'editDate.in'?: string[];
  'editDate.notIn'?: string[];
  'editBy.contains'?: string;
  'editBy.doesNotContain'?: string;
  'editBy.equals'?: string;
  'editBy.notEquals'?: string;
  'editBy.specified'?: boolean;
  'editBy.in'?: string[];
  'editBy.notIn'?: string[];
  'priceId.greaterThan'?: number;
  'priceId.lessThan'?: number;
  'priceId.greaterThanOrEqual'?: number;
  'priceId.lessThanOrEqual'?: number;
  'priceId.equals'?: number;
  'priceId.notEquals'?: number;
  'priceId.specified'?: boolean;
  'priceId.in'?: number[];
  'priceId.notIn'?: number[];
  distinct?: boolean;
  /**
   * Zero-based page index (0..N)
   */
  page?: number;
  /**
   * The size of the page to be returned
   */
  size?: number;
  /**
   * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   */
  sort?: string[];
};

export type GetAllVehiclesParams = {
  'id.greaterThan'?: number;
  'id.lessThan'?: number;
  'id.greaterThanOrEqual'?: number;
  'id.lessThanOrEqual'?: number;
  'id.equals'?: number;
  'id.notEquals'?: number;
  'id.specified'?: boolean;
  'id.in'?: number[];
  'id.notIn'?: number[];
  'name.contains'?: string;
  'name.doesNotContain'?: string;
  'name.equals'?: string;
  'name.notEquals'?: string;
  'name.specified'?: boolean;
  'name.in'?: string[];
  'name.notIn'?: string[];
  'licensePlate.contains'?: string;
  'licensePlate.doesNotContain'?: string;
  'licensePlate.equals'?: string;
  'licensePlate.notEquals'?: string;
  'licensePlate.specified'?: boolean;
  'licensePlate.in'?: string[];
  'licensePlate.notIn'?: string[];
  'note.contains'?: string;
  'note.doesNotContain'?: string;
  'note.equals'?: string;
  'note.notEquals'?: string;
  'note.specified'?: boolean;
  'note.in'?: string[];
  'note.notIn'?: string[];
  'createDate.greaterThan'?: string;
  'createDate.lessThan'?: string;
  'createDate.greaterThanOrEqual'?: string;
  'createDate.lessThanOrEqual'?: string;
  'createDate.equals'?: string;
  'createDate.notEquals'?: string;
  'createDate.specified'?: boolean;
  'createDate.in'?: string[];
  'createDate.notIn'?: string[];
  'createBy.contains'?: string;
  'createBy.doesNotContain'?: string;
  'createBy.equals'?: string;
  'createBy.notEquals'?: string;
  'createBy.specified'?: boolean;
  'createBy.in'?: string[];
  'createBy.notIn'?: string[];
  'editDate.greaterThan'?: string;
  'editDate.lessThan'?: string;
  'editDate.greaterThanOrEqual'?: string;
  'editDate.lessThanOrEqual'?: string;
  'editDate.equals'?: string;
  'editDate.notEquals'?: string;
  'editDate.specified'?: boolean;
  'editDate.in'?: string[];
  'editDate.notIn'?: string[];
  'editBy.contains'?: string;
  'editBy.doesNotContain'?: string;
  'editBy.equals'?: string;
  'editBy.notEquals'?: string;
  'editBy.specified'?: boolean;
  'editBy.in'?: string[];
  'editBy.notIn'?: string[];
  'vehicleTypeId.greaterThan'?: number;
  'vehicleTypeId.lessThan'?: number;
  'vehicleTypeId.greaterThanOrEqual'?: number;
  'vehicleTypeId.lessThanOrEqual'?: number;
  'vehicleTypeId.equals'?: number;
  'vehicleTypeId.notEquals'?: number;
  'vehicleTypeId.specified'?: boolean;
  'vehicleTypeId.in'?: number[];
  'vehicleTypeId.notIn'?: number[];
  'status.greaterThan'?: number;
  'status.lessThan'?: number;
  'status.greaterThanOrEqual'?: number;
  'status.lessThanOrEqual'?: number;
  'status.equals'?: number;
  'status.notEquals'?: number;
  'status.specified'?: boolean;
  'status.in'?: number[];
  'status.notIn'?: number[];
  'partnerId.greaterThan'?: number;
  'partnerId.lessThan'?: number;
  'partnerId.greaterThanOrEqual'?: number;
  'partnerId.lessThanOrEqual'?: number;
  'partnerId.equals'?: number;
  'partnerId.notEquals'?: number;
  'partnerId.specified'?: boolean;
  'partnerId.in'?: number[];
  'partnerId.notIn'?: number[];
  distinct?: boolean;
  /**
   * Zero-based page index (0..N)
   */
  page?: number;
  /**
   * The size of the page to be returned
   */
  size?: number;
  /**
   * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   */
  sort?: string[];
};

export interface Pageable {
  page?: number;
  size?: number;
  sort?: string[];
}

export type BookingPartnerViewJourneyType =
  (typeof BookingPartnerViewJourneyType)[keyof typeof BookingPartnerViewJourneyType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BookingPartnerViewJourneyType = {
  ONEWAY: 'ONEWAY',
  TWOWAY: 'TWOWAY',
  TAKEBACK: 'TAKEBACK',
  JOURNEY: 'JOURNEY',
} as const;

export type BookingPartnerViewBookingType =
  (typeof BookingPartnerViewBookingType)[keyof typeof BookingPartnerViewBookingType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BookingPartnerViewBookingType = {
  TOUR: 'TOUR',
  AIRPORT: 'AIRPORT',
} as const;

export interface BookingPartnerView {
  id?: number;
  bookingType?: BookingPartnerViewBookingType;
  fromLocation?: string[];
  bookingVehicleToPartnerNote?: string;
  bookingNote?: string;
  toLocation?: string[];
  completedDate?: string;
  reasonCancel?: string;
  departureDate?: string;
  returnDate?: string;
  distance?: number;
  driverCollect?: number;
  existCost?: number;
  bookingId?: number;
  journeyType?: BookingPartnerViewJourneyType;
  vehicleName?: string;
  driverName?: string;
  driverPlate?: string;
  driverPhone?: string;
  vehicleSeats?: number;
  vehicleTypeId?: number;
  cusName?: string;
  cusPhone?: string;
  unitPrice?: number;
  status?: number;
  partnerId?: number;
  deposit?: number;
  startLocation?: string[];
  endLocation?: string[];
  bookingPartnerId?: number;
  vehicleId?: number;
  bookingCode?: string;
  bookingVehicleToPartnerDeposit?: number;
  bookingVehicleToPartnerAmountPaid?: number;
  bookingVehicleToPartnerVat?: number;
}

export interface FinancePartner {
  id?: number;
  driverName?: string;
  bookingType?: string;
  fromLocation?: string;
  toLocation?: string;
  journeyType?: string;
  driverPhone?: string;
  driverPlate?: string;
  vehicleId?: number;
  bookingCode?: string;
  vehicleSeats?: number;
  vehicleName?: string;
  bookingVehiclePrice?: number;
  bookingVehicleAddedCost?: number;
  bookingVehicleVat?: number;
}

export interface FinancePartnerVehicleTypeSummary {
  id?: number;
  driverPlate?: string;
  vehicleId?: number;
  vehicleSeats?: number;
  status?: string;
  vehicleTypeId?: number;
  vehicleName?: string;
  bookingVehiclePrice?: number;
  bookingVehicleAddedCost?: number;
  bookingVehicleExpense?: number;
  vehicleTypeName?: string;
  bookingVehicleVat?: number;
}

export interface FinancePartnerSummary {
  id?: number;
  driverPlate?: string;
  vehicleId?: number;
  vehicleSeats?: number;
  status?: string;
  vehicleName?: string;
  bookingVehiclePrice?: number;
  bookingVehicleAddedCost?: number;
  bookingVehicleExpense?: number;
  bookingVehicleVat?: number;
}

export interface BookingToSelectExpenseDTO {
  driverName?: string;
  driverPlate?: string;
  bookingId?: number;
  bookingVehicleToPartnerId?: number;
  bookingCode?: string;
  vehicleSeats?: number;
}

export type SingleBookingViewJourneyType =
  (typeof SingleBookingViewJourneyType)[keyof typeof SingleBookingViewJourneyType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SingleBookingViewJourneyType = {
  ONEWAY: 'ONEWAY',
  TWOWAY: 'TWOWAY',
  TAKEBACK: 'TAKEBACK',
  JOURNEY: 'JOURNEY',
} as const;

export type SingleBookingViewBookingType =
  (typeof SingleBookingViewBookingType)[keyof typeof SingleBookingViewBookingType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SingleBookingViewBookingType = {
  TOUR: 'TOUR',
  AIRPORT: 'AIRPORT',
} as const;

export interface SingleBookingView {
  id?: number;
  bookingType?: SingleBookingViewBookingType;
  fromLocation?: string[];
  bookingVehicleToPartnerNote?: string;
  bookingNote?: string;
  toLocation?: string[];
  completedDate?: string;
  reasonCancel?: string;
  departureDate?: string;
  returnDate?: string;
  distance?: number;
  driverCollect?: number;
  existCost?: number;
  bookingId?: number;
  journeyType?: SingleBookingViewJourneyType;
  vehicleName?: string;
  driverName?: string;
  driverPlate?: string;
  driverPhone?: string;
  vehicleSeats?: number;
  vehicleTypeId?: number;
  cusName?: string;
  cusPhone?: string;
  unitPrice?: number;
  status?: number;
  partnerId?: number;
  deposit?: number;
  startLocation?: string[];
  endLocation?: string[];
}

export interface PasswordChangeDTO {
  currentPassword: string;
  newPassword: string;
}

export interface KeyAndPasswordVM {
  key?: string;
  newPassword?: string;
}

export interface AdminUserDTO {
  id?: number;
  /** Tên đầy đủ */
  fullName: string;
  /** Số điện thoại */
  phone: string;
  /** Email */
  email: string;
  /** Ảnh */
  imageUrl?: string;
  /** Đã kích hoạt */
  activated: boolean;
  /** Ngày kích hoạt */
  activationDate?: string;
  /** Quyền */
  roles: string[];
  /** Ghi chú */
  note?: string;
  createDate?: string;
  createBy?: string;
  editDate?: string;
  editBy?: string;
  partnerId?: number;
  partnerName?: string;
}

export interface JWTToken {
  id_token?: string;
}

export interface LoginVM {
  username: string;
  password: string;
  rememberMe?: boolean;
}

/**
 * Loại chi phí phát sinh của Booking
 */
export interface BookingCostTypeDTO {
  createBy?: string;
  createDate?: string;
  editBy?: string;
  editDate?: string;
  id?: number;
  /** Tên loại chi phí */
  name: string;
  /** Ghi chú */
  note?: string;
  /** Trạng thái */
  status: number;
}

/**
 * Chi phí phát sinh của Booking
 */
export interface BookingCostDTO {
  createBy?: string;
  createDate?: string;
  editBy?: string;
  editDate?: string;
  id?: number;
  /** Tên chi phí */
  name: string;
  /** Số tiền */
  amount: number;
  /** Ghi chú */
  note?: string;
  /** Lý do từ chối */
  rejectReason?: string;
  /** Trạng thái */
  status: number;
  booking?: BookingDTO;
  agentUser?: AgentUserDTO;
  partnerUser?: PartnerUserDTO;
  bookingCostType?: BookingCostTypeDTO;
  bookingVehicleToPartner?: BookingVehicleToPartnerDTO;
}

/**
 * Ghi chú của Booking
 */
export interface BookingNoteDTO {
  createBy?: string;
  createDate?: string;
  editBy?: string;
  editDate?: string;
  id?: number;
  /** Ghi chú */
  note: string;
  booking?: BookingDTO;
  bookingVehicleToPartner?: BookingVehicleToPartnerDTO;
}

export interface VehicleCostCategory {
  id?: number;
  name: string;
  code: string;
  status: number;
  description?: string;
}

export interface BookingVehicleToPartnerCostDTO {
  createBy?: string;
  createDate?: string;
  editBy?: string;
  editDate?: string;
  id?: number;
  detail?: string;
  typeOfFee?: VehicleCostCategory;
  note?: string;
  price?: number;
  partnerId?: number;
  bookingVehicleToPartner?: BookingVehicleToPartnerDTO;
  vehicle?: VehicleDTO;
  paidDate?: string;
}

export interface UpdateInformationVM {
  id: number;
  driverName?: string;
  driverPhone?: string;
  driverPlate?: string;
  note?: string;
  unitPrice: number;
  assignPartnerId: number;
  bookingId?: number;
  bookingPartnerId?: number;
  vehicleId?: number;
  deposit?: number;
  amountPaid?: number;
}

export interface DriverInfoVM {
  vehicleId?: number;
  vehicleTypeId?: number;
  driverName?: string;
  driverPhone?: string;
  note?: string;
  licensePlate?: string;
}

/**
 * Hình thức
 */
export type BookingPartnerDTOJourneyType =
  (typeof BookingPartnerDTOJourneyType)[keyof typeof BookingPartnerDTOJourneyType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BookingPartnerDTOJourneyType = {
  ONEWAY: 'ONEWAY',
  TWOWAY: 'TWOWAY',
  TAKEBACK: 'TAKEBACK',
  JOURNEY: 'JOURNEY',
} as const;

/**
 * Loại Booking
 */
export type BookingPartnerDTOBookingType =
  (typeof BookingPartnerDTOBookingType)[keyof typeof BookingPartnerDTOBookingType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BookingPartnerDTOBookingType = {
  TOUR: 'TOUR',
  AIRPORT: 'AIRPORT',
} as const;

/**
 * Booking
 */
export interface BookingPartnerDTO {
  createBy?: string;
  createDate?: string;
  editBy?: string;
  editDate?: string;
  id?: number;
  /** Mã booking */
  code: string;
  /** Loại Booking */
  bookingType?: BookingPartnerDTOBookingType;
  /** Điểm đi */
  fromLocation: string[];
  /** Điểm đến */
  toLocation: string[];
  /** Điểm đi */
  startLocation: string[];
  /** Điểm đến */
  endLocation: string[];
  /** Ngày đi */
  departureDate: string;
  /** Ngày về */
  returnDate?: string;
  /** Ngày hoàn thành */
  completionDate?: string;
  /** Khoảng cách theo km */
  distance: number;
  /** Hình thức */
  journeyType?: BookingPartnerDTOJourneyType;
  /** Tiền khách đặt cọc */
  deposit: number;
  /** Tiền khách thanh toán */
  amountPaid: number;
  /** Phần trăm thuế */
  vatPercent?: number;
  /** Tiền lái xe thu hộ */
  driverCollect?: number;
  /** Tiền booking trước thuế */
  totalMoneyNoVAT?: number;
  /** Tên khách hàng */
  cusName: string;
  /** Số điện thoại khách hàng */
  cusPhone: string;
  /** Email khách hàng */
  cusEmail: string;
  /** Tên công ty */
  comName: string;
  /** Địa chỉ công ty */
  comAddress: string;
  /** Mã số thuế công ty */
  comTaxCode: string;
  /** Ghi chú */
  note?: string;
  /** Trạng thái */
  status: number;
  partnerUserDTO?: PartnerUserDTO;
  bookingVehicleDTOS?: BookingVehicleDTO[];
}

/**
 * Xe theo booking
 */
export interface BookingVehicleDTO {
  createBy?: string;
  createDate?: string;
  editBy?: string;
  editDate?: string;
  id?: number;
  /** Đơn giá */
  unitPrice: number;
  /** Số lượng */
  quantity: number;
  /** Tổng tiền */
  totalPrice: number;
  /** Ghi chú */
  note?: string;
  vehicleType?: VehicleTypeDTO;
  booking?: BookingDTO;
  bookingPartner?: BookingPartnerDTO;
  partnerUser?: PartnerUserDTO;
}

export interface BookingVehicleToPartnerDTO {
  createBy?: string;
  createDate?: string;
  editBy?: string;
  editDate?: string;
  id?: number;
  /** Ghi chú */
  note?: string;
  /** Tên lái xe */
  driverName?: string;
  /** Số điện thoại lái xe */
  driverPhone?: string;
  /** Thời gian hoàn thành */
  completedDate?: string;
  /** assign_partner_id */
  assignPartnerId?: number;
  /** Lý do hủy */
  reasonCancel?: string;
  /** Biển số xe */
  driverPlate?: string;
  status: number;
  bookingVehicle?: BookingVehicleDTO;
  vehicle?: VehicleDTO;
}

export interface BookingPartnerVM {
  bookingPartnerDTO?: BookingPartnerDTO;
  bookingVehicleDTO?: BookingVehicleDTO;
  driverInfoVM?: DriverInfoVM;
}

/**
 * Hình thức
 */
export type BookingDTOJourneyType =
  (typeof BookingDTOJourneyType)[keyof typeof BookingDTOJourneyType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BookingDTOJourneyType = {
  ONEWAY: 'ONEWAY',
  TWOWAY: 'TWOWAY',
  TAKEBACK: 'TAKEBACK',
  JOURNEY: 'JOURNEY',
} as const;

/**
 * Loại Booking
 */
export type BookingDTOBookingType =
  (typeof BookingDTOBookingType)[keyof typeof BookingDTOBookingType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BookingDTOBookingType = {
  TOUR: 'TOUR',
  AIRPORT: 'AIRPORT',
} as const;

/**
 * Booking
 */
export interface BookingDTO {
  createBy?: string;
  createDate?: string;
  editBy?: string;
  editDate?: string;
  id?: number;
  /** Mã booking */
  code: string;
  /** Loại Booking */
  bookingType?: BookingDTOBookingType;
  /** Điểm đi */
  fromLocation: string[];
  /** Điểm đến */
  toLocation: string[];
  /** Ngày đi */
  departureDate: string;
  /** Ngày về */
  returnDate?: string;
  /** Ngày hoàn thành */
  completionDate?: string;
  /** Khoảng cách theo km */
  distance: number;
  /** Hình thức */
  journeyType?: BookingDTOJourneyType;
  /** Tiền khách đặt cọc */
  deposit: number;
  /** Lái xe thu hộ */
  isDriverCollect: boolean;
  /** Tên khách hàng */
  cusName: string;
  /** Số điện thoại khách hàng */
  cusPhone: string;
  /** Email khách hàng */
  cusEmail: string;
  /** Tên công ty */
  comName: string;
  /** Địa chỉ công ty */
  comAddress: string;
  /** Mã số thuế công ty */
  comTaxCode: string;
  /** Ghi chú */
  note?: string;
  /** Trạng thái */
  status: number;
  agentUser?: AgentUserDTO;
}

export interface PartnerUserDTO {
  id?: number;
  /** Tên đầy đủ */
  fullName: string;
  /** Số điện thoại */
  phone: string;
  /** Email */
  email: string;
  /** Ảnh */
  imageUrl?: string;
  /** Đã kích hoạt */
  activated: boolean;
  createDate?: string;
  createBy?: string;
  editDate?: string;
  editBy?: string;
  /** Ngày kích hoạt */
  activationDate?: string;
  /** Ngày tạo lại mật khẩu */
  resetDate?: string;
  /** Quyền */
  roles?: string[];
  /** Ghi chú */
  note?: string;
  partnerId?: number;
  partnerName?: string;
}

export interface PartnerDTO {
  id?: number;
  /** Tên đối tác */
  name: string;
  /** Tên viết tắt */
  shortName: string;
  /** Địa chỉ */
  address?: string;
  /** Điện thoại */
  phone?: string;
  /** Email */
  email?: string;
  /** Mã số thuế */
  taxCode?: string;
  /** Người đại diện */
  representive?: string;
  /** Ghi chú */
  note?: string;
  createDate?: string;
  createBy?: string;
  editDate?: string;
  editBy?: string;
}

export interface AgentDTO {
  createBy?: string;
  createDate?: string;
  editBy?: string;
  editDate?: string;
  id?: number;
  /** Tên đối tác */
  name: string;
  /** Tên viết tắt */
  shortName: string;
  /** Địa chỉ */
  address?: string;
  /** Điện thoại */
  phone?: string;
  /** Email */
  email?: string;
  /** Mã số thuế */
  taxCode?: string;
  /** Người đại diện */
  representive?: string;
  /** Ghi chú */
  note?: string;
}

export interface AgentUserDTO {
  createBy?: string;
  createDate?: string;
  editBy?: string;
  editDate?: string;
  id?: number;
  /** Tên đăng nhập */
  login: string;
  /** Mật khẩu (đã mã hóa) */
  passwordHash?: string;
  /** Tên đầy đủ */
  fullName: string;
  /** Ảnh */
  imageUrl?: string;
  /** Đã kích hoạt */
  activated: boolean;
  /** Mã kích hoạt */
  activationKey?: string;
  /** Ngày kích hoạt */
  activationDate?: string;
  /** Mã tạo lại mật khẩu */
  resetKey?: string;
  /** Ngày tạo lại mật khẩu */
  resetDate?: string;
  /** Quyền */
  roles?: string;
  /** Ghi chú */
  note?: string;
  /** Chức vụ */
  position?: string;
  /** Số điện thoại */
  phone?: string;
  /** Email cá nhân */
  email: string;
  /** Email công ty */
  emailCompany: string;
  /** Là tài khoản chính */
  isMain: boolean;
  agent?: AgentDTO;
}

/**
 * Thanh toán
 */
export interface PaymentDTO {
  createBy?: string;
  createDate?: string;
  editBy?: string;
  editDate?: string;
  id?: number;
  /** Ghi chú */
  note?: string;
  /** Số tiền */
  amount: number;
  /** Trạng thái */
  status: number;
  agent?: AgentDTO;
  partner?: PartnerDTO;
}

/**
 * Bảng giá xe
 */
export interface VehiclePriceRequest {
  id?: number;
  /** Tên bảng giá */
  name: string;
  /** Ghi chú */
  note?: string;
  /** Cài đặt giá */
  settings?: string;
}

/**
 * Loại xe
 */
export interface VehicleTypeRequest {
  id?: number;
  /** Tên loại xe */
  name: string;
  /** Ghi chú */
  note?: string;
  /** Trạng thái */
  status: number;
  /** Số chỗ ngồi */
  seats: number;
  priceId?: number;
}

/**
 * Bảng giá xe
 */
export interface VehiclePriceDTO {
  id: number;
  /** Tên bảng giá */
  name: string;
  /** Ghi chú */
  note?: string;
  /** Cài đặt giá */
  settings?: string;
  createDate: string;
  createBy: string;
  editDate?: string;
  editBy?: string;
}

/**
 * Loại xe
 */
export interface VehicleTypeDTO {
  id: number;
  /** Tên loại xe */
  name: string;
  /** Ghi chú */
  note?: string;
  /** Trạng thái */
  status: number;
  /** Số chỗ ngồi */
  seats: number;
  createDate: string;
  createBy: string;
  editDate?: string;
  editBy?: string;
  price?: VehiclePriceDTO;
  /** vehicle_type_mapper_id */
  vehicleTypeMapperId?: string;
}

/**
 * Xe (partner)
 */
export interface VehicleDTO {
  createBy?: string;
  createDate?: string;
  editBy?: string;
  editDate?: string;
  id?: number;
  /** Tên xe */
  name: string;
  /** Biển số xe */
  licensePlate: string;
  yearOfProduction?: string;
  /** Ghi chú */
  note?: string;
  status: number;
  rejectReason?: string;
  vehicleRegistry?: string[];
  vehicleRegistration?: string[];
  vehicleType?: VehicleTypeDTO;
  partnerId?: number;
}
