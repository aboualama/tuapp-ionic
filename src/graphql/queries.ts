// tslint:disable
// this is an auto generated file. This will be overwritten

export const getService = `query GetService($id: ID!) {
  getService(id: $id) {
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
export const listServices = `query ListServices(
  $filter: ModelServiceFilterInput
  $limit: Int
  $nextToken: String
) {
  listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      price
      appointments {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getAppointment = `query GetAppointment($id: ID!) {
  getAppointment(id: $id) {
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
export const listAppointments = `query ListAppointments(
  $filter: ModelAppointmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      client_id
      service {
        id
        title
        price
      }
      start_time
      end_time
      date
      price
      status
    }
    nextToken
  }
}
`;
