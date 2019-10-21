/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateAppInput = {
  id?: string | null,
  appname: string,
  logoapp: string,
  splashscreen: string,
  created_at: string,
  updated_at: string,
};

export type UpdateAppInput = {
  id: string,
  appname?: string | null,
  logoapp?: string | null,
  splashscreen?: string | null,
  created_at?: string | null,
  updated_at?: string | null,
};

export type DeleteAppInput = {
  id?: string | null,
};

export type CreateServiceInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  price?: number | null,
  image?: string | null,
  duration?: number | null,
  serviceAppId?: string | null,
};

export type UpdateServiceInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  price?: number | null,
  image?: string | null,
  duration?: number | null,
  serviceAppId?: string | null,
};

export type DeleteServiceInput = {
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
  appointmentServiceId?: string | null,
};

export type UpdateAppointmentInput = {
  id: string,
  client_id?: string | null,
  start_time?: string | null,
  end_time?: string | null,
  date?: string | null,
  price?: number | null,
  status?: boolean | null,
  appointmentServiceId?: string | null,
};

export type DeleteAppointmentInput = {
  id?: string | null,
};

export type ModelAppFilterInput = {
  id?: ModelIDFilterInput | null,
  appname?: ModelStringFilterInput | null,
  logoapp?: ModelStringFilterInput | null,
  splashscreen?: ModelStringFilterInput | null,
  created_at?: ModelStringFilterInput | null,
  updated_at?: ModelStringFilterInput | null,
  and?: Array< ModelAppFilterInput | null > | null,
  or?: Array< ModelAppFilterInput | null > | null,
  not?: ModelAppFilterInput | null,
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

export type ModelServiceFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  price?: ModelFloatFilterInput | null,
  image?: ModelStringFilterInput | null,
  duration?: ModelIntFilterInput | null,
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

export type CreateAppMutationVariables = {
  input: CreateAppInput,
};

export type CreateAppMutation = {
  createApp:  {
    __typename: "App",
    id: string,
    appname: string,
    logoapp: string,
    splashscreen: string,
    created_at: string,
    updated_at: string,
    services:  {
      __typename: "ModelServiceConnection",
      items:  Array< {
        __typename: "Service",
        id: string,
        title: string,
        description: string | null,
        price: number | null,
        image: string | null,
        duration: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateAppMutationVariables = {
  input: UpdateAppInput,
};

export type UpdateAppMutation = {
  updateApp:  {
    __typename: "App",
    id: string,
    appname: string,
    logoapp: string,
    splashscreen: string,
    created_at: string,
    updated_at: string,
    services:  {
      __typename: "ModelServiceConnection",
      items:  Array< {
        __typename: "Service",
        id: string,
        title: string,
        description: string | null,
        price: number | null,
        image: string | null,
        duration: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteAppMutationVariables = {
  input: DeleteAppInput,
};

export type DeleteAppMutation = {
  deleteApp:  {
    __typename: "App",
    id: string,
    appname: string,
    logoapp: string,
    splashscreen: string,
    created_at: string,
    updated_at: string,
    services:  {
      __typename: "ModelServiceConnection",
      items:  Array< {
        __typename: "Service",
        id: string,
        title: string,
        description: string | null,
        price: number | null,
        image: string | null,
        duration: number | null,
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
    description: string | null,
    price: number | null,
    image: string | null,
    duration: number | null,
    app:  {
      __typename: "App",
      id: string,
      appname: string,
      logoapp: string,
      splashscreen: string,
      created_at: string,
      updated_at: string,
      services:  {
        __typename: "ModelServiceConnection",
        nextToken: string | null,
      } | null,
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
    description: string | null,
    price: number | null,
    image: string | null,
    duration: number | null,
    app:  {
      __typename: "App",
      id: string,
      appname: string,
      logoapp: string,
      splashscreen: string,
      created_at: string,
      updated_at: string,
      services:  {
        __typename: "ModelServiceConnection",
        nextToken: string | null,
      } | null,
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
    description: string | null,
    price: number | null,
    image: string | null,
    duration: number | null,
    app:  {
      __typename: "App",
      id: string,
      appname: string,
      logoapp: string,
      splashscreen: string,
      created_at: string,
      updated_at: string,
      services:  {
        __typename: "ModelServiceConnection",
        nextToken: string | null,
      } | null,
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
    start_time: string | null,
    end_time: string | null,
    date: string | null,
    price: number | null,
    status: boolean | null,
    service:  {
      __typename: "Service",
      id: string,
      title: string,
      description: string | null,
      price: number | null,
      image: string | null,
      duration: number | null,
      app:  {
        __typename: "App",
        id: string,
        appname: string,
        logoapp: string,
        splashscreen: string,
        created_at: string,
        updated_at: string,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
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
    start_time: string | null,
    end_time: string | null,
    date: string | null,
    price: number | null,
    status: boolean | null,
    service:  {
      __typename: "Service",
      id: string,
      title: string,
      description: string | null,
      price: number | null,
      image: string | null,
      duration: number | null,
      app:  {
        __typename: "App",
        id: string,
        appname: string,
        logoapp: string,
        splashscreen: string,
        created_at: string,
        updated_at: string,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
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
    start_time: string | null,
    end_time: string | null,
    date: string | null,
    price: number | null,
    status: boolean | null,
    service:  {
      __typename: "Service",
      id: string,
      title: string,
      description: string | null,
      price: number | null,
      image: string | null,
      duration: number | null,
      app:  {
        __typename: "App",
        id: string,
        appname: string,
        logoapp: string,
        splashscreen: string,
        created_at: string,
        updated_at: string,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type GetAppQueryVariables = {
  id: string,
};

export type GetAppQuery = {
  getApp:  {
    __typename: "App",
    id: string,
    appname: string,
    logoapp: string,
    splashscreen: string,
    created_at: string,
    updated_at: string,
    services:  {
      __typename: "ModelServiceConnection",
      items:  Array< {
        __typename: "Service",
        id: string,
        title: string,
        description: string | null,
        price: number | null,
        image: string | null,
        duration: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListAppsQueryVariables = {
  filter?: ModelAppFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAppsQuery = {
  listApps:  {
    __typename: "ModelAppConnection",
    items:  Array< {
      __typename: "App",
      id: string,
      appname: string,
      logoapp: string,
      splashscreen: string,
      created_at: string,
      updated_at: string,
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
    description: string | null,
    price: number | null,
    image: string | null,
    duration: number | null,
    app:  {
      __typename: "App",
      id: string,
      appname: string,
      logoapp: string,
      splashscreen: string,
      created_at: string,
      updated_at: string,
      services:  {
        __typename: "ModelServiceConnection",
        nextToken: string | null,
      } | null,
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
      description: string | null,
      price: number | null,
      image: string | null,
      duration: number | null,
      app:  {
        __typename: "App",
        id: string,
        appname: string,
        logoapp: string,
        splashscreen: string,
        created_at: string,
        updated_at: string,
      } | null,
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
    start_time: string | null,
    end_time: string | null,
    date: string | null,
    price: number | null,
    status: boolean | null,
    service:  {
      __typename: "Service",
      id: string,
      title: string,
      description: string | null,
      price: number | null,
      image: string | null,
      duration: number | null,
      app:  {
        __typename: "App",
        id: string,
        appname: string,
        logoapp: string,
        splashscreen: string,
        created_at: string,
        updated_at: string,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
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
      start_time: string | null,
      end_time: string | null,
      date: string | null,
      price: number | null,
      status: boolean | null,
      service:  {
        __typename: "Service",
        id: string,
        title: string,
        description: string | null,
        price: number | null,
        image: string | null,
        duration: number | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateAppSubscription = {
  onCreateApp:  {
    __typename: "App",
    id: string,
    appname: string,
    logoapp: string,
    splashscreen: string,
    created_at: string,
    updated_at: string,
    services:  {
      __typename: "ModelServiceConnection",
      items:  Array< {
        __typename: "Service",
        id: string,
        title: string,
        description: string | null,
        price: number | null,
        image: string | null,
        duration: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateAppSubscription = {
  onUpdateApp:  {
    __typename: "App",
    id: string,
    appname: string,
    logoapp: string,
    splashscreen: string,
    created_at: string,
    updated_at: string,
    services:  {
      __typename: "ModelServiceConnection",
      items:  Array< {
        __typename: "Service",
        id: string,
        title: string,
        description: string | null,
        price: number | null,
        image: string | null,
        duration: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteAppSubscription = {
  onDeleteApp:  {
    __typename: "App",
    id: string,
    appname: string,
    logoapp: string,
    splashscreen: string,
    created_at: string,
    updated_at: string,
    services:  {
      __typename: "ModelServiceConnection",
      items:  Array< {
        __typename: "Service",
        id: string,
        title: string,
        description: string | null,
        price: number | null,
        image: string | null,
        duration: number | null,
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
    description: string | null,
    price: number | null,
    image: string | null,
    duration: number | null,
    app:  {
      __typename: "App",
      id: string,
      appname: string,
      logoapp: string,
      splashscreen: string,
      created_at: string,
      updated_at: string,
      services:  {
        __typename: "ModelServiceConnection",
        nextToken: string | null,
      } | null,
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
    description: string | null,
    price: number | null,
    image: string | null,
    duration: number | null,
    app:  {
      __typename: "App",
      id: string,
      appname: string,
      logoapp: string,
      splashscreen: string,
      created_at: string,
      updated_at: string,
      services:  {
        __typename: "ModelServiceConnection",
        nextToken: string | null,
      } | null,
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
    description: string | null,
    price: number | null,
    image: string | null,
    duration: number | null,
    app:  {
      __typename: "App",
      id: string,
      appname: string,
      logoapp: string,
      splashscreen: string,
      created_at: string,
      updated_at: string,
      services:  {
        __typename: "ModelServiceConnection",
        nextToken: string | null,
      } | null,
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
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateAppointmentSubscription = {
  onCreateAppointment:  {
    __typename: "Appointment",
    id: string,
    client_id: string,
    start_time: string | null,
    end_time: string | null,
    date: string | null,
    price: number | null,
    status: boolean | null,
    service:  {
      __typename: "Service",
      id: string,
      title: string,
      description: string | null,
      price: number | null,
      image: string | null,
      duration: number | null,
      app:  {
        __typename: "App",
        id: string,
        appname: string,
        logoapp: string,
        splashscreen: string,
        created_at: string,
        updated_at: string,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateAppointmentSubscription = {
  onUpdateAppointment:  {
    __typename: "Appointment",
    id: string,
    client_id: string,
    start_time: string | null,
    end_time: string | null,
    date: string | null,
    price: number | null,
    status: boolean | null,
    service:  {
      __typename: "Service",
      id: string,
      title: string,
      description: string | null,
      price: number | null,
      image: string | null,
      duration: number | null,
      app:  {
        __typename: "App",
        id: string,
        appname: string,
        logoapp: string,
        splashscreen: string,
        created_at: string,
        updated_at: string,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteAppointmentSubscription = {
  onDeleteAppointment:  {
    __typename: "Appointment",
    id: string,
    client_id: string,
    start_time: string | null,
    end_time: string | null,
    date: string | null,
    price: number | null,
    status: boolean | null,
    service:  {
      __typename: "Service",
      id: string,
      title: string,
      description: string | null,
      price: number | null,
      image: string | null,
      duration: number | null,
      app:  {
        __typename: "App",
        id: string,
        appname: string,
        logoapp: string,
        splashscreen: string,
        created_at: string,
        updated_at: string,
      } | null,
      appointments:  {
        __typename: "ModelAppointmentConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};
