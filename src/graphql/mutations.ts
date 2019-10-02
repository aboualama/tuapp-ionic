// tslint:disable
// this is an auto generated file. This will be overwritten

export const createService = `mutation CreateService($input: CreateServiceInput!) {
  createService(input: $input) {
    id
    title
    price
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
    price
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
    price
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
    service {
      id
      title
      price
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
    service {
      id
      title
      price
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
    service {
      id
      title
      price
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
