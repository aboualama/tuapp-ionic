/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateCityInput = {
  id?: string | null,
  name: string,
};

export type UpdateCityInput = {
  id: string,
  name?: string | null,
};

export type DeleteCityInput = {
  id?: string | null,
};

export type CreateBranchInput = {
  id?: string | null,
  branch: string,
  open_time: string,
  close_time: string,
  branchCityId?: string | null,
};

export type UpdateBranchInput = {
  id: string,
  branch?: string | null,
  open_time?: string | null,
  close_time?: string | null,
  branchCityId?: string | null,
};

export type DeleteBranchInput = {
  id?: string | null,
};

export type CreateServiceInput = {
  id?: string | null,
  title: string,
  price?: number | null,
  serviceBranchId?: string | null,
};

export type UpdateServiceInput = {
  id: string,
  title?: string | null,
  price?: number | null,
  serviceBranchId?: string | null,
};

export type DeleteServiceInput = {
  id?: string | null,
};

export type CreateWorkerInput = {
  id?: string | null,
  name: string,
  email: string,
  phone: string,
  workerServiceId?: string | null,
};

export type UpdateWorkerInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
  workerServiceId?: string | null,
};

export type DeleteWorkerInput = {
  id?: string | null,
};

export type CreateHourWorkInput = {
  id?: string | null,
  start_time: string,
  end_time: string,
  days?: MetaDayInput | null,
  hourWorkWorkerId?: string | null,
};

export type MetaDayInput = {
  days?: Day | null,
};

export enum Day {
  MO = "MO",
  TU = "TU",
  WE = "WE",
  TH = "TH",
  FR = "FR",
  SA = "SA",
  SU = "SU",
}


export type UpdateHourWorkInput = {
  id: string,
  start_time?: string | null,
  end_time?: string | null,
  days?: MetaDayInput | null,
  hourWorkWorkerId?: string | null,
};

export type DeleteHourWorkInput = {
  id?: string | null,
};

export type CreatePaymentInput = {
  id?: string | null,
  name: string,
  client_id?: number | null,
};

export type UpdatePaymentInput = {
  id: string,
  name?: string | null,
  client_id?: number | null,
};

export type DeletePaymentInput = {
  id?: string | null,
};

export type CreateAppointmentInput = {
  id?: string | null,
  client_id: string,
  start_time?: string | null,
  end_time?: string | null,
  date?: string | null,
  price?: number | null,
  status?: boolean | null,
  appointmentWorkerId?: string | null,
  appointmentServiceId?: string | null,
  appointmentPaymentId?: string | null,
};

export type UpdateAppointmentInput = {
  id: string,
  client_id?: string | null,
  start_time?: string | null,
  end_time?: string | null,
  date?: string | null,
  price?: number | null,
  status?: boolean | null,
  appointmentWorkerId?: string | null,
  appointmentServiceId?: string | null,
  appointmentPaymentId?: string | null,
};

export type DeleteAppointmentInput = {
  id?: string | null,
};

export type ModelCityFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  and?: Array< ModelCityFilterInput | null > | null,
  or?: Array< ModelCityFilterInput | null > | null,
  not?: ModelCityFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelBranchFilterInput = {
  id?: ModelIDFilterInput | null,
  branch?: ModelStringFilterInput | null,
  open_time?: ModelStringFilterInput | null,
  close_time?: ModelStringFilterInput | null,
  and?: Array< ModelBranchFilterInput | null > | null,
  or?: Array< ModelBranchFilterInput | null > | null,
  not?: ModelBranchFilterInput | null,
};

export type ModelServiceFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  price?: ModelFloatFilterInput | null,
  and?: Array< ModelServiceFilterInput | null > | null,
  or?: Array< ModelServiceFilterInput | null > | null,
  not?: ModelServiceFilterInput | null,
};

export type ModelFloatFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type ModelWorkerFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  email?: ModelStringFilterInput | null,
  phone?: ModelStringFilterInput | null,
  and?: Array< ModelWorkerFilterInput | null > | null,
  or?: Array< ModelWorkerFilterInput | null > | null,
  not?: ModelWorkerFilterInput | null,
};

export type ModelHourWorkFilterInput = {
  id?: ModelIDFilterInput | null,
  start_time?: ModelStringFilterInput | null,
  end_time?: ModelStringFilterInput | null,
  and?: Array< ModelHourWorkFilterInput | null > | null,
  or?: Array< ModelHourWorkFilterInput | null > | null,
  not?: ModelHourWorkFilterInput | null,
};

export type ModelPaymentFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  client_id?: ModelIntFilterInput | null,
  and?: Array< ModelPaymentFilterInput | null > | null,
  or?: Array< ModelPaymentFilterInput | null > | null,
  not?: ModelPaymentFilterInput | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type ModelAppointmentFilterInput = {
  id?: ModelIDFilterInput | null,
  client_id?: ModelStringFilterInput | null,
  start_time?: ModelStringFilterInput | null,
  end_time?: ModelStringFilterInput | null,
  date?: ModelStringFilterInput | null,
  price?: ModelFloatFilterInput | null,
  status?: ModelBooleanFilterInput | null,
  and?: Array< ModelAppointmentFilterInput | null > | null,
  or?: Array< ModelAppointmentFilterInput | null > | null,
  not?: ModelAppointmentFilterInput | null,
};

export type ModelBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateCityMutationVariables = {
  input: CreateCityInput,
};

export type CreateCityMutation = {
  createCity:  {
    __typename: "City",
    id: string,
    name: string,
    branchs:  {
      __typename: "ModelBranchConnection",
      items:  Array< {
        __typename: "Branch",
        id: string,
        branch: string,
        open_time: string,
        close_time: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateCityMutationVariables = {
  input: UpdateCityInput,
};

export type UpdateCityMutation = {
  updateCity:  {
    __typename: "City",
    id: string,
    name: string,
    branchs:  {
      __typename: "ModelBranchConnection",
      items:  Array< {
        __typename: "Branch",
        id: string,
        branch: string,
        open_time: string,
        close_time: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteCityMutationVariables = {
  input: DeleteCityInput,
};

export type DeleteCityMutation = {
  deleteCity:  {
    __typename: "City",
    id: string,
    name: string,
    branchs:  {
      __typename: "ModelBranchConnection",
      items:  Array< {
        __typename: "Branch",
        id: string,
        branch: string,
        open_time: string,
        close_time: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateBranchMutationVariables = {
  input: CreateBranchInput,
};

export type CreateBranchMutation = {
  createBranch:  {
    __typename: "Branch",
    id: string,
    branch: string,
    open_time: string,
    close_time: string,
    city:  {
      __typename: "City",
      id: string,
      name: string,
      branchs:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    } | null,
    services:  {
      __typename: "ModelServiceConnection",
      items:  Array< {
        __typename: "Service",
        id: string,
        title: string,
        price: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateBranchMutationVariables = {
  input: UpdateBranchInput,
};

export type UpdateBranchMutation = {
  updateBranch:  {
    __typename: "Branch",
    id: string,
    branch: string,
    open_time: string,
    close_time: string,
    city:  {
      __typename: "City",
      id: string,
      name: string,
      branchs:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    } | null,
    services:  {
      __typename: "ModelServiceConnection",
      items:  Array< {
        __typename: "Service",
        id: string,
        title: string,
        price: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteBranchMutationVariables = {
  input: DeleteBranchInput,
};

export type DeleteBranchMutation = {
  deleteBranch:  {
    __typename: "Branch",
    id: string,
    branch: string,
    open_time: string,
    close_time: string,
    city:  {
      __typename: "City",
      id: string,
      name: string,
      branchs:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    } | null,
    services:  {
      __typename: "ModelServiceConnection",
      items:  Array< {
        __typename: "Service",
        id: string,
        title: string,
        price: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateServiceMutationVariables = {
  input: CreateServiceInput,
};

export type CreateServiceMutation = {
  createService:  {
    __typename: "Service",
    id: string,
    title: string,
    price: number | null,
    branch:  {
      __typename: "Branch",
      id: string,
      branch: string,
      open_time: string,
      close_time: string,
      city:  {
        __typename: "City",
        id: string,
        name: string,
      } | null,
      services:  {
        __typename: "ModelServiceConnection",
        nextToken: string | null,
      } | null,
    } | null,
    workers:  {
      __typename: "ModelWorkerConnection",
      items:  Array< {
        __typename: "Worker",
        id: string,
        name: string,
        email: string,
        phone: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    appointments:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        client_id: string,
        start_time: string | null,
        end_time: string | null,
        date: string | null,
        price: number | null,
        status: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateServiceMutationVariables = {
  input: UpdateServiceInput,
};

export type UpdateServiceMutation = {
  updateService:  {
    __typename: "Service",
    id: string,
    title: string,
    price: number | null,
    branch:  {
      __typename: "Branch",
      id: string,
      branch: string,
      open_time: string,
      close_time: string,
      city:  {
        __typename: "City",
        id: string,
        name: string,
      } | null,
      services:  {
        __typename: "ModelServiceConnection",
        nextToken: string | null,
      } | null,
    } | null,
    workers:  {
      __typename: "ModelWorkerConnection",
      items:  Array< {
        __typename: "Worker",
        id: string,
        name: string,
        email: string,
        phone: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    appointments:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        client_id: string,
        start_time: string | null,
        end_time: string | null,
        date: string | null,
        price: number | null,
        status: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteServiceMutationVariables = {
  input: DeleteServiceInput,
};

export type DeleteServiceMutation = {
  deleteService:  {
    __typename: "Service",
    id: string,
    title: string,
    price: number | null,
    branch:  {
      __typename: "Branch",
      id: string,
      branch: string,
      open_time: string,
      close_time: string,
      city:  {
        __typename: "City",
        id: string,
        name: string,
      } | null,
      services:  {
        __typename: "ModelServiceConnection",
        nextToken: string | null,
      } | null,
    } | null,
    workers:  {
      __typename: "ModelWorkerConnection",
      items:  Array< {
        __typename: "Worker",
        id: string,
        name: string,
        email: string,
        phone: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    appointments:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        client_id: string,
        start_time: string | null,
        end_time: string | null,
        date: string | null,
        price: number | null,
        status: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateWorkerMutationVariables = {
  input: CreateWorkerInput,
};

export type CreateWorkerMutation = {
  createWorker:  {
    __typename: "Worker",
    id: string,
    name: string,
    email: string,
    phone: string,
    service:  {
      __typename: "Service",
      id: string,
      title: string,
      price: number | null,
      branch:  {
        __typename: "Branch",
        id: string,
        branch: string,
        open_time: string,
        close_time: string,
      } | null,
      workers:  {
        __typename: "ModelWorkerConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    workhours:  {
      __typename: "ModelHourWorkConnection",
      items:  Array< {
        __typename: "HourWork",
        id: string,
        start_time: string,
        end_time: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    appointments:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        client_id: string,
        start_time: string | null,
        end_time: string | null,
        date: string | null,
        price: number | null,
        status: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateWorkerMutationVariables = {
  input: UpdateWorkerInput,
};

export type UpdateWorkerMutation = {
  updateWorker:  {
    __typename: "Worker",
    id: string,
    name: string,
    email: string,
    phone: string,
    service:  {
      __typename: "Service",
      id: string,
      title: string,
      price: number | null,
      branch:  {
        __typename: "Branch",
        id: string,
        branch: string,
        open_time: string,
        close_time: string,
      } | null,
      workers:  {
        __typename: "ModelWorkerConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    workhours:  {
      __typename: "ModelHourWorkConnection",
      items:  Array< {
        __typename: "HourWork",
        id: string,
        start_time: string,
        end_time: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    appointments:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        client_id: string,
        start_time: string | null,
        end_time: string | null,
        date: string | null,
        price: number | null,
        status: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteWorkerMutationVariables = {
  input: DeleteWorkerInput,
};

export type DeleteWorkerMutation = {
  deleteWorker:  {
    __typename: "Worker",
    id: string,
    name: string,
    email: string,
    phone: string,
    service:  {
      __typename: "Service",
      id: string,
      title: string,
      price: number | null,
      branch:  {
        __typename: "Branch",
        id: string,
        branch: string,
        open_time: string,
        close_time: string,
      } | null,
      workers:  {
        __typename: "ModelWorkerConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    workhours:  {
      __typename: "ModelHourWorkConnection",
      items:  Array< {
        __typename: "HourWork",
        id: string,
        start_time: string,
        end_time: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    appointments:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        client_id: string,
        start_time: string | null,
        end_time: string | null,
        date: string | null,
        price: number | null,
        status: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateHourWorkMutationVariables = {
  input: CreateHourWorkInput,
};

export type CreateHourWorkMutation = {
  createHourWork:  {
    __typename: "HourWork",
    id: string,
    start_time: string,
    end_time: string,
    days:  {
      __typename: "MetaDay",
      days: Day | null,
    } | null,
    worker:  {
      __typename: "Worker",
      id: string,
      name: string,
      email: string,
      phone: string,
      service:  {
        __typename: "Service",
        id: string,
        title: string,
        price: number | null,
      } | null,
      workhours:  {
        __typename: "ModelHourWorkConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateHourWorkMutationVariables = {
  input: UpdateHourWorkInput,
};

export type UpdateHourWorkMutation = {
  updateHourWork:  {
    __typename: "HourWork",
    id: string,
    start_time: string,
    end_time: string,
    days:  {
      __typename: "MetaDay",
      days: Day | null,
    } | null,
    worker:  {
      __typename: "Worker",
      id: string,
      name: string,
      email: string,
      phone: string,
      service:  {
        __typename: "Service",
        id: string,
        title: string,
        price: number | null,
      } | null,
      workhours:  {
        __typename: "ModelHourWorkConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteHourWorkMutationVariables = {
  input: DeleteHourWorkInput,
};

export type DeleteHourWorkMutation = {
  deleteHourWork:  {
    __typename: "HourWork",
    id: string,
    start_time: string,
    end_time: string,
    days:  {
      __typename: "MetaDay",
      days: Day | null,
    } | null,
    worker:  {
      __typename: "Worker",
      id: string,
      name: string,
      email: string,
      phone: string,
      service:  {
        __typename: "Service",
        id: string,
        title: string,
        price: number | null,
      } | null,
      workhours:  {
        __typename: "ModelHourWorkConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreatePaymentMutationVariables = {
  input: CreatePaymentInput,
};

export type CreatePaymentMutation = {
  createPayment:  {
    __typename: "Payment",
    id: string,
    name: string,
    client_id: number | null,
    appointments:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        client_id: string,
        start_time: string | null,
        end_time: string | null,
        date: string | null,
        price: number | null,
        status: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdatePaymentMutationVariables = {
  input: UpdatePaymentInput,
};

export type UpdatePaymentMutation = {
  updatePayment:  {
    __typename: "Payment",
    id: string,
    name: string,
    client_id: number | null,
    appointments:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        client_id: string,
        start_time: string | null,
        end_time: string | null,
        date: string | null,
        price: number | null,
        status: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeletePaymentMutationVariables = {
  input: DeletePaymentInput,
};

export type DeletePaymentMutation = {
  deletePayment:  {
    __typename: "Payment",
    id: string,
    name: string,
    client_id: number | null,
    appointments:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        client_id: string,
        start_time: string | null,
        end_time: string | null,
        date: string | null,
        price: number | null,
        status: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateAppointmentMutationVariables = {
  input: CreateAppointmentInput,
};

export type CreateAppointmentMutation = {
  createAppointment:  {
    __typename: "Appointment",
    id: string,
    client_id: string,
    worker:  {
      __typename: "Worker",
      id: string,
      name: string,
      email: string,
      phone: string,
      service:  {
        __typename: "Service",
        id: string,
        title: string,
        price: number | null,
      } | null,
      workhours:  {
        __typename: "ModelHourWorkConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      title: string,
      price: number | null,
      branch:  {
        __typename: "Branch",
        id: string,
        branch: string,
        open_time: string,
        close_time: string,
      } | null,
      workers:  {
        __typename: "ModelWorkerConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    start_time: string | null,
    end_time: string | null,
    date: string | null,
    price: number | null,
    status: boolean | null,
    payment:  {
      __typename: "Payment",
      id: string,
      name: string,
      client_id: number | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type UpdateAppointmentMutationVariables = {
  input: UpdateAppointmentInput,
};

export type UpdateAppointmentMutation = {
  updateAppointment:  {
    __typename: "Appointment",
    id: string,
    client_id: string,
    worker:  {
      __typename: "Worker",
      id: string,
      name: string,
      email: string,
      phone: string,
      service:  {
        __typename: "Service",
        id: string,
        title: string,
        price: number | null,
      } | null,
      workhours:  {
        __typename: "ModelHourWorkConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      title: string,
      price: number | null,
      branch:  {
        __typename: "Branch",
        id: string,
        branch: string,
        open_time: string,
        close_time: string,
      } | null,
      workers:  {
        __typename: "ModelWorkerConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    start_time: string | null,
    end_time: string | null,
    date: string | null,
    price: number | null,
    status: boolean | null,
    payment:  {
      __typename: "Payment",
      id: string,
      name: string,
      client_id: number | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type DeleteAppointmentMutationVariables = {
  input: DeleteAppointmentInput,
};

export type DeleteAppointmentMutation = {
  deleteAppointment:  {
    __typename: "Appointment",
    id: string,
    client_id: string,
    worker:  {
      __typename: "Worker",
      id: string,
      name: string,
      email: string,
      phone: string,
      service:  {
        __typename: "Service",
        id: string,
        title: string,
        price: number | null,
      } | null,
      workhours:  {
        __typename: "ModelHourWorkConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      title: string,
      price: number | null,
      branch:  {
        __typename: "Branch",
        id: string,
        branch: string,
        open_time: string,
        close_time: string,
      } | null,
      workers:  {
        __typename: "ModelWorkerConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    start_time: string | null,
    end_time: string | null,
    date: string | null,
    price: number | null,
    status: boolean | null,
    payment:  {
      __typename: "Payment",
      id: string,
      name: string,
      client_id: number | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type GetCityQueryVariables = {
  id: string,
};

export type GetCityQuery = {
  getCity:  {
    __typename: "City",
    id: string,
    name: string,
    branchs:  {
      __typename: "ModelBranchConnection",
      items:  Array< {
        __typename: "Branch",
        id: string,
        branch: string,
        open_time: string,
        close_time: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListCitysQueryVariables = {
  filter?: ModelCityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCitysQuery = {
  listCitys:  {
    __typename: "ModelCityConnection",
    items:  Array< {
      __typename: "City",
      id: string,
      name: string,
      branchs:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetBranchQueryVariables = {
  id: string,
};

export type GetBranchQuery = {
  getBranch:  {
    __typename: "Branch",
    id: string,
    branch: string,
    open_time: string,
    close_time: string,
    city:  {
      __typename: "City",
      id: string,
      name: string,
      branchs:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    } | null,
    services:  {
      __typename: "ModelServiceConnection",
      items:  Array< {
        __typename: "Service",
        id: string,
        title: string,
        price: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListBranchsQueryVariables = {
  filter?: ModelBranchFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBranchsQuery = {
  listBranchs:  {
    __typename: "ModelBranchConnection",
    items:  Array< {
      __typename: "Branch",
      id: string,
      branch: string,
      open_time: string,
      close_time: string,
      city:  {
        __typename: "City",
        id: string,
        name: string,
      } | null,
      services:  {
        __typename: "ModelServiceConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetServiceQueryVariables = {
  id: string,
};

export type GetServiceQuery = {
  getService:  {
    __typename: "Service",
    id: string,
    title: string,
    price: number | null,
    branch:  {
      __typename: "Branch",
      id: string,
      branch: string,
      open_time: string,
      close_time: string,
      city:  {
        __typename: "City",
        id: string,
        name: string,
      } | null,
      services:  {
        __typename: "ModelServiceConnection",
        nextToken: string | null,
      } | null,
    } | null,
    workers:  {
      __typename: "ModelWorkerConnection",
      items:  Array< {
        __typename: "Worker",
        id: string,
        name: string,
        email: string,
        phone: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    appointments:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        client_id: string,
        start_time: string | null,
        end_time: string | null,
        date: string | null,
        price: number | null,
        status: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListServicesQueryVariables = {
  filter?: ModelServiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListServicesQuery = {
  listServices:  {
    __typename: "ModelServiceConnection",
    items:  Array< {
      __typename: "Service",
      id: string,
      title: string,
      price: number | null,
      branch:  {
        __typename: "Branch",
        id: string,
        branch: string,
        open_time: string,
        close_time: string,
      } | null,
      workers:  {
        __typename: "ModelWorkerConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetWorkerQueryVariables = {
  id: string,
};

export type GetWorkerQuery = {
  getWorker:  {
    __typename: "Worker",
    id: string,
    name: string,
    email: string,
    phone: string,
    service:  {
      __typename: "Service",
      id: string,
      title: string,
      price: number | null,
      branch:  {
        __typename: "Branch",
        id: string,
        branch: string,
        open_time: string,
        close_time: string,
      } | null,
      workers:  {
        __typename: "ModelWorkerConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    workhours:  {
      __typename: "ModelHourWorkConnection",
      items:  Array< {
        __typename: "HourWork",
        id: string,
        start_time: string,
        end_time: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    appointments:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        client_id: string,
        start_time: string | null,
        end_time: string | null,
        date: string | null,
        price: number | null,
        status: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListWorkersQueryVariables = {
  filter?: ModelWorkerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkersQuery = {
  listWorkers:  {
    __typename: "ModelWorkerConnection",
    items:  Array< {
      __typename: "Worker",
      id: string,
      name: string,
      email: string,
      phone: string,
      service:  {
        __typename: "Service",
        id: string,
        title: string,
        price: number | null,
      } | null,
      workhours:  {
        __typename: "ModelHourWorkConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetHourWorkQueryVariables = {
  id: string,
};

export type GetHourWorkQuery = {
  getHourWork:  {
    __typename: "HourWork",
    id: string,
    start_time: string,
    end_time: string,
    days:  {
      __typename: "MetaDay",
      days: Day | null,
    } | null,
    worker:  {
      __typename: "Worker",
      id: string,
      name: string,
      email: string,
      phone: string,
      service:  {
        __typename: "Service",
        id: string,
        title: string,
        price: number | null,
      } | null,
      workhours:  {
        __typename: "ModelHourWorkConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListHourWorksQueryVariables = {
  filter?: ModelHourWorkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHourWorksQuery = {
  listHourWorks:  {
    __typename: "ModelHourWorkConnection",
    items:  Array< {
      __typename: "HourWork",
      id: string,
      start_time: string,
      end_time: string,
      days:  {
        __typename: "MetaDay",
        days: Day | null,
      } | null,
      worker:  {
        __typename: "Worker",
        id: string,
        name: string,
        email: string,
        phone: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPaymentQueryVariables = {
  id: string,
};

export type GetPaymentQuery = {
  getPayment:  {
    __typename: "Payment",
    id: string,
    name: string,
    client_id: number | null,
    appointments:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        client_id: string,
        start_time: string | null,
        end_time: string | null,
        date: string | null,
        price: number | null,
        status: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListPaymentsQueryVariables = {
  filter?: ModelPaymentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPaymentsQuery = {
  listPayments:  {
    __typename: "ModelPaymentConnection",
    items:  Array< {
      __typename: "Payment",
      id: string,
      name: string,
      client_id: number | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetAppointmentQueryVariables = {
  id: string,
};

export type GetAppointmentQuery = {
  getAppointment:  {
    __typename: "Appointment",
    id: string,
    client_id: string,
    worker:  {
      __typename: "Worker",
      id: string,
      name: string,
      email: string,
      phone: string,
      service:  {
        __typename: "Service",
        id: string,
        title: string,
        price: number | null,
      } | null,
      workhours:  {
        __typename: "ModelHourWorkConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      title: string,
      price: number | null,
      branch:  {
        __typename: "Branch",
        id: string,
        branch: string,
        open_time: string,
        close_time: string,
      } | null,
      workers:  {
        __typename: "ModelWorkerConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    start_time: string | null,
    end_time: string | null,
    date: string | null,
    price: number | null,
    status: boolean | null,
    payment:  {
      __typename: "Payment",
      id: string,
      name: string,
      client_id: number | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type ListAppointmentsQueryVariables = {
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAppointmentsQuery = {
  listAppointments:  {
    __typename: "ModelAppointmentConnection",
    items:  Array< {
      __typename: "Appointment",
      id: string,
      client_id: string,
      worker:  {
        __typename: "Worker",
        id: string,
        name: string,
        email: string,
        phone: string,
      } | null,
      service:  {
        __typename: "Service",
        id: string,
        title: string,
        price: number | null,
      } | null,
      start_time: string | null,
      end_time: string | null,
      date: string | null,
      price: number | null,
      status: boolean | null,
      payment:  {
        __typename: "Payment",
        id: string,
        name: string,
        client_id: number | null,
      } | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateCitySubscription = {
  onCreateCity:  {
    __typename: "City",
    id: string,
    name: string,
    branchs:  {
      __typename: "ModelBranchConnection",
      items:  Array< {
        __typename: "Branch",
        id: string,
        branch: string,
        open_time: string,
        close_time: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateCitySubscription = {
  onUpdateCity:  {
    __typename: "City",
    id: string,
    name: string,
    branchs:  {
      __typename: "ModelBranchConnection",
      items:  Array< {
        __typename: "Branch",
        id: string,
        branch: string,
        open_time: string,
        close_time: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteCitySubscription = {
  onDeleteCity:  {
    __typename: "City",
    id: string,
    name: string,
    branchs:  {
      __typename: "ModelBranchConnection",
      items:  Array< {
        __typename: "Branch",
        id: string,
        branch: string,
        open_time: string,
        close_time: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateBranchSubscription = {
  onCreateBranch:  {
    __typename: "Branch",
    id: string,
    branch: string,
    open_time: string,
    close_time: string,
    city:  {
      __typename: "City",
      id: string,
      name: string,
      branchs:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    } | null,
    services:  {
      __typename: "ModelServiceConnection",
      items:  Array< {
        __typename: "Service",
        id: string,
        title: string,
        price: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateBranchSubscription = {
  onUpdateBranch:  {
    __typename: "Branch",
    id: string,
    branch: string,
    open_time: string,
    close_time: string,
    city:  {
      __typename: "City",
      id: string,
      name: string,
      branchs:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    } | null,
    services:  {
      __typename: "ModelServiceConnection",
      items:  Array< {
        __typename: "Service",
        id: string,
        title: string,
        price: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteBranchSubscription = {
  onDeleteBranch:  {
    __typename: "Branch",
    id: string,
    branch: string,
    open_time: string,
    close_time: string,
    city:  {
      __typename: "City",
      id: string,
      name: string,
      branchs:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    } | null,
    services:  {
      __typename: "ModelServiceConnection",
      items:  Array< {
        __typename: "Service",
        id: string,
        title: string,
        price: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateServiceSubscription = {
  onCreateService:  {
    __typename: "Service",
    id: string,
    title: string,
    price: number | null,
    branch:  {
      __typename: "Branch",
      id: string,
      branch: string,
      open_time: string,
      close_time: string,
      city:  {
        __typename: "City",
        id: string,
        name: string,
      } | null,
      services:  {
        __typename: "ModelServiceConnection",
        nextToken: string | null,
      } | null,
    } | null,
    workers:  {
      __typename: "ModelWorkerConnection",
      items:  Array< {
        __typename: "Worker",
        id: string,
        name: string,
        email: string,
        phone: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    appointments:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        client_id: string,
        start_time: string | null,
        end_time: string | null,
        date: string | null,
        price: number | null,
        status: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateServiceSubscription = {
  onUpdateService:  {
    __typename: "Service",
    id: string,
    title: string,
    price: number | null,
    branch:  {
      __typename: "Branch",
      id: string,
      branch: string,
      open_time: string,
      close_time: string,
      city:  {
        __typename: "City",
        id: string,
        name: string,
      } | null,
      services:  {
        __typename: "ModelServiceConnection",
        nextToken: string | null,
      } | null,
    } | null,
    workers:  {
      __typename: "ModelWorkerConnection",
      items:  Array< {
        __typename: "Worker",
        id: string,
        name: string,
        email: string,
        phone: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    appointments:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        client_id: string,
        start_time: string | null,
        end_time: string | null,
        date: string | null,
        price: number | null,
        status: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteServiceSubscription = {
  onDeleteService:  {
    __typename: "Service",
    id: string,
    title: string,
    price: number | null,
    branch:  {
      __typename: "Branch",
      id: string,
      branch: string,
      open_time: string,
      close_time: string,
      city:  {
        __typename: "City",
        id: string,
        name: string,
      } | null,
      services:  {
        __typename: "ModelServiceConnection",
        nextToken: string | null,
      } | null,
    } | null,
    workers:  {
      __typename: "ModelWorkerConnection",
      items:  Array< {
        __typename: "Worker",
        id: string,
        name: string,
        email: string,
        phone: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    appointments:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        client_id: string,
        start_time: string | null,
        end_time: string | null,
        date: string | null,
        price: number | null,
        status: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateWorkerSubscription = {
  onCreateWorker:  {
    __typename: "Worker",
    id: string,
    name: string,
    email: string,
    phone: string,
    service:  {
      __typename: "Service",
      id: string,
      title: string,
      price: number | null,
      branch:  {
        __typename: "Branch",
        id: string,
        branch: string,
        open_time: string,
        close_time: string,
      } | null,
      workers:  {
        __typename: "ModelWorkerConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    workhours:  {
      __typename: "ModelHourWorkConnection",
      items:  Array< {
        __typename: "HourWork",
        id: string,
        start_time: string,
        end_time: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    appointments:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        client_id: string,
        start_time: string | null,
        end_time: string | null,
        date: string | null,
        price: number | null,
        status: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateWorkerSubscription = {
  onUpdateWorker:  {
    __typename: "Worker",
    id: string,
    name: string,
    email: string,
    phone: string,
    service:  {
      __typename: "Service",
      id: string,
      title: string,
      price: number | null,
      branch:  {
        __typename: "Branch",
        id: string,
        branch: string,
        open_time: string,
        close_time: string,
      } | null,
      workers:  {
        __typename: "ModelWorkerConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    workhours:  {
      __typename: "ModelHourWorkConnection",
      items:  Array< {
        __typename: "HourWork",
        id: string,
        start_time: string,
        end_time: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    appointments:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        client_id: string,
        start_time: string | null,
        end_time: string | null,
        date: string | null,
        price: number | null,
        status: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteWorkerSubscription = {
  onDeleteWorker:  {
    __typename: "Worker",
    id: string,
    name: string,
    email: string,
    phone: string,
    service:  {
      __typename: "Service",
      id: string,
      title: string,
      price: number | null,
      branch:  {
        __typename: "Branch",
        id: string,
        branch: string,
        open_time: string,
        close_time: string,
      } | null,
      workers:  {
        __typename: "ModelWorkerConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    workhours:  {
      __typename: "ModelHourWorkConnection",
      items:  Array< {
        __typename: "HourWork",
        id: string,
        start_time: string,
        end_time: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    appointments:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        client_id: string,
        start_time: string | null,
        end_time: string | null,
        date: string | null,
        price: number | null,
        status: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateHourWorkSubscription = {
  onCreateHourWork:  {
    __typename: "HourWork",
    id: string,
    start_time: string,
    end_time: string,
    days:  {
      __typename: "MetaDay",
      days: Day | null,
    } | null,
    worker:  {
      __typename: "Worker",
      id: string,
      name: string,
      email: string,
      phone: string,
      service:  {
        __typename: "Service",
        id: string,
        title: string,
        price: number | null,
      } | null,
      workhours:  {
        __typename: "ModelHourWorkConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateHourWorkSubscription = {
  onUpdateHourWork:  {
    __typename: "HourWork",
    id: string,
    start_time: string,
    end_time: string,
    days:  {
      __typename: "MetaDay",
      days: Day | null,
    } | null,
    worker:  {
      __typename: "Worker",
      id: string,
      name: string,
      email: string,
      phone: string,
      service:  {
        __typename: "Service",
        id: string,
        title: string,
        price: number | null,
      } | null,
      workhours:  {
        __typename: "ModelHourWorkConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteHourWorkSubscription = {
  onDeleteHourWork:  {
    __typename: "HourWork",
    id: string,
    start_time: string,
    end_time: string,
    days:  {
      __typename: "MetaDay",
      days: Day | null,
    } | null,
    worker:  {
      __typename: "Worker",
      id: string,
      name: string,
      email: string,
      phone: string,
      service:  {
        __typename: "Service",
        id: string,
        title: string,
        price: number | null,
      } | null,
      workhours:  {
        __typename: "ModelHourWorkConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreatePaymentSubscription = {
  onCreatePayment:  {
    __typename: "Payment",
    id: string,
    name: string,
    client_id: number | null,
    appointments:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        client_id: string,
        start_time: string | null,
        end_time: string | null,
        date: string | null,
        price: number | null,
        status: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdatePaymentSubscription = {
  onUpdatePayment:  {
    __typename: "Payment",
    id: string,
    name: string,
    client_id: number | null,
    appointments:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        client_id: string,
        start_time: string | null,
        end_time: string | null,
        date: string | null,
        price: number | null,
        status: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeletePaymentSubscription = {
  onDeletePayment:  {
    __typename: "Payment",
    id: string,
    name: string,
    client_id: number | null,
    appointments:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        client_id: string,
        start_time: string | null,
        end_time: string | null,
        date: string | null,
        price: number | null,
        status: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateAppointmentSubscriptionVariables = {
  owner: string,
};

export type OnCreateAppointmentSubscription = {
  onCreateAppointment:  {
    __typename: "Appointment",
    id: string,
    client_id: string,
    worker:  {
      __typename: "Worker",
      id: string,
      name: string,
      email: string,
      phone: string,
      service:  {
        __typename: "Service",
        id: string,
        title: string,
        price: number | null,
      } | null,
      workhours:  {
        __typename: "ModelHourWorkConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      title: string,
      price: number | null,
      branch:  {
        __typename: "Branch",
        id: string,
        branch: string,
        open_time: string,
        close_time: string,
      } | null,
      workers:  {
        __typename: "ModelWorkerConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    start_time: string | null,
    end_time: string | null,
    date: string | null,
    price: number | null,
    status: boolean | null,
    payment:  {
      __typename: "Payment",
      id: string,
      name: string,
      client_id: number | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnUpdateAppointmentSubscriptionVariables = {
  owner: string,
};

export type OnUpdateAppointmentSubscription = {
  onUpdateAppointment:  {
    __typename: "Appointment",
    id: string,
    client_id: string,
    worker:  {
      __typename: "Worker",
      id: string,
      name: string,
      email: string,
      phone: string,
      service:  {
        __typename: "Service",
        id: string,
        title: string,
        price: number | null,
      } | null,
      workhours:  {
        __typename: "ModelHourWorkConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      title: string,
      price: number | null,
      branch:  {
        __typename: "Branch",
        id: string,
        branch: string,
        open_time: string,
        close_time: string,
      } | null,
      workers:  {
        __typename: "ModelWorkerConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    start_time: string | null,
    end_time: string | null,
    date: string | null,
    price: number | null,
    status: boolean | null,
    payment:  {
      __typename: "Payment",
      id: string,
      name: string,
      client_id: number | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnDeleteAppointmentSubscriptionVariables = {
  owner: string,
};

export type OnDeleteAppointmentSubscription = {
  onDeleteAppointment:  {
    __typename: "Appointment",
    id: string,
    client_id: string,
    worker:  {
      __typename: "Worker",
      id: string,
      name: string,
      email: string,
      phone: string,
      service:  {
        __typename: "Service",
        id: string,
        title: string,
        price: number | null,
      } | null,
      workhours:  {
        __typename: "ModelHourWorkConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      title: string,
      price: number | null,
      branch:  {
        __typename: "Branch",
        id: string,
        branch: string,
        open_time: string,
        close_time: string,
      } | null,
      workers:  {
        __typename: "ModelWorkerConnection",
        nextToken: string | null,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    start_time: string | null,
    end_time: string | null,
    date: string | null,
    price: number | null,
    status: boolean | null,
    payment:  {
      __typename: "Payment",
      id: string,
      name: string,
      client_id: number | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};
