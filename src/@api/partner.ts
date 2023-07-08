/* eslint-disable */
/**
 *
 */
import {useQuery, useMutation} from '@tanstack/react-query';
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey,
} from '@tanstack/react-query';
import type {
  VehicleDTO,
  VehicleTypeDTO,
  VehicleTypeRequest,
  VehiclePriceDTO,
  VehiclePriceRequest,
  PaymentDTO,
  PartnerDTO,
  PartnerUserDTO,
  AdminUserDTO,
  BookingPartnerDTO,
  BookingPartnerVM,
  BookingVehicleDTO,
  BookingVehicleToPartnerDTO,
  UpdateInformationVM,
  BookingVehicleToPartnerCostDTO,
  BookingNoteDTO,
  BookingCostDTO,
  BookingCostTypeDTO,
  GetAllVehiclesParams,
  GetAllVehicleTypesParams,
  GetAllVehiclePricesParams,
  GetAllPaymentsParams,
  GetAllPartnersParams,
  GetAllBookingsParams,
  GetAllBookingVehiclesParams,
  GetAllBookingVehicleToPartnersParams,
  GetAllBookingVehicleToPartnerCostsParams,
  GetAllBookingNotesParams,
  GetAllBookingCostsParams,
  GetAllBookingCostTypesParams,
  JWTToken,
  LoginVM,
  GetAllPublicUsersParams,
  KeyAndPasswordVM,
  PasswordChangeDTO,
  UpdateImageRegistryBody,
  UpdateImageRegistrationBody,
  ReceiveAuthorizationCodeParams,
  GetCarList200,
  GetCarListParams,
  GetAirportList200Item,
  GetVehicleExpenseChart200,
  GetVehicleExpenseChartParams,
  GetSaleBooks200,
  GetSaleBooksParams,
  GetRevenueVehicleType200,
  GetRevenueVehicleTypeParams,
  GetRevenueVehicleTypeBy200,
  GetRevenueVehicleTypeByParams,
  GetAbilitiesRevenue200,
  GetAbilitiesRevenueParams,
  SingleBookingView,
  GetAllSingleBookingsParams,
  BookingToSelectExpenseDTO,
  GetOwnBookingWithDriverParams,
  CountSingleBookingsParams,
  GetAllPartnerUsersParams,
  FinancePartnerSummary,
  GetAllRevenuePartnersParams,
  FinancePartnerVehicleTypeSummary,
  GetAllRevenueVehicleTypePartnersParams,
  FinancePartner,
  GetAllRevenuePartnersDetailParams,
  GetAllExpensePartnersParams,
  GetAllExpensePartnersDetailParams,
  CountBookingVehiclesParams,
  CountBookingVehicleToPartnersParams,
  VehicleCostCategory,
  CountBookingVehicleToPartnerCostsParams,
  BookingPartnerView,
  GetAllBookingPartnerViewParams,
  GetBookingPartnerCreateParams,
  CountBookingNotesParams,
  CountBookingCostsParams,
  CountBookingCostTypesParams,
  ActivateAccountParams,
  GetAllUsersParams,
} from './partner.schemas';
import {useCustomInstance} from './use-custom-instance';
import {customFormData} from './custom-form-data';

export const useGetVehicleHook = () => {
  const getVehicle = useCustomInstance<VehicleDTO>();

  return (id: number, signal?: AbortSignal) => {
    return getVehicle({url: `/api/vehicles/${id}`, method: 'get', signal});
  };
};

export const getGetVehicleQueryKey = (id: number) =>
  [`/api/vehicles/${id}`] as const;

export const useGetVehicleQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetVehicleHook>>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetVehicleHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetVehicleHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetVehicleQueryKey(id);

  const getVehicle = useGetVehicleHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetVehicleHook>>>
  > = ({signal}) => getVehicle(id, signal);

  return {queryKey, queryFn, enabled: !!id, ...queryOptions};
};

export type GetVehicleQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetVehicleHook>>>
>;
export type GetVehicleQueryError = unknown;

export const useGetVehicle = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetVehicleHook>>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetVehicleHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetVehicleQueryOptions(id, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useUpdateVehicleHook = () => {
  const updateVehicle = useCustomInstance<VehicleDTO>();

  return (id: number, vehicleDTO: VehicleDTO) => {
    return updateVehicle({
      url: `/api/vehicles/${id}`,
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      data: vehicleDTO,
    });
  };
};

export const useUpdateVehicleMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdateVehicleHook>>>,
    TError,
    {id: number; data: VehicleDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useUpdateVehicleHook>>>,
  TError,
  {id: number; data: VehicleDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const updateVehicle = useUpdateVehicleHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useUpdateVehicleHook>>>,
    {id: number; data: VehicleDTO}
  > = props => {
    const {id, data} = props ?? {};

    return updateVehicle(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type UpdateVehicleMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUpdateVehicleHook>>>
>;
export type UpdateVehicleMutationBody = VehicleDTO;
export type UpdateVehicleMutationError = unknown;

export const useUpdateVehicle = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdateVehicleHook>>>,
    TError,
    {id: number; data: VehicleDTO},
    TContext
  >;
}) => {
  const mutationOptions = useUpdateVehicleMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useDeleteVehicleHook = () => {
  const deleteVehicle = useCustomInstance<void>();

  return (id: number) => {
    return deleteVehicle({url: `/api/vehicles/${id}`, method: 'delete'});
  };
};

export const useDeleteVehicleMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useDeleteVehicleHook>>>,
    TError,
    {id: number},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useDeleteVehicleHook>>>,
  TError,
  {id: number},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const deleteVehicle = useDeleteVehicleHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useDeleteVehicleHook>>>,
    {id: number}
  > = props => {
    const {id} = props ?? {};

    return deleteVehicle(id);
  };

  return {mutationFn, ...mutationOptions};
};

export type DeleteVehicleMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useDeleteVehicleHook>>>
>;

export type DeleteVehicleMutationError = unknown;

export const useDeleteVehicle = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useDeleteVehicleHook>>>,
    TError,
    {id: number},
    TContext
  >;
}) => {
  const mutationOptions = useDeleteVehicleMutationOptions(options);

  return useMutation(mutationOptions);
};

export const usePartialUpdateVehicleHook = () => {
  const partialUpdateVehicle = useCustomInstance<VehicleDTO>();

  return (id: number, vehicleDTO: VehicleDTO) => {
    return partialUpdateVehicle({
      url: `/api/vehicles/${id}`,
      method: 'patch',
      headers: {'Content-Type': 'application/json'},
      data: vehicleDTO,
    });
  };
};

export const usePartialUpdateVehicleMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdateVehicleHook>>>,
    TError,
    {id: number; data: VehicleDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof usePartialUpdateVehicleHook>>>,
  TError,
  {id: number; data: VehicleDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const partialUpdateVehicle = usePartialUpdateVehicleHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdateVehicleHook>>>,
    {id: number; data: VehicleDTO}
  > = props => {
    const {id, data} = props ?? {};

    return partialUpdateVehicle(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type PartialUpdateVehicleMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof usePartialUpdateVehicleHook>>>
>;
export type PartialUpdateVehicleMutationBody = VehicleDTO;
export type PartialUpdateVehicleMutationError = unknown;

export const usePartialUpdateVehicle = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdateVehicleHook>>>,
    TError,
    {id: number; data: VehicleDTO},
    TContext
  >;
}) => {
  const mutationOptions = usePartialUpdateVehicleMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useGetVehicleTypeHook = () => {
  const getVehicleType = useCustomInstance<VehicleTypeDTO>();

  return (id: number, signal?: AbortSignal) => {
    return getVehicleType({
      url: `/api/vehicle-types/${id}`,
      method: 'get',
      signal,
    });
  };
};

export const getGetVehicleTypeQueryKey = (id: number) =>
  [`/api/vehicle-types/${id}`] as const;

export const useGetVehicleTypeQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetVehicleTypeHook>>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetVehicleTypeHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetVehicleTypeHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetVehicleTypeQueryKey(id);

  const getVehicleType = useGetVehicleTypeHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetVehicleTypeHook>>>
  > = ({signal}) => getVehicleType(id, signal);

  return {queryKey, queryFn, enabled: !!id, ...queryOptions};
};

export type GetVehicleTypeQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetVehicleTypeHook>>>
>;
export type GetVehicleTypeQueryError = unknown;

export const useGetVehicleType = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetVehicleTypeHook>>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetVehicleTypeHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetVehicleTypeQueryOptions(id, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useUpdateVehicleTypeHook = () => {
  const updateVehicleType = useCustomInstance<VehicleTypeDTO>();

  return (id: number, vehicleTypeRequest: VehicleTypeRequest) => {
    return updateVehicleType({
      url: `/api/vehicle-types/${id}`,
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      data: vehicleTypeRequest,
    });
  };
};

export const useUpdateVehicleTypeMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdateVehicleTypeHook>>>,
    TError,
    {id: number; data: VehicleTypeRequest},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useUpdateVehicleTypeHook>>>,
  TError,
  {id: number; data: VehicleTypeRequest},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const updateVehicleType = useUpdateVehicleTypeHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useUpdateVehicleTypeHook>>>,
    {id: number; data: VehicleTypeRequest}
  > = props => {
    const {id, data} = props ?? {};

    return updateVehicleType(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type UpdateVehicleTypeMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUpdateVehicleTypeHook>>>
>;
export type UpdateVehicleTypeMutationBody = VehicleTypeRequest;
export type UpdateVehicleTypeMutationError = unknown;

export const useUpdateVehicleType = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdateVehicleTypeHook>>>,
    TError,
    {id: number; data: VehicleTypeRequest},
    TContext
  >;
}) => {
  const mutationOptions = useUpdateVehicleTypeMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useDeleteVehicleTypeHook = () => {
  const deleteVehicleType = useCustomInstance<void>();

  return (id: number) => {
    return deleteVehicleType({
      url: `/api/vehicle-types/${id}`,
      method: 'delete',
    });
  };
};

export const useDeleteVehicleTypeMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useDeleteVehicleTypeHook>>>,
    TError,
    {id: number},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useDeleteVehicleTypeHook>>>,
  TError,
  {id: number},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const deleteVehicleType = useDeleteVehicleTypeHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useDeleteVehicleTypeHook>>>,
    {id: number}
  > = props => {
    const {id} = props ?? {};

    return deleteVehicleType(id);
  };

  return {mutationFn, ...mutationOptions};
};

export type DeleteVehicleTypeMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useDeleteVehicleTypeHook>>>
>;

export type DeleteVehicleTypeMutationError = unknown;

export const useDeleteVehicleType = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useDeleteVehicleTypeHook>>>,
    TError,
    {id: number},
    TContext
  >;
}) => {
  const mutationOptions = useDeleteVehicleTypeMutationOptions(options);

  return useMutation(mutationOptions);
};

export const usePartialUpdateVehicleTypeHook = () => {
  const partialUpdateVehicleType = useCustomInstance<VehicleTypeDTO>();

  return (id: number, vehicleTypeRequest: VehicleTypeRequest) => {
    return partialUpdateVehicleType({
      url: `/api/vehicle-types/${id}`,
      method: 'patch',
      headers: {'Content-Type': 'application/json'},
      data: vehicleTypeRequest,
    });
  };
};

export const usePartialUpdateVehicleTypeMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdateVehicleTypeHook>>>,
    TError,
    {id: number; data: VehicleTypeRequest},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof usePartialUpdateVehicleTypeHook>>>,
  TError,
  {id: number; data: VehicleTypeRequest},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const partialUpdateVehicleType = usePartialUpdateVehicleTypeHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdateVehicleTypeHook>>>,
    {id: number; data: VehicleTypeRequest}
  > = props => {
    const {id, data} = props ?? {};

    return partialUpdateVehicleType(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type PartialUpdateVehicleTypeMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof usePartialUpdateVehicleTypeHook>>>
>;
export type PartialUpdateVehicleTypeMutationBody = VehicleTypeRequest;
export type PartialUpdateVehicleTypeMutationError = unknown;

export const usePartialUpdateVehicleType = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdateVehicleTypeHook>>>,
    TError,
    {id: number; data: VehicleTypeRequest},
    TContext
  >;
}) => {
  const mutationOptions = usePartialUpdateVehicleTypeMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useGetVehiclePriceHook = () => {
  const getVehiclePrice = useCustomInstance<VehiclePriceDTO>();

  return (id: number, signal?: AbortSignal) => {
    return getVehiclePrice({
      url: `/api/vehicle-prices/${id}`,
      method: 'get',
      signal,
    });
  };
};

export const getGetVehiclePriceQueryKey = (id: number) =>
  [`/api/vehicle-prices/${id}`] as const;

export const useGetVehiclePriceQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetVehiclePriceHook>>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetVehiclePriceHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetVehiclePriceHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetVehiclePriceQueryKey(id);

  const getVehiclePrice = useGetVehiclePriceHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetVehiclePriceHook>>>
  > = ({signal}) => getVehiclePrice(id, signal);

  return {queryKey, queryFn, enabled: !!id, ...queryOptions};
};

export type GetVehiclePriceQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetVehiclePriceHook>>>
>;
export type GetVehiclePriceQueryError = unknown;

export const useGetVehiclePrice = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetVehiclePriceHook>>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetVehiclePriceHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetVehiclePriceQueryOptions(id, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useUpdateVehiclePriceHook = () => {
  const updateVehiclePrice = useCustomInstance<VehiclePriceDTO>();

  return (id: number, vehiclePriceRequest: VehiclePriceRequest) => {
    return updateVehiclePrice({
      url: `/api/vehicle-prices/${id}`,
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      data: vehiclePriceRequest,
    });
  };
};

export const useUpdateVehiclePriceMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdateVehiclePriceHook>>>,
    TError,
    {id: number; data: VehiclePriceRequest},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useUpdateVehiclePriceHook>>>,
  TError,
  {id: number; data: VehiclePriceRequest},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const updateVehiclePrice = useUpdateVehiclePriceHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useUpdateVehiclePriceHook>>>,
    {id: number; data: VehiclePriceRequest}
  > = props => {
    const {id, data} = props ?? {};

    return updateVehiclePrice(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type UpdateVehiclePriceMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUpdateVehiclePriceHook>>>
>;
export type UpdateVehiclePriceMutationBody = VehiclePriceRequest;
export type UpdateVehiclePriceMutationError = unknown;

export const useUpdateVehiclePrice = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdateVehiclePriceHook>>>,
    TError,
    {id: number; data: VehiclePriceRequest},
    TContext
  >;
}) => {
  const mutationOptions = useUpdateVehiclePriceMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useDeleteVehiclePriceHook = () => {
  const deleteVehiclePrice = useCustomInstance<void>();

  return (id: number) => {
    return deleteVehiclePrice({
      url: `/api/vehicle-prices/${id}`,
      method: 'delete',
    });
  };
};

export const useDeleteVehiclePriceMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useDeleteVehiclePriceHook>>>,
    TError,
    {id: number},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useDeleteVehiclePriceHook>>>,
  TError,
  {id: number},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const deleteVehiclePrice = useDeleteVehiclePriceHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useDeleteVehiclePriceHook>>>,
    {id: number}
  > = props => {
    const {id} = props ?? {};

    return deleteVehiclePrice(id);
  };

  return {mutationFn, ...mutationOptions};
};

export type DeleteVehiclePriceMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useDeleteVehiclePriceHook>>>
>;

export type DeleteVehiclePriceMutationError = unknown;

export const useDeleteVehiclePrice = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useDeleteVehiclePriceHook>>>,
    TError,
    {id: number},
    TContext
  >;
}) => {
  const mutationOptions = useDeleteVehiclePriceMutationOptions(options);

  return useMutation(mutationOptions);
};

export const usePartialUpdateVehiclePriceHook = () => {
  const partialUpdateVehiclePrice = useCustomInstance<VehiclePriceDTO>();

  return (id: number, vehiclePriceRequest: VehiclePriceRequest) => {
    return partialUpdateVehiclePrice({
      url: `/api/vehicle-prices/${id}`,
      method: 'patch',
      headers: {'Content-Type': 'application/json'},
      data: vehiclePriceRequest,
    });
  };
};

export const usePartialUpdateVehiclePriceMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdateVehiclePriceHook>>>,
    TError,
    {id: number; data: VehiclePriceRequest},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof usePartialUpdateVehiclePriceHook>>>,
  TError,
  {id: number; data: VehiclePriceRequest},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const partialUpdateVehiclePrice = usePartialUpdateVehiclePriceHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdateVehiclePriceHook>>>,
    {id: number; data: VehiclePriceRequest}
  > = props => {
    const {id, data} = props ?? {};

    return partialUpdateVehiclePrice(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type PartialUpdateVehiclePriceMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof usePartialUpdateVehiclePriceHook>>>
>;
export type PartialUpdateVehiclePriceMutationBody = VehiclePriceRequest;
export type PartialUpdateVehiclePriceMutationError = unknown;

export const usePartialUpdateVehiclePrice = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdateVehiclePriceHook>>>,
    TError,
    {id: number; data: VehiclePriceRequest},
    TContext
  >;
}) => {
  const mutationOptions = usePartialUpdateVehiclePriceMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useGetPaymentHook = () => {
  const getPayment = useCustomInstance<PaymentDTO>();

  return (id: number, signal?: AbortSignal) => {
    return getPayment({url: `/api/payments/${id}`, method: 'get', signal});
  };
};

export const getGetPaymentQueryKey = (id: number) =>
  [`/api/payments/${id}`] as const;

export const useGetPaymentQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetPaymentHook>>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetPaymentHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetPaymentHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetPaymentQueryKey(id);

  const getPayment = useGetPaymentHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetPaymentHook>>>
  > = ({signal}) => getPayment(id, signal);

  return {queryKey, queryFn, enabled: !!id, ...queryOptions};
};

export type GetPaymentQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetPaymentHook>>>
>;
export type GetPaymentQueryError = unknown;

export const useGetPayment = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetPaymentHook>>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetPaymentHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetPaymentQueryOptions(id, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useUpdatePaymentHook = () => {
  const updatePayment = useCustomInstance<PaymentDTO>();

  return (id: number, paymentDTO: PaymentDTO) => {
    return updatePayment({
      url: `/api/payments/${id}`,
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      data: paymentDTO,
    });
  };
};

export const useUpdatePaymentMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdatePaymentHook>>>,
    TError,
    {id: number; data: PaymentDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useUpdatePaymentHook>>>,
  TError,
  {id: number; data: PaymentDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const updatePayment = useUpdatePaymentHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useUpdatePaymentHook>>>,
    {id: number; data: PaymentDTO}
  > = props => {
    const {id, data} = props ?? {};

    return updatePayment(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type UpdatePaymentMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUpdatePaymentHook>>>
>;
export type UpdatePaymentMutationBody = PaymentDTO;
export type UpdatePaymentMutationError = unknown;

export const useUpdatePayment = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdatePaymentHook>>>,
    TError,
    {id: number; data: PaymentDTO},
    TContext
  >;
}) => {
  const mutationOptions = useUpdatePaymentMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useDeletePaymentHook = () => {
  const deletePayment = useCustomInstance<void>();

  return (id: number) => {
    return deletePayment({url: `/api/payments/${id}`, method: 'delete'});
  };
};

export const useDeletePaymentMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useDeletePaymentHook>>>,
    TError,
    {id: number},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useDeletePaymentHook>>>,
  TError,
  {id: number},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const deletePayment = useDeletePaymentHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useDeletePaymentHook>>>,
    {id: number}
  > = props => {
    const {id} = props ?? {};

    return deletePayment(id);
  };

  return {mutationFn, ...mutationOptions};
};

export type DeletePaymentMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useDeletePaymentHook>>>
>;

export type DeletePaymentMutationError = unknown;

export const useDeletePayment = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useDeletePaymentHook>>>,
    TError,
    {id: number},
    TContext
  >;
}) => {
  const mutationOptions = useDeletePaymentMutationOptions(options);

  return useMutation(mutationOptions);
};

export const usePartialUpdatePaymentHook = () => {
  const partialUpdatePayment = useCustomInstance<PaymentDTO>();

  return (id: number, paymentDTO: PaymentDTO) => {
    return partialUpdatePayment({
      url: `/api/payments/${id}`,
      method: 'patch',
      headers: {'Content-Type': 'application/json'},
      data: paymentDTO,
    });
  };
};

export const usePartialUpdatePaymentMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdatePaymentHook>>>,
    TError,
    {id: number; data: PaymentDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof usePartialUpdatePaymentHook>>>,
  TError,
  {id: number; data: PaymentDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const partialUpdatePayment = usePartialUpdatePaymentHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdatePaymentHook>>>,
    {id: number; data: PaymentDTO}
  > = props => {
    const {id, data} = props ?? {};

    return partialUpdatePayment(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type PartialUpdatePaymentMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof usePartialUpdatePaymentHook>>>
>;
export type PartialUpdatePaymentMutationBody = PaymentDTO;
export type PartialUpdatePaymentMutationError = unknown;

export const usePartialUpdatePayment = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdatePaymentHook>>>,
    TError,
    {id: number; data: PaymentDTO},
    TContext
  >;
}) => {
  const mutationOptions = usePartialUpdatePaymentMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useGetPartnerHook = () => {
  const getPartner = useCustomInstance<PartnerDTO>();

  return (id: number, signal?: AbortSignal) => {
    return getPartner({url: `/api/partners/${id}`, method: 'get', signal});
  };
};

export const getGetPartnerQueryKey = (id: number) =>
  [`/api/partners/${id}`] as const;

export const useGetPartnerQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetPartnerHook>>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetPartnerHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetPartnerHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetPartnerQueryKey(id);

  const getPartner = useGetPartnerHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetPartnerHook>>>
  > = ({signal}) => getPartner(id, signal);

  return {queryKey, queryFn, enabled: !!id, ...queryOptions};
};

export type GetPartnerQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetPartnerHook>>>
>;
export type GetPartnerQueryError = unknown;

export const useGetPartner = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetPartnerHook>>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetPartnerHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetPartnerQueryOptions(id, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useUpdatePartnerHook = () => {
  const updatePartner = useCustomInstance<PartnerDTO>();

  return (id: number, partnerDTO: PartnerDTO) => {
    return updatePartner({
      url: `/api/partners/${id}`,
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      data: partnerDTO,
    });
  };
};

export const useUpdatePartnerMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdatePartnerHook>>>,
    TError,
    {id: number; data: PartnerDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useUpdatePartnerHook>>>,
  TError,
  {id: number; data: PartnerDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const updatePartner = useUpdatePartnerHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useUpdatePartnerHook>>>,
    {id: number; data: PartnerDTO}
  > = props => {
    const {id, data} = props ?? {};

    return updatePartner(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type UpdatePartnerMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUpdatePartnerHook>>>
>;
export type UpdatePartnerMutationBody = PartnerDTO;
export type UpdatePartnerMutationError = unknown;

export const useUpdatePartner = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdatePartnerHook>>>,
    TError,
    {id: number; data: PartnerDTO},
    TContext
  >;
}) => {
  const mutationOptions = useUpdatePartnerMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useDeletePartnerHook = () => {
  const deletePartner = useCustomInstance<void>();

  return (id: number) => {
    return deletePartner({url: `/api/partners/${id}`, method: 'delete'});
  };
};

export const useDeletePartnerMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useDeletePartnerHook>>>,
    TError,
    {id: number},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useDeletePartnerHook>>>,
  TError,
  {id: number},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const deletePartner = useDeletePartnerHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useDeletePartnerHook>>>,
    {id: number}
  > = props => {
    const {id} = props ?? {};

    return deletePartner(id);
  };

  return {mutationFn, ...mutationOptions};
};

export type DeletePartnerMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useDeletePartnerHook>>>
>;

export type DeletePartnerMutationError = unknown;

export const useDeletePartner = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useDeletePartnerHook>>>,
    TError,
    {id: number},
    TContext
  >;
}) => {
  const mutationOptions = useDeletePartnerMutationOptions(options);

  return useMutation(mutationOptions);
};

export const usePartialUpdatePartnerHook = () => {
  const partialUpdatePartner = useCustomInstance<PartnerDTO>();

  return (id: number, partnerDTO: PartnerDTO) => {
    return partialUpdatePartner({
      url: `/api/partners/${id}`,
      method: 'patch',
      headers: {'Content-Type': 'application/json'},
      data: partnerDTO,
    });
  };
};

export const usePartialUpdatePartnerMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdatePartnerHook>>>,
    TError,
    {id: number; data: PartnerDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof usePartialUpdatePartnerHook>>>,
  TError,
  {id: number; data: PartnerDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const partialUpdatePartner = usePartialUpdatePartnerHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdatePartnerHook>>>,
    {id: number; data: PartnerDTO}
  > = props => {
    const {id, data} = props ?? {};

    return partialUpdatePartner(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type PartialUpdatePartnerMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof usePartialUpdatePartnerHook>>>
>;
export type PartialUpdatePartnerMutationBody = PartnerDTO;
export type PartialUpdatePartnerMutationError = unknown;

export const usePartialUpdatePartner = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdatePartnerHook>>>,
    TError,
    {id: number; data: PartnerDTO},
    TContext
  >;
}) => {
  const mutationOptions = usePartialUpdatePartnerMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useGetPartnerUserHook = () => {
  const getPartnerUser = useCustomInstance<PartnerUserDTO>();

  return (id: number, signal?: AbortSignal) => {
    return getPartnerUser({
      url: `/api/partner-users/${id}`,
      method: 'get',
      signal,
    });
  };
};

export const getGetPartnerUserQueryKey = (id: number) =>
  [`/api/partner-users/${id}`] as const;

export const useGetPartnerUserQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetPartnerUserHook>>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetPartnerUserHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetPartnerUserHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetPartnerUserQueryKey(id);

  const getPartnerUser = useGetPartnerUserHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetPartnerUserHook>>>
  > = ({signal}) => getPartnerUser(id, signal);

  return {queryKey, queryFn, enabled: !!id, ...queryOptions};
};

export type GetPartnerUserQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetPartnerUserHook>>>
>;
export type GetPartnerUserQueryError = unknown;

export const useGetPartnerUser = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetPartnerUserHook>>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetPartnerUserHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetPartnerUserQueryOptions(id, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useUpdatePartnerUserHook = () => {
  const updatePartnerUser = useCustomInstance<PartnerUserDTO>();

  return (id: number, partnerUserDTO: PartnerUserDTO) => {
    return updatePartnerUser({
      url: `/api/partner-users/${id}`,
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      data: partnerUserDTO,
    });
  };
};

export const useUpdatePartnerUserMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdatePartnerUserHook>>>,
    TError,
    {id: number; data: PartnerUserDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useUpdatePartnerUserHook>>>,
  TError,
  {id: number; data: PartnerUserDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const updatePartnerUser = useUpdatePartnerUserHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useUpdatePartnerUserHook>>>,
    {id: number; data: PartnerUserDTO}
  > = props => {
    const {id, data} = props ?? {};

    return updatePartnerUser(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type UpdatePartnerUserMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUpdatePartnerUserHook>>>
>;
export type UpdatePartnerUserMutationBody = PartnerUserDTO;
export type UpdatePartnerUserMutationError = unknown;

export const useUpdatePartnerUser = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdatePartnerUserHook>>>,
    TError,
    {id: number; data: PartnerUserDTO},
    TContext
  >;
}) => {
  const mutationOptions = useUpdatePartnerUserMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useDeletePartnerUserHook = () => {
  const deletePartnerUser = useCustomInstance<void>();

  return (id: number) => {
    return deletePartnerUser({
      url: `/api/partner-users/${id}`,
      method: 'delete',
    });
  };
};

export const useDeletePartnerUserMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useDeletePartnerUserHook>>>,
    TError,
    {id: number},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useDeletePartnerUserHook>>>,
  TError,
  {id: number},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const deletePartnerUser = useDeletePartnerUserHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useDeletePartnerUserHook>>>,
    {id: number}
  > = props => {
    const {id} = props ?? {};

    return deletePartnerUser(id);
  };

  return {mutationFn, ...mutationOptions};
};

export type DeletePartnerUserMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useDeletePartnerUserHook>>>
>;

export type DeletePartnerUserMutationError = unknown;

export const useDeletePartnerUser = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useDeletePartnerUserHook>>>,
    TError,
    {id: number},
    TContext
  >;
}) => {
  const mutationOptions = useDeletePartnerUserMutationOptions(options);

  return useMutation(mutationOptions);
};

export const usePartialUpdatePartnerUserHook = () => {
  const partialUpdatePartnerUser = useCustomInstance<PartnerUserDTO>();

  return (id: number, partnerUserDTO: PartnerUserDTO) => {
    return partialUpdatePartnerUser({
      url: `/api/partner-users/${id}`,
      method: 'patch',
      headers: {'Content-Type': 'application/json'},
      data: partnerUserDTO,
    });
  };
};

export const usePartialUpdatePartnerUserMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdatePartnerUserHook>>>,
    TError,
    {id: number; data: PartnerUserDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof usePartialUpdatePartnerUserHook>>>,
  TError,
  {id: number; data: PartnerUserDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const partialUpdatePartnerUser = usePartialUpdatePartnerUserHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdatePartnerUserHook>>>,
    {id: number; data: PartnerUserDTO}
  > = props => {
    const {id, data} = props ?? {};

    return partialUpdatePartnerUser(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type PartialUpdatePartnerUserMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof usePartialUpdatePartnerUserHook>>>
>;
export type PartialUpdatePartnerUserMutationBody = PartnerUserDTO;
export type PartialUpdatePartnerUserMutationError = unknown;

export const usePartialUpdatePartnerUser = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdatePartnerUserHook>>>,
    TError,
    {id: number; data: PartnerUserDTO},
    TContext
  >;
}) => {
  const mutationOptions = usePartialUpdatePartnerUserMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useGetAccountHook = () => {
  const getAccount = useCustomInstance<AdminUserDTO>();

  return (signal?: AbortSignal) => {
    return getAccount({url: `/api/me/info`, method: 'get', signal});
  };
};

export const getGetAccountQueryKey = () => [`/api/me/info`] as const;

export const useGetAccountQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAccountHook>>>,
  TError = unknown,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useGetAccountHook>>>,
    TError,
    TData
  >;
}): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetAccountHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetAccountQueryKey();

  const getAccount = useGetAccountHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetAccountHook>>>
  > = ({signal}) => getAccount(signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetAccountQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetAccountHook>>>
>;
export type GetAccountQueryError = unknown;

export const useGetAccount = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAccountHook>>>,
  TError = unknown,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useGetAccountHook>>>,
    TError,
    TData
  >;
}): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetAccountQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useUpdateMeHook = () => {
  const updateMe = useCustomInstance<void>();

  return (partnerUserDTO: PartnerUserDTO) => {
    return updateMe({
      url: `/api/me/info`,
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      data: partnerUserDTO,
    });
  };
};

export const useUpdateMeMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdateMeHook>>>,
    TError,
    {data: PartnerUserDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useUpdateMeHook>>>,
  TError,
  {data: PartnerUserDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const updateMe = useUpdateMeHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useUpdateMeHook>>>,
    {data: PartnerUserDTO}
  > = props => {
    const {data} = props ?? {};

    return updateMe(data);
  };

  return {mutationFn, ...mutationOptions};
};

export type UpdateMeMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUpdateMeHook>>>
>;
export type UpdateMeMutationBody = PartnerUserDTO;
export type UpdateMeMutationError = unknown;

export const useUpdateMe = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdateMeHook>>>,
    TError,
    {data: PartnerUserDTO},
    TContext
  >;
}) => {
  const mutationOptions = useUpdateMeMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useUpdateBookingHook = () => {
  const updateBooking = useCustomInstance<BookingPartnerDTO>();

  return (id: number, bookingPartnerVM: BookingPartnerVM) => {
    return updateBooking({
      url: `/api/bookingPartners/${id}`,
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      data: bookingPartnerVM,
    });
  };
};

export const useUpdateBookingMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdateBookingHook>>>,
    TError,
    {id: number; data: BookingPartnerVM},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useUpdateBookingHook>>>,
  TError,
  {id: number; data: BookingPartnerVM},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const updateBooking = useUpdateBookingHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useUpdateBookingHook>>>,
    {id: number; data: BookingPartnerVM}
  > = props => {
    const {id, data} = props ?? {};

    return updateBooking(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type UpdateBookingMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUpdateBookingHook>>>
>;
export type UpdateBookingMutationBody = BookingPartnerVM;
export type UpdateBookingMutationError = unknown;

export const useUpdateBooking = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdateBookingHook>>>,
    TError,
    {id: number; data: BookingPartnerVM},
    TContext
  >;
}) => {
  const mutationOptions = useUpdateBookingMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useDeleteBookingHook = () => {
  const deleteBooking = useCustomInstance<void>();

  return (id: number) => {
    return deleteBooking({url: `/api/bookingPartners/${id}`, method: 'delete'});
  };
};

export const useDeleteBookingMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useDeleteBookingHook>>>,
    TError,
    {id: number},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useDeleteBookingHook>>>,
  TError,
  {id: number},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const deleteBooking = useDeleteBookingHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useDeleteBookingHook>>>,
    {id: number}
  > = props => {
    const {id} = props ?? {};

    return deleteBooking(id);
  };

  return {mutationFn, ...mutationOptions};
};

export type DeleteBookingMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useDeleteBookingHook>>>
>;

export type DeleteBookingMutationError = unknown;

export const useDeleteBooking = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useDeleteBookingHook>>>,
    TError,
    {id: number},
    TContext
  >;
}) => {
  const mutationOptions = useDeleteBookingMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useGetBookingVehicleHook = () => {
  const getBookingVehicle = useCustomInstance<BookingVehicleDTO>();

  return (id: number, signal?: AbortSignal) => {
    return getBookingVehicle({
      url: `/api/booking-vehicles/${id}`,
      method: 'get',
      signal,
    });
  };
};

export const getGetBookingVehicleQueryKey = (id: number) =>
  [`/api/booking-vehicles/${id}`] as const;

export const useGetBookingVehicleQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetBookingVehicleHook>>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetBookingVehicleHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetBookingVehicleHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetBookingVehicleQueryKey(id);

  const getBookingVehicle = useGetBookingVehicleHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetBookingVehicleHook>>>
  > = ({signal}) => getBookingVehicle(id, signal);

  return {queryKey, queryFn, enabled: !!id, ...queryOptions};
};

export type GetBookingVehicleQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetBookingVehicleHook>>>
>;
export type GetBookingVehicleQueryError = unknown;

export const useGetBookingVehicle = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetBookingVehicleHook>>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetBookingVehicleHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetBookingVehicleQueryOptions(id, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useUpdateBookingVehicleHook = () => {
  const updateBookingVehicle = useCustomInstance<BookingVehicleDTO>();

  return (id: number, bookingVehicleDTO: BookingVehicleDTO) => {
    return updateBookingVehicle({
      url: `/api/booking-vehicles/${id}`,
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      data: bookingVehicleDTO,
    });
  };
};

export const useUpdateBookingVehicleMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdateBookingVehicleHook>>>,
    TError,
    {id: number; data: BookingVehicleDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useUpdateBookingVehicleHook>>>,
  TError,
  {id: number; data: BookingVehicleDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const updateBookingVehicle = useUpdateBookingVehicleHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useUpdateBookingVehicleHook>>>,
    {id: number; data: BookingVehicleDTO}
  > = props => {
    const {id, data} = props ?? {};

    return updateBookingVehicle(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type UpdateBookingVehicleMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUpdateBookingVehicleHook>>>
>;
export type UpdateBookingVehicleMutationBody = BookingVehicleDTO;
export type UpdateBookingVehicleMutationError = unknown;

export const useUpdateBookingVehicle = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdateBookingVehicleHook>>>,
    TError,
    {id: number; data: BookingVehicleDTO},
    TContext
  >;
}) => {
  const mutationOptions = useUpdateBookingVehicleMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useDeleteBookingVehicleHook = () => {
  const deleteBookingVehicle = useCustomInstance<void>();

  return (id: number) => {
    return deleteBookingVehicle({
      url: `/api/booking-vehicles/${id}`,
      method: 'delete',
    });
  };
};

export const useDeleteBookingVehicleMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useDeleteBookingVehicleHook>>>,
    TError,
    {id: number},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useDeleteBookingVehicleHook>>>,
  TError,
  {id: number},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const deleteBookingVehicle = useDeleteBookingVehicleHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useDeleteBookingVehicleHook>>>,
    {id: number}
  > = props => {
    const {id} = props ?? {};

    return deleteBookingVehicle(id);
  };

  return {mutationFn, ...mutationOptions};
};

export type DeleteBookingVehicleMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useDeleteBookingVehicleHook>>>
>;

export type DeleteBookingVehicleMutationError = unknown;

export const useDeleteBookingVehicle = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useDeleteBookingVehicleHook>>>,
    TError,
    {id: number},
    TContext
  >;
}) => {
  const mutationOptions = useDeleteBookingVehicleMutationOptions(options);

  return useMutation(mutationOptions);
};

export const usePartialUpdateBookingVehicleHook = () => {
  const partialUpdateBookingVehicle = useCustomInstance<BookingVehicleDTO>();

  return (id: number, bookingVehicleDTO: BookingVehicleDTO) => {
    return partialUpdateBookingVehicle({
      url: `/api/booking-vehicles/${id}`,
      method: 'patch',
      headers: {'Content-Type': 'application/json'},
      data: bookingVehicleDTO,
    });
  };
};

export const usePartialUpdateBookingVehicleMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdateBookingVehicleHook>>>,
    TError,
    {id: number; data: BookingVehicleDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof usePartialUpdateBookingVehicleHook>>>,
  TError,
  {id: number; data: BookingVehicleDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const partialUpdateBookingVehicle = usePartialUpdateBookingVehicleHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdateBookingVehicleHook>>>,
    {id: number; data: BookingVehicleDTO}
  > = props => {
    const {id, data} = props ?? {};

    return partialUpdateBookingVehicle(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type PartialUpdateBookingVehicleMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof usePartialUpdateBookingVehicleHook>>>
>;
export type PartialUpdateBookingVehicleMutationBody = BookingVehicleDTO;
export type PartialUpdateBookingVehicleMutationError = unknown;

export const usePartialUpdateBookingVehicle = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdateBookingVehicleHook>>>,
    TError,
    {id: number; data: BookingVehicleDTO},
    TContext
  >;
}) => {
  const mutationOptions =
    usePartialUpdateBookingVehicleMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useGetBookingVehicleToPartnerHook = () => {
  const getBookingVehicleToPartner =
    useCustomInstance<BookingVehicleToPartnerDTO>();

  return (id: number, signal?: AbortSignal) => {
    return getBookingVehicleToPartner({
      url: `/api/booking-vehicle-to-partners/${id}`,
      method: 'get',
      signal,
    });
  };
};

export const getGetBookingVehicleToPartnerQueryKey = (id: number) =>
  [`/api/booking-vehicle-to-partners/${id}`] as const;

export const useGetBookingVehicleToPartnerQueryOptions = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useGetBookingVehicleToPartnerHook>>
  >,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetBookingVehicleToPartnerHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetBookingVehicleToPartnerHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetBookingVehicleToPartnerQueryKey(id);

  const getBookingVehicleToPartner = useGetBookingVehicleToPartnerHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetBookingVehicleToPartnerHook>>>
  > = ({signal}) => getBookingVehicleToPartner(id, signal);

  return {queryKey, queryFn, enabled: !!id, ...queryOptions};
};

export type GetBookingVehicleToPartnerQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetBookingVehicleToPartnerHook>>>
>;
export type GetBookingVehicleToPartnerQueryError = unknown;

export const useGetBookingVehicleToPartner = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useGetBookingVehicleToPartnerHook>>
  >,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetBookingVehicleToPartnerHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetBookingVehicleToPartnerQueryOptions(id, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useUpdateBookingVehicleToPartnerHook = () => {
  const updateBookingVehicleToPartner =
    useCustomInstance<BookingVehicleToPartnerDTO>();

  return (
    id: number,
    bookingVehicleToPartnerDTO: BookingVehicleToPartnerDTO,
  ) => {
    return updateBookingVehicleToPartner({
      url: `/api/booking-vehicle-to-partners/${id}`,
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      data: bookingVehicleToPartnerDTO,
    });
  };
};

export const useUpdateBookingVehicleToPartnerMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<
      ReturnType<ReturnType<typeof useUpdateBookingVehicleToPartnerHook>>
    >,
    TError,
    {id: number; data: BookingVehicleToPartnerDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useUpdateBookingVehicleToPartnerHook>>>,
  TError,
  {id: number; data: BookingVehicleToPartnerDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const updateBookingVehicleToPartner = useUpdateBookingVehicleToPartnerHook();

  const mutationFn: MutationFunction<
    Awaited<
      ReturnType<ReturnType<typeof useUpdateBookingVehicleToPartnerHook>>
    >,
    {id: number; data: BookingVehicleToPartnerDTO}
  > = props => {
    const {id, data} = props ?? {};

    return updateBookingVehicleToPartner(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type UpdateBookingVehicleToPartnerMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUpdateBookingVehicleToPartnerHook>>>
>;
export type UpdateBookingVehicleToPartnerMutationBody =
  BookingVehicleToPartnerDTO;
export type UpdateBookingVehicleToPartnerMutationError = unknown;

export const useUpdateBookingVehicleToPartner = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<
      ReturnType<ReturnType<typeof useUpdateBookingVehicleToPartnerHook>>
    >,
    TError,
    {id: number; data: BookingVehicleToPartnerDTO},
    TContext
  >;
}) => {
  const mutationOptions =
    useUpdateBookingVehicleToPartnerMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useDeleteBookingVehicleToPartnerHook = () => {
  const deleteBookingVehicleToPartner = useCustomInstance<void>();

  return (id: number) => {
    return deleteBookingVehicleToPartner({
      url: `/api/booking-vehicle-to-partners/${id}`,
      method: 'delete',
    });
  };
};

export const useDeleteBookingVehicleToPartnerMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<
      ReturnType<ReturnType<typeof useDeleteBookingVehicleToPartnerHook>>
    >,
    TError,
    {id: number},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useDeleteBookingVehicleToPartnerHook>>>,
  TError,
  {id: number},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const deleteBookingVehicleToPartner = useDeleteBookingVehicleToPartnerHook();

  const mutationFn: MutationFunction<
    Awaited<
      ReturnType<ReturnType<typeof useDeleteBookingVehicleToPartnerHook>>
    >,
    {id: number}
  > = props => {
    const {id} = props ?? {};

    return deleteBookingVehicleToPartner(id);
  };

  return {mutationFn, ...mutationOptions};
};

export type DeleteBookingVehicleToPartnerMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useDeleteBookingVehicleToPartnerHook>>>
>;

export type DeleteBookingVehicleToPartnerMutationError = unknown;

export const useDeleteBookingVehicleToPartner = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<
      ReturnType<ReturnType<typeof useDeleteBookingVehicleToPartnerHook>>
    >,
    TError,
    {id: number},
    TContext
  >;
}) => {
  const mutationOptions =
    useDeleteBookingVehicleToPartnerMutationOptions(options);

  return useMutation(mutationOptions);
};

export const usePartialUpdateBookingVehicleToPartnerHook = () => {
  const partialUpdateBookingVehicleToPartner =
    useCustomInstance<BookingVehicleToPartnerDTO>();

  return (
    id: number,
    bookingVehicleToPartnerDTO: BookingVehicleToPartnerDTO,
  ) => {
    return partialUpdateBookingVehicleToPartner({
      url: `/api/booking-vehicle-to-partners/${id}`,
      method: 'patch',
      headers: {'Content-Type': 'application/json'},
      data: bookingVehicleToPartnerDTO,
    });
  };
};

export const usePartialUpdateBookingVehicleToPartnerMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<
      ReturnType<ReturnType<typeof usePartialUpdateBookingVehicleToPartnerHook>>
    >,
    TError,
    {id: number; data: BookingVehicleToPartnerDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<
    ReturnType<ReturnType<typeof usePartialUpdateBookingVehicleToPartnerHook>>
  >,
  TError,
  {id: number; data: BookingVehicleToPartnerDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const partialUpdateBookingVehicleToPartner =
    usePartialUpdateBookingVehicleToPartnerHook();

  const mutationFn: MutationFunction<
    Awaited<
      ReturnType<ReturnType<typeof usePartialUpdateBookingVehicleToPartnerHook>>
    >,
    {id: number; data: BookingVehicleToPartnerDTO}
  > = props => {
    const {id, data} = props ?? {};

    return partialUpdateBookingVehicleToPartner(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type PartialUpdateBookingVehicleToPartnerMutationResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof usePartialUpdateBookingVehicleToPartnerHook>>
  >
>;
export type PartialUpdateBookingVehicleToPartnerMutationBody =
  BookingVehicleToPartnerDTO;
export type PartialUpdateBookingVehicleToPartnerMutationError = unknown;

export const usePartialUpdateBookingVehicleToPartner = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<
      ReturnType<ReturnType<typeof usePartialUpdateBookingVehicleToPartnerHook>>
    >,
    TError,
    {id: number; data: BookingVehicleToPartnerDTO},
    TContext
  >;
}) => {
  const mutationOptions =
    usePartialUpdateBookingVehicleToPartnerMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useUpdateInformationHook = () => {
  const updateInformation = useCustomInstance<void>();

  return (updateInformationVM: UpdateInformationVM) => {
    return updateInformation({
      url: `/api/booking-vehicle-to-partners/update-information`,
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      data: updateInformationVM,
    });
  };
};

export const useUpdateInformationMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdateInformationHook>>>,
    TError,
    {data: UpdateInformationVM},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useUpdateInformationHook>>>,
  TError,
  {data: UpdateInformationVM},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const updateInformation = useUpdateInformationHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useUpdateInformationHook>>>,
    {data: UpdateInformationVM}
  > = props => {
    const {data} = props ?? {};

    return updateInformation(data);
  };

  return {mutationFn, ...mutationOptions};
};

export type UpdateInformationMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUpdateInformationHook>>>
>;
export type UpdateInformationMutationBody = UpdateInformationVM;
export type UpdateInformationMutationError = unknown;

export const useUpdateInformation = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdateInformationHook>>>,
    TError,
    {data: UpdateInformationVM},
    TContext
  >;
}) => {
  const mutationOptions = useUpdateInformationMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useFinishBookHook = () => {
  const finishBook = useCustomInstance<void>();

  return (id: number) => {
    return finishBook({
      url: `/api/booking-vehicle-to-partners/finish-book/${id}`,
      method: 'put',
    });
  };
};

export const useFinishBookMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useFinishBookHook>>>,
    TError,
    {id: number},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useFinishBookHook>>>,
  TError,
  {id: number},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const finishBook = useFinishBookHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useFinishBookHook>>>,
    {id: number}
  > = props => {
    const {id} = props ?? {};

    return finishBook(id);
  };

  return {mutationFn, ...mutationOptions};
};

export type FinishBookMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useFinishBookHook>>>
>;

export type FinishBookMutationError = unknown;

export const useFinishBook = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useFinishBookHook>>>,
    TError,
    {id: number},
    TContext
  >;
}) => {
  const mutationOptions = useFinishBookMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useGetBookingVehicleToPartnerCostHook = () => {
  const getBookingVehicleToPartnerCost =
    useCustomInstance<BookingVehicleToPartnerCostDTO>();

  return (id: number, signal?: AbortSignal) => {
    return getBookingVehicleToPartnerCost({
      url: `/api/booking-vehicle-to-partner-costs/${id}`,
      method: 'get',
      signal,
    });
  };
};

export const getGetBookingVehicleToPartnerCostQueryKey = (id: number) =>
  [`/api/booking-vehicle-to-partner-costs/${id}`] as const;

export const useGetBookingVehicleToPartnerCostQueryOptions = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useGetBookingVehicleToPartnerCostHook>>
  >,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<
        ReturnType<ReturnType<typeof useGetBookingVehicleToPartnerCostHook>>
      >,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetBookingVehicleToPartnerCostHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetBookingVehicleToPartnerCostQueryKey(id);

  const getBookingVehicleToPartnerCost =
    useGetBookingVehicleToPartnerCostHook();

  const queryFn: QueryFunction<
    Awaited<
      ReturnType<ReturnType<typeof useGetBookingVehicleToPartnerCostHook>>
    >
  > = ({signal}) => getBookingVehicleToPartnerCost(id, signal);

  return {queryKey, queryFn, enabled: !!id, ...queryOptions};
};

export type GetBookingVehicleToPartnerCostQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetBookingVehicleToPartnerCostHook>>>
>;
export type GetBookingVehicleToPartnerCostQueryError = unknown;

export const useGetBookingVehicleToPartnerCost = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useGetBookingVehicleToPartnerCostHook>>
  >,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<
        ReturnType<ReturnType<typeof useGetBookingVehicleToPartnerCostHook>>
      >,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetBookingVehicleToPartnerCostQueryOptions(
    id,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useUpdateBookingVehicleToPartnerCostHook = () => {
  const updateBookingVehicleToPartnerCost =
    useCustomInstance<BookingVehicleToPartnerCostDTO>();

  return (
    id: number,
    bookingVehicleToPartnerCostDTO: BookingVehicleToPartnerCostDTO,
  ) => {
    return updateBookingVehicleToPartnerCost({
      url: `/api/booking-vehicle-to-partner-costs/${id}`,
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      data: bookingVehicleToPartnerCostDTO,
    });
  };
};

export const useUpdateBookingVehicleToPartnerCostMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<
      ReturnType<ReturnType<typeof useUpdateBookingVehicleToPartnerCostHook>>
    >,
    TError,
    {id: number; data: BookingVehicleToPartnerCostDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<
    ReturnType<ReturnType<typeof useUpdateBookingVehicleToPartnerCostHook>>
  >,
  TError,
  {id: number; data: BookingVehicleToPartnerCostDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const updateBookingVehicleToPartnerCost =
    useUpdateBookingVehicleToPartnerCostHook();

  const mutationFn: MutationFunction<
    Awaited<
      ReturnType<ReturnType<typeof useUpdateBookingVehicleToPartnerCostHook>>
    >,
    {id: number; data: BookingVehicleToPartnerCostDTO}
  > = props => {
    const {id, data} = props ?? {};

    return updateBookingVehicleToPartnerCost(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type UpdateBookingVehicleToPartnerCostMutationResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof useUpdateBookingVehicleToPartnerCostHook>>
  >
>;
export type UpdateBookingVehicleToPartnerCostMutationBody =
  BookingVehicleToPartnerCostDTO;
export type UpdateBookingVehicleToPartnerCostMutationError = unknown;

export const useUpdateBookingVehicleToPartnerCost = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<
      ReturnType<ReturnType<typeof useUpdateBookingVehicleToPartnerCostHook>>
    >,
    TError,
    {id: number; data: BookingVehicleToPartnerCostDTO},
    TContext
  >;
}) => {
  const mutationOptions =
    useUpdateBookingVehicleToPartnerCostMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useDeleteBookingVehicleToPartnerCostHook = () => {
  const deleteBookingVehicleToPartnerCost = useCustomInstance<void>();

  return (id: number) => {
    return deleteBookingVehicleToPartnerCost({
      url: `/api/booking-vehicle-to-partner-costs/${id}`,
      method: 'delete',
    });
  };
};

export const useDeleteBookingVehicleToPartnerCostMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<
      ReturnType<ReturnType<typeof useDeleteBookingVehicleToPartnerCostHook>>
    >,
    TError,
    {id: number},
    TContext
  >;
}): UseMutationOptions<
  Awaited<
    ReturnType<ReturnType<typeof useDeleteBookingVehicleToPartnerCostHook>>
  >,
  TError,
  {id: number},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const deleteBookingVehicleToPartnerCost =
    useDeleteBookingVehicleToPartnerCostHook();

  const mutationFn: MutationFunction<
    Awaited<
      ReturnType<ReturnType<typeof useDeleteBookingVehicleToPartnerCostHook>>
    >,
    {id: number}
  > = props => {
    const {id} = props ?? {};

    return deleteBookingVehicleToPartnerCost(id);
  };

  return {mutationFn, ...mutationOptions};
};

export type DeleteBookingVehicleToPartnerCostMutationResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof useDeleteBookingVehicleToPartnerCostHook>>
  >
>;

export type DeleteBookingVehicleToPartnerCostMutationError = unknown;

export const useDeleteBookingVehicleToPartnerCost = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<
      ReturnType<ReturnType<typeof useDeleteBookingVehicleToPartnerCostHook>>
    >,
    TError,
    {id: number},
    TContext
  >;
}) => {
  const mutationOptions =
    useDeleteBookingVehicleToPartnerCostMutationOptions(options);

  return useMutation(mutationOptions);
};

export const usePartialUpdateBookingVehicleToPartnerCostHook = () => {
  const partialUpdateBookingVehicleToPartnerCost =
    useCustomInstance<BookingVehicleToPartnerCostDTO>();

  return (
    id: number,
    bookingVehicleToPartnerCostDTO: BookingVehicleToPartnerCostDTO,
  ) => {
    return partialUpdateBookingVehicleToPartnerCost({
      url: `/api/booking-vehicle-to-partner-costs/${id}`,
      method: 'patch',
      headers: {'Content-Type': 'application/json'},
      data: bookingVehicleToPartnerCostDTO,
    });
  };
};

export const usePartialUpdateBookingVehicleToPartnerCostMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<
      ReturnType<
        ReturnType<typeof usePartialUpdateBookingVehicleToPartnerCostHook>
      >
    >,
    TError,
    {id: number; data: BookingVehicleToPartnerCostDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<
    ReturnType<
      ReturnType<typeof usePartialUpdateBookingVehicleToPartnerCostHook>
    >
  >,
  TError,
  {id: number; data: BookingVehicleToPartnerCostDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const partialUpdateBookingVehicleToPartnerCost =
    usePartialUpdateBookingVehicleToPartnerCostHook();

  const mutationFn: MutationFunction<
    Awaited<
      ReturnType<
        ReturnType<typeof usePartialUpdateBookingVehicleToPartnerCostHook>
      >
    >,
    {id: number; data: BookingVehicleToPartnerCostDTO}
  > = props => {
    const {id, data} = props ?? {};

    return partialUpdateBookingVehicleToPartnerCost(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type PartialUpdateBookingVehicleToPartnerCostMutationResult =
  NonNullable<
    Awaited<
      ReturnType<
        ReturnType<typeof usePartialUpdateBookingVehicleToPartnerCostHook>
      >
    >
  >;
export type PartialUpdateBookingVehicleToPartnerCostMutationBody =
  BookingVehicleToPartnerCostDTO;
export type PartialUpdateBookingVehicleToPartnerCostMutationError = unknown;

export const usePartialUpdateBookingVehicleToPartnerCost = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<
      ReturnType<
        ReturnType<typeof usePartialUpdateBookingVehicleToPartnerCostHook>
      >
    >,
    TError,
    {id: number; data: BookingVehicleToPartnerCostDTO},
    TContext
  >;
}) => {
  const mutationOptions =
    usePartialUpdateBookingVehicleToPartnerCostMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useGetBookingNoteHook = () => {
  const getBookingNote = useCustomInstance<BookingNoteDTO>();

  return (id: number, signal?: AbortSignal) => {
    return getBookingNote({
      url: `/api/booking-notes/${id}`,
      method: 'get',
      signal,
    });
  };
};

export const getGetBookingNoteQueryKey = (id: number) =>
  [`/api/booking-notes/${id}`] as const;

export const useGetBookingNoteQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetBookingNoteHook>>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetBookingNoteHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetBookingNoteHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetBookingNoteQueryKey(id);

  const getBookingNote = useGetBookingNoteHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetBookingNoteHook>>>
  > = ({signal}) => getBookingNote(id, signal);

  return {queryKey, queryFn, enabled: !!id, ...queryOptions};
};

export type GetBookingNoteQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetBookingNoteHook>>>
>;
export type GetBookingNoteQueryError = unknown;

export const useGetBookingNote = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetBookingNoteHook>>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetBookingNoteHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetBookingNoteQueryOptions(id, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useUpdateBookingNoteHook = () => {
  const updateBookingNote = useCustomInstance<BookingNoteDTO>();

  return (id: number, bookingNoteDTO: BookingNoteDTO) => {
    return updateBookingNote({
      url: `/api/booking-notes/${id}`,
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      data: bookingNoteDTO,
    });
  };
};

export const useUpdateBookingNoteMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdateBookingNoteHook>>>,
    TError,
    {id: number; data: BookingNoteDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useUpdateBookingNoteHook>>>,
  TError,
  {id: number; data: BookingNoteDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const updateBookingNote = useUpdateBookingNoteHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useUpdateBookingNoteHook>>>,
    {id: number; data: BookingNoteDTO}
  > = props => {
    const {id, data} = props ?? {};

    return updateBookingNote(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type UpdateBookingNoteMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUpdateBookingNoteHook>>>
>;
export type UpdateBookingNoteMutationBody = BookingNoteDTO;
export type UpdateBookingNoteMutationError = unknown;

export const useUpdateBookingNote = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdateBookingNoteHook>>>,
    TError,
    {id: number; data: BookingNoteDTO},
    TContext
  >;
}) => {
  const mutationOptions = useUpdateBookingNoteMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useDeleteBookingNoteHook = () => {
  const deleteBookingNote = useCustomInstance<void>();

  return (id: number) => {
    return deleteBookingNote({
      url: `/api/booking-notes/${id}`,
      method: 'delete',
    });
  };
};

export const useDeleteBookingNoteMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useDeleteBookingNoteHook>>>,
    TError,
    {id: number},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useDeleteBookingNoteHook>>>,
  TError,
  {id: number},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const deleteBookingNote = useDeleteBookingNoteHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useDeleteBookingNoteHook>>>,
    {id: number}
  > = props => {
    const {id} = props ?? {};

    return deleteBookingNote(id);
  };

  return {mutationFn, ...mutationOptions};
};

export type DeleteBookingNoteMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useDeleteBookingNoteHook>>>
>;

export type DeleteBookingNoteMutationError = unknown;

export const useDeleteBookingNote = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useDeleteBookingNoteHook>>>,
    TError,
    {id: number},
    TContext
  >;
}) => {
  const mutationOptions = useDeleteBookingNoteMutationOptions(options);

  return useMutation(mutationOptions);
};

export const usePartialUpdateBookingNoteHook = () => {
  const partialUpdateBookingNote = useCustomInstance<BookingNoteDTO>();

  return (id: number, bookingNoteDTO: BookingNoteDTO) => {
    return partialUpdateBookingNote({
      url: `/api/booking-notes/${id}`,
      method: 'patch',
      headers: {'Content-Type': 'application/json'},
      data: bookingNoteDTO,
    });
  };
};

export const usePartialUpdateBookingNoteMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdateBookingNoteHook>>>,
    TError,
    {id: number; data: BookingNoteDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof usePartialUpdateBookingNoteHook>>>,
  TError,
  {id: number; data: BookingNoteDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const partialUpdateBookingNote = usePartialUpdateBookingNoteHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdateBookingNoteHook>>>,
    {id: number; data: BookingNoteDTO}
  > = props => {
    const {id, data} = props ?? {};

    return partialUpdateBookingNote(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type PartialUpdateBookingNoteMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof usePartialUpdateBookingNoteHook>>>
>;
export type PartialUpdateBookingNoteMutationBody = BookingNoteDTO;
export type PartialUpdateBookingNoteMutationError = unknown;

export const usePartialUpdateBookingNote = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdateBookingNoteHook>>>,
    TError,
    {id: number; data: BookingNoteDTO},
    TContext
  >;
}) => {
  const mutationOptions = usePartialUpdateBookingNoteMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useGetBookingCostHook = () => {
  const getBookingCost = useCustomInstance<BookingCostDTO>();

  return (id: number, signal?: AbortSignal) => {
    return getBookingCost({
      url: `/api/booking-costs/${id}`,
      method: 'get',
      signal,
    });
  };
};

export const getGetBookingCostQueryKey = (id: number) =>
  [`/api/booking-costs/${id}`] as const;

export const useGetBookingCostQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetBookingCostHook>>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetBookingCostHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetBookingCostHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetBookingCostQueryKey(id);

  const getBookingCost = useGetBookingCostHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetBookingCostHook>>>
  > = ({signal}) => getBookingCost(id, signal);

  return {queryKey, queryFn, enabled: !!id, ...queryOptions};
};

export type GetBookingCostQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetBookingCostHook>>>
>;
export type GetBookingCostQueryError = unknown;

export const useGetBookingCost = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetBookingCostHook>>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetBookingCostHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetBookingCostQueryOptions(id, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useUpdateBookingCostHook = () => {
  const updateBookingCost = useCustomInstance<BookingCostDTO>();

  return (id: number, bookingCostDTO: BookingCostDTO) => {
    return updateBookingCost({
      url: `/api/booking-costs/${id}`,
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      data: bookingCostDTO,
    });
  };
};

export const useUpdateBookingCostMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdateBookingCostHook>>>,
    TError,
    {id: number; data: BookingCostDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useUpdateBookingCostHook>>>,
  TError,
  {id: number; data: BookingCostDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const updateBookingCost = useUpdateBookingCostHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useUpdateBookingCostHook>>>,
    {id: number; data: BookingCostDTO}
  > = props => {
    const {id, data} = props ?? {};

    return updateBookingCost(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type UpdateBookingCostMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUpdateBookingCostHook>>>
>;
export type UpdateBookingCostMutationBody = BookingCostDTO;
export type UpdateBookingCostMutationError = unknown;

export const useUpdateBookingCost = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdateBookingCostHook>>>,
    TError,
    {id: number; data: BookingCostDTO},
    TContext
  >;
}) => {
  const mutationOptions = useUpdateBookingCostMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useDeleteBookingCostHook = () => {
  const deleteBookingCost = useCustomInstance<void>();

  return (id: number) => {
    return deleteBookingCost({
      url: `/api/booking-costs/${id}`,
      method: 'delete',
    });
  };
};

export const useDeleteBookingCostMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useDeleteBookingCostHook>>>,
    TError,
    {id: number},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useDeleteBookingCostHook>>>,
  TError,
  {id: number},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const deleteBookingCost = useDeleteBookingCostHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useDeleteBookingCostHook>>>,
    {id: number}
  > = props => {
    const {id} = props ?? {};

    return deleteBookingCost(id);
  };

  return {mutationFn, ...mutationOptions};
};

export type DeleteBookingCostMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useDeleteBookingCostHook>>>
>;

export type DeleteBookingCostMutationError = unknown;

export const useDeleteBookingCost = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useDeleteBookingCostHook>>>,
    TError,
    {id: number},
    TContext
  >;
}) => {
  const mutationOptions = useDeleteBookingCostMutationOptions(options);

  return useMutation(mutationOptions);
};

export const usePartialUpdateBookingCostHook = () => {
  const partialUpdateBookingCost = useCustomInstance<BookingCostDTO>();

  return (id: number, bookingCostDTO: BookingCostDTO) => {
    return partialUpdateBookingCost({
      url: `/api/booking-costs/${id}`,
      method: 'patch',
      headers: {'Content-Type': 'application/json'},
      data: bookingCostDTO,
    });
  };
};

export const usePartialUpdateBookingCostMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdateBookingCostHook>>>,
    TError,
    {id: number; data: BookingCostDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof usePartialUpdateBookingCostHook>>>,
  TError,
  {id: number; data: BookingCostDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const partialUpdateBookingCost = usePartialUpdateBookingCostHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdateBookingCostHook>>>,
    {id: number; data: BookingCostDTO}
  > = props => {
    const {id, data} = props ?? {};

    return partialUpdateBookingCost(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type PartialUpdateBookingCostMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof usePartialUpdateBookingCostHook>>>
>;
export type PartialUpdateBookingCostMutationBody = BookingCostDTO;
export type PartialUpdateBookingCostMutationError = unknown;

export const usePartialUpdateBookingCost = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdateBookingCostHook>>>,
    TError,
    {id: number; data: BookingCostDTO},
    TContext
  >;
}) => {
  const mutationOptions = usePartialUpdateBookingCostMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useGetBookingCostTypeHook = () => {
  const getBookingCostType = useCustomInstance<BookingCostTypeDTO>();

  return (id: number, signal?: AbortSignal) => {
    return getBookingCostType({
      url: `/api/booking-cost-types/${id}`,
      method: 'get',
      signal,
    });
  };
};

export const getGetBookingCostTypeQueryKey = (id: number) =>
  [`/api/booking-cost-types/${id}`] as const;

export const useGetBookingCostTypeQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetBookingCostTypeHook>>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetBookingCostTypeHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetBookingCostTypeHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetBookingCostTypeQueryKey(id);

  const getBookingCostType = useGetBookingCostTypeHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetBookingCostTypeHook>>>
  > = ({signal}) => getBookingCostType(id, signal);

  return {queryKey, queryFn, enabled: !!id, ...queryOptions};
};

export type GetBookingCostTypeQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetBookingCostTypeHook>>>
>;
export type GetBookingCostTypeQueryError = unknown;

export const useGetBookingCostType = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetBookingCostTypeHook>>>,
  TError = unknown,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetBookingCostTypeHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetBookingCostTypeQueryOptions(id, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useUpdateBookingCostTypeHook = () => {
  const updateBookingCostType = useCustomInstance<BookingCostTypeDTO>();

  return (id: number, bookingCostTypeDTO: BookingCostTypeDTO) => {
    return updateBookingCostType({
      url: `/api/booking-cost-types/${id}`,
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      data: bookingCostTypeDTO,
    });
  };
};

export const useUpdateBookingCostTypeMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdateBookingCostTypeHook>>>,
    TError,
    {id: number; data: BookingCostTypeDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useUpdateBookingCostTypeHook>>>,
  TError,
  {id: number; data: BookingCostTypeDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const updateBookingCostType = useUpdateBookingCostTypeHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useUpdateBookingCostTypeHook>>>,
    {id: number; data: BookingCostTypeDTO}
  > = props => {
    const {id, data} = props ?? {};

    return updateBookingCostType(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type UpdateBookingCostTypeMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUpdateBookingCostTypeHook>>>
>;
export type UpdateBookingCostTypeMutationBody = BookingCostTypeDTO;
export type UpdateBookingCostTypeMutationError = unknown;

export const useUpdateBookingCostType = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdateBookingCostTypeHook>>>,
    TError,
    {id: number; data: BookingCostTypeDTO},
    TContext
  >;
}) => {
  const mutationOptions = useUpdateBookingCostTypeMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useDeleteBookingCostTypeHook = () => {
  const deleteBookingCostType = useCustomInstance<void>();

  return (id: number) => {
    return deleteBookingCostType({
      url: `/api/booking-cost-types/${id}`,
      method: 'delete',
    });
  };
};

export const useDeleteBookingCostTypeMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useDeleteBookingCostTypeHook>>>,
    TError,
    {id: number},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useDeleteBookingCostTypeHook>>>,
  TError,
  {id: number},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const deleteBookingCostType = useDeleteBookingCostTypeHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useDeleteBookingCostTypeHook>>>,
    {id: number}
  > = props => {
    const {id} = props ?? {};

    return deleteBookingCostType(id);
  };

  return {mutationFn, ...mutationOptions};
};

export type DeleteBookingCostTypeMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useDeleteBookingCostTypeHook>>>
>;

export type DeleteBookingCostTypeMutationError = unknown;

export const useDeleteBookingCostType = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useDeleteBookingCostTypeHook>>>,
    TError,
    {id: number},
    TContext
  >;
}) => {
  const mutationOptions = useDeleteBookingCostTypeMutationOptions(options);

  return useMutation(mutationOptions);
};

export const usePartialUpdateBookingCostTypeHook = () => {
  const partialUpdateBookingCostType = useCustomInstance<BookingCostTypeDTO>();

  return (id: number, bookingCostTypeDTO: BookingCostTypeDTO) => {
    return partialUpdateBookingCostType({
      url: `/api/booking-cost-types/${id}`,
      method: 'patch',
      headers: {'Content-Type': 'application/json'},
      data: bookingCostTypeDTO,
    });
  };
};

export const usePartialUpdateBookingCostTypeMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdateBookingCostTypeHook>>>,
    TError,
    {id: number; data: BookingCostTypeDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof usePartialUpdateBookingCostTypeHook>>>,
  TError,
  {id: number; data: BookingCostTypeDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const partialUpdateBookingCostType = usePartialUpdateBookingCostTypeHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdateBookingCostTypeHook>>>,
    {id: number; data: BookingCostTypeDTO}
  > = props => {
    const {id, data} = props ?? {};

    return partialUpdateBookingCostType(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type PartialUpdateBookingCostTypeMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof usePartialUpdateBookingCostTypeHook>>>
>;
export type PartialUpdateBookingCostTypeMutationBody = BookingCostTypeDTO;
export type PartialUpdateBookingCostTypeMutationError = unknown;

export const usePartialUpdateBookingCostType = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof usePartialUpdateBookingCostTypeHook>>>,
    TError,
    {id: number; data: BookingCostTypeDTO},
    TContext
  >;
}) => {
  const mutationOptions =
    usePartialUpdateBookingCostTypeMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useGetAllVehiclesHook = () => {
  const getAllVehicles = useCustomInstance<VehicleDTO[]>();

  return (params?: GetAllVehiclesParams, signal?: AbortSignal) => {
    return getAllVehicles({
      url: `/api/vehicles`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetAllVehiclesQueryKey = (params?: GetAllVehiclesParams) =>
  [`/api/vehicles`, ...(params ? [params] : [])] as const;

export const useGetAllVehiclesQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllVehiclesHook>>>,
  TError = unknown,
>(
  params?: GetAllVehiclesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllVehiclesHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetAllVehiclesHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetAllVehiclesQueryKey(params);

  const getAllVehicles = useGetAllVehiclesHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetAllVehiclesHook>>>
  > = ({signal}) => getAllVehicles(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetAllVehiclesQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetAllVehiclesHook>>>
>;
export type GetAllVehiclesQueryError = unknown;

export const useGetAllVehicles = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllVehiclesHook>>>,
  TError = unknown,
>(
  params?: GetAllVehiclesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllVehiclesHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetAllVehiclesQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useCreateVehicleHook = () => {
  const createVehicle = useCustomInstance<VehicleDTO>();

  return (vehicleDTO: VehicleDTO) => {
    return createVehicle({
      url: `/api/vehicles`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: vehicleDTO,
    });
  };
};

export const useCreateVehicleMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreateVehicleHook>>>,
    TError,
    {data: VehicleDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useCreateVehicleHook>>>,
  TError,
  {data: VehicleDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const createVehicle = useCreateVehicleHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useCreateVehicleHook>>>,
    {data: VehicleDTO}
  > = props => {
    const {data} = props ?? {};

    return createVehicle(data);
  };

  return {mutationFn, ...mutationOptions};
};

export type CreateVehicleMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCreateVehicleHook>>>
>;
export type CreateVehicleMutationBody = VehicleDTO;
export type CreateVehicleMutationError = unknown;

export const useCreateVehicle = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreateVehicleHook>>>,
    TError,
    {data: VehicleDTO},
    TContext
  >;
}) => {
  const mutationOptions = useCreateVehicleMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useGetAllVehicleTypesHook = () => {
  const getAllVehicleTypes = useCustomInstance<VehicleTypeDTO[]>();

  return (params?: GetAllVehicleTypesParams, signal?: AbortSignal) => {
    return getAllVehicleTypes({
      url: `/api/vehicle-types`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetAllVehicleTypesQueryKey = (
  params?: GetAllVehicleTypesParams,
) => [`/api/vehicle-types`, ...(params ? [params] : [])] as const;

export const useGetAllVehicleTypesQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllVehicleTypesHook>>>,
  TError = unknown,
>(
  params?: GetAllVehicleTypesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllVehicleTypesHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetAllVehicleTypesHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetAllVehicleTypesQueryKey(params);

  const getAllVehicleTypes = useGetAllVehicleTypesHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetAllVehicleTypesHook>>>
  > = ({signal}) => getAllVehicleTypes(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetAllVehicleTypesQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetAllVehicleTypesHook>>>
>;
export type GetAllVehicleTypesQueryError = unknown;

export const useGetAllVehicleTypes = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllVehicleTypesHook>>>,
  TError = unknown,
>(
  params?: GetAllVehicleTypesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllVehicleTypesHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetAllVehicleTypesQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useCreateVehicleTypeHook = () => {
  const createVehicleType = useCustomInstance<VehicleTypeDTO>();

  return (vehicleTypeRequest: VehicleTypeRequest) => {
    return createVehicleType({
      url: `/api/vehicle-types`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: vehicleTypeRequest,
    });
  };
};

export const useCreateVehicleTypeMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreateVehicleTypeHook>>>,
    TError,
    {data: VehicleTypeRequest},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useCreateVehicleTypeHook>>>,
  TError,
  {data: VehicleTypeRequest},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const createVehicleType = useCreateVehicleTypeHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useCreateVehicleTypeHook>>>,
    {data: VehicleTypeRequest}
  > = props => {
    const {data} = props ?? {};

    return createVehicleType(data);
  };

  return {mutationFn, ...mutationOptions};
};

export type CreateVehicleTypeMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCreateVehicleTypeHook>>>
>;
export type CreateVehicleTypeMutationBody = VehicleTypeRequest;
export type CreateVehicleTypeMutationError = unknown;

export const useCreateVehicleType = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreateVehicleTypeHook>>>,
    TError,
    {data: VehicleTypeRequest},
    TContext
  >;
}) => {
  const mutationOptions = useCreateVehicleTypeMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useGetAllVehiclePricesHook = () => {
  const getAllVehiclePrices = useCustomInstance<VehiclePriceDTO[]>();

  return (params?: GetAllVehiclePricesParams, signal?: AbortSignal) => {
    return getAllVehiclePrices({
      url: `/api/vehicle-prices`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetAllVehiclePricesQueryKey = (
  params?: GetAllVehiclePricesParams,
) => [`/api/vehicle-prices`, ...(params ? [params] : [])] as const;

export const useGetAllVehiclePricesQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllVehiclePricesHook>>>,
  TError = unknown,
>(
  params?: GetAllVehiclePricesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllVehiclePricesHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetAllVehiclePricesHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetAllVehiclePricesQueryKey(params);

  const getAllVehiclePrices = useGetAllVehiclePricesHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetAllVehiclePricesHook>>>
  > = ({signal}) => getAllVehiclePrices(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetAllVehiclePricesQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetAllVehiclePricesHook>>>
>;
export type GetAllVehiclePricesQueryError = unknown;

export const useGetAllVehiclePrices = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllVehiclePricesHook>>>,
  TError = unknown,
>(
  params?: GetAllVehiclePricesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllVehiclePricesHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetAllVehiclePricesQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useCreateVehiclePriceHook = () => {
  const createVehiclePrice = useCustomInstance<VehiclePriceDTO>();

  return (vehiclePriceRequest: VehiclePriceRequest) => {
    return createVehiclePrice({
      url: `/api/vehicle-prices`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: vehiclePriceRequest,
    });
  };
};

export const useCreateVehiclePriceMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreateVehiclePriceHook>>>,
    TError,
    {data: VehiclePriceRequest},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useCreateVehiclePriceHook>>>,
  TError,
  {data: VehiclePriceRequest},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const createVehiclePrice = useCreateVehiclePriceHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useCreateVehiclePriceHook>>>,
    {data: VehiclePriceRequest}
  > = props => {
    const {data} = props ?? {};

    return createVehiclePrice(data);
  };

  return {mutationFn, ...mutationOptions};
};

export type CreateVehiclePriceMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCreateVehiclePriceHook>>>
>;
export type CreateVehiclePriceMutationBody = VehiclePriceRequest;
export type CreateVehiclePriceMutationError = unknown;

export const useCreateVehiclePrice = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreateVehiclePriceHook>>>,
    TError,
    {data: VehiclePriceRequest},
    TContext
  >;
}) => {
  const mutationOptions = useCreateVehiclePriceMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useGetAllPaymentsHook = () => {
  const getAllPayments = useCustomInstance<PaymentDTO[]>();

  return (params?: GetAllPaymentsParams, signal?: AbortSignal) => {
    return getAllPayments({
      url: `/api/payments`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetAllPaymentsQueryKey = (params?: GetAllPaymentsParams) =>
  [`/api/payments`, ...(params ? [params] : [])] as const;

export const useGetAllPaymentsQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllPaymentsHook>>>,
  TError = unknown,
>(
  params?: GetAllPaymentsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllPaymentsHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetAllPaymentsHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetAllPaymentsQueryKey(params);

  const getAllPayments = useGetAllPaymentsHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetAllPaymentsHook>>>
  > = ({signal}) => getAllPayments(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetAllPaymentsQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetAllPaymentsHook>>>
>;
export type GetAllPaymentsQueryError = unknown;

export const useGetAllPayments = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllPaymentsHook>>>,
  TError = unknown,
>(
  params?: GetAllPaymentsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllPaymentsHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetAllPaymentsQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useCreatePaymentHook = () => {
  const createPayment = useCustomInstance<PaymentDTO>();

  return (paymentDTO: PaymentDTO) => {
    return createPayment({
      url: `/api/payments`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: paymentDTO,
    });
  };
};

export const useCreatePaymentMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreatePaymentHook>>>,
    TError,
    {data: PaymentDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useCreatePaymentHook>>>,
  TError,
  {data: PaymentDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const createPayment = useCreatePaymentHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useCreatePaymentHook>>>,
    {data: PaymentDTO}
  > = props => {
    const {data} = props ?? {};

    return createPayment(data);
  };

  return {mutationFn, ...mutationOptions};
};

export type CreatePaymentMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCreatePaymentHook>>>
>;
export type CreatePaymentMutationBody = PaymentDTO;
export type CreatePaymentMutationError = unknown;

export const useCreatePayment = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreatePaymentHook>>>,
    TError,
    {data: PaymentDTO},
    TContext
  >;
}) => {
  const mutationOptions = useCreatePaymentMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useGetAllPartnersHook = () => {
  const getAllPartners = useCustomInstance<PartnerDTO[]>();

  return (params?: GetAllPartnersParams, signal?: AbortSignal) => {
    return getAllPartners({
      url: `/api/partners`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetAllPartnersQueryKey = (params?: GetAllPartnersParams) =>
  [`/api/partners`, ...(params ? [params] : [])] as const;

export const useGetAllPartnersQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllPartnersHook>>>,
  TError = unknown,
>(
  params?: GetAllPartnersParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllPartnersHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetAllPartnersHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetAllPartnersQueryKey(params);

  const getAllPartners = useGetAllPartnersHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetAllPartnersHook>>>
  > = ({signal}) => getAllPartners(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetAllPartnersQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetAllPartnersHook>>>
>;
export type GetAllPartnersQueryError = unknown;

export const useGetAllPartners = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllPartnersHook>>>,
  TError = unknown,
>(
  params?: GetAllPartnersParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllPartnersHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetAllPartnersQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useCreatePartnerHook = () => {
  const createPartner = useCustomInstance<PartnerDTO>();

  return (partnerDTO: PartnerDTO) => {
    return createPartner({
      url: `/api/partners`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: partnerDTO,
    });
  };
};

export const useCreatePartnerMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreatePartnerHook>>>,
    TError,
    {data: PartnerDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useCreatePartnerHook>>>,
  TError,
  {data: PartnerDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const createPartner = useCreatePartnerHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useCreatePartnerHook>>>,
    {data: PartnerDTO}
  > = props => {
    const {data} = props ?? {};

    return createPartner(data);
  };

  return {mutationFn, ...mutationOptions};
};

export type CreatePartnerMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCreatePartnerHook>>>
>;
export type CreatePartnerMutationBody = PartnerDTO;
export type CreatePartnerMutationError = unknown;

export const useCreatePartner = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreatePartnerHook>>>,
    TError,
    {data: PartnerDTO},
    TContext
  >;
}) => {
  const mutationOptions = useCreatePartnerMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useGetAllBookingsHook = () => {
  const getAllBookings = useCustomInstance<BookingPartnerDTO[]>();

  return (params?: GetAllBookingsParams, signal?: AbortSignal) => {
    return getAllBookings({
      url: `/api/bookingPartners`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetAllBookingsQueryKey = (params?: GetAllBookingsParams) =>
  [`/api/bookingPartners`, ...(params ? [params] : [])] as const;

export const useGetAllBookingsQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllBookingsHook>>>,
  TError = unknown,
>(
  params?: GetAllBookingsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllBookingsHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetAllBookingsHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetAllBookingsQueryKey(params);

  const getAllBookings = useGetAllBookingsHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetAllBookingsHook>>>
  > = ({signal}) => getAllBookings(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetAllBookingsQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetAllBookingsHook>>>
>;
export type GetAllBookingsQueryError = unknown;

export const useGetAllBookings = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllBookingsHook>>>,
  TError = unknown,
>(
  params?: GetAllBookingsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllBookingsHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetAllBookingsQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useCreateBookingPartnerHook = () => {
  const createBookingPartner = useCustomInstance<BookingPartnerDTO>();

  return (bookingPartnerVM: BookingPartnerVM) => {
    return createBookingPartner({
      url: `/api/bookingPartners`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: bookingPartnerVM,
    });
  };
};

export const useCreateBookingPartnerMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreateBookingPartnerHook>>>,
    TError,
    {data: BookingPartnerVM},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useCreateBookingPartnerHook>>>,
  TError,
  {data: BookingPartnerVM},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const createBookingPartner = useCreateBookingPartnerHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useCreateBookingPartnerHook>>>,
    {data: BookingPartnerVM}
  > = props => {
    const {data} = props ?? {};

    return createBookingPartner(data);
  };

  return {mutationFn, ...mutationOptions};
};

export type CreateBookingPartnerMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCreateBookingPartnerHook>>>
>;
export type CreateBookingPartnerMutationBody = BookingPartnerVM;
export type CreateBookingPartnerMutationError = unknown;

export const useCreateBookingPartner = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreateBookingPartnerHook>>>,
    TError,
    {data: BookingPartnerVM},
    TContext
  >;
}) => {
  const mutationOptions = useCreateBookingPartnerMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useGetAllBookingVehiclesHook = () => {
  const getAllBookingVehicles = useCustomInstance<BookingVehicleDTO[]>();

  return (params?: GetAllBookingVehiclesParams, signal?: AbortSignal) => {
    return getAllBookingVehicles({
      url: `/api/booking-vehicles`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetAllBookingVehiclesQueryKey = (
  params?: GetAllBookingVehiclesParams,
) => [`/api/booking-vehicles`, ...(params ? [params] : [])] as const;

export const useGetAllBookingVehiclesQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllBookingVehiclesHook>>>,
  TError = unknown,
>(
  params?: GetAllBookingVehiclesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllBookingVehiclesHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetAllBookingVehiclesHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetAllBookingVehiclesQueryKey(params);

  const getAllBookingVehicles = useGetAllBookingVehiclesHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetAllBookingVehiclesHook>>>
  > = ({signal}) => getAllBookingVehicles(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetAllBookingVehiclesQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetAllBookingVehiclesHook>>>
>;
export type GetAllBookingVehiclesQueryError = unknown;

export const useGetAllBookingVehicles = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllBookingVehiclesHook>>>,
  TError = unknown,
>(
  params?: GetAllBookingVehiclesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllBookingVehiclesHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetAllBookingVehiclesQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useCreateBookingVehicleHook = () => {
  const createBookingVehicle = useCustomInstance<BookingVehicleDTO>();

  return (bookingVehicleDTO: BookingVehicleDTO) => {
    return createBookingVehicle({
      url: `/api/booking-vehicles`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: bookingVehicleDTO,
    });
  };
};

export const useCreateBookingVehicleMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreateBookingVehicleHook>>>,
    TError,
    {data: BookingVehicleDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useCreateBookingVehicleHook>>>,
  TError,
  {data: BookingVehicleDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const createBookingVehicle = useCreateBookingVehicleHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useCreateBookingVehicleHook>>>,
    {data: BookingVehicleDTO}
  > = props => {
    const {data} = props ?? {};

    return createBookingVehicle(data);
  };

  return {mutationFn, ...mutationOptions};
};

export type CreateBookingVehicleMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCreateBookingVehicleHook>>>
>;
export type CreateBookingVehicleMutationBody = BookingVehicleDTO;
export type CreateBookingVehicleMutationError = unknown;

export const useCreateBookingVehicle = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreateBookingVehicleHook>>>,
    TError,
    {data: BookingVehicleDTO},
    TContext
  >;
}) => {
  const mutationOptions = useCreateBookingVehicleMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useGetAllBookingVehicleToPartnersHook = () => {
  const getAllBookingVehicleToPartners =
    useCustomInstance<BookingVehicleToPartnerDTO[]>();

  return (
    params?: GetAllBookingVehicleToPartnersParams,
    signal?: AbortSignal,
  ) => {
    return getAllBookingVehicleToPartners({
      url: `/api/booking-vehicle-to-partners`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetAllBookingVehicleToPartnersQueryKey = (
  params?: GetAllBookingVehicleToPartnersParams,
) => [`/api/booking-vehicle-to-partners`, ...(params ? [params] : [])] as const;

export const useGetAllBookingVehicleToPartnersQueryOptions = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useGetAllBookingVehicleToPartnersHook>>
  >,
  TError = unknown,
>(
  params?: GetAllBookingVehicleToPartnersParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<
        ReturnType<ReturnType<typeof useGetAllBookingVehicleToPartnersHook>>
      >,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetAllBookingVehicleToPartnersHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetAllBookingVehicleToPartnersQueryKey(params);

  const getAllBookingVehicleToPartners =
    useGetAllBookingVehicleToPartnersHook();

  const queryFn: QueryFunction<
    Awaited<
      ReturnType<ReturnType<typeof useGetAllBookingVehicleToPartnersHook>>
    >
  > = ({signal}) => getAllBookingVehicleToPartners(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetAllBookingVehicleToPartnersQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetAllBookingVehicleToPartnersHook>>>
>;
export type GetAllBookingVehicleToPartnersQueryError = unknown;

export const useGetAllBookingVehicleToPartners = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useGetAllBookingVehicleToPartnersHook>>
  >,
  TError = unknown,
>(
  params?: GetAllBookingVehicleToPartnersParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<
        ReturnType<ReturnType<typeof useGetAllBookingVehicleToPartnersHook>>
      >,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetAllBookingVehicleToPartnersQueryOptions(
    params,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useCreateBookingVehicleToPartnerHook = () => {
  const createBookingVehicleToPartner =
    useCustomInstance<BookingVehicleToPartnerDTO>();

  return (bookingVehicleToPartnerDTO: BookingVehicleToPartnerDTO) => {
    return createBookingVehicleToPartner({
      url: `/api/booking-vehicle-to-partners`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: bookingVehicleToPartnerDTO,
    });
  };
};

export const useCreateBookingVehicleToPartnerMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<
      ReturnType<ReturnType<typeof useCreateBookingVehicleToPartnerHook>>
    >,
    TError,
    {data: BookingVehicleToPartnerDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useCreateBookingVehicleToPartnerHook>>>,
  TError,
  {data: BookingVehicleToPartnerDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const createBookingVehicleToPartner = useCreateBookingVehicleToPartnerHook();

  const mutationFn: MutationFunction<
    Awaited<
      ReturnType<ReturnType<typeof useCreateBookingVehicleToPartnerHook>>
    >,
    {data: BookingVehicleToPartnerDTO}
  > = props => {
    const {data} = props ?? {};

    return createBookingVehicleToPartner(data);
  };

  return {mutationFn, ...mutationOptions};
};

export type CreateBookingVehicleToPartnerMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCreateBookingVehicleToPartnerHook>>>
>;
export type CreateBookingVehicleToPartnerMutationBody =
  BookingVehicleToPartnerDTO;
export type CreateBookingVehicleToPartnerMutationError = unknown;

export const useCreateBookingVehicleToPartner = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<
      ReturnType<ReturnType<typeof useCreateBookingVehicleToPartnerHook>>
    >,
    TError,
    {data: BookingVehicleToPartnerDTO},
    TContext
  >;
}) => {
  const mutationOptions =
    useCreateBookingVehicleToPartnerMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useGetAllBookingVehicleToPartnerCostsHook = () => {
  const getAllBookingVehicleToPartnerCosts =
    useCustomInstance<BookingVehicleToPartnerCostDTO[]>();

  return (
    params?: GetAllBookingVehicleToPartnerCostsParams,
    signal?: AbortSignal,
  ) => {
    return getAllBookingVehicleToPartnerCosts({
      url: `/api/booking-vehicle-to-partner-costs`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetAllBookingVehicleToPartnerCostsQueryKey = (
  params?: GetAllBookingVehicleToPartnerCostsParams,
) =>
  [
    `/api/booking-vehicle-to-partner-costs`,
    ...(params ? [params] : []),
  ] as const;

export const useGetAllBookingVehicleToPartnerCostsQueryOptions = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useGetAllBookingVehicleToPartnerCostsHook>>
  >,
  TError = unknown,
>(
  params?: GetAllBookingVehicleToPartnerCostsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<
        ReturnType<ReturnType<typeof useGetAllBookingVehicleToPartnerCostsHook>>
      >,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<
    ReturnType<ReturnType<typeof useGetAllBookingVehicleToPartnerCostsHook>>
  >,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ??
    getGetAllBookingVehicleToPartnerCostsQueryKey(params);

  const getAllBookingVehicleToPartnerCosts =
    useGetAllBookingVehicleToPartnerCostsHook();

  const queryFn: QueryFunction<
    Awaited<
      ReturnType<ReturnType<typeof useGetAllBookingVehicleToPartnerCostsHook>>
    >
  > = ({signal}) => getAllBookingVehicleToPartnerCosts(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetAllBookingVehicleToPartnerCostsQueryResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof useGetAllBookingVehicleToPartnerCostsHook>>
  >
>;
export type GetAllBookingVehicleToPartnerCostsQueryError = unknown;

export const useGetAllBookingVehicleToPartnerCosts = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useGetAllBookingVehicleToPartnerCostsHook>>
  >,
  TError = unknown,
>(
  params?: GetAllBookingVehicleToPartnerCostsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<
        ReturnType<ReturnType<typeof useGetAllBookingVehicleToPartnerCostsHook>>
      >,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetAllBookingVehicleToPartnerCostsQueryOptions(
    params,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useCreateBookingVehicleToPartnerCostHook = () => {
  const createBookingVehicleToPartnerCost =
    useCustomInstance<BookingVehicleToPartnerCostDTO>();

  return (bookingVehicleToPartnerCostDTO: BookingVehicleToPartnerCostDTO) => {
    return createBookingVehicleToPartnerCost({
      url: `/api/booking-vehicle-to-partner-costs`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: bookingVehicleToPartnerCostDTO,
    });
  };
};

export const useCreateBookingVehicleToPartnerCostMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<
      ReturnType<ReturnType<typeof useCreateBookingVehicleToPartnerCostHook>>
    >,
    TError,
    {data: BookingVehicleToPartnerCostDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<
    ReturnType<ReturnType<typeof useCreateBookingVehicleToPartnerCostHook>>
  >,
  TError,
  {data: BookingVehicleToPartnerCostDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const createBookingVehicleToPartnerCost =
    useCreateBookingVehicleToPartnerCostHook();

  const mutationFn: MutationFunction<
    Awaited<
      ReturnType<ReturnType<typeof useCreateBookingVehicleToPartnerCostHook>>
    >,
    {data: BookingVehicleToPartnerCostDTO}
  > = props => {
    const {data} = props ?? {};

    return createBookingVehicleToPartnerCost(data);
  };

  return {mutationFn, ...mutationOptions};
};

export type CreateBookingVehicleToPartnerCostMutationResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof useCreateBookingVehicleToPartnerCostHook>>
  >
>;
export type CreateBookingVehicleToPartnerCostMutationBody =
  BookingVehicleToPartnerCostDTO;
export type CreateBookingVehicleToPartnerCostMutationError = unknown;

export const useCreateBookingVehicleToPartnerCost = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<
      ReturnType<ReturnType<typeof useCreateBookingVehicleToPartnerCostHook>>
    >,
    TError,
    {data: BookingVehicleToPartnerCostDTO},
    TContext
  >;
}) => {
  const mutationOptions =
    useCreateBookingVehicleToPartnerCostMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useGetAllBookingNotesHook = () => {
  const getAllBookingNotes = useCustomInstance<BookingNoteDTO[]>();

  return (params?: GetAllBookingNotesParams, signal?: AbortSignal) => {
    return getAllBookingNotes({
      url: `/api/booking-notes`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetAllBookingNotesQueryKey = (
  params?: GetAllBookingNotesParams,
) => [`/api/booking-notes`, ...(params ? [params] : [])] as const;

export const useGetAllBookingNotesQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllBookingNotesHook>>>,
  TError = unknown,
>(
  params?: GetAllBookingNotesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllBookingNotesHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetAllBookingNotesHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetAllBookingNotesQueryKey(params);

  const getAllBookingNotes = useGetAllBookingNotesHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetAllBookingNotesHook>>>
  > = ({signal}) => getAllBookingNotes(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetAllBookingNotesQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetAllBookingNotesHook>>>
>;
export type GetAllBookingNotesQueryError = unknown;

export const useGetAllBookingNotes = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllBookingNotesHook>>>,
  TError = unknown,
>(
  params?: GetAllBookingNotesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllBookingNotesHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetAllBookingNotesQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useCreateBookingNoteHook = () => {
  const createBookingNote = useCustomInstance<BookingNoteDTO>();

  return (bookingNoteDTO: BookingNoteDTO) => {
    return createBookingNote({
      url: `/api/booking-notes`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: bookingNoteDTO,
    });
  };
};

export const useCreateBookingNoteMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreateBookingNoteHook>>>,
    TError,
    {data: BookingNoteDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useCreateBookingNoteHook>>>,
  TError,
  {data: BookingNoteDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const createBookingNote = useCreateBookingNoteHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useCreateBookingNoteHook>>>,
    {data: BookingNoteDTO}
  > = props => {
    const {data} = props ?? {};

    return createBookingNote(data);
  };

  return {mutationFn, ...mutationOptions};
};

export type CreateBookingNoteMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCreateBookingNoteHook>>>
>;
export type CreateBookingNoteMutationBody = BookingNoteDTO;
export type CreateBookingNoteMutationError = unknown;

export const useCreateBookingNote = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreateBookingNoteHook>>>,
    TError,
    {data: BookingNoteDTO},
    TContext
  >;
}) => {
  const mutationOptions = useCreateBookingNoteMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useGetAllBookingCostsHook = () => {
  const getAllBookingCosts = useCustomInstance<BookingCostDTO[]>();

  return (params?: GetAllBookingCostsParams, signal?: AbortSignal) => {
    return getAllBookingCosts({
      url: `/api/booking-costs`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetAllBookingCostsQueryKey = (
  params?: GetAllBookingCostsParams,
) => [`/api/booking-costs`, ...(params ? [params] : [])] as const;

export const useGetAllBookingCostsQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllBookingCostsHook>>>,
  TError = unknown,
>(
  params?: GetAllBookingCostsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllBookingCostsHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetAllBookingCostsHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetAllBookingCostsQueryKey(params);

  const getAllBookingCosts = useGetAllBookingCostsHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetAllBookingCostsHook>>>
  > = ({signal}) => getAllBookingCosts(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetAllBookingCostsQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetAllBookingCostsHook>>>
>;
export type GetAllBookingCostsQueryError = unknown;

export const useGetAllBookingCosts = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllBookingCostsHook>>>,
  TError = unknown,
>(
  params?: GetAllBookingCostsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllBookingCostsHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetAllBookingCostsQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useCreateBookingCostHook = () => {
  const createBookingCost = useCustomInstance<BookingCostDTO>();

  return (bookingCostDTO: BookingCostDTO) => {
    return createBookingCost({
      url: `/api/booking-costs`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: bookingCostDTO,
    });
  };
};

export const useCreateBookingCostMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreateBookingCostHook>>>,
    TError,
    {data: BookingCostDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useCreateBookingCostHook>>>,
  TError,
  {data: BookingCostDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const createBookingCost = useCreateBookingCostHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useCreateBookingCostHook>>>,
    {data: BookingCostDTO}
  > = props => {
    const {data} = props ?? {};

    return createBookingCost(data);
  };

  return {mutationFn, ...mutationOptions};
};

export type CreateBookingCostMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCreateBookingCostHook>>>
>;
export type CreateBookingCostMutationBody = BookingCostDTO;
export type CreateBookingCostMutationError = unknown;

export const useCreateBookingCost = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreateBookingCostHook>>>,
    TError,
    {data: BookingCostDTO},
    TContext
  >;
}) => {
  const mutationOptions = useCreateBookingCostMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useGetAllBookingCostTypesHook = () => {
  const getAllBookingCostTypes = useCustomInstance<BookingCostTypeDTO[]>();

  return (params?: GetAllBookingCostTypesParams, signal?: AbortSignal) => {
    return getAllBookingCostTypes({
      url: `/api/booking-cost-types`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetAllBookingCostTypesQueryKey = (
  params?: GetAllBookingCostTypesParams,
) => [`/api/booking-cost-types`, ...(params ? [params] : [])] as const;

export const useGetAllBookingCostTypesQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllBookingCostTypesHook>>>,
  TError = unknown,
>(
  params?: GetAllBookingCostTypesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllBookingCostTypesHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetAllBookingCostTypesHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetAllBookingCostTypesQueryKey(params);

  const getAllBookingCostTypes = useGetAllBookingCostTypesHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetAllBookingCostTypesHook>>>
  > = ({signal}) => getAllBookingCostTypes(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetAllBookingCostTypesQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetAllBookingCostTypesHook>>>
>;
export type GetAllBookingCostTypesQueryError = unknown;

export const useGetAllBookingCostTypes = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllBookingCostTypesHook>>>,
  TError = unknown,
>(
  params?: GetAllBookingCostTypesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllBookingCostTypesHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetAllBookingCostTypesQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useCreateBookingCostTypeHook = () => {
  const createBookingCostType = useCustomInstance<BookingCostTypeDTO>();

  return (bookingCostTypeDTO: BookingCostTypeDTO) => {
    return createBookingCostType({
      url: `/api/booking-cost-types`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: bookingCostTypeDTO,
    });
  };
};

export const useCreateBookingCostTypeMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreateBookingCostTypeHook>>>,
    TError,
    {data: BookingCostTypeDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useCreateBookingCostTypeHook>>>,
  TError,
  {data: BookingCostTypeDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const createBookingCostType = useCreateBookingCostTypeHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useCreateBookingCostTypeHook>>>,
    {data: BookingCostTypeDTO}
  > = props => {
    const {data} = props ?? {};

    return createBookingCostType(data);
  };

  return {mutationFn, ...mutationOptions};
};

export type CreateBookingCostTypeMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCreateBookingCostTypeHook>>>
>;
export type CreateBookingCostTypeMutationBody = BookingCostTypeDTO;
export type CreateBookingCostTypeMutationError = unknown;

export const useCreateBookingCostType = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreateBookingCostTypeHook>>>,
    TError,
    {data: BookingCostTypeDTO},
    TContext
  >;
}) => {
  const mutationOptions = useCreateBookingCostTypeMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useIsAuthenticatedHook = () => {
  const isAuthenticated = useCustomInstance<string>();

  return (signal?: AbortSignal) => {
    return isAuthenticated({url: `/api/authenticate`, method: 'get', signal});
  };
};

export const getIsAuthenticatedQueryKey = () => [`/api/authenticate`] as const;

export const useIsAuthenticatedQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useIsAuthenticatedHook>>>,
  TError = unknown,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useIsAuthenticatedHook>>>,
    TError,
    TData
  >;
}): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useIsAuthenticatedHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getIsAuthenticatedQueryKey();

  const isAuthenticated = useIsAuthenticatedHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useIsAuthenticatedHook>>>
  > = ({signal}) => isAuthenticated(signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type IsAuthenticatedQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useIsAuthenticatedHook>>>
>;
export type IsAuthenticatedQueryError = unknown;

export const useIsAuthenticated = <
  TData = Awaited<ReturnType<ReturnType<typeof useIsAuthenticatedHook>>>,
  TError = unknown,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useIsAuthenticatedHook>>>,
    TError,
    TData
  >;
}): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useIsAuthenticatedQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useAuthorizeHook = () => {
  const authorize = useCustomInstance<JWTToken>();

  return (loginVM: LoginVM) => {
    return authorize({
      url: `/api/authenticate`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: loginVM,
    });
  };
};

export const useAuthorizeMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useAuthorizeHook>>>,
    TError,
    {data: LoginVM},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useAuthorizeHook>>>,
  TError,
  {data: LoginVM},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const authorize = useAuthorizeHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useAuthorizeHook>>>,
    {data: LoginVM}
  > = props => {
    const {data} = props ?? {};

    return authorize(data);
  };

  return {mutationFn, ...mutationOptions};
};

export type AuthorizeMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useAuthorizeHook>>>
>;
export type AuthorizeMutationBody = LoginVM;
export type AuthorizeMutationError = unknown;

export const useAuthorize = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useAuthorizeHook>>>,
    TError,
    {data: LoginVM},
    TContext
  >;
}) => {
  const mutationOptions = useAuthorizeMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useGetAllPublicUsersHook = () => {
  const getAllPublicUsers = useCustomInstance<PartnerUserDTO[]>();

  return (params: GetAllPublicUsersParams, signal?: AbortSignal) => {
    return getAllPublicUsers({
      url: `/api/account`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetAllPublicUsersQueryKey = (params: GetAllPublicUsersParams) =>
  [`/api/account`, ...(params ? [params] : [])] as const;

export const useGetAllPublicUsersQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllPublicUsersHook>>>,
  TError = unknown,
>(
  params: GetAllPublicUsersParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllPublicUsersHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetAllPublicUsersHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetAllPublicUsersQueryKey(params);

  const getAllPublicUsers = useGetAllPublicUsersHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetAllPublicUsersHook>>>
  > = ({signal}) => getAllPublicUsers(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetAllPublicUsersQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetAllPublicUsersHook>>>
>;
export type GetAllPublicUsersQueryError = unknown;

export const useGetAllPublicUsers = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllPublicUsersHook>>>,
  TError = unknown,
>(
  params: GetAllPublicUsersParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllPublicUsersHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetAllPublicUsersQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useSaveAccountHook = () => {
  const saveAccount = useCustomInstance<PartnerUserDTO>();

  return (adminUserDTO: AdminUserDTO) => {
    return saveAccount({
      url: `/api/account`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: adminUserDTO,
    });
  };
};

export const useSaveAccountMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useSaveAccountHook>>>,
    TError,
    {data: AdminUserDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useSaveAccountHook>>>,
  TError,
  {data: AdminUserDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const saveAccount = useSaveAccountHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useSaveAccountHook>>>,
    {data: AdminUserDTO}
  > = props => {
    const {data} = props ?? {};

    return saveAccount(data);
  };

  return {mutationFn, ...mutationOptions};
};

export type SaveAccountMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useSaveAccountHook>>>
>;
export type SaveAccountMutationBody = AdminUserDTO;
export type SaveAccountMutationError = unknown;

export const useSaveAccount = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useSaveAccountHook>>>,
    TError,
    {data: AdminUserDTO},
    TContext
  >;
}) => {
  const mutationOptions = useSaveAccountMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useRequestPasswordResetHook = () => {
  const requestPasswordReset = useCustomInstance<void>();

  return (requestPasswordResetBody: string) => {
    return requestPasswordReset({
      url: `/api/account/reset-password/init`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: requestPasswordResetBody,
    });
  };
};

export const useRequestPasswordResetMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useRequestPasswordResetHook>>>,
    TError,
    {data: string},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useRequestPasswordResetHook>>>,
  TError,
  {data: string},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const requestPasswordReset = useRequestPasswordResetHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useRequestPasswordResetHook>>>,
    {data: string}
  > = props => {
    const {data} = props ?? {};

    return requestPasswordReset(data);
  };

  return {mutationFn, ...mutationOptions};
};

export type RequestPasswordResetMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useRequestPasswordResetHook>>>
>;
export type RequestPasswordResetMutationBody = string;
export type RequestPasswordResetMutationError = unknown;

export const useRequestPasswordReset = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useRequestPasswordResetHook>>>,
    TError,
    {data: string},
    TContext
  >;
}) => {
  const mutationOptions = useRequestPasswordResetMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useFinishPasswordResetHook = () => {
  const finishPasswordReset = useCustomInstance<void>();

  return (keyAndPasswordVM: KeyAndPasswordVM) => {
    return finishPasswordReset({
      url: `/api/account/reset-password/finish`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: keyAndPasswordVM,
    });
  };
};

export const useFinishPasswordResetMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useFinishPasswordResetHook>>>,
    TError,
    {data: KeyAndPasswordVM},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useFinishPasswordResetHook>>>,
  TError,
  {data: KeyAndPasswordVM},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const finishPasswordReset = useFinishPasswordResetHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useFinishPasswordResetHook>>>,
    {data: KeyAndPasswordVM}
  > = props => {
    const {data} = props ?? {};

    return finishPasswordReset(data);
  };

  return {mutationFn, ...mutationOptions};
};

export type FinishPasswordResetMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useFinishPasswordResetHook>>>
>;
export type FinishPasswordResetMutationBody = KeyAndPasswordVM;
export type FinishPasswordResetMutationError = unknown;

export const useFinishPasswordReset = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useFinishPasswordResetHook>>>,
    TError,
    {data: KeyAndPasswordVM},
    TContext
  >;
}) => {
  const mutationOptions = useFinishPasswordResetMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useChangePasswordHook = () => {
  const changePassword = useCustomInstance<void>();

  return (passwordChangeDTO: PasswordChangeDTO) => {
    return changePassword({
      url: `/api/account/change-password`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: passwordChangeDTO,
    });
  };
};

export const useChangePasswordMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useChangePasswordHook>>>,
    TError,
    {data: PasswordChangeDTO},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useChangePasswordHook>>>,
  TError,
  {data: PasswordChangeDTO},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const changePassword = useChangePasswordHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useChangePasswordHook>>>,
    {data: PasswordChangeDTO}
  > = props => {
    const {data} = props ?? {};

    return changePassword(data);
  };

  return {mutationFn, ...mutationOptions};
};

export type ChangePasswordMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useChangePasswordHook>>>
>;
export type ChangePasswordMutationBody = PasswordChangeDTO;
export type ChangePasswordMutationError = unknown;

export const useChangePassword = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useChangePasswordHook>>>,
    TError,
    {data: PasswordChangeDTO},
    TContext
  >;
}) => {
  const mutationOptions = useChangePasswordMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useUpdateImageRegistryHook = () => {
  const updateImageRegistry = useCustomInstance<VehicleDTO>();

  return (id: number, updateImageRegistryBody: UpdateImageRegistryBody) => {
    const formData = customFormData(updateImageRegistryBody);
    return updateImageRegistry({
      url: `/api/vehicles/image-registry/${id}`,
      method: 'patch',
      headers: {'Content-Type': 'multipart/form-data'},
      data: formData,
    });
  };
};

export const useUpdateImageRegistryMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdateImageRegistryHook>>>,
    TError,
    {id: number; data: UpdateImageRegistryBody},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useUpdateImageRegistryHook>>>,
  TError,
  {id: number; data: UpdateImageRegistryBody},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const updateImageRegistry = useUpdateImageRegistryHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useUpdateImageRegistryHook>>>,
    {id: number; data: UpdateImageRegistryBody}
  > = props => {
    const {id, data} = props ?? {};

    return updateImageRegistry(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type UpdateImageRegistryMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUpdateImageRegistryHook>>>
>;
export type UpdateImageRegistryMutationBody = UpdateImageRegistryBody;
export type UpdateImageRegistryMutationError = unknown;

export const useUpdateImageRegistry = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdateImageRegistryHook>>>,
    TError,
    {id: number; data: UpdateImageRegistryBody},
    TContext
  >;
}) => {
  const mutationOptions = useUpdateImageRegistryMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useUpdateImageRegistrationHook = () => {
  const updateImageRegistration = useCustomInstance<VehicleDTO>();

  return (
    id: number,
    updateImageRegistrationBody: UpdateImageRegistrationBody,
  ) => {
    const formData = customFormData(updateImageRegistrationBody);
    return updateImageRegistration({
      url: `/api/vehicles/image-registration/${id}`,
      method: 'patch',
      headers: {'Content-Type': 'multipart/form-data'},
      data: formData,
    });
  };
};

export const useUpdateImageRegistrationMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdateImageRegistrationHook>>>,
    TError,
    {id: number; data: UpdateImageRegistrationBody},
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useUpdateImageRegistrationHook>>>,
  TError,
  {id: number; data: UpdateImageRegistrationBody},
  TContext
> => {
  const {mutation: mutationOptions} = options ?? {};

  const updateImageRegistration = useUpdateImageRegistrationHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useUpdateImageRegistrationHook>>>,
    {id: number; data: UpdateImageRegistrationBody}
  > = props => {
    const {id, data} = props ?? {};

    return updateImageRegistration(id, data);
  };

  return {mutationFn, ...mutationOptions};
};

export type UpdateImageRegistrationMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUpdateImageRegistrationHook>>>
>;
export type UpdateImageRegistrationMutationBody = UpdateImageRegistrationBody;
export type UpdateImageRegistrationMutationError = unknown;

export const useUpdateImageRegistration = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdateImageRegistrationHook>>>,
    TError,
    {id: number; data: UpdateImageRegistrationBody},
    TContext
  >;
}) => {
  const mutationOptions = useUpdateImageRegistrationMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useReceiveAuthorizationCodeHook = () => {
  const receiveAuthorizationCode = useCustomInstance<string>();

  return (params: ReceiveAuthorizationCodeParams, signal?: AbortSignal) => {
    return receiveAuthorizationCode({
      url: `/api/zalo/authorization`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getReceiveAuthorizationCodeQueryKey = (
  params: ReceiveAuthorizationCodeParams,
) => [`/api/zalo/authorization`, ...(params ? [params] : [])] as const;

export const useReceiveAuthorizationCodeQueryOptions = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useReceiveAuthorizationCodeHook>>
  >,
  TError = unknown,
>(
  params: ReceiveAuthorizationCodeParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useReceiveAuthorizationCodeHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useReceiveAuthorizationCodeHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getReceiveAuthorizationCodeQueryKey(params);

  const receiveAuthorizationCode = useReceiveAuthorizationCodeHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useReceiveAuthorizationCodeHook>>>
  > = ({signal}) => receiveAuthorizationCode(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type ReceiveAuthorizationCodeQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useReceiveAuthorizationCodeHook>>>
>;
export type ReceiveAuthorizationCodeQueryError = unknown;

export const useReceiveAuthorizationCode = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useReceiveAuthorizationCodeHook>>
  >,
  TError = unknown,
>(
  params: ReceiveAuthorizationCodeParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useReceiveAuthorizationCodeHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useReceiveAuthorizationCodeQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useGetCarListHook = () => {
  const getCarList = useCustomInstance<GetCarList200>();

  return (params: GetCarListParams, signal?: AbortSignal) => {
    return getCarList({
      url: `/api/vehicles/external/car/list`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetCarListQueryKey = (params: GetCarListParams) =>
  [`/api/vehicles/external/car/list`, ...(params ? [params] : [])] as const;

export const useGetCarListQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetCarListHook>>>,
  TError = unknown,
>(
  params: GetCarListParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetCarListHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetCarListHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetCarListQueryKey(params);

  const getCarList = useGetCarListHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetCarListHook>>>
  > = ({signal}) => getCarList(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetCarListQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetCarListHook>>>
>;
export type GetCarListQueryError = unknown;

export const useGetCarList = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetCarListHook>>>,
  TError = unknown,
>(
  params: GetCarListParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetCarListHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetCarListQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useGetAirportListHook = () => {
  const getAirportList = useCustomInstance<GetAirportList200Item[]>();

  return (signal?: AbortSignal) => {
    return getAirportList({
      url: `/api/vehicles/external/airport/list`,
      method: 'get',
      signal,
    });
  };
};

export const getGetAirportListQueryKey = () =>
  [`/api/vehicles/external/airport/list`] as const;

export const useGetAirportListQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAirportListHook>>>,
  TError = unknown,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useGetAirportListHook>>>,
    TError,
    TData
  >;
}): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetAirportListHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetAirportListQueryKey();

  const getAirportList = useGetAirportListHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetAirportListHook>>>
  > = ({signal}) => getAirportList(signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetAirportListQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetAirportListHook>>>
>;
export type GetAirportListQueryError = unknown;

export const useGetAirportList = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAirportListHook>>>,
  TError = unknown,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useGetAirportListHook>>>,
    TError,
    TData
  >;
}): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetAirportListQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useCountVehiclesHook = () => {
  const countVehicles = useCustomInstance<number>();

  return (signal?: AbortSignal) => {
    return countVehicles({url: `/api/vehicles/count`, method: 'get', signal});
  };
};

export const getCountVehiclesQueryKey = () => [`/api/vehicles/count`] as const;

export const useCountVehiclesQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useCountVehiclesHook>>>,
  TError = unknown,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useCountVehiclesHook>>>,
    TError,
    TData
  >;
}): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useCountVehiclesHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getCountVehiclesQueryKey();

  const countVehicles = useCountVehiclesHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useCountVehiclesHook>>>
  > = ({signal}) => countVehicles(signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type CountVehiclesQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCountVehiclesHook>>>
>;
export type CountVehiclesQueryError = unknown;

export const useCountVehicles = <
  TData = Awaited<ReturnType<ReturnType<typeof useCountVehiclesHook>>>,
  TError = unknown,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useCountVehiclesHook>>>,
    TError,
    TData
  >;
}): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useCountVehiclesQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useCountVehicleTypesHook = () => {
  const countVehicleTypes = useCustomInstance<number>();

  return (signal?: AbortSignal) => {
    return countVehicleTypes({
      url: `/api/vehicle-types/count`,
      method: 'get',
      signal,
    });
  };
};

export const getCountVehicleTypesQueryKey = () =>
  [`/api/vehicle-types/count`] as const;

export const useCountVehicleTypesQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useCountVehicleTypesHook>>>,
  TError = unknown,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useCountVehicleTypesHook>>>,
    TError,
    TData
  >;
}): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useCountVehicleTypesHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getCountVehicleTypesQueryKey();

  const countVehicleTypes = useCountVehicleTypesHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useCountVehicleTypesHook>>>
  > = ({signal}) => countVehicleTypes(signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type CountVehicleTypesQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCountVehicleTypesHook>>>
>;
export type CountVehicleTypesQueryError = unknown;

export const useCountVehicleTypes = <
  TData = Awaited<ReturnType<ReturnType<typeof useCountVehicleTypesHook>>>,
  TError = unknown,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useCountVehicleTypesHook>>>,
    TError,
    TData
  >;
}): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useCountVehicleTypesQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useCountVehiclePricesHook = () => {
  const countVehiclePrices = useCustomInstance<number>();

  return (signal?: AbortSignal) => {
    return countVehiclePrices({
      url: `/api/vehicle-prices/count`,
      method: 'get',
      signal,
    });
  };
};

export const getCountVehiclePricesQueryKey = () =>
  [`/api/vehicle-prices/count`] as const;

export const useCountVehiclePricesQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useCountVehiclePricesHook>>>,
  TError = unknown,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useCountVehiclePricesHook>>>,
    TError,
    TData
  >;
}): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useCountVehiclePricesHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getCountVehiclePricesQueryKey();

  const countVehiclePrices = useCountVehiclePricesHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useCountVehiclePricesHook>>>
  > = ({signal}) => countVehiclePrices(signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type CountVehiclePricesQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCountVehiclePricesHook>>>
>;
export type CountVehiclePricesQueryError = unknown;

export const useCountVehiclePrices = <
  TData = Awaited<ReturnType<ReturnType<typeof useCountVehiclePricesHook>>>,
  TError = unknown,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useCountVehiclePricesHook>>>,
    TError,
    TData
  >;
}): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useCountVehiclePricesQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useGetVehicleExpenseChartHook = () => {
  const getVehicleExpenseChart = useCustomInstance<GetVehicleExpenseChart200>();

  return (params: GetVehicleExpenseChartParams, signal?: AbortSignal) => {
    return getVehicleExpenseChart({
      url: `/api/statistic/vehicle-expenses`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetVehicleExpenseChartQueryKey = (
  params: GetVehicleExpenseChartParams,
) => [`/api/statistic/vehicle-expenses`, ...(params ? [params] : [])] as const;

export const useGetVehicleExpenseChartQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetVehicleExpenseChartHook>>>,
  TError = unknown,
>(
  params: GetVehicleExpenseChartParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetVehicleExpenseChartHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetVehicleExpenseChartHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetVehicleExpenseChartQueryKey(params);

  const getVehicleExpenseChart = useGetVehicleExpenseChartHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetVehicleExpenseChartHook>>>
  > = ({signal}) => getVehicleExpenseChart(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetVehicleExpenseChartQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetVehicleExpenseChartHook>>>
>;
export type GetVehicleExpenseChartQueryError = unknown;

export const useGetVehicleExpenseChart = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetVehicleExpenseChartHook>>>,
  TError = unknown,
>(
  params: GetVehicleExpenseChartParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetVehicleExpenseChartHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetVehicleExpenseChartQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useGetSaleBooksHook = () => {
  const getSaleBooks = useCustomInstance<GetSaleBooks200>();

  return (params?: GetSaleBooksParams, signal?: AbortSignal) => {
    return getSaleBooks({
      url: `/api/statistic/sales`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetSaleBooksQueryKey = (params?: GetSaleBooksParams) =>
  [`/api/statistic/sales`, ...(params ? [params] : [])] as const;

export const useGetSaleBooksQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetSaleBooksHook>>>,
  TError = unknown,
>(
  params?: GetSaleBooksParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetSaleBooksHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetSaleBooksHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetSaleBooksQueryKey(params);

  const getSaleBooks = useGetSaleBooksHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetSaleBooksHook>>>
  > = ({signal}) => getSaleBooks(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetSaleBooksQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetSaleBooksHook>>>
>;
export type GetSaleBooksQueryError = unknown;

export const useGetSaleBooks = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetSaleBooksHook>>>,
  TError = unknown,
>(
  params?: GetSaleBooksParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetSaleBooksHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetSaleBooksQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useGetRevenueVehicleTypeHook = () => {
  const getRevenueVehicleType = useCustomInstance<GetRevenueVehicleType200>();

  return (params: GetRevenueVehicleTypeParams, signal?: AbortSignal) => {
    return getRevenueVehicleType({
      url: `/api/statistic/revenue-vehicle-type`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetRevenueVehicleTypeQueryKey = (
  params: GetRevenueVehicleTypeParams,
) =>
  [`/api/statistic/revenue-vehicle-type`, ...(params ? [params] : [])] as const;

export const useGetRevenueVehicleTypeQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetRevenueVehicleTypeHook>>>,
  TError = unknown,
>(
  params: GetRevenueVehicleTypeParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetRevenueVehicleTypeHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetRevenueVehicleTypeHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetRevenueVehicleTypeQueryKey(params);

  const getRevenueVehicleType = useGetRevenueVehicleTypeHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetRevenueVehicleTypeHook>>>
  > = ({signal}) => getRevenueVehicleType(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetRevenueVehicleTypeQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetRevenueVehicleTypeHook>>>
>;
export type GetRevenueVehicleTypeQueryError = unknown;

export const useGetRevenueVehicleType = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetRevenueVehicleTypeHook>>>,
  TError = unknown,
>(
  params: GetRevenueVehicleTypeParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetRevenueVehicleTypeHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetRevenueVehicleTypeQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useGetRevenueVehicleTypeByHook = () => {
  const getRevenueVehicleTypeBy =
    useCustomInstance<GetRevenueVehicleTypeBy200>();

  return (params: GetRevenueVehicleTypeByParams, signal?: AbortSignal) => {
    return getRevenueVehicleTypeBy({
      url: `/api/statistic/revenue-vehicle-type/by-month`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetRevenueVehicleTypeByQueryKey = (
  params: GetRevenueVehicleTypeByParams,
) =>
  [
    `/api/statistic/revenue-vehicle-type/by-month`,
    ...(params ? [params] : []),
  ] as const;

export const useGetRevenueVehicleTypeByQueryOptions = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useGetRevenueVehicleTypeByHook>>
  >,
  TError = unknown,
>(
  params: GetRevenueVehicleTypeByParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetRevenueVehicleTypeByHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetRevenueVehicleTypeByHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetRevenueVehicleTypeByQueryKey(params);

  const getRevenueVehicleTypeBy = useGetRevenueVehicleTypeByHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetRevenueVehicleTypeByHook>>>
  > = ({signal}) => getRevenueVehicleTypeBy(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetRevenueVehicleTypeByQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetRevenueVehicleTypeByHook>>>
>;
export type GetRevenueVehicleTypeByQueryError = unknown;

export const useGetRevenueVehicleTypeBy = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useGetRevenueVehicleTypeByHook>>
  >,
  TError = unknown,
>(
  params: GetRevenueVehicleTypeByParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetRevenueVehicleTypeByHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetRevenueVehicleTypeByQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useGetAbilitiesRevenueHook = () => {
  const getAbilitiesRevenue = useCustomInstance<GetAbilitiesRevenue200>();

  return (params: GetAbilitiesRevenueParams, signal?: AbortSignal) => {
    return getAbilitiesRevenue({
      url: `/api/statistic/abilities-revenue`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetAbilitiesRevenueQueryKey = (
  params: GetAbilitiesRevenueParams,
) => [`/api/statistic/abilities-revenue`, ...(params ? [params] : [])] as const;

export const useGetAbilitiesRevenueQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAbilitiesRevenueHook>>>,
  TError = unknown,
>(
  params: GetAbilitiesRevenueParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAbilitiesRevenueHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetAbilitiesRevenueHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetAbilitiesRevenueQueryKey(params);

  const getAbilitiesRevenue = useGetAbilitiesRevenueHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetAbilitiesRevenueHook>>>
  > = ({signal}) => getAbilitiesRevenue(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetAbilitiesRevenueQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetAbilitiesRevenueHook>>>
>;
export type GetAbilitiesRevenueQueryError = unknown;

export const useGetAbilitiesRevenue = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAbilitiesRevenueHook>>>,
  TError = unknown,
>(
  params: GetAbilitiesRevenueParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAbilitiesRevenueHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetAbilitiesRevenueQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useGetAllSingleBookingsHook = () => {
  const getAllSingleBookings = useCustomInstance<SingleBookingView[]>();

  return (params?: GetAllSingleBookingsParams, signal?: AbortSignal) => {
    return getAllSingleBookings({
      url: `/api/singleBookings`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetAllSingleBookingsQueryKey = (
  params?: GetAllSingleBookingsParams,
) => [`/api/singleBookings`, ...(params ? [params] : [])] as const;

export const useGetAllSingleBookingsQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllSingleBookingsHook>>>,
  TError = unknown,
>(
  params?: GetAllSingleBookingsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllSingleBookingsHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetAllSingleBookingsHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetAllSingleBookingsQueryKey(params);

  const getAllSingleBookings = useGetAllSingleBookingsHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetAllSingleBookingsHook>>>
  > = ({signal}) => getAllSingleBookings(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetAllSingleBookingsQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetAllSingleBookingsHook>>>
>;
export type GetAllSingleBookingsQueryError = unknown;

export const useGetAllSingleBookings = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllSingleBookingsHook>>>,
  TError = unknown,
>(
  params?: GetAllSingleBookingsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllSingleBookingsHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetAllSingleBookingsQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useGetOwnBookingWithDriverHook = () => {
  const getOwnBookingWithDriver =
    useCustomInstance<BookingToSelectExpenseDTO[]>();

  return (params: GetOwnBookingWithDriverParams, signal?: AbortSignal) => {
    return getOwnBookingWithDriver({
      url: `/api/singleBookings/ownBooking`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetOwnBookingWithDriverQueryKey = (
  params: GetOwnBookingWithDriverParams,
) => [`/api/singleBookings/ownBooking`, ...(params ? [params] : [])] as const;

export const useGetOwnBookingWithDriverQueryOptions = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useGetOwnBookingWithDriverHook>>
  >,
  TError = unknown,
>(
  params: GetOwnBookingWithDriverParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetOwnBookingWithDriverHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetOwnBookingWithDriverHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetOwnBookingWithDriverQueryKey(params);

  const getOwnBookingWithDriver = useGetOwnBookingWithDriverHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetOwnBookingWithDriverHook>>>
  > = ({signal}) => getOwnBookingWithDriver(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetOwnBookingWithDriverQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetOwnBookingWithDriverHook>>>
>;
export type GetOwnBookingWithDriverQueryError = unknown;

export const useGetOwnBookingWithDriver = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useGetOwnBookingWithDriverHook>>
  >,
  TError = unknown,
>(
  params: GetOwnBookingWithDriverParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetOwnBookingWithDriverHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetOwnBookingWithDriverQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useCountSingleBookingsHook = () => {
  const countSingleBookings = useCustomInstance<number>();

  return (params?: CountSingleBookingsParams, signal?: AbortSignal) => {
    return countSingleBookings({
      url: `/api/singleBookings/count`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getCountSingleBookingsQueryKey = (
  params?: CountSingleBookingsParams,
) => [`/api/singleBookings/count`, ...(params ? [params] : [])] as const;

export const useCountSingleBookingsQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useCountSingleBookingsHook>>>,
  TError = unknown,
>(
  params?: CountSingleBookingsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useCountSingleBookingsHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useCountSingleBookingsHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getCountSingleBookingsQueryKey(params);

  const countSingleBookings = useCountSingleBookingsHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useCountSingleBookingsHook>>>
  > = ({signal}) => countSingleBookings(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type CountSingleBookingsQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCountSingleBookingsHook>>>
>;
export type CountSingleBookingsQueryError = unknown;

export const useCountSingleBookings = <
  TData = Awaited<ReturnType<ReturnType<typeof useCountSingleBookingsHook>>>,
  TError = unknown,
>(
  params?: CountSingleBookingsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useCountSingleBookingsHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useCountSingleBookingsQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useCountPaymentsHook = () => {
  const countPayments = useCustomInstance<number>();

  return (signal?: AbortSignal) => {
    return countPayments({url: `/api/payments/count`, method: 'get', signal});
  };
};

export const getCountPaymentsQueryKey = () => [`/api/payments/count`] as const;

export const useCountPaymentsQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useCountPaymentsHook>>>,
  TError = unknown,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useCountPaymentsHook>>>,
    TError,
    TData
  >;
}): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useCountPaymentsHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getCountPaymentsQueryKey();

  const countPayments = useCountPaymentsHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useCountPaymentsHook>>>
  > = ({signal}) => countPayments(signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type CountPaymentsQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCountPaymentsHook>>>
>;
export type CountPaymentsQueryError = unknown;

export const useCountPayments = <
  TData = Awaited<ReturnType<ReturnType<typeof useCountPaymentsHook>>>,
  TError = unknown,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useCountPaymentsHook>>>,
    TError,
    TData
  >;
}): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useCountPaymentsQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useCountPartnersHook = () => {
  const countPartners = useCustomInstance<number>();

  return (signal?: AbortSignal) => {
    return countPartners({url: `/api/partners/count`, method: 'get', signal});
  };
};

export const getCountPartnersQueryKey = () => [`/api/partners/count`] as const;

export const useCountPartnersQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useCountPartnersHook>>>,
  TError = unknown,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useCountPartnersHook>>>,
    TError,
    TData
  >;
}): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useCountPartnersHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getCountPartnersQueryKey();

  const countPartners = useCountPartnersHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useCountPartnersHook>>>
  > = ({signal}) => countPartners(signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type CountPartnersQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCountPartnersHook>>>
>;
export type CountPartnersQueryError = unknown;

export const useCountPartners = <
  TData = Awaited<ReturnType<ReturnType<typeof useCountPartnersHook>>>,
  TError = unknown,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useCountPartnersHook>>>,
    TError,
    TData
  >;
}): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useCountPartnersQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useGetAllPartnerUsersHook = () => {
  const getAllPartnerUsers = useCustomInstance<PartnerUserDTO[]>();

  return (params?: GetAllPartnerUsersParams, signal?: AbortSignal) => {
    return getAllPartnerUsers({
      url: `/api/partner-users`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetAllPartnerUsersQueryKey = (
  params?: GetAllPartnerUsersParams,
) => [`/api/partner-users`, ...(params ? [params] : [])] as const;

export const useGetAllPartnerUsersQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllPartnerUsersHook>>>,
  TError = unknown,
>(
  params?: GetAllPartnerUsersParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllPartnerUsersHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetAllPartnerUsersHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetAllPartnerUsersQueryKey(params);

  const getAllPartnerUsers = useGetAllPartnerUsersHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetAllPartnerUsersHook>>>
  > = ({signal}) => getAllPartnerUsers(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetAllPartnerUsersQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetAllPartnerUsersHook>>>
>;
export type GetAllPartnerUsersQueryError = unknown;

export const useGetAllPartnerUsers = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllPartnerUsersHook>>>,
  TError = unknown,
>(
  params?: GetAllPartnerUsersParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllPartnerUsersHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetAllPartnerUsersQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useCountPartnerUsersHook = () => {
  const countPartnerUsers = useCustomInstance<number>();

  return (signal?: AbortSignal) => {
    return countPartnerUsers({
      url: `/api/partner-users/count`,
      method: 'get',
      signal,
    });
  };
};

export const getCountPartnerUsersQueryKey = () =>
  [`/api/partner-users/count`] as const;

export const useCountPartnerUsersQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useCountPartnerUsersHook>>>,
  TError = unknown,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useCountPartnerUsersHook>>>,
    TError,
    TData
  >;
}): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useCountPartnerUsersHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getCountPartnerUsersQueryKey();

  const countPartnerUsers = useCountPartnerUsersHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useCountPartnerUsersHook>>>
  > = ({signal}) => countPartnerUsers(signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type CountPartnerUsersQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCountPartnerUsersHook>>>
>;
export type CountPartnerUsersQueryError = unknown;

export const useCountPartnerUsers = <
  TData = Awaited<ReturnType<ReturnType<typeof useCountPartnerUsersHook>>>,
  TError = unknown,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useCountPartnerUsersHook>>>,
    TError,
    TData
  >;
}): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useCountPartnerUsersQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useGetAllRevenuePartnersHook = () => {
  const getAllRevenuePartners = useCustomInstance<FinancePartnerSummary[]>();

  return (params: GetAllRevenuePartnersParams, signal?: AbortSignal) => {
    return getAllRevenuePartners({
      url: `/api/finance-partners/revenue`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetAllRevenuePartnersQueryKey = (
  params: GetAllRevenuePartnersParams,
) => [`/api/finance-partners/revenue`, ...(params ? [params] : [])] as const;

export const useGetAllRevenuePartnersQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllRevenuePartnersHook>>>,
  TError = unknown,
>(
  params: GetAllRevenuePartnersParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllRevenuePartnersHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetAllRevenuePartnersHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetAllRevenuePartnersQueryKey(params);

  const getAllRevenuePartners = useGetAllRevenuePartnersHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetAllRevenuePartnersHook>>>
  > = ({signal}) => getAllRevenuePartners(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetAllRevenuePartnersQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetAllRevenuePartnersHook>>>
>;
export type GetAllRevenuePartnersQueryError = unknown;

export const useGetAllRevenuePartners = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllRevenuePartnersHook>>>,
  TError = unknown,
>(
  params: GetAllRevenuePartnersParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllRevenuePartnersHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetAllRevenuePartnersQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useGetAllRevenueVehicleTypePartnersHook = () => {
  const getAllRevenueVehicleTypePartners =
    useCustomInstance<FinancePartnerVehicleTypeSummary[]>();

  return (
    params: GetAllRevenueVehicleTypePartnersParams,
    signal?: AbortSignal,
  ) => {
    return getAllRevenueVehicleTypePartners({
      url: `/api/finance-partners/revenue/vehicle-type`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetAllRevenueVehicleTypePartnersQueryKey = (
  params: GetAllRevenueVehicleTypePartnersParams,
) =>
  [
    `/api/finance-partners/revenue/vehicle-type`,
    ...(params ? [params] : []),
  ] as const;

export const useGetAllRevenueVehicleTypePartnersQueryOptions = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useGetAllRevenueVehicleTypePartnersHook>>
  >,
  TError = unknown,
>(
  params: GetAllRevenueVehicleTypePartnersParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<
        ReturnType<ReturnType<typeof useGetAllRevenueVehicleTypePartnersHook>>
      >,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<
    ReturnType<ReturnType<typeof useGetAllRevenueVehicleTypePartnersHook>>
  >,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ??
    getGetAllRevenueVehicleTypePartnersQueryKey(params);

  const getAllRevenueVehicleTypePartners =
    useGetAllRevenueVehicleTypePartnersHook();

  const queryFn: QueryFunction<
    Awaited<
      ReturnType<ReturnType<typeof useGetAllRevenueVehicleTypePartnersHook>>
    >
  > = ({signal}) => getAllRevenueVehicleTypePartners(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetAllRevenueVehicleTypePartnersQueryResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof useGetAllRevenueVehicleTypePartnersHook>>
  >
>;
export type GetAllRevenueVehicleTypePartnersQueryError = unknown;

export const useGetAllRevenueVehicleTypePartners = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useGetAllRevenueVehicleTypePartnersHook>>
  >,
  TError = unknown,
>(
  params: GetAllRevenueVehicleTypePartnersParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<
        ReturnType<ReturnType<typeof useGetAllRevenueVehicleTypePartnersHook>>
      >,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetAllRevenueVehicleTypePartnersQueryOptions(
    params,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useGetAllRevenuePartnersDetailHook = () => {
  const getAllRevenuePartnersDetail = useCustomInstance<FinancePartner[]>();

  return (params: GetAllRevenuePartnersDetailParams, signal?: AbortSignal) => {
    return getAllRevenuePartnersDetail({
      url: `/api/finance-partners/revenue/detail`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetAllRevenuePartnersDetailQueryKey = (
  params: GetAllRevenuePartnersDetailParams,
) =>
  [
    `/api/finance-partners/revenue/detail`,
    ...(params ? [params] : []),
  ] as const;

export const useGetAllRevenuePartnersDetailQueryOptions = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useGetAllRevenuePartnersDetailHook>>
  >,
  TError = unknown,
>(
  params: GetAllRevenuePartnersDetailParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<
        ReturnType<ReturnType<typeof useGetAllRevenuePartnersDetailHook>>
      >,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetAllRevenuePartnersDetailHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetAllRevenuePartnersDetailQueryKey(params);

  const getAllRevenuePartnersDetail = useGetAllRevenuePartnersDetailHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetAllRevenuePartnersDetailHook>>>
  > = ({signal}) => getAllRevenuePartnersDetail(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetAllRevenuePartnersDetailQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetAllRevenuePartnersDetailHook>>>
>;
export type GetAllRevenuePartnersDetailQueryError = unknown;

export const useGetAllRevenuePartnersDetail = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useGetAllRevenuePartnersDetailHook>>
  >,
  TError = unknown,
>(
  params: GetAllRevenuePartnersDetailParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<
        ReturnType<ReturnType<typeof useGetAllRevenuePartnersDetailHook>>
      >,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetAllRevenuePartnersDetailQueryOptions(
    params,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useGetAllExpensePartnersHook = () => {
  const getAllExpensePartners = useCustomInstance<FinancePartnerSummary[]>();

  return (params: GetAllExpensePartnersParams, signal?: AbortSignal) => {
    return getAllExpensePartners({
      url: `/api/finance-partners/expense`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetAllExpensePartnersQueryKey = (
  params: GetAllExpensePartnersParams,
) => [`/api/finance-partners/expense`, ...(params ? [params] : [])] as const;

export const useGetAllExpensePartnersQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllExpensePartnersHook>>>,
  TError = unknown,
>(
  params: GetAllExpensePartnersParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllExpensePartnersHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetAllExpensePartnersHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetAllExpensePartnersQueryKey(params);

  const getAllExpensePartners = useGetAllExpensePartnersHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetAllExpensePartnersHook>>>
  > = ({signal}) => getAllExpensePartners(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetAllExpensePartnersQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetAllExpensePartnersHook>>>
>;
export type GetAllExpensePartnersQueryError = unknown;

export const useGetAllExpensePartners = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllExpensePartnersHook>>>,
  TError = unknown,
>(
  params: GetAllExpensePartnersParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllExpensePartnersHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetAllExpensePartnersQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useGetAllExpensePartnersDetailHook = () => {
  const getAllExpensePartnersDetail = useCustomInstance<FinancePartner[]>();

  return (params: GetAllExpensePartnersDetailParams, signal?: AbortSignal) => {
    return getAllExpensePartnersDetail({
      url: `/api/finance-partners/expense/detail`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetAllExpensePartnersDetailQueryKey = (
  params: GetAllExpensePartnersDetailParams,
) =>
  [
    `/api/finance-partners/expense/detail`,
    ...(params ? [params] : []),
  ] as const;

export const useGetAllExpensePartnersDetailQueryOptions = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useGetAllExpensePartnersDetailHook>>
  >,
  TError = unknown,
>(
  params: GetAllExpensePartnersDetailParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<
        ReturnType<ReturnType<typeof useGetAllExpensePartnersDetailHook>>
      >,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetAllExpensePartnersDetailHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetAllExpensePartnersDetailQueryKey(params);

  const getAllExpensePartnersDetail = useGetAllExpensePartnersDetailHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetAllExpensePartnersDetailHook>>>
  > = ({signal}) => getAllExpensePartnersDetail(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetAllExpensePartnersDetailQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetAllExpensePartnersDetailHook>>>
>;
export type GetAllExpensePartnersDetailQueryError = unknown;

export const useGetAllExpensePartnersDetail = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useGetAllExpensePartnersDetailHook>>
  >,
  TError = unknown,
>(
  params: GetAllExpensePartnersDetailParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<
        ReturnType<ReturnType<typeof useGetAllExpensePartnersDetailHook>>
      >,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetAllExpensePartnersDetailQueryOptions(
    params,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useCountBookingVehiclesHook = () => {
  const countBookingVehicles = useCustomInstance<number>();

  return (params?: CountBookingVehiclesParams, signal?: AbortSignal) => {
    return countBookingVehicles({
      url: `/api/booking-vehicles/count`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getCountBookingVehiclesQueryKey = (
  params?: CountBookingVehiclesParams,
) => [`/api/booking-vehicles/count`, ...(params ? [params] : [])] as const;

export const useCountBookingVehiclesQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useCountBookingVehiclesHook>>>,
  TError = unknown,
>(
  params?: CountBookingVehiclesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useCountBookingVehiclesHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useCountBookingVehiclesHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getCountBookingVehiclesQueryKey(params);

  const countBookingVehicles = useCountBookingVehiclesHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useCountBookingVehiclesHook>>>
  > = ({signal}) => countBookingVehicles(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type CountBookingVehiclesQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCountBookingVehiclesHook>>>
>;
export type CountBookingVehiclesQueryError = unknown;

export const useCountBookingVehicles = <
  TData = Awaited<ReturnType<ReturnType<typeof useCountBookingVehiclesHook>>>,
  TError = unknown,
>(
  params?: CountBookingVehiclesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useCountBookingVehiclesHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useCountBookingVehiclesQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useCountBookingVehicleToPartnersHook = () => {
  const countBookingVehicleToPartners = useCustomInstance<number>();

  return (
    params?: CountBookingVehicleToPartnersParams,
    signal?: AbortSignal,
  ) => {
    return countBookingVehicleToPartners({
      url: `/api/booking-vehicle-to-partners/count`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getCountBookingVehicleToPartnersQueryKey = (
  params?: CountBookingVehicleToPartnersParams,
) =>
  [
    `/api/booking-vehicle-to-partners/count`,
    ...(params ? [params] : []),
  ] as const;

export const useCountBookingVehicleToPartnersQueryOptions = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useCountBookingVehicleToPartnersHook>>
  >,
  TError = unknown,
>(
  params?: CountBookingVehicleToPartnersParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<
        ReturnType<ReturnType<typeof useCountBookingVehicleToPartnersHook>>
      >,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useCountBookingVehicleToPartnersHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getCountBookingVehicleToPartnersQueryKey(params);

  const countBookingVehicleToPartners = useCountBookingVehicleToPartnersHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useCountBookingVehicleToPartnersHook>>>
  > = ({signal}) => countBookingVehicleToPartners(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type CountBookingVehicleToPartnersQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCountBookingVehicleToPartnersHook>>>
>;
export type CountBookingVehicleToPartnersQueryError = unknown;

export const useCountBookingVehicleToPartners = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useCountBookingVehicleToPartnersHook>>
  >,
  TError = unknown,
>(
  params?: CountBookingVehicleToPartnersParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<
        ReturnType<ReturnType<typeof useCountBookingVehicleToPartnersHook>>
      >,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useCountBookingVehicleToPartnersQueryOptions(
    params,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useGetVehicleCostCategoryHook = () => {
  const getVehicleCostCategory = useCustomInstance<VehicleCostCategory[]>();

  return (signal?: AbortSignal) => {
    return getVehicleCostCategory({
      url: `/api/booking-vehicle-to-partner-costs/vehicle-cost-category`,
      method: 'get',
      signal,
    });
  };
};

export const getGetVehicleCostCategoryQueryKey = () =>
  [`/api/booking-vehicle-to-partner-costs/vehicle-cost-category`] as const;

export const useGetVehicleCostCategoryQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetVehicleCostCategoryHook>>>,
  TError = unknown,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useGetVehicleCostCategoryHook>>>,
    TError,
    TData
  >;
}): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetVehicleCostCategoryHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetVehicleCostCategoryQueryKey();

  const getVehicleCostCategory = useGetVehicleCostCategoryHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetVehicleCostCategoryHook>>>
  > = ({signal}) => getVehicleCostCategory(signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetVehicleCostCategoryQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetVehicleCostCategoryHook>>>
>;
export type GetVehicleCostCategoryQueryError = unknown;

export const useGetVehicleCostCategory = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetVehicleCostCategoryHook>>>,
  TError = unknown,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useGetVehicleCostCategoryHook>>>,
    TError,
    TData
  >;
}): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetVehicleCostCategoryQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useCountBookingVehicleToPartnerCostsHook = () => {
  const countBookingVehicleToPartnerCosts = useCustomInstance<number>();

  return (
    params?: CountBookingVehicleToPartnerCostsParams,
    signal?: AbortSignal,
  ) => {
    return countBookingVehicleToPartnerCosts({
      url: `/api/booking-vehicle-to-partner-costs/count`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getCountBookingVehicleToPartnerCostsQueryKey = (
  params?: CountBookingVehicleToPartnerCostsParams,
) =>
  [
    `/api/booking-vehicle-to-partner-costs/count`,
    ...(params ? [params] : []),
  ] as const;

export const useCountBookingVehicleToPartnerCostsQueryOptions = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useCountBookingVehicleToPartnerCostsHook>>
  >,
  TError = unknown,
>(
  params?: CountBookingVehicleToPartnerCostsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<
        ReturnType<ReturnType<typeof useCountBookingVehicleToPartnerCostsHook>>
      >,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<
    ReturnType<ReturnType<typeof useCountBookingVehicleToPartnerCostsHook>>
  >,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ??
    getCountBookingVehicleToPartnerCostsQueryKey(params);

  const countBookingVehicleToPartnerCosts =
    useCountBookingVehicleToPartnerCostsHook();

  const queryFn: QueryFunction<
    Awaited<
      ReturnType<ReturnType<typeof useCountBookingVehicleToPartnerCostsHook>>
    >
  > = ({signal}) => countBookingVehicleToPartnerCosts(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type CountBookingVehicleToPartnerCostsQueryResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof useCountBookingVehicleToPartnerCostsHook>>
  >
>;
export type CountBookingVehicleToPartnerCostsQueryError = unknown;

export const useCountBookingVehicleToPartnerCosts = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useCountBookingVehicleToPartnerCostsHook>>
  >,
  TError = unknown,
>(
  params?: CountBookingVehicleToPartnerCostsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<
        ReturnType<ReturnType<typeof useCountBookingVehicleToPartnerCostsHook>>
      >,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useCountBookingVehicleToPartnerCostsQueryOptions(
    params,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Get all booking partner
 */
export const useGetAllBookingPartnerViewHook = () => {
  const getAllBookingPartnerView = useCustomInstance<BookingPartnerView[]>();

  return (params?: GetAllBookingPartnerViewParams, signal?: AbortSignal) => {
    return getAllBookingPartnerView({
      url: `/api/booking-partner-view`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetAllBookingPartnerViewQueryKey = (
  params?: GetAllBookingPartnerViewParams,
) => [`/api/booking-partner-view`, ...(params ? [params] : [])] as const;

export const useGetAllBookingPartnerViewQueryOptions = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useGetAllBookingPartnerViewHook>>
  >,
  TError = unknown,
>(
  params?: GetAllBookingPartnerViewParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllBookingPartnerViewHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetAllBookingPartnerViewHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetAllBookingPartnerViewQueryKey(params);

  const getAllBookingPartnerView = useGetAllBookingPartnerViewHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetAllBookingPartnerViewHook>>>
  > = ({signal}) => getAllBookingPartnerView(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetAllBookingPartnerViewQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetAllBookingPartnerViewHook>>>
>;
export type GetAllBookingPartnerViewQueryError = unknown;

/**
 * @summary Get all booking partner
 */
export const useGetAllBookingPartnerView = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useGetAllBookingPartnerViewHook>>
  >,
  TError = unknown,
>(
  params?: GetAllBookingPartnerViewParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllBookingPartnerViewHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetAllBookingPartnerViewQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Only get booking partner create
 */
export const useGetBookingPartnerCreateHook = () => {
  const getBookingPartnerCreate = useCustomInstance<BookingPartnerView[]>();

  return (params?: GetBookingPartnerCreateParams, signal?: AbortSignal) => {
    return getBookingPartnerCreate({
      url: `/api/booking-partner-view/partner`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetBookingPartnerCreateQueryKey = (
  params?: GetBookingPartnerCreateParams,
) =>
  [`/api/booking-partner-view/partner`, ...(params ? [params] : [])] as const;

export const useGetBookingPartnerCreateQueryOptions = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useGetBookingPartnerCreateHook>>
  >,
  TError = unknown,
>(
  params?: GetBookingPartnerCreateParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetBookingPartnerCreateHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetBookingPartnerCreateHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetBookingPartnerCreateQueryKey(params);

  const getBookingPartnerCreate = useGetBookingPartnerCreateHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetBookingPartnerCreateHook>>>
  > = ({signal}) => getBookingPartnerCreate(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetBookingPartnerCreateQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetBookingPartnerCreateHook>>>
>;
export type GetBookingPartnerCreateQueryError = unknown;

/**
 * @summary Only get booking partner create
 */
export const useGetBookingPartnerCreate = <
  TData = Awaited<
    ReturnType<ReturnType<typeof useGetBookingPartnerCreateHook>>
  >,
  TError = unknown,
>(
  params?: GetBookingPartnerCreateParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetBookingPartnerCreateHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetBookingPartnerCreateQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useCountBookingNotesHook = () => {
  const countBookingNotes = useCustomInstance<number>();

  return (params?: CountBookingNotesParams, signal?: AbortSignal) => {
    return countBookingNotes({
      url: `/api/booking-notes/count`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getCountBookingNotesQueryKey = (
  params?: CountBookingNotesParams,
) => [`/api/booking-notes/count`, ...(params ? [params] : [])] as const;

export const useCountBookingNotesQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useCountBookingNotesHook>>>,
  TError = unknown,
>(
  params?: CountBookingNotesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useCountBookingNotesHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useCountBookingNotesHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getCountBookingNotesQueryKey(params);

  const countBookingNotes = useCountBookingNotesHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useCountBookingNotesHook>>>
  > = ({signal}) => countBookingNotes(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type CountBookingNotesQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCountBookingNotesHook>>>
>;
export type CountBookingNotesQueryError = unknown;

export const useCountBookingNotes = <
  TData = Awaited<ReturnType<ReturnType<typeof useCountBookingNotesHook>>>,
  TError = unknown,
>(
  params?: CountBookingNotesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useCountBookingNotesHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useCountBookingNotesQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useCountBookingCostsHook = () => {
  const countBookingCosts = useCustomInstance<number>();

  return (params?: CountBookingCostsParams, signal?: AbortSignal) => {
    return countBookingCosts({
      url: `/api/booking-costs/count`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getCountBookingCostsQueryKey = (
  params?: CountBookingCostsParams,
) => [`/api/booking-costs/count`, ...(params ? [params] : [])] as const;

export const useCountBookingCostsQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useCountBookingCostsHook>>>,
  TError = unknown,
>(
  params?: CountBookingCostsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useCountBookingCostsHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useCountBookingCostsHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getCountBookingCostsQueryKey(params);

  const countBookingCosts = useCountBookingCostsHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useCountBookingCostsHook>>>
  > = ({signal}) => countBookingCosts(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type CountBookingCostsQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCountBookingCostsHook>>>
>;
export type CountBookingCostsQueryError = unknown;

export const useCountBookingCosts = <
  TData = Awaited<ReturnType<ReturnType<typeof useCountBookingCostsHook>>>,
  TError = unknown,
>(
  params?: CountBookingCostsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useCountBookingCostsHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useCountBookingCostsQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useCountBookingCostTypesHook = () => {
  const countBookingCostTypes = useCustomInstance<number>();

  return (params?: CountBookingCostTypesParams, signal?: AbortSignal) => {
    return countBookingCostTypes({
      url: `/api/booking-cost-types/count`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getCountBookingCostTypesQueryKey = (
  params?: CountBookingCostTypesParams,
) => [`/api/booking-cost-types/count`, ...(params ? [params] : [])] as const;

export const useCountBookingCostTypesQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useCountBookingCostTypesHook>>>,
  TError = unknown,
>(
  params?: CountBookingCostTypesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useCountBookingCostTypesHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useCountBookingCostTypesHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getCountBookingCostTypesQueryKey(params);

  const countBookingCostTypes = useCountBookingCostTypesHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useCountBookingCostTypesHook>>>
  > = ({signal}) => countBookingCostTypes(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type CountBookingCostTypesQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCountBookingCostTypesHook>>>
>;
export type CountBookingCostTypesQueryError = unknown;

export const useCountBookingCostTypes = <
  TData = Awaited<ReturnType<ReturnType<typeof useCountBookingCostTypesHook>>>,
  TError = unknown,
>(
  params?: CountBookingCostTypesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useCountBookingCostTypesHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useCountBookingCostTypesQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useActivateAccountHook = () => {
  const activateAccount = useCustomInstance<void>();

  return (params: ActivateAccountParams, signal?: AbortSignal) => {
    return activateAccount({
      url: `/api/activate`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getActivateAccountQueryKey = (params: ActivateAccountParams) =>
  [`/api/activate`, ...(params ? [params] : [])] as const;

export const useActivateAccountQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useActivateAccountHook>>>,
  TError = unknown,
>(
  params: ActivateAccountParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useActivateAccountHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useActivateAccountHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getActivateAccountQueryKey(params);

  const activateAccount = useActivateAccountHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useActivateAccountHook>>>
  > = ({signal}) => activateAccount(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type ActivateAccountQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useActivateAccountHook>>>
>;
export type ActivateAccountQueryError = unknown;

export const useActivateAccount = <
  TData = Awaited<ReturnType<ReturnType<typeof useActivateAccountHook>>>,
  TError = unknown,
>(
  params: ActivateAccountParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useActivateAccountHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useActivateAccountQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useGetAllUsersHook = () => {
  const getAllUsers = useCustomInstance<PartnerUserDTO[]>();

  return (params: GetAllUsersParams, signal?: AbortSignal) => {
    return getAllUsers({
      url: `/api/account/all`,
      method: 'get',
      params,
      signal,
    });
  };
};

export const getGetAllUsersQueryKey = (params: GetAllUsersParams) =>
  [`/api/account/all`, ...(params ? [params] : [])] as const;

export const useGetAllUsersQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllUsersHook>>>,
  TError = unknown,
>(
  params: GetAllUsersParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllUsersHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useGetAllUsersHook>>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetAllUsersQueryKey(params);

  const getAllUsers = useGetAllUsersHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetAllUsersHook>>>
  > = ({signal}) => getAllUsers(params, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type GetAllUsersQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetAllUsersHook>>>
>;
export type GetAllUsersQueryError = unknown;

export const useGetAllUsers = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllUsersHook>>>,
  TError = unknown,
>(
  params: GetAllUsersParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetAllUsersHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = useGetAllUsersQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};
