// tslint:disable
// this is an auto generated file. This will be overwritten

export const getApp = `query GetApp($id: ID!) {
  getApp(id: $id) {
    id
    appname
    logoapp
    splashscreen
    created_at
    updated_at
    services {
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
export const listApps = `query ListApps($filter: ModelAppFilterInput, $limit: Int, $nextToken: String) {
  listApps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      appname
      logoapp
      splashscreen
      created_at
      updated_at
      services {
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
    app {
      id
      appname
      logoapp
      splashscreen
      created_at
      updated_at
      services {
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
      app {
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
      app {
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
