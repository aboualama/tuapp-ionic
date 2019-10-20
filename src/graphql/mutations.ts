// tslint:disable
// this is an auto generated file. This will be overwritten

export const createMyApp = `mutation CreateMyApp($input: CreateMyAppInput!) {
  createMyApp(input: $input) {
    id
    appname
    logoapp
    splashscreen
    created_at
    updated_at
    identityKey {
      items {
        id
        title
        description
        price
        image
        duration
      }
      nextToken
    }
  }
}
`;
export const updateMyApp = `mutation UpdateMyApp($input: UpdateMyAppInput!) {
  updateMyApp(input: $input) {
    id
    appname
    logoapp
    splashscreen
    created_at
    updated_at
    identityKey {
      items {
        id
        title
        description
        price
        image
        duration
      }
      nextToken
    }
  }
}
`;
export const deleteMyApp = `mutation DeleteMyApp($input: DeleteMyAppInput!) {
  deleteMyApp(input: $input) {
    id
    appname
    logoapp
    splashscreen
    created_at
    updated_at
    identityKey {
      items {
        id
        title
        description
        price
        image
        duration
      }
      nextToken
    }
  }
}
`;
export const createService = `mutation CreateService($input: CreateServiceInput!) {
  createService(input: $input) {
    id
    title
    description
    price
    image
    duration
    identityKey {
      id
      appname
      logoapp
      splashscreen
      created_at
      updated_at
      identityKey {
        nextToken
      }
    }
    appointments {
      items {
        id
        client_id
        start_time
        end_time
        date
        price
        status
      }
      nextToken
    }
  }
}
`;
export const updateService = `mutation UpdateService($input: UpdateServiceInput!) {
  updateService(input: $input) {
    id
    title
    description
    price
    image
    duration
    identityKey {
      id
      appname
      logoapp
      splashscreen
      created_at
      updated_at
      identityKey {
        nextToken
      }
    }
    appointments {
      items {
        id
        client_id
        start_time
        end_time
        date
        price
        status
      }
      nextToken
    }
  }
}
`;
export const deleteService = `mutation DeleteService($input: DeleteServiceInput!) {
  deleteService(input: $input) {
    id
    title
    description
    price
    image
    duration
    identityKey {
      id
      appname
      logoapp
      splashscreen
      created_at
      updated_at
      identityKey {
        nextToken
      }
    }
    appointments {
      items {
        id
        client_id
        start_time
        end_time
        date
        price
        status
      }
      nextToken
    }
  }
}
`;
export const createAppointment = `mutation CreateAppointment($input: CreateAppointmentInput!) {
  createAppointment(input: $input) {
    id
    client_id
    start_time
    end_time
    date
    price
    status
    service {
      id
      title
      description
      price
      image
      duration
      identityKey {
        id
        appname
        logoapp
        splashscreen
        created_at
        updated_at
      }
      appointments {
        nextToken
      }
    }
  }
}
`;
export const updateAppointment = `mutation UpdateAppointment($input: UpdateAppointmentInput!) {
  updateAppointment(input: $input) {
    id
    client_id
    start_time
    end_time
    date
    price
    status
    service {
      id
      title
      description
      price
      image
      duration
      identityKey {
        id
        appname
        logoapp
        splashscreen
        created_at
        updated_at
      }
      appointments {
        nextToken
      }
    }
  }
}
`;
export const deleteAppointment = `mutation DeleteAppointment($input: DeleteAppointmentInput!) {
  deleteAppointment(input: $input) {
    id
    client_id
    start_time
    end_time
    date
    price
    status
    service {
      id
      title
      description
      price
      image
      duration
      identityKey {
        id
        appname
        logoapp
        splashscreen
        created_at
        updated_at
      }
      appointments {
        nextToken
      }
    }
  }
}
`;
