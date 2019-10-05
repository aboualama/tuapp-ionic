// tslint:disable
// this is an auto generated file. This will be overwritten

export const createService = `mutation CreateService($input: CreateServiceInput!) {
  createService(input: $input) {
    id
    title
    description
    price
    identityKey
    image
    duration
    appointments {
      items {
        id
        client_id
        identityKey
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
    identityKey
    image
    duration
    appointments {
      items {
        id
        client_id
        identityKey
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
    identityKey
    image
    duration
    appointments {
      items {
        id
        client_id
        identityKey
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
    identityKey
    service {
      id
      title
      description
      price
      identityKey
      image
      duration
      appointments {
        nextToken
      }
    }
    start_time
    end_time
    date
    price
    status
  }
}
`;
export const updateAppointment = `mutation UpdateAppointment($input: UpdateAppointmentInput!) {
  updateAppointment(input: $input) {
    id
    client_id
    identityKey
    service {
      id
      title
      description
      price
      identityKey
      image
      duration
      appointments {
        nextToken
      }
    }
    start_time
    end_time
    date
    price
    status
  }
}
`;
export const deleteAppointment = `mutation DeleteAppointment($input: DeleteAppointmentInput!) {
  deleteAppointment(input: $input) {
    id
    client_id
    identityKey
    service {
      id
      title
      description
      price
      identityKey
      image
      duration
      appointments {
        nextToken
      }
    }
    start_time
    end_time
    date
    price
    status
  }
}
`;
