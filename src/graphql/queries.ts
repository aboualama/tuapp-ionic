// tslint:disable
// this is an auto generated file. This will be overwritten

export const getApp = `query GetApp($id: ID!) {
  getApp(id: $id) {
    id
    appId
    appname
    logoapp
    splashscreen
    created_at
    updated_at
    settings {
      items {
        id
        start_time
        end_time
        calender_offset
        appId
      }
      nextToken
    }
    services {
      items {
        id
        title
        description
        price
        image
        duration
        appId
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
      appId
      appname
      logoapp
      splashscreen
      created_at
      updated_at
      settings {
        nextToken
      }
      services {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getSetting = `query GetSetting($id: ID!) {
  getSetting(id: $id) {
    id
    start_time
    end_time
    calender_offset
    appId
    app {
      id
      appId
      appname
      logoapp
      splashscreen
      created_at
      updated_at
      settings {
        nextToken
      }
      services {
        nextToken
      }
    }
  }
}
`;
export const listSettings = `query ListSettings(
  $filter: ModelSettingFilterInput
  $limit: Int
  $nextToken: String
) {
  listSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      start_time
      end_time
      calender_offset
      appId
      app {
        id
        appId
        appname
        logoapp
        splashscreen
        created_at
        updated_at
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
    appId
    app {
      id
      appId
      appname
      logoapp
      splashscreen
      created_at
      updated_at
      settings {
        nextToken
      }
      services {
        nextToken
      }
    }
    appointments {
      items {
        id
        appId
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
      appId
      app {
        id
        appId
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
    appId
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
      appId
      app {
        id
        appId
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
      appId
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
        appId
      }
    }
    nextToken
  }
}
`;
