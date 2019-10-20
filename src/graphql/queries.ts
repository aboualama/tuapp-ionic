// tslint:disable
// this is an auto generated file. This will be overwritten

export const getMyApp = `query GetMyApp($id: ID!) {
  getMyApp(id: $id) {
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
export const listMyApps = `query ListMyApps(
  $filter: ModelMyAppFilterInput
  $limit: Int
  $nextToken: String
) {
  listMyApps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getService = `query GetService($id: ID!) {
  getService(id: $id) {
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
export const listServices = `query ListServices(
  $filter: ModelServiceFilterInput
  $limit: Int
  $nextToken: String
) {
  listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getAppointment = `query GetAppointment($id: ID!) {
  getAppointment(id: $id) {
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
export const listAppointments = `query ListAppointments(
  $filter: ModelAppointmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      }
    }
    nextToken
  }
}
`;
